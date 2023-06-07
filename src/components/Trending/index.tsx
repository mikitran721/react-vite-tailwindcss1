import MovieCard from "./MovieCard";
import { moviesData } from "./moviesData";

const Index = () => {
  return (
    <>
      <h3 className="border-b border-primary m-4 pb-4">Trending</h3>

      <div className="grid grid-cols-4 gap-10 mb-12">
        {moviesData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn hover:scale-125 transition ease-out duration-500">
          Load more
        </button>
      </div>
    </>
  );
};

export default Index;
