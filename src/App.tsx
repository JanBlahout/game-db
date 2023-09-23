import { useEffect, useState } from 'react';
import Card from './components/Card';
import { Button } from './components/ui/button';

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
  const [games, setGames] = useState<TGame[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadMoreHandler = async () => {
    setIsLoading(true);
    const data = await fetch(nextPage);
    const response = await data.json();
    setNextPage(response.next);
    setGames([...games, ...response.results]);
    setIsLoading(false);
  };

  const getGames = async (): Promise<TGame[]> => {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    setNextPage(data.next);
    setGames(data.results);
    return data.results;
  };
  useEffect(() => {
    getGames();
  }, []);

  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12 ">
      {games.map((game) => (
        <Card
          image={game.background_image}
          metascore={game.metacritic}
          platforms={game.parent_platforms}
          key={game.id}
          {...game}
        />
      ))}
      <Button onClick={loadMoreHandler} disabled={!nextPage}>
        {isLoading ? 'Loading...' : 'Load more...'}
      </Button>
    </main>
  );
}

export default App;
