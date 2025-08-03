import { object } from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage({ type }) {
    const { uid } = useParams();
    const [data, setdata] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${uid}`)
            .then((res) => res.json())
                .then((res) => setdata(res.result))
                .catch((err) => console.error("Error loading details", err));
    }, [type, uid]);

    if (!data) return <div className="container text-center mt-5"> Loading...</div>;
    const { properties } = data;

    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/${type}/${uid}.jpg`}
                        className="img-fluid rounded"
                        // onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; }}
                    />
                </div>
                <div
                    className="col-md-6"
                >
                    <h2>{properties.name}</h2>
                    <p className="text-muted">
                        {properties.description || "Descripcion no disponible"}
                    </p>
                </div>
            </div>

            <hr className="my-4" />
            <div className="row text-center text-danger fw-semibold fs-6">
                {Object.entries(properties).filter(([key, _]) => ['name', 'birth_year', 'gender', 'height', 'skin_color', 'terrain', 'population', 'model', 'manufacturer', 'cost_in_credits'].includes(key))
                    .map(([key, value]) => (
                        <div key={key} className="col-6 col-md-2 mb-3">
                            <div>{key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}</div>
                            <div className="text-dark">{value}</div>
                        </div>
                    ))}

            </div>
        </div>
    );
}


