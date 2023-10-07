import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className=" h-16 flex items-center justify-center">
      <h2
        className="text-white font-bold text-xl whitespace-nowrap cursor-pointer hover:text-gray-300"
        onClick={() => {
          navigate('/');
        }}
      >
        GAME DB
      </h2>
    </div>
  );
}
