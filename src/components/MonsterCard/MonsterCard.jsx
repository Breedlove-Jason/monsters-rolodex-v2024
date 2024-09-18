import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function MonsterCard({ monster }) {
  const { id, name, email } = monster;
  return (
    <Col
      key={id}
      sm={12}
      md={6}
      lg={4}
      className="mb-4 d-flex justify-content-center text-center"
    >
      <Card style={{ width: "18rem" }} className="bg-dark text-white">
        <Card.Img
          variant="top"
          src={`https://robohash.org/${id}?set=set2&size=150x150`}
          alt={`${name}`}
        />
        <Card.Body>
          <Card.Title className={"text-info"}>{name}</Card.Title>
          <Card.Text className={"text-info"}>{email}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

MonsterCard.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default MonsterCard;
