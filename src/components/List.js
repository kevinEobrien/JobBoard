import React from "react"

class List extends React.Component {
    render(){
        // this.props.title
        return(
        <div>
            <h1>Listen</h1>
            <p>{this.props.title}</p>
            {this.props.fruit.map(item => {
                return <p>{item}</p>
            })}
        </div>
        )
    }
}

export default List