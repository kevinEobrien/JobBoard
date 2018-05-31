import React from "react"

class List extends React.Component {
    render(){
        function mapIt(input){
            return input.map(item =>{
                return <p>{item}</p>
            })
        }
        return(
        <div>
            <h1>Job List</h1>
            <p>{this.props.title}</p>
            {mapIt(this.props.fruit)}
            {mapIt(this.props.jobs)}
        </div>
        )
    }
}

export default List