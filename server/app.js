import express from "express";
import routerV1 from "./routes/v1/index.js";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import responseHelper from "./helpers/ResponseHelper.js";

const app = express();

app.use(compression()); // for speed compresses the request to what is needed
app.use(cors({ credentials: true, origin: true })); //allow cross site origin request
app.use(express.json());
app.use(morgan("dev")); // logging requests
app.use(helmet()); // for security setting necessary headers
app.use(responseHelper);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Accept,X-Custom-Header");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});


//connect to routes
app.use("/api/v1", routerV1);

app.get("/api/v1", (req, res) => {
  return res
    .status(200)
    .json({ 
        success: true, 
        status: "success", 
        message: "Welcome to Torre Test" 
    });
});

// catch 404 
app.use((req, res) => {
  return res.status(404).json({ success: false, status: "error", message: "Not found" });
});

export default app;