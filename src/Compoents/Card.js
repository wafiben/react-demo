import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ elt, showName }) {
  const handleClick = () => {
    showName(elt.age);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{elt.firstName}</Card.Title>
        <Button variant="primary" onClick={handleClick}>
          Show
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CustomCard;
