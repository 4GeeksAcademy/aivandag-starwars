import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container">
		<div className="text-center mt-5">
		<h2>Chacters</h2>
		</div>
		</div>
	);
}; 