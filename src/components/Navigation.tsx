import Logo from './Logo';
import Nav from './Nav';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex flex-wrap w-full items-center justify-between bg-slate-600 px-6">
      <Logo />
      <Nav />
    </header>
  );
}
