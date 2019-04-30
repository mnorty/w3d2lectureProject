import React from 'react'

// const SelectedColor = (props) => (
//   <div className="picked-color" style={{background:props.color}}>{props.color}</div>
// )
const SelectedColor = ({color}) => (
  <div className="picked-color" style={{background:color}}>{color}</div>
)

export default SelectedColor