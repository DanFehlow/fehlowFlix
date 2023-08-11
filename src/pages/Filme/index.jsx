import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./filme-info.css";

function Filme() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function movieDetails() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "7f5a8aab17ac60ba30b620773294f5e7",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {});
    }
    movieDetails();
    return () => {
      console.log("COMPONENTE FOI DESMONTADO");
    };
  }, []);

  if (loading) {
    return (
      <div className="filmes-info">
        <h1> Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filmes-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>
        <br />
        Avaliação: {movie.vote_average.toFixed(1)} / 10
      </strong>
      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href="#">Trailer</a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
