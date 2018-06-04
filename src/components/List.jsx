import React from "react"
import Card from "./Card"

class List extends React.Component {
    render() {

        function mapIt(input) {
            return input.map(item => {
                return <p>{item}</p>
            })
        }
        return (
            <div>
                <h1>Job List</h1>
                <Card />
            </div>
        )
    }
}

export default List