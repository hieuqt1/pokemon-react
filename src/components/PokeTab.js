import './PokeTab.css'
import Card from './Card'

export default function PokeTab(props) {
  return (
    <Card className="poke-tile">
      <div className="poke-number">{props.number}</div>
      <div className="poke-name">{props.name}</div>
      <div className="poke-image">{props.type}</div>
    </Card>
  );
}

