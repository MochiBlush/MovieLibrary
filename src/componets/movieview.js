import Hero from "./hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const notFoundUrl = 'https://via.placeholder.com/304x456?text=No+%20+Poster+%20+Available';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`    )
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
            setMovieDetails(data)
            setIsLoading(false)
                }, 1500)
            })
    }, [id])

  function renderNotFoundImage() {
    return <img src={notFoundUrl} class="card-img-top" alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
    }

  function renderPoster(posterPath) {
        return <img src ={posterPath} alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
    }

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;