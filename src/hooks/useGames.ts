import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

const getAxiosGames = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?key=${
      import.meta.env.VITE_API_KEY
    }&page=${pageParam}`
  );
  return { ...data, prevPage: pageParam };
};

export const useGamesFetch = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage = true,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['games'],
    queryFn: getAxiosGames,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevPage + 20 > lastPage.count) {
        return false;
      }
      return lastPage.prevPage + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
