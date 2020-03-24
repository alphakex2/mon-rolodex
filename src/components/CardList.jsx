import React from "react"
import "./CardList.css"
import Card from "./Card"
const CardList = props => {
  const rand = Math.floor(Math.random() * 2)
  return (
    <div className="CardList">
      {props.monsters.map(mon => (
        <Card key={`${mon.id}${rand}`} monster={mon} />
      ))}
    </div>
  )
}

export default CardList
