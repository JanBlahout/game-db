import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';

export default function Navigation() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b ">
        <div className="flex h-16 items-center px-4 bg-slate-600 ">
          <h1 className="text-xl font-bold text-white p-4 whitespace-nowrap">
            <Link to={'/'}>GAME DB</Link>
          </h1>
          <Input
            className="mx-4 w-full bg-slate-500 placeholder:text-white hover:bg-white hover:placeholder:text-slate-500 focus:bg-white focus:placeholder:text-slate-500 transition-all border-none"
            placeholder="Search for games"
          />
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
