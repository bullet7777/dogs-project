import React, { Component } from 'react'
import DogForm from './DogForm'
import NewButton from './NewButton'
import DogLink from '../components/DogLink'

class DogsList extends Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/dogs')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    dogs: data
                })
            })
    }

    render() {
        const dogs = this.state.dogs.map(d => <DogLink key={d.id} dog={d}/>)
        return (
            <div>
                <h3>My Dogs</h3>
                <hr />
                {dogs}
                <br />
                <br />
                <NewButton />
            </div>
            )
        }
    
}

export default DogsList
