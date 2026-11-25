import { app } from "./app";
import config from "./config";
import { pool } from "./config/db";
import { initDB } from "./config/initDB";

const startServer = async() => {
  try {
    const time = await pool.query("SELECT NOW()");
    console.log(`Database connected successfully on ${time.rows[0].now}`);

    initDB();
    
    app.listen(config.port, () => {
      console.log(
        `Library Management App is running on the port ${config.port}`,
      );
    });
  } catch (error) {
    console.error("Failed to connect server", error)
  }
};

startServer();
