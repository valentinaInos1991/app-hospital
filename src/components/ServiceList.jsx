import React from "react";

const ServiceList=({servicios}) => {
    return (
        <div className="service-list">
            <h2>Servicios Médicos</h2>
            <ul>
                {servicios.map((servicios, index) => (
                    <li key={index}>{servicios}</li>
                ))}
            </ul>
        </div>
    )
}

export default ServiceList;