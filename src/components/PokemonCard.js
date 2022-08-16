import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemonId, pokemonName }) {
  return (
    <Link to={`pokemon/${pokemonId}`}>
      <Card className="pokemonCard">
        <Card.Img
          className="cardimage"
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        />
        <Card.Body>
          <Card.Title>{pokemonName}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
