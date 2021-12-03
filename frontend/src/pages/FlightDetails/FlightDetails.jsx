import React from 'react'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router-dom';


export default function FlightDetails() {

    const location = useLocation();
    const navigate = useNavigate();

    let departureFlights = [...location.state.depFlights]
    let returnFlights = [...location.state.retFlights]
    let cabinClass = location.state.cabin

    return (

        <>
            <button onClick={() => { navigate("/home/search", { state: { departureFlights, returnFlights, cabinClass} }); }} type="submit" className='btn btn-primary mt-4 mb-4 py-2 px-5 rounded-pill'>Back</button>

            <div className="w-25 m-auto">
                <h4 className="my-4 border border-2 border-secondary rounded-pill py-2">Flight Details</h4>
            </div>
            <table className="table table-hover border border-1 border-secondary table-bordered text-center w-75 m-auto py-3 my-4">
                <thead>
                    <th>Flight No</th>
                    <th>Departure Airport</th>
                    <th>Arrival Airport</th>
                    <th>Departure Date</th>
                    <th>Departure Terminal</th>
                    <th>Arrival Terminal</th>
                    <th>Economy Price</th>
                    <th>Business Price</th>
                    <th>Baggage Allowance</th>
                    <th>Cabin Class</th>
                </thead>

                <tbody>

                    <tr >
                        <td >{location.state.flight.flightNo}</td>
                        <td >{location.state.flight.departureAirport}</td>
                        <td >{location.state.flight.arrivalAirport}</td>
                        <td >{location.state.flight.departureDate}</td>
                        <td >{location.state.flight.departureTerminal}</td>
                        <td >{location.state.flight.arrivalTerminal}</td>
                        <td >{location.state.flight.economyPrice}</td>
                        <td >{location.state.flight.businessPrice}</td>
                        <td >{location.state.flight.baggageAllowance}</td>
                        <td >{location.state.cabin}</td>
                    </tr>

                </tbody>

            </table>

        </>

    )
}
