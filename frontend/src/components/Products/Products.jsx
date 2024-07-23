// import { useEffect, useState } from "react";
import "./Products.css";
import "../../index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { Category } from "../Sidebar/Category/Category";

const Products = () => {
  // const [isHomePage, setIsHomePage] = useState(true);

  // useEffect(() => {
  //   setIsHomePage(location.pathname === "/");
  // }, [location.pathname]);

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        {/* <>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Products</h2>
            <div>
              {isHomePage && (
                <button>
                  <Link to="/products">See All</Link>
                </button>
              )}
            </div>
          </div>
          <div className="products">
            {!isHomePage && <Sidebar />}
            <div className="product-card-container">
              <div className="product-cards">
                {isHomePage ? (
                  data.slice(0, 4).map((product) => (
                    <div className="product-card" key={product.id}>
                      <div>{<button>Add to wishlist</button>}</div>
                    </div>
                  ))
                ) : (
                  <>
                    {data.map((product) => (
                      <div className="product-card" key={product.id}>
                        <div className="product-img">
                          <img
                            src={product.image}
                            alt=""
                            style={{ display: "block", width: "100%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </> */}

        <div>Products</div>
        <Category />
      </div>
    </div>
  );
};

export default Products;
