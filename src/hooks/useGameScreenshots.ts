import axios from 'axios';
import { useQuery } from 'react-query';

const getScreenshots = async (id: number) => {
  const { data } = await axios.get(
    `https://api.rawg.io/api/games/${id}/screenshots?key=${
      import.meta.env.VITE_API_KEY
    }`
  );

  return data;
};

export const useScreenshotsFetch = (id: number) =>
  useQuery(['gameScreen', id], () => getScreenshots(id));
