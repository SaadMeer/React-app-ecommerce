import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-10">
        <a className="navbar-brand" href="#">
          GeekStore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" >
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
