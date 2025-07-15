import React from 'react'
type propsType = {
  name: string;
}


export default function Testing({name}: propsType) {


  return (
    <div>
      <h1>`{name}</h1>
    </div>
  )
}
