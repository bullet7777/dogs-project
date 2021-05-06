import React, { Component } from 'react'

class DogInfo extends Component {
    state={
        dog:{
            title:"",
            url:"",
            breed:"",
            description:"",
            lifespan:"",
            

        }
       
    }
    componentDidMount() {
        fetch(`http://localhost:3001/dogs/${this.props.match.params.id}`)
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            this.setState({
                dog:data
            })

        })
    }
 

    
    render() {
        return (
            <div>
                <h2>{this.state.dog.title}</h2>
                <h4>Breed: {this.state.dog.breed}</h4>
                <h5>Description: {this.state.dog.description}</h5>
                <h5>Lifespan: {this.state.dog.lifespan} Years</h5>
               
            </div>
        )
    }
}

export default DogInfo
