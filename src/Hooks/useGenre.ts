// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// interface FetchGenreResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenre = () => {
//   const [genres, setGenre] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isloading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     apiClient
//       .get<FetchGenreResponse>("/genres")
//       .then((res) => {
//         setGenre(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         // if (err instanceof CancelledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return { genres, error, isloading };
// };

const useGenre = () => useData<Genre>("/genres");

export default useGenre;
