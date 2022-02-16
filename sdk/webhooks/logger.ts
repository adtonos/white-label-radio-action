import { getLogger, ConsoleHandler } from "@adtonos/logging";

const logger = getLogger(process.env.APP_NAME || "");
logger.addHandler(new ConsoleHandler());

export default logger;