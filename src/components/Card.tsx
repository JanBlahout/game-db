import { Platform } from '@/App';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  image: string;
  name: string;
  platforms: Platform[];
  metascore?: number;
  id: number;
};

export default function Card(props: CardProps) {
  const { image, name, platforms, metascore, id } = props;
  // const [beingHovered, setBeingHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div
      className="rounded-lg bg-slate-800 text-white col-span-5 md:col-span-4 lg:col-span-2 xl:col-span-1"
      // onMouseEnter={() => {
      //   setBeingHovered(true);
      // }}
      // onMouseLeave={() => {
      //   setBeingHovered(false);
      // }}
    >
      <img
        src={image}
        alt={name}
        className="cover rounded-tr-lg rounded-tl-lg"
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <ul className="flex  gap-1 items-center ">
            {platforms.map((platform) => (
              <React.Fragment key={platform.platform.id}>
                {platform.platform.name === 'PC' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    key={platform.platform.id}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                )}

                {platform.platform.name === 'Xbox' && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    stroke="currentColor"
                    key={platform.platform.id}
                  >
                    <path d="M17.372 1.267A11.869 11.869 0 0 0 12 0c-1.863 0-3.648.415-5.306 1.234a.48.48 0 0 0-.267.455.481.481 0 0 0 .312.426 20.807 20.807 0 0 1 5.05 2.714.478.478 0 0 0 .284.093c.1 0 .2-.031.284-.093a20.776 20.776 0 0 1 4.968-2.683.48.48 0 0 0 .31-.424.479.479 0 0 0-.264-.454zm-5.298 2.582a21.686 21.686 0 0 0-3.921-2.201 11.143 11.143 0 0 1 7.773.03 21.697 21.697 0 0 0-3.853 2.171z" />
                    <path d="M19.529 2.655a.48.48 0 0 0-.551-.037 58.288 58.288 0 0 0-4.942 3.363.479.479 0 0 0-.189.351.48.48 0 0 0 .142.372 20.177 20.177 0 0 1 1.943 2.228c2.737 3.65 3.811 6.507 4.194 8.47-1.385-3.161-3.979-6.377-7.741-9.591a.479.479 0 0 0-.624 0c-3.767 3.218-6.362 6.438-7.746 9.601.383-1.979 1.463-4.831 4.2-8.48a20.26 20.26 0 0 1 1.942-2.228.479.479 0 0 0 .142-.372.479.479 0 0 0-.189-.351 58.46 58.46 0 0 0-5.026-3.414.481.481 0 0 0-.547.035A11.947 11.947 0 0 0 0 12a11.99 11.99 0 0 0 2.998 7.935.479.479 0 0 0 .197.134.477.477 0 0 0 .116.208A11.896 11.896 0 0 0 12 24c3.334 0 6.545-1.404 8.81-3.852a.478.478 0 0 0 .121-.248.479.479 0 0 0 .231-.15A12.009 12.009 0 0 0 24 12c0-3.647-1.63-7.053-4.471-9.345zM2.92 18.279A11.026 11.026 0 0 1 .961 12c0-3.274 1.423-6.329 3.917-8.435a57.47 57.47 0 0 1 4.216 2.852 21.076 21.076 0 0 0-1.646 1.939c-3.335 4.446-4.313 7.816-4.528 9.923zm9.08 4.76a10.937 10.937 0 0 1-7.81-3.237c.947-3.568 3.597-7.263 7.883-10.992 4.238 3.686 6.877 7.342 7.851 10.875a11.079 11.079 0 0 1-7.925 3.354zm4.7-14.683a21.166 21.166 0 0 0-1.646-1.939 57.69 57.69 0 0 1 4.13-2.799A10.99 10.99 0 0 1 23.039 12a11.052 11.052 0 0 1-1.834 6.094c-.251-2.084-1.254-5.402-4.506-9.738z" />
                  </svg>
                )}
                {platform.platform.name === 'PlayStation' && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 0.96 0.96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={platform.platform.id}
                  >
                    <path
                      d="M.021.659c-.036.025-.029.068.053.096a.55.55 0 0 0 .261.018c-.002 0 .005 0 0 0V.687L.254.715A.164.164 0 0 1 .161.72C.137.712.142.697.171.685l.165-.06V.532l-.23.083A.298.298 0 0 0 .022.66ZM.577.282v.244c.098.05.175 0 .175-.131C.752.262.706.201.575.153A1.577 1.577 0 0 0 .362.09v.727L.529.87V.259c0-.028 0-.048.019-.04.026.008.029.035.029.063Zm.311.32a.46.46 0 0 0-.331 0V.7L.713.64A.164.164 0 0 1 .806.635C.83.643.825.658.796.67l-.24.093v.096L.887.731A.184.184 0 0 0 .952.688C.969.663.962.628.887.602Z"
                      fill="#0070D1"
                    />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </ul>
          {metascore && (
            <span
              className={`p-1 border border-solid ${
                metascore > 75
                  ? 'text-green-500 border-green-500'
                  : 'text-yellow-500 border-yellow-500'
              } ${
                metascore < 40 ? 'text-red-500 border-red-500' : ''
              } w-8 flex items-center justify-center h-6 rounded-md`}
              title="Metascore"
            >
              {metascore}
            </span>
          )}
        </div>
        <h2
          className="text-2xl font-bold pt-4 hover:text-gray-600 transition-all cursor-pointer"
          onClick={() => navigate(`/game/${id}`)}
        >
          {name}
        </h2>
      </div>
    </div>
  );
}
