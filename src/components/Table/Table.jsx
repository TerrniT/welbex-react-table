import React from "react";
import './Table.css'

export default function Table(params) {
  return (
    <table className="table">
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
        <tr className="table__row">
          <td className="table__cel"></td>
          <td className="table__cel"></td>
          <td className="table__cel"></td>
          <td className="table__cel"></td>
        </tr>
      </tbody>
    </table>
  )
}
