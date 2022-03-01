import React from 'react'

const Total = ({parts}) => {
  const initialValue = 0;
  const result = parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, initialValue)

  return (
    <div>
    <p>Number of exercises {result}</p>
    </div>
  )
}

export default Total