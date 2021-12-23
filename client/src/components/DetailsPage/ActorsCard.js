import React from 'react';
import "../../styles/ActorCard/ActorCard.css";

const ActorsCard=({actor}) => {
    return (
        <li key={actor.id} className="card">
            <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${actor.profile_path}` } alt="" className="actor_image" />
            <p className="actor_name">{actor.name}</p>
            <p className="character_name">{actor.character}</p>
    </li>
    );
}

export default ActorsCard;
