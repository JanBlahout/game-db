import Navigation from './Navigation';
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <body>
      <Navigation />
      <div className="flex">
        <SideMenu />
        <div className="w-full px-4 pt-8">
          <Outlet />
        </div>
      </div>
    </body>
  );
}
