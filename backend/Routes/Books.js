import express from "express";
import {
    addBooks,
    deleteBooks,
    getBooks,
    updateBooks,
} from "../Controller/Books.js";

const router = express.Router();

router.get("/books", getBooks);
router.post("/books", addBooks);
router.patch("/books/:id", updateBooks);
router.delete("/books/:id", deleteBooks);

export default router;