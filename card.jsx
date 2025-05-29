import { usenavigate } from "react-router-dom"
import useGlobalReducer from "./src/hooks/useGlobalReducer"
import { isHtmlElement } from "react-router-dom/dist/dom";

const { store, dispatch } = useGlobalReducer();
const navigate = useNavigate();

const favorite = store.favorite.some(
    fav = fav.uid == isHtmlElement.uid && fav.type == type
);

const imgUrl = `https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${item.uid}.jpg`;

const handleFavorite = ()  = {
if ()
    dispatch({ type: "remove_favorite", payload: { uid: item.uid, type } });

} else {
    dispatch({
        type: "add_favorite",
        payload: {}
    })
}