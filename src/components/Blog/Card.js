import { Col } from "react-bootstrap";

export const Card = (props) => {
  return (
    <Col size={12} md={6} lg={4}>
        <div className="card text-dark">
            <img src={props.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.title_one}</h5>
                <p className="card-text">{props.desc_one}</p>
                <a href={props.link} className="btn">Lihat</a>
            </div>
        </div>
        
    </Col>



  )
}





