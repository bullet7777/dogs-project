import React, { Component } from 'react'

class DogForm extends Component {
    state= {
        title:"",
        url:"",
        breed:"",
        description:"",
        lifespan:""
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleSubmit=(e) =>{
        e.preventDefault()
        console.log(this.state)
        fetch('http://localhost:3001/dogs',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            this.props.history.push('/dogslist')

        })

    }

    render() {
        return (
            <div> 
                
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label><br/>
                    <input name="title" type="text" onChange={this.handleChange} value={this.state.title} /><br/>
                    <label>Breed</label><br/>
                    <input name="breed" type="text" onChange={this.handleChange} value={this.state.breed} /><br/>
                    <label>Description</label><br/>
                    <input name="description" type="text" onChange={this.handleChange} value={this.state.description} /><br/>
                    <label>Lifespan</label><br/>
                    <textarea name="lifespan" type="text" onChange={this.handleChange} value={this.state.lifespan} /><br/>
                    <input type="submit"/>
                </form>
                
            </div>
        )
    }
}

export default DogForm
