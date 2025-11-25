import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to='/'>Home</Link>
        <Link to='/first'>First</Link>
        <Link to='/second'>Second</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
  