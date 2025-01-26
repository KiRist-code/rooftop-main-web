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
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/compilation"}>Compilation</Link>
              </li>
              <li>
                <Link to={"/release"}>Releases</Link>
              </li>
              <li>
                <Link to={"/artists"}>Artists</Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => {
                    window.open("https://forms.gle/4TNRc6KAegnHKwNF6 ");
                  }}
                >
                  Send Demo
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
