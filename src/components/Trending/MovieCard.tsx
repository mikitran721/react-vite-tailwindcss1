import { BiTime } from "react-icons/bi";
import { IMovie } from "./moviesData";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { src, title, main, runtime } = movie;
  return (
    <div className="card">
      <img src={src} alt="movie" className="w-full" />
      <div className="p-4 text-white">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="badge">
        <BiTime />
        <p>{runtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
