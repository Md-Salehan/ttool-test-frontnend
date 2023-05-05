import React from 'react'
import './glossaryTable.css'

function glossaryTable({glossaryArr}) {
  return (
      <table>
        <thead>
          <tr>
            <th className='term'>Term</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            glossaryArr.map((item, index)=>(
              <tr key={item._id}>
                <td className='term'>{item.term}</td>
                <td>{item.desc}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
  )
}

export default glossaryTable 