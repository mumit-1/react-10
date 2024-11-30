import BannerImg from "../../assets/books.jpg"
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen max-w-screen-lg mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold py-10">Box Office News!</h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
