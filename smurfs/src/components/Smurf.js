import React from 'react'
import './Smurf.css'

const Smurf = ({ smurfs }) => {
  return (
    <ul className='smurfs-list'>
      {smurfs.map((smurf, i) => {
        return <li key={i}>
          {smurf.name}
        </li>
      })}
    </ul>
  )
}

export default Smurf
