import { useGamesByIdFetch } from '@/hooks/useSearchGames';
import { Input } from './ui/input';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

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

const renderPlatformIcon = (platformName: string, platformId: number) => {
  switch (platformName) {
    case 'PC':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline-block"
          key={platformId}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      );
    case 'Xbox':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 inline-block"
          stroke="currentColor"
          key={platformId}
        >
          <path d="M17.372 1.267A11.869 11.869 0 0 0 12 0c-1.863 0-3.648.415-5.306 1.234a.48.48 0 0 0-.267.455.481.481 0 0 0 .312.426 20.807 20.807 0 0 1 5.05 2.714.478.478 0 0 0 .284.093c.1 0 .2-.031.284-.093a20.776 20.776 0 0 1 4.968-2.683a.48.48 0 0 0 .31-.424.479.479 0 0 0-.264-.454zm-5.298 2.582a21.686 21.686 0 0 0-3.921-2.201 11.143 11.143 0 0 1 7.773.03 21.697 21.697 0 0 0-3.853 2.171z" />
          <path d="M19.529 2.655a.48.48 0 0 0-.551-.037 58.288 58.288 0 0 0-4.942 3.363a.479.479 0 0 0-.189.351.48.48 0 0 0 .142.372 20.177 20.177 0 0 1 1.943 2.228c2.737 3.65 3.811 6.507 4.194 8.47-1.385-3.161-3.979-6.377-7.741-9.591a.479.479 0 0 0-.624 0c-3.767 3.218-6.362 6.438-7.746 9.601c.383-1.979 1.463-4.831 4.2-8.48a20.26 20.26 0 0 1 1.942-2.228a.479.479 0 0 0 .142-.372a.479.479 0 0 0-.189-.351a58.46 58.46 0 0 0-5.026-3.414a.481.481 0 0 0-.547.035a11.947 11.947 0 0 0-3.474 1.267a11.99 11.99 0 0 0 2.998 7.935a.479.479 0 0 0 .197.134a.477.477 0 0 0 .116.208a11.896 11.896 0 0 0 7.345 2.633a12.009 12.009 0 0 0 7.454-2.678a.478.478 0 0 0 .121-.248a.479.479 0 0 0 .231-.15a12.009 12.009 0 0 0 2.998-7.935a11.896 11.896 0 0 0-1.099-4.496a.478.478 0 0 0-.624-.259a21.166 21.166 0 0 0-1.646-1.939a57.69 57.69 0 0 1 4.13-2.799a10.99 10.99 0 0 1-3.297 2.443z" />
        </svg>
      );
    case 'PlayStation':
      return (
        <svg
          viewBox="0 0 0.96 0.96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 inline-block"
          key={platformId}
        >
          <path
            d="M.021.659c-.036.025-.029.068.053.096a.55.55 0 0 0 .261.018c-.002 0 .005 0 0 0V.687L.254.715A.164.164 0 0 1 .161.72C.137.712.142.697.171.685l.165-.06V.532l-.23.083A.298.298 0 0 0 .022.66ZM.577.282v.244c.098.05.175 0 .175-.131C.752.262.706.201.575.153A1.577 1.577 0 0 0 .362.09v.727L.529.87V.259c0-.028 0-.048.019-.04.026.008.029.035.029.063Zm.311.32a.46.46 0 0 0-.331 0V.7L.713.64A.164.164 0 0 1 .806.635C.83.643.825.658.796.67l-.24.093v.096L.887.731A.184.184 0 0 0 .952.688C.969.663.962.628.887.602Z"
            fill="#0070D1"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function SearchBar() {
  const [title, setTitle] = useState('');
  const { data } = useGamesByIdFetch(title);
  const navigate = useNavigate();
  const searchResultsRef = useRef<HTMLDivElement>(null); // Add type annotation to useRef

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchResultsRef.current &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !(searchResultsRef.current as any).contains(event.target)
      ) {
        setTitle('');
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <form
      className="w-1/2 relative"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        className="bg-slate-500 placeholder:text-white hover:bg-white hover:placeholder:text-slate-500 focus:bg-white focus:placeholder:text-slate-500 transition-all border-none max-w-[200px] md:max-w-sm"
        placeholder="Search for games"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      {data?.results.length > 0 && title && (
        <div
          ref={searchResultsRef}
          className="absolute top-full bg-white border border-gray-200 w-1/2 py-2 z-10"
        >
          <ul>
            {data?.results.map((game: TGame) => (
              <li
                key={game.id}
                className="cursor-pointer py-2 px-4 hover:bg-slate-500 hover:text-white flex justify-between"
                onClick={() => navigate(`/game/${game.id}`)}
              >
                {game.name}
                <div>
                  {game.parent_platforms.map((platform) =>
                    renderPlatformIcon(
                      platform.platform.name,
                      platform.platform.id
                    )
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
