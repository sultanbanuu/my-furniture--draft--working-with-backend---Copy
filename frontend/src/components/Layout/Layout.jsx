import { Link, NavLink, Outlet } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import "./Layout.css";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  // const { cartTotalQuantity } = useSelector((state) => state.cart);
  // const { wishlistItems } = useSelector((state) => state.wishlists);

  return (
    <>
      <header>
        <nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="container"
          >
            <div style={{ display: "flex", gap: "3rem" }}>
              <div className="language">Az</div>
              <div className="search-icon">
                <CiSearch size={22} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/">
                <h1>Home Decor</h1>
              </Link>
              <ul style={{ display: "flex", listStyle: "none", gap: "7rem" }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "currentPage active" : ""
                  }
                  to="/"
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "currentPage active" : ""
                  }
                  to="/about"
                >
                  <li>About</li>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "currentPage active" : ""
                  }
                  to="/products"
                >
                  <li>Products</li>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "currentPage active" : ""
                  }
                  to="/wishlist"
                >
                  <li>Wishlist</li>
                  {/* <h3>{wishlistItems.length}</h3> */}
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "currentPage active" : ""
                  }
                  to="/collections"
                >
                  <li>Collections</li>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "currentPage active" : ""
                  }
                  to="/cart"
                >
                  <li>Cart</li>
                  {/* <h3>{cartTotalQuantity}</h3> */}
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "currentPage active" : ""
                  }
                  to="/contact"
                >
                  <li>Contact</li>
                </NavLink>
              </ul>
            </div>
            <div className="profInfo-btns">
              <Link to="/profile">
                <PiShoppingCartLight size={22} />
              </Link>
              <Link to="personal_info">
                <CiUser size={22} />
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul>
            <Link>
              <li>HomeDecor</li>
            </Link>
            <li>©2022 All Right Reserved. Developed by Webcoder Agency</li>
          </ul>

          <ul>
            <li>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
            </li>
          </ul>

          <ul>
            <li>+994 50 555 55 55</li>
          </ul>

          <ul>
            <Link>
              <li>youremailhere@gmail.com</li>
            </Link>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;
