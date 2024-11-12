import { query  } from "../Database/db.js";

export const getBooks = async (req, res) => {
    try {
        const Books = await query (`SELECT * FROM books`);
        return res.status(200).json({success: true, data: Books});
    }   catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// add data

export const addBooks = async (req, res) => {
    const { name, author } = req.body;
    try {
        await query("INSERT INTO books (nama, author) VALUES (?, ?)", [
            name,
            author,
        ]);
        return res.status(200).json({msh: "Buku ditambahkan"});
    }   catch (error) {
        return res.status(500).json({msg: "Terjadi kesalahan pada server" });
    }
};

// update data 

export const updateBooks = async (req, res) => {
    const {id} = req.params;
    const {name, author } = req.body;
    try {
        await query("UPDATE books SET nama = ?, author = ? WHERE id_books = ?", [
            name,
            author,
            id,
        ]);
        return res.status(200).json({msg: "Buku diupdate"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// delete data

export const deleteBooks = async (req, res) => {
    const { id } = req.params;
    try {
        await query("DELETE FROM books WHERE id_books = ?", [id]);
        return res.status(200).json({msg: "Buku dihapus"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan diserver"});
    }
};