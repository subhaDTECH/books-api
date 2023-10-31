# My Books Application

This is a simple CRUD (Create, Read, Update, Delete) application for managing books using Node.js, Express.js, and MongoDB.

## API Endpoints and Usage

### List of All Books

- **Endpoint**: `GET /books`
- **Usage**: Get a list of all books.
- **Response**: An array of book objects in JSON format.

### Add a New Book

- **Endpoint**: `POST /books/add`
- **Usage**: Create a new book.
- **Request Body**: JSON object with book details (title, author, summary).
- **Response**: The created book object in JSON format.

### Get book details by id

- **Endpoint**: `GET /books/:id`
- **Usage**: get details of book by id.
- **Request Body**: JSON object with book details (title, author, summary).
- **Response**: The created book object in JSON format.
  
### Update a Book

- **Endpoint**: `PUT /books/:id`
- **Usage**: Update an existing book by its ID.
- **Request Params**: `id` - The unique identifier of the book.
- **Request Body**: JSON object with updated book details (title, author, summary).
- **Response**: The updated book object in JSON format.

### Delete a Book

- **Endpoint**: `DELETE /books/:id`
- **Usage**: Delete a book by its ID.
- **Request Params**: `id` - The unique identifier of the book.
- **Response**: A success message in JSON format.

## Setting Up and Running the Application Locally

Follow these steps to set up and run the application on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/subhaDTECH/books-api.git
   cd books-api
2 .Install Dependencies and Run application:
 ```bash
 npm install 
 npm run start

4. Access the Application:

The application will run at http://localhost:3000.
Use your preferred API client (e.g., Postman) or a web browser to interact with the API.

POINT TO REMEMBER :
you can use your mongodb database url to connect your data base by make change in books-api/db/conn.js

mongoose
.connect("Your DB_URL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
})

I Hope you love this !!
Looking for response !!
