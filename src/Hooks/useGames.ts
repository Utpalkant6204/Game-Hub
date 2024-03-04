// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isloading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games")
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         // if (err instanceof CancelledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return { games, error, isloading };
// };

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedOrder: string
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedOrder,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id, selectedOrder]
  );

export default useGames;
