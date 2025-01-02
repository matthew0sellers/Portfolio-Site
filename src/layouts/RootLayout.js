import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="header">Portfolio</h1>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="exSite"> Project Examples </NavLink>
          <NavLink to="about"> Individual Technology </NavLink>
          <NavLink to="help"> Inquiries </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      
    </div>
  );
}
