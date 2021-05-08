import React from 'react'
import { Link} from 'react-router-dom'

const DogLink = ({dog}) => {
    return (
        <div>
            <Link
            to={`/dogs/${dog.id}`}
            >
            <li>{dog.title}</li>
            </Link>
        </div>
    )
}

export default DogLink