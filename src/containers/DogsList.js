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
    likeHeart = (dog) => {
        console.log(dog)


        if (dog.liked === true) {
            dog.liked = false
        } else {
            dog.liked = true
        }


        let configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dog)
        }

        fetch(`http://localhost:3001/dogs/${dog.id}`,configObject)
        .then(res=>res.json())
        .then(() => {
            this.setState({
                dogs: this.state.dogs.map((d) => {
                    if (d.id === dog.id) {
                        return dog
                    }
                        return d
                })
            })
        

        })

    }


    render() {
        const dogs = this.state.dogs.map(d => <DogLink key={d.id} dog={d} onLikes={this.likeHeart} />)
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
