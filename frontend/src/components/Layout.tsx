import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import SideNav from './SideNav';

export default function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex">
        {!isDashboard && <SideNav />}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </main>
    </div>
  );
}
