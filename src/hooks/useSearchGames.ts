import { Game } from '@/components/GameDetail';
import axios from 'axios';
import { useQuery } from 'react-query';

const getGamesByString = async (title: string) => {
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?search=${title}&key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  return data;
};

export const useGamesByIdFetch = (title: string) =>
  useQuery<Game>(['gamesByTitle', title], () => getGamesByString(title), {
    enabled: title.length > 2,
  });
