import React from 'react';
import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
// import { isHtmlElement } from "react-router-dom/dist/dom";

export default function Card({ item, type }) {

    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const isFav = store.favorites.some(
        (fav) => fav.uid === item.uid && fav.type === type
    );

    const imgUrl = `https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${item.uid}.jpg`;

    const handleFavorite = () => {
        if (isFav) {
            dispatch({ type: "REMOVE_FAVORITE", payload: item.uid });
        } else {
            dispatch({
                type: "ADD_FAVORITE",
                payload: { ...item, type },
            });
        }
    };

    let attributes = null;
    if (type === "people") {
        attributes = (
            <>
                <p>Gender: {item.gender}</p>
                <p>Hair: {item.hair_color}</p>
                <p>Eye: {item.eye_color}</p>
            </>
        );
    } else if (type === "planets") {
        attributes = (
            <>
                <p>Terrain: {item.terrain}</p>
                <p>Population: {item.population}</p>
                <p>&nbsp;</p>
            </>
        );
    } else if (type === "vehicles") {
        attributes = (
            <>
                <p>Model: {item.model}</p>
                <p>Manufacturer: {item.manufacturer}</p>
                <p>Cost: {item.cost_in_credits}</p>
            </>
        );
    }

    return (
        <div className='card'>
            <img
                src={imgUrl}
                className='card-img-top'
                style={{ height : "200px", objectFit: "cover"}}
                onClick={() => navigate(`/${type}/${item.uid}`)}
            />
            <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                {attributes}
                {/* <p className='card-text'>UID: {item.uid}</p> */}
                <div className='d-flex justify-content-between'>
                    <button
                        onClick={() => navigate(`/${type}/${item.uid}`)}
                        className='btn btn-primary'
                    >
                        Learn more
                    </button>

                    <button
                        onClick={handleFavorite}
                        className={`btn btn-${isFav ? "danger" : "outline-warning"}`}
                    >
                        {isFav ? "♥" : "♡"}
                    </button>

                </div>
            </div>
        </div>
    );

}





// const { store, dispatch } = useGlobalReducer();
// const navigate = useNavigate();

// const favorite = store.favorite.some(
//     fav = fav.uid == isHtmlElement.uid && fav.type == type
// );

// const imgUrl = `https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${item.uid}.jpg`;

// const handleFavorite = () = {
//     if()
//     dispatch({ type: "remove_favorite", payload: { uid: item.uid, type
// } });

// } else {
//     dispatch({
//         type: "add_favorite",
//         payload: {}
//     })
// }