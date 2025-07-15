import React from 'react'
type propsType = {
  name: string;
}


export default function Testing({name}: propsType) {


  return (
    <div>
      <h1>My name is: {name}</h1>
    </div>
  )
}
