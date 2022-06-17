import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'

const CollectionsTable = () => {
  return (
    <div className='collectionsTable'>
      <table>
        <thead>
          <tr>
            <th colspan="3">
              <h1>Top 10 Collections</h1>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>
              <h3>Collection</h3>
            </td>
            <td>
              <h3>Sales floor</h3>
            </td>
            <td>
              <h3>Sales</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SingleCollection />
            </td>
            <td>
              <SalesFloor />
            </td>
            <td>
              <Sales />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CollectionsTable