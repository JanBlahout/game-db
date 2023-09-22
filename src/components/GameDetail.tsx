import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Game = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  parent_platforms: ParentPlatform[];
  platforms: GamePlatforms[];
  genres: Genre[];
  developers: Developer[];
};

type ParentPlatform = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

type GamePlatforms = {
  platform: {
    id: number;
    name: string;
    slug: string;
    released_at: string;
  };
};

type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

type Developer = {
  games_count: number;
  id: number;
  name: string;
};

export default function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);

  const getGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setTimeout(() => setGame(data), 5000);
  };
  useEffect(() => {
    getGames();
  }, []);

  if (!game) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {game.parent_platforms.map((parent_platform: ParentPlatform) => (
        <p key={parent_platform.platform.id}>{parent_platform.platform.name}</p>
      ))}
      <h1 className="text-xl">{game.name}</h1>
      <h3>About</h3>
      <p>{game.description_raw}</p>
      <span>Platforms:</span>
      {game.platforms.map((platform) => (
        <p>{platform.platform.name}</p>
      ))}
      <p>Genre:</p>
      {game.genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
      <p>Release date: {game.released}</p>
      <p>
        Developer:{' '}
        {game.developers.map((developer) => (
          <span>{developer.name},</span>
        ))}
      </p>
      <p>Other games in the series:</p>
      <p>Tags:</p>
      <p>Website</p>
      <span>{game.website}</span>

      <h3>Games like {game.name}</h3>
    </div>
  );
}
