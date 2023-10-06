import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <body>
      <Navigation />
      <div className="w-full px-4 pt-8">
        <Outlet />
      </div>
    </body>
  );
}
