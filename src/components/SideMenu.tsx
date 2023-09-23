import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function SideMenu() {
  return (
    <div className="pb-12 w-1/6 border-r-2">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="text-2xl hover:text-gray-600 no-underline w-full justify-start font-bold"
              asChild
            >
              <Link to={'/'}>Home</Link>
            </Button>
            <Button
              variant="ghost"
              className="text-2xl hover:text-gray-600 no-underline w-full justify-start font-bold"
              asChild
            >
              <Link to="/albums">Reviews</Link>
            </Button>

            <Button
              variant="ghost"
              className="text-2xl hover:text-gray-600 no-underline w-full justify-start font-bold"
              asChild
            >
              <Link to="favorites">wiqq JB</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">Wishlist</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">My library</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">People you follow</Link>
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            New Releases
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start  gap-2"
              asChild
            >
              <Link to={'/'}>Last 30 days</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="/albums">This week</Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">Next week</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">Release calendar</Link>
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Top
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start  gap-2"
              asChild
            >
              <Link to={'/'}>Best of the year</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="/albums">Popular in 2022</Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">All time top 250</Link>
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Browse
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start  gap-2"
              asChild
            >
              <Link to={'/'}>Platforms</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="/albums">Stores</Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">Collections</Link>
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Platforms
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start  gap-2"
              asChild
            >
              <Link to={'/'}>PC</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="/albums">PlayStation 4</Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">Xbox One</Link>
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Genres
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start  gap-2"
              asChild
            >
              <Link to={'/'}>Action</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="/albums">Strategy</Link>
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link to="favorites">RPG</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
