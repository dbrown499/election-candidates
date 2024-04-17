import React from 'react'
// import Card from "./components/Card.jsx";
import "./List.css"

const List = () => {
  const candidateNames = [
    "William Cotter", "Patrick Denman", "George Devolder-Santos", "Ryan Kalata",
    "John Avlon", "Saint Jermaine Endeley", "Nancy Goroff", "Nicholas J. LaLota",
    "Rob Lubin", "Andrew Garbarino", "Daniel Goldman", "Yvette D. Clarke",
    "Nicole Malliotakis", "Alexandria Ocasio-Cortez", "Jerrold Nadler",
    "Tom Suozzi", "Grace Meng", "Hakeem Jeffries", "Ritchie Torres",
    "Jamaal Bowman", "Mondaire Jones", "Lee Zeldin", "Kathleen Rice",
    "Paul Tonko", "Elise Stefanik", "Mike Lawler", "Antonio Delgado",
    "Sean Patrick Maloney", "Chris Jacobs", "Joe Morelle"
  ];

  const oneCanidate = candidateNames.sort();
  const eachCanidate = candidateNames.map((candid) => {
    return (
      <div className='one-person'>
        <img className="img-person" src="src/assets/person.jpg" alt="" />
        <p>{candid}</p>
      </div>
    )
  })

  return (
    <>{eachCanidate}</>
  )
}

export default List