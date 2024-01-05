import * as Sentry from "sentry-expo";

const log = (error) => Sentry.Native.captureException(error);

const start = () =>
  Sentry.init({
    dsn: "https://48b35839bf86804c1cb4957aac32c7d1@o4506520093917184.ingest.sentry.io/4506520095424512",
    enableInExpoDevelopment: true,
    debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  });

export default { log, start };
