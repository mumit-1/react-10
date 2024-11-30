import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const  {bookId} = useParams();
  const data = useLoaderData();
  const exactBook = data.find(book => book.bookId=== parseInt(bookId))
  const {bookName,author,image,totalPages,rating,category,tags,publisher,yearOfPublishing} = exactBook;
  console.log(exactBook);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
        <img src={image} alt="" />
          <div>
            <h1 className="text-5xl font-bold">{author}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BookDetail;
