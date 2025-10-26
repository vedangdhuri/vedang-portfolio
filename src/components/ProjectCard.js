import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, alt, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={alt} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={href} target="_blank" rel="noopener noreferrer">
            <button id="project-visit-button">View Project</button>
          </a>
        </div>
      </div>
    </Col>
  );
};
