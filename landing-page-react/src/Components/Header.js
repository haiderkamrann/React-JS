import image from "../images/banner.jpg";
import Contact from "../Components/Contact";

function Header() {
  return (
    <>
      <div className="main-section" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`,
        }}
      >
        <div className="main-content">
          <h1>
            Online University of <br />
            In-Demand Professions
          </h1>
          <p>Our courses</p>

          <div className="buttons">
            <button>DESIGN</button>
            <button>PROGRAMMING</button>
            <button>MARKETING</button>
            <button>BUSINESS</button>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}

export default Header;
