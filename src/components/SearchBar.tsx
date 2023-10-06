import { Input } from './ui/input';

export default function SearchBar() {
  return (
    <Input
      className="bg-slate-500 placeholder:text-white hover:bg-white hover:placeholder:text-slate-500 focus:bg-white focus:placeholder:text-slate-500 transition-all border-none max-w-[200px] md:max-w-sm"
      placeholder="Search for games"
    />
  );
}
