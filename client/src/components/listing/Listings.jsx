import React from "react";
import "./listings.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { listData } from "../../lib/dummyData";

function Listings() {
  return (
    <div className="listings">
      <div>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={listData[1].img} />
          <Card.Body style={{ textAlign: "left", padding: "10px 20px" }}>
            <Card.Title style={{ textAlign: "left", padding: "10px 0", color:"#DC5F00" }}>{listData[1].title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">${listData[1].price}</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={listData[2].img} />
          <Card.Body style={{ textAlign: "left", padding: "10px 20px" }}>
            <Card.Title style={{ textAlign: "left", padding: "10px 0", color:"#DC5F00", marginBottom:"45px" }} >{listData[2].title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">${listData[2].price}</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={listData[0].img} />
          <Card.Body style={{ textAlign: "left", padding: "10px 20px" }}>
            <Card.Title style={{ textAlign: "left", padding: "10px 0", color:"#DC5F00", marginBottom:"15px" }} >{listData[3].title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">${listData[3].price}</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={listData[4].img}/>
          <Card.Body style={{ textAlign: "left", padding: "10px 20px" }}>
            <Card.Title style={{ textAlign: "left", padding: "10px 0", color:"#DC5F00" }}>{listData[4].title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">${listData[4].price}</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Listings;
