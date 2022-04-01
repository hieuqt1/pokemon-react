import PokeTab from "./PokeTab";
import Card from './Card'
import './PokeList.css'

export default function PokeList(props) {
  const classes = 'TileHolder ' + props.className;

    return (
    <Card className={classes}>
        <PokeTab number = {props.items[0].number} name = {props.items[0].name} type = {props.items[0].type}></PokeTab>
        <PokeTab number = {props.items[1].number} name = {props.items[1].name} type = {props.items[1].type}></PokeTab>
        <PokeTab number = {props.items[2].number} name = {props.items[2].name} type = {props.items[2].type}></PokeTab>
        <PokeTab number = {props.items[3].number} name = {props.items[3].name} type = {props.items[3].type}></PokeTab>
        <PokeTab number = {props.items[4].number} name = {props.items[4].name} type = {props.items[4].type}></PokeTab>
        <PokeTab number = {props.items[5].number} name = {props.items[5].name} type = {props.items[5].type}></PokeTab>
        <PokeTab number = {props.items[6].number} name = {props.items[6].name} type = {props.items[6].type}></PokeTab>
        <PokeTab number = {props.items[7].number} name = {props.items[7].name} type = {props.items[7].type}></PokeTab>
        <PokeTab number = 'example' name = 'example' type = 'example'></PokeTab>
        <PokeTab number = 'example' name = 'example' type = 'example'></PokeTab>
        <PokeTab number = 'example' name = 'example' type = 'example'></PokeTab>
        <PokeTab number = 'example' name = 'example' type = 'example'></PokeTab>
      </Card>)
}

