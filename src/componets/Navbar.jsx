import { React ,useContext} from "react";
import { Link } from "react-router-dom";
import newscontext from "../context/newscontext";

export default function Navbar() {
  // const changeColor = () => {};
  // const location = useLocation;

  // console.log(location);
  const context = useContext(newscontext)
  const {newsadding } = context ;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light gap-4 ">
        <Link className="navbar-brand" to="news">website</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li>
              {" "}
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
                <Link
                  className="nav-link" 
                  aria-disabled="true"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link" 
                  to="/news"
                  onClick={newsadding}
                >
                  news
                </Link>
              </li>
          </ul>
       <div className="gap-4 ">
       <button type="button" className="btn btn-success">
        login
      </button>
      <button type="button" className="btn btn-success">
        signin
      </button>
       </div>

        </div>
      </nav>
    </div>
  );
}
