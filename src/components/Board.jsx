import React from "react"

const Board = (props) => (
    <div className="categories">
        <h2>{props.title}</h2>
        <h3>{props.job}</h3>
    </div>
)

export default Board