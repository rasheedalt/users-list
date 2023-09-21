import { config } from "dotenv";
import app from "./app.js";
config();

// db()
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

