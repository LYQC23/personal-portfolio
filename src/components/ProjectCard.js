import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,prourl}) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={prourl}>查看</a>
          </div>
         
        </div>
        
      </div>
    </Col>
  )
}
