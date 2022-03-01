import React from 'react'

const Part = ({parts}) => {
  return (
    <div>

        {parts.map((item,index) => (
            <p key={index}>{item.part} {item.exercises}</p>
        ))}
   
    </div>
  )
}

export default Part