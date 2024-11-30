import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch("../../../public/booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="max-w-screen-lg mx-auto">
            <h2 className="text-3xl font-bold text-center">Books</h2>
            <div>{books.length}</div>
            <div className="grid lg:grid-cols-3 gap-10 px-2 py-5">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;