import React from 'react'
import { Link} from 'react-router-dom'

const DogLink = ({dog,onLikes}) => {

    
    let heart="♡"

  
    if(true===dog.liked){
         heart='♥'
    }


    return (
        <div>
            <Link
            to={`/dogs/${dog.id}`}
            >
            <li>{dog.title}</li>
            
            </Link>
            <span onClick={()=>{onLikes(dog)}}>{heart}</span>
        </div>
    )
}

export default DogLink