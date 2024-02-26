import { useGamesFetch } from './hooks/useGames';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './components/Card';
import Loader from './components/Loader';
import { useGamesFetchWithParams } from './hooks/useGamesWithParam';

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

function App() {
  const { data, fetchNextPage, hasNextPage, isLoading } = useGamesFetch();

  // REMOVE THIS, only for testing
  // const { data: gamesWithFilter } = useGamesFetchWithParams({
  //   name: 'genres',
  //   value: 'strategy',
  // });
  const games = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);

  // console.log(gamesWithFilter);

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

export default App;
