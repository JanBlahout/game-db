import { Game } from '@/components/GameDetail';
import axios from 'axios';
import { useQuery } from 'react-query';

const getGameById = async (id: number) => {
  const { data } = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
  );

  return data;
};

export const useGameByIdFetch = (id: number) =>
  useQuery<Game>(['game', id], () => getGameById(id));
