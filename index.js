import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";
console.log("Hola mundo");

const app = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log(app.get("port"));
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true})
);
