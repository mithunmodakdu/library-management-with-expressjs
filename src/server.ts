import { app } from "./app";
import config from "./config";

const startServer = () => {
  app.listen(config.port, () => {
    console.log(`Library Management App is running on the port ${config.port}`)
  })
}

startServer();