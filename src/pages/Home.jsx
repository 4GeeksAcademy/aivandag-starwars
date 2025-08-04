import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import React from "react";
import Card from "../components/Card"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	// const { store, dispatch } = useGlobalReducer()
	const { store } = useGlobalReducer()

	return (
		<div className="container">
			<div className="text-center mt-5">
				<h2 className="text-start text-danger">Characters</h2>
			</div>
			<div className="d-flex overflow-auto gap-3 pb-3">
				{store.people.map((p) => (
					<div key={p.uid} className="col-md-4 mb-3">
						<Card item={p} type="people" />
					</div>
				))}
			</div>

			<div className="text-center mt-5">
				<h2 className="text-start text-danger">Planets</h2>
			</div>
			<div className="d-flex overflow-auto gap-3">
				{store.planets.map((pl) => (
					<div key={pl.uid} className="col-md-4 flex-shrink-0">
						<Card item={pl} type="planets" />
					</div>
				))}
			</div>

			<div className="text-center mt-5">
				<h2 className="text-start text-danger">Vehicles</h2>
			</div>
			<div className="d-flex overflow-auto gap-3 pb-3">
				{store.vehicles.map((v) => (
					<div key={v.uid} className="col-md-4 mb-3">
						<Card item={v} type="vehicles" />
					</div>
				))}
			</div>
		</div>
	);
}; 



