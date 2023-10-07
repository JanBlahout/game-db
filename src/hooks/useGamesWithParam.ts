import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

type GetAxiosGamesProps = {
  filter: {
    name: string;
    value: string;
  };
  pageParam?: number;
};

const getAxiosGames = async ({ filter, pageParam = 1 }: GetAxiosGamesProps) => {
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?key=${
      import.meta.env.VITE_API_KEY
    }&page=${pageParam}&${filter.name}=${filter.value}`
  );
  return { ...data, prevPage: pageParam };
};

export const useGamesFetchWithParams = (filter: {
  name: string;
  value: string;
}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage = true,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['games', filter.name],
    queryFn: ({ pageParam = 1 }) => getAxiosGames({ filter, pageParam }),
    getNextPageParam: (lastPage) => {
      if (lastPage.prevPage + 20 > lastPage.count) {
        return false;
      }
      return lastPage.prevPage + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
