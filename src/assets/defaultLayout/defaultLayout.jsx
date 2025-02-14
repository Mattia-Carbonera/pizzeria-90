import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <header>
        <div className="navbar-container">
          <div className="logo-container">
            <span>Pizzeria 90</span>
          </div>

          <nav>
            <ul>
              <li>
                <Link className="link-nav" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="link-nav" to={"/menu"}>
                  Menu
                </Link>
              </li>
              <li>
                <Link className="link-nav" to={"/ordina"}>
                  Ordina
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
