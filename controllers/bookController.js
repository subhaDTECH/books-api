const Book = require('../models/bookModel');


//get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
        success:true,
        message:"All Books Fetched !",
        books:books
    })
    
  } catch (err) {
    res.status(500).json({  success:false ,error: err.message });
  }
};

//get book by ID
exports.getBookByID= async (req, res) => {
    const { id } = req.params;
  
    try {
      const getBook = await Book.findById(id);
  
      if (!getBook) {
        return res.status(404).json({success :false , message: 'Book not found' });
      }
  
      res.status(200).json({ success:true , message: 'Book fetched !!' , book:getBook});
    } catch (err) {
      res.status(400).json({ success : false, message:"Book not found",  error: err.message });
    }
  };


//create  Add/ new book 
exports.createBook = async (req, res) => {
  const { title, author, summary } = req.body;
  console.log(title , author , summary)
  if(!title || !author || !summary)
  {
    return res.status(400).json({ message :false , error: " Require all fileds" });

  }

  try {
    const newBook = new Book({ title, author, summary });
    const savedBook = await newBook.save();

    res.status(201).json({
        success:true,
        message:"Book created !",
        book:savedBook
    })
  } catch (err) {
    res.status(400).json({ message :false , error: err.message });
  }
};


// Update a book by its ID
exports.updateBook = async (req, res) => {
    const { title, author, summary } = req.body;
    const { id } = req.params;
  
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        id,
        { title, author, summary },
        { new: true } // To return the updated document
      );
  
      if (!updatedBook) {
        return res.status(404).json({ success:false , message: 'Book not found' });
      }
  
      res.status(200).json({
        success:true,
        message:"book updated !!",
        book:updatedBook
    })
    } catch (err) {
      res.status(400).json({ success :false , message:"Book not found" , error: err.message });
    }
  };

  
  //delete book by id
  exports.deleteBook = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBook = await Book.findByIdAndDelete(id);
  
      if (!deletedBook) {
        return res.status(404).json({success :false , message: 'Book not found' });
      }
  
      res.status(200).json({ success:true , message: 'Book deleted successfully' });
    } catch (err) {
      res.status(400).json({success : false, message:"Book not found", error: err.message });
    }
  };
