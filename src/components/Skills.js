import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { useEffect } from "react";

export const Skills = () => {
  useEffect(() => {
    // Disable right-click and dragging ONLY on .item elements
    const handleContextMenu = (e) => {
      if (e.target.closest(".item")) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e) => {
      if (e.target.closest(".item")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    ["html", "HTML"],
    ["css", "CSS"],
    ["js", "JavaScript"],
    ["c", "C"],
    ["cpp", "C++"],
    ["nodejs", "Node.js"],
    ["java", "Java"],
    ["python", "Python"],
    ["reactjs", "React"],
    ["django", "Django"],
    ["figma", "Figma"],
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My skill set includes programming in Python and Java, with
                hands-on experience in frameworks like Django and React.js. I
                have a solid foundation in Data Structures and Algorithms (DSA)
                and Object-Oriented Programming (OOP), along with expertise in
                UI/UX design using Figma. Beyond technical skills, I bring
                strong leadership, teamwork, and problem-solving abilities to
                every project I work on.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                draggable={true}
                swipeable={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map(([icon, label]) => (
                  <div
                    className="item"
                    key={icon}
                    onContextMenu={(e) => e.preventDefault()} // disable right-click on item
                    draggable="false" // prevent item drag
                    onDragStart={(e) => e.preventDefault()}
                  >
                    <img
                      src={`https://i.icoziv.workers.dev/icons?i=${icon}`}
                      alt={label}
                    />
                    <h5>{label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background graphic"
        draggable="false"
      />
    </section>
  );
};
