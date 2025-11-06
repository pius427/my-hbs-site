// api/index.js
import serverless from "serverless-http";
import app from "../app.js";
export const config = { runtime: "nodejs18.x" }; // hint for Vercel
export default serverless(app);
