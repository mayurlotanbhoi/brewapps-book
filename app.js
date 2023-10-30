import express, {
    Router
} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BookRout from "./Routes/BookRout.js";

dotenv.config()

const app = express();
const DB = process.env.MONGO_URL

app.use(express.json());


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connect to DB")
}).catch((error) => {
    console.log(error)
})

// Book CRUD Router
app.use(BookRout)


app.use((req, res, next) => {
    res.status(404).json({
        error: "This Rout Not Found"
    });

    return;
});

app.listen(3000, () => {
    console.log("App is running on port 3000");
});