import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Nav() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      
        { name: "UPCOMING", path: "/movies/upcoming" },
        { name: "SIMILAR MOVIES", path: "movies/similar" },
        { name: "MY WATCHLIST", path: "movies/watchlist" },
        { name: "NOW - PLAYING", path: "movies/now-playing" },
        { name: "POPULAR MOVIES", path: "movies/popular" },
        { name: "MY FANTASY", path: "/movies/fantasy"},
      
    ];
    setNavLinks(navs);
  }, []);


  return (
    <div>
      <nav style={{backgroundColor:'#581845'}}>
        <div className="container">
          <div class="btn-group" >
            <div class="dropdown-menu dropdown-menu-end" >
              {navLinks.map((d, i) => (
                <div key={i}>
                  <Link to={d.path} >
                    <button class="dropdown-item" type="button" align="left" 
                    style={{
                        backgroundColor:'#581845',
                        border:'none',
                        font:'centered',
                        color:'#DAF7A6'}}>
                        <div>
                            <Typography>
                      {d.name}
                      </Typography>
                      </div>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;