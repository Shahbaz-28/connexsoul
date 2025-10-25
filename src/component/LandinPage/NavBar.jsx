import { Link, BrowserRouter } from "react-router-dom";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import HideSec from "./HideSec";
import Services from "./Services";
import { RainbowButton } from "../ui/rainbow-button";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [affix, setAffix] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  let hoverTimeout;

  const handleMenu = () => {
    setShowNavbar((prevState) => !prevState);
  };

  const handleScroll = () => {
    setAffix(window.scrollY > 130);
  };

  const handleMouseEnter = (item) => {
    clearTimeout(hoverTimeout);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={`h-[26px] ${affix ? styles.topAffix : ""}`}></div>
      <div>
        <header
          className={`p-3 lg:p-6 !pb-0 ${styles.header} ${affix ? styles.affix : ""}`}
        >
          <div className="container mx-auto px-4 py-2 lg:py-3 lg:px-[15px] !max-w-[1150px]">
            <nav className={`${styles.navbar} flex justify-center`}>
              <div>
                <img src="/images/cohvey-logo.svg" alt="Logo" className="w-[90%]" />
              </div>
              <div
                className={`${styles["navbar-collapse"]} ${showNavbar ? styles.show : ""}`}
              >
                {showNavbar && (
                  <div
                    className={`cursor-pointer ml-6 mb-4 lg:hidden ${styles.position}`}
                    onClick={handleMenu}
                  >
                    <img src="/images/icons/icons8-close.svg" alt="Close" />
                  </div>
                )}
                <ul className={`${styles["navbar-nav"]} lg:flex items-center mx-auto`}>
                  {/* Product Menu */}
                  <li
                    className="relative f-Nohemi-Light-BF6438cc583f70b font-normal"
                    onMouseEnter={() => handleMouseEnter("product")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to="#" className={styles["nav-link"]}>
                      Product
                    </Link>
                    {hoveredItem === "product" && (
                      <>
                        <div className="grediant-b-c absolute top-[44px] ml-[14px]"></div>
                        <div
                          className="absolute top-full left-[240px] transform -translate-x-1/2 bg-white shadow-md z-10"
                          style={{
                            width: "1150px",
                          }}
                          onMouseEnter={() => handleMouseEnter("product")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <HideSec />
                        </div>
                      </>
                    )}
                  </li>
                  {/* Services Menu */}
                  <li
                    className="relative f-Nohemi-Light-BF6438cc583f70b font-normal"
                    onMouseEnter={() => handleMouseEnter("services")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to="#" className={styles["nav-link"]}>
                      Services
                    </Link>
                    {hoveredItem === "services" && (
                      <>
                        <div className="grediant-b-c absolute top-[44px] ml-[17px]"></div>
                        <div
                          className="absolute top-full left-[125px] transform -translate-x-1/2 bg-white shadow-md z-10"
                          style={{
                            width: "1150px",
                          }}
                          onMouseEnter={() => handleMouseEnter("services")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Services />
                        </div>
                      </>
                    )}
                  </li>
                  <li className="f-Nohemi-Light-BF6438cc583f70b font-normal">
                    <Link to="/contact" className={styles["nav-link"]}>
                      Resources
                    </Link>
                  </li>
                  <li className="f-Nohemi-Light-BF6438cc583f70b font-normal">
                    <Link to="/" className={styles["nav-link"]}>
                      Join as a creator
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center ml-14">
                <RainbowButton className="f-Nohemi-Light-BF6438cc583f70b rounded-[20px] text-[#0C0C0C] text-[15px] flex items-center justify-center px-5 pb-2 pt-3 border-[1px] border-[#FCFCD80F] hover:border-[1px] hover:border-gray-600 hover:bg-[#1F1F1FEB] hover:text-[#FCFCD8] duration-300">
                  Join Waitlist
                </RainbowButton>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
