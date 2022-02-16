import { initialize } from './server';

initialize().catch((err: Error) => {
  throw err;
});
