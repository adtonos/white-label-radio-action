import { conversation, Media } from "@assistant/conversation";
import {
  MediaType,
  OptionalMediaControl,
} from "@assistant/conversation/dist/api/schema";

import logger from "./logger";

const app = conversation({ debug: true });

// Media response
app.handle("start_media", (conv) => {
  conv.add("Playing radio");
  conv.add(
    new Media({
      mediaObjects: [
        {
          name: "Radio Net",
          description: "Radio station full of best music!",
          url: "https://play.adtonos.com/radio-net",
        },
      ],
      mediaType: MediaType.Audio,
      optionalMediaControls: [
        OptionalMediaControl.Paused,
        OptionalMediaControl.Stopped,
      ],
    })
  );
});

// Media status
app.handle("media_status", (conv) => {
  const mediaStatus = conv?.intent?.params?.MEDIA_STATUS?.resolved;
  switch (mediaStatus) {
    case "FINISHED":
      conv.add("Media has finished playing.");
      break;
    case "FAILED":
      conv.add("Media has failed.");
      break;
    case "PAUSED" || "STOPPED":
      if (conv.request.context) {
        // Persist the media progress value
        const progress = conv?.request?.context?.media?.progress;
        logger.debug("Listening stats", { progress });
      }
      // Acknowledge pause/stop
      conv.add(new Media({ mediaType: MediaType.MediaStatusACK }));
      break;
    default:
      conv.add("Unknown media status received.");
  }
});

export default app;
