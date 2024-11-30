import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId,bookName,author,image,totalPages,rating,category,tags,publisher,yearOfPublishing} = book

  return (
    <Link to={`/books/${bookId}`}>
    <div>
      <div>
        <div className="card bg-slate-800  shadow-xl p-4">
          <div className="p-10 py-7   bg-zinc-700  rounded-xl ">
            <img 
              src={image}
              alt="book"
              className="rounded-xl mx-auto h-80  object-contain"
            />
          </div>
          <div className=" space-y-1 py-2">
            {
                tags.map((tag,index)=><div key={index} className="badge badge-accent ml-1">{tag}</div>)
            }
            <h2 className="card-title">{bookName}</h2>
            <p>By : {author}</p>
            <hr />
            <div className="card-actions">
          <p>{category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default Book;
