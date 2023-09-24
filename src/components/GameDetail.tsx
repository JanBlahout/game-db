import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type Game = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  parent_platforms: ParentPlatform[];
  platforms: GamePlatforms[];
  genres: Genre[];
  developers: Developer[];
  publishers: Publisher[];
  tags: Tag[];
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
  slug: string;
};

type Publisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
};

type Tag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
};

export default function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [screenshots, setScreenshots] = useState<Game | null>(null);

  const getGames = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();
    // console.log(data);
    setGame(data);
  };

  const getScreenshots = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}/screenshots?key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await response.json();
    setScreenshots(data);
    // console.log(data);
  };

  useEffect(() => {
    getGames();
    getScreenshots();
  }, []);

  if (!game || !screenshots) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex justify-center flex-col md:flex-row">
      <div className="max-w-[700px] md:max-w-[960px] flex-auto">
        <ul className="flex gap-2">
          {game.parent_platforms.map((parent_platform: ParentPlatform) => (
            <li key={parent_platform.platform.id}>
              {parent_platform.platform.name}
            </li>
          ))}
          <li>AVERAGE PLAYTIME: {game.playtime} HOURS</li>
        </ul>

        <h1 className="text-[4rem] font-bold">{game.name}</h1>
        <div className="pb-3">
          <h3 className="text-2xl font-bold">About</h3>
          <p>{game.description_raw}</p>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-1/2 pb-3">
            <p className="font-bold">Platforms:</p>
            <div className="whitespace-pre-wrap">
              {game.platforms.map((platform, index) => (
                <Link
                  to={`/games/${platform.platform.slug}`}
                  className="underline pl-1 first-of-type:pl-0"
                >
                  {index === game.platforms.length - 1
                    ? platform.platform.name
                    : `${platform.platform.name},`}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-1/2 pb-3">
            <p>Genre:</p>
            {game.genres.map((genre, index) => (
              <Link
                to={`/games/${genre.slug}`}
                className="underline pl-1 first-of-type:pl-0"
              >
                {index === game.genres.length - 1
                  ? genre.name
                  : `${genre.name},`}
              </Link>
            ))}
          </div>

          <div className="w-1/2 pb-3">
            <p>Release date: {game.released}</p>
          </div>
          <div className="w-1/2 pb-3">
            <p>
              Developer:{' '}
              {game.developers.map((developer, index) => (
                <Link
                  to={`/developers/${developer.slug}`}
                  className="underline pl-1 first-of-type:pl-0"
                >
                  {index === game.developers.length - 1
                    ? developer.name
                    : `${developer.name},`}
                </Link>
              ))}
            </p>
          </div>
          <div className="w-1/2 pb-3">
            <p>Publishers:</p>
            {game.publishers.map((publisher, index) => (
              <Link
                to={`/publishers/${publisher.slug}`}
                className="underline pl-1 first-of-type:pl-0"
              >
                {index === game.publishers.length - 1
                  ? publisher.name
                  : `${publisher.name},`}
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-3">
          <p>Tags:</p>
          {game.tags.map((tag, index) => (
            <Link
              to={`/tags/${tag.slug}`}
              className="underline pl-1 first-of-type:pl-0"
            >
              {index === game.tags.length - 1 ? tag.name : `${tag.name},`}
            </Link>
          ))}
        </div>
        <div className="pb-3">
          <p>Website</p>
          <a href={game.website} className="underline" target="_blank">
            {game.website}
          </a>
        </div>
        <h3>Games like {game.name}</h3>
      </div>
      <div className="w-[384px] flex-shrink-0 flex-grow-0 ml-10">
        <div className="bg-slate-600">
          <h2 className="text-2xl font-bold">Images</h2>
          <img src={game.background_image} alt={`${game.name} image`} />
          <img
            src={game.background_image_additional}
            alt={`${game.name} additional image`}
          />
          {screenshots?.results.map((screenshot) => (
            <img src={screenshot.image} alt="screenshot" />
          ))}
        </div>
      </div>
    </div>
  );
}
