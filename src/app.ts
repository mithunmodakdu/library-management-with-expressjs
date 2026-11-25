import express, { type Request, type Response } from "express";

export const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Library Management with Express.js App")
})