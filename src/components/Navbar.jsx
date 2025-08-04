import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import logo from "../assets/img/logo_starwars.png"

export default function Navbar() {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const favCount = store.favorites.length;

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
			<div className="container d-flex justify-content-between align-items-center">
				<Link to="/" className="navbar-brand d-flex align-items-center">
					<img
						src={logo}
						width="45"
						height="30"
						className="d-inline-block align-top me-2"
					/>
					{/* StarWars Blog */}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					{/* Menú principal */}
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{/* <li className="nav-item">
							<Link to="/" className="nav-link">People</Link>
						</li>
						<li className="nav-item">
							<Link to="/planets" className="nav-link">Planets</Link>
						</li>
						<li className="nav-item">
							<Link to="/vehicles" className="nav-link">Vehicles</Link>
						</li> */}
					</ul>

					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="favoritesDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Favorites <span className="badge bg-info">{favCount}</span>
							</a>
							<ul
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="favoritesDropdown"
							>
								{favCount === 0 ? (
									<li>
										<span className="dropdown-item-text">No favorites</span>
									</li>
								) : (
									store.favorites.map((fav, i) => (
										<li
											key={i}
											className="d-flex justify-content-between align-items-center px-3"
										>
											<Link
												to={`/${fav.type}/${fav.uid}`}
												className="dropdown-item"
											>
												{fav.properties?.name ?? fav.name}
											</Link>
											<button
												className="btn btn-sm btn-outline-danger ms-2"
												onClick={() =>
													dispatch({
														type: "REMOVE_FAVORITE",
														payload: fav.uid,
													})
												}
											>
												🗑️
											</button>
										</li>
									))
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}






















// export const Navbar = () => {

// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 				</Link>
// 				<div className="ml-auto">
// 					<Link to="/demo">
// 						<button className="btn btn-primary">Check the Context in action</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };