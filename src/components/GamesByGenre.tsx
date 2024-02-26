import { useGamesFetchWithParams } from '@/hooks/useGamesWithParam';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Card from './Card';

type TGame = {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  metacritic?: number;
  parent_platforms: Platform[];
};

export type Platform = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

function GamesByGenre() {
  const { genre } = useParams();

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useGamesFetchWithParams({
      name: 'genres',
      value: genre!,
    });

  const games = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-1/2 flex items-center justify-center">
        <Loader />;
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={games ? games.length : 0}
      next={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader
    >
      <h1 className="text-center text-2xl font-bold text-slate-700">
        {genre?.toUpperCase()} Games
      </h1>
      <main className="m-4 md:m-24 rounded-md grid grid-cols-4 gap-12 ">
        {games.map((game: TGame) => (
          <Card
            image={game.background_image}
            metascore={game.metacritic}
            platforms={game.parent_platforms}
            key={game.id}
            {...game}
          />
        ))}
      </main>
    </InfiniteScroll>
  );
}

export default GamesByGenre;
