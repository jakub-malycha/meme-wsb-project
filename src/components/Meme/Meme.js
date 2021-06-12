import { Card, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Meme = (props) => {
  return (
    <div>
      <Card style={{ width: "27rem", marginBottom: "2rem" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img style={{ margin: "0" }} variant="top" src={props.img} />
        <Container>
          <Row
            style={{
              marginTop: "15px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Button
              style={{ flex: "1" }}
              onClick={() => {
                props.upvote(props.id);
              }}
              variant="primary"
            >
              Upvotes {props.upvotes}
            </Button>
            <Button
              style={{ flex: "1" }}
              onClick={() => {
                props.downvote(props.id);
              }}
              variant="danger"
            >
              Downvotes {props.downvotes}
            </Button>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default Meme;
