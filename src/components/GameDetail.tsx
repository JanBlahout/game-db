import { Link, useParams } from 'react-router-dom';
import ShowMoreText from './ShowMoreText';
import { Icon } from '@iconify/react';
import { Button } from './ui/button';
import Loader from './Loader';
import { useGameByIdFetch } from '@/hooks/useGameById';
import { useScreenshotsFetch } from '@/hooks/useGameScreenshots';

export type Game = {
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

type Screenshot = {
  image: string;
  id: number;
};

type Store = {
  id: number;
  store: {
    domain: string;
    games_count: number;
    id: number;
    name: string;
    slug: string;
  };
  url: string;
};

type TPlatformIcons = {
  [key: string]: JSX.Element;
};

const platformsIcons: TPlatformIcons = {
  PC: <Icon icon="simple-icons:windows10" width="24" />,
  PLAYSTATION: <Icon icon="simple-icons:playstation" width="24" />,
  XBOX: <Icon icon="simple-icons:xbox" width="24" />,
};

export default function GameDetail() {
  const { id } = useParams();

  const { data: game, isLoading: gameIsLoading } = useGameByIdFetch(Number(id));
  const { data: screenshots, isLoading: screenshotsIsLoading } =
    useScreenshotsFetch(Number(id));

  console.log('game', game);
  console.log('screenshots', screenshots);

  if (gameIsLoading || screenshotsIsLoading) {
    return (
      <div className="w-full h-1/2 flex items-center justify-center">
        <Loader />;
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col md:flex-row">
      <div className="max-w-[700px] flex-auto pr-6">
        <ul className="flex gap-2">
          {game?.parent_platforms.map((parent_platform: ParentPlatform) => (
            <li key={parent_platform.platform.id}>
              {platformsIcons[parent_platform.platform.name.toUpperCase()]}
            </li>
          ))}
          <li>AVERAGE PLAYTIME: {game?.playtime} HOURS</li>
        </ul>

        <h1 className="text-[4rem] font-bold">{game?.name}</h1>
        <div className="pb-3">
          <h3 className="text-2xl font-bold">About</h3>
          <ShowMoreText text={game?.description_raw} />
        </div>
        <div className="flex flex-wrap ">
          <div className="w-1/2 pb-3">
            <p className="font-bold">Platforms:</p>
            <div className="whitespace-pre-wrap">
              {game?.platforms.map((platform, index) => (
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
            {game?.genres.map((genre, index) => (
              <Link
                to={`/games/${genre.slug}`}
                className="underline pl-1 first-of-type:pl-0"
              >
                {index === game?.genres.length - 1
                  ? genre.name
                  : `${genre.name},`}
              </Link>
            ))}
          </div>

          <div className="w-1/2 pb-3">
            <p>Release date: {game?.released}</p>
          </div>
          <div className="w-1/2 pb-3">
            <p>
              Developer:{' '}
              {game?.developers.map((developer, index) => (
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
            {game?.publishers.map((publisher, index) => (
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
        <div className="pb-3 pr-6 whitespace-break-spaces">
          <p>Tags:</p>
          {game?.tags.map((tag, index) => (
            <Link
              to={`/tags/${tag.slug}`}
              className="underline pl-1 first-of-type:pl-0 break-words"
            >
              {index === game?.tags.length - 1 ? tag.name : `${tag.name},`}
            </Link>
          ))}
        </div>
        <div className="pb-3">
          <p>Website</p>
          <a href={game?.website} className="underline" target="_blank">
            {game?.website}
          </a>
        </div>
        <h3>Games like {game?.name}</h3>
      </div>
      <div className="w-[384px] flex-shrink-0 flex-grow-0 ml-10">
        <div className="pb-3">
          <img src={game?.background_image} alt={`${game?.name} image`} />

          <div className="grid grid-cols-2">
            {screenshots?.results.map((screenshot: Screenshot) => (
              <img src={screenshot.image} alt="screenshot" />
            ))}
          </div>
        </div>
        <h3 className="text-2xl ">Where to buy</h3>
        <div className="flex flex-wrap ">
          {game?.stores.map((store: Store) => (
            <Button className="w-[184px] h-[40px] even:ml-4 mt-4">
              {store.store.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
