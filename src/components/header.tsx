import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"}>Rooftop</Link>
        </div>
        <div className="nav-right">
          <nav>
            <ul>
              <li>
                <Link to={"/compilation"}>Compilation</Link>
              </li>
              <li>
                <a href={"/release"}>Releases</a>
              </li>
              <li>
                <a href={"/artists"}>Artists</a>
              </li>
              <li>
                <a href="#">Send Demo</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
