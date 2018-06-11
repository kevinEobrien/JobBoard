import React from "react"
import Card from "./Card"

const APIurl = "https://frozen-journey-57068.herokuapp.com/"
class List extends React.Component {
    render() {

        function mapIt(input) {
            return input.map(item => {
                return <p>{item}</p>
            })
        }
        return (
            <div>
                <Card />
            </div>
        )
    }
}

export default List