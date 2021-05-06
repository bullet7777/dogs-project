import React from 'react'
import{ Link } from 'react-router-dom'

const NewButton = () => {
    return (
        <div>
            <Link 
            to={'dog/new'}>
            <button>New Dog</button>
            </Link>
            
        </div>
    )
}

export default NewButton