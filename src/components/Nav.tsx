import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function NavLinks() {
  return (
    <>
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
      <div className="md:w-1/3 flex justify-end ">
        <div className="hidden md:flex justify-between w-full  items-center pl-4">
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
