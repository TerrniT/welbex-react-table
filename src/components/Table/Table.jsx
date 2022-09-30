import React from "react";
import './Table.css'

export default function Table( { data } ) {
  return ( <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th className="table__category">
            Date
          </th>
          <th className="table__category">
            Name 
          </th>
          <th className="table__category">
            Count 
          </th>
          <th className="table__category">
            Distance 
          </th>
        </tr>
      </thead>
      <tbody className="table__body">
        {data.map((user, i) =>  (
          <tr className="table__row" key={i}>
            <td className="table__cell">{user.date}</td>
            <td className="table__cell">{user.name}</td>
            <td className="table__cell">{user.points}</td>
            <td className="table__cell">{user.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
