import dotenv from "dotenv";
dotenv.config();
import connect from "./Db/connect.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;
connect();
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
