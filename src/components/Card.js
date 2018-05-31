import React from "react"

class Card extends React.Component {
    render(){
        function mapIt(input){
            return input.map(item =>{
                return <p>{item}</p>
            })
        }
        return(
        <div>
            <h1>This be a job</h1>
            
        </div>
        )
    }
}

export default Card