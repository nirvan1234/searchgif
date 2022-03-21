import React from 'react';
import "./navbar.css"

function Navbar() {
  return (
    <div className="homeHeader">
       <div className="homeHeader__left">
                <a to="/">
                    <img src="https://westwind.org/wp-content/uploads/2018/11/facebook-logo-png.png" alt="Facebook Logo" className="homeHeader__logo" />
                </a>
            </div>
            <div className="homeHeader__inputSearch">
                <input type="text" placeholder="Search" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1890px-Vector_search_icon.svg.png" className="homeHeader__inputButton" />
            </div>
            <div className="homeHeader__icons">
            <section>
      
                    <h3 className="homeHeader__name">Nirvan</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Home</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Find Friends</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Create</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

            </div>

    </div>
  )
}

export default Navbar;