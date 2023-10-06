import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';

function NavLinks() {
  return (
    <>
      <Input
        className="mx-4 w-full sm:w-1/3  bg-slate-500 placeholder:text-white hover:bg-white hover:placeholder:text-slate-500 focus:bg-white focus:placeholder:text-slate-500 transition-all border-none max-w-xs"
        placeholder="Search for games"
      />
      <NavLink to={''}>Link 1</NavLink>
      <NavLink to={''}>Link 2</NavLink>
      <NavLink to={''}>Link 3</NavLink>
    </>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:w-2/3 flex justify-end bg-cyan-400">
        <div className="hidden md:flex justify-between w-full bg-red-500 items-center pl-4">
          <NavLinks />
        </div>
        <div className="md:hidden flex items-center ml-4">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
