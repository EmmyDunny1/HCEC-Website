import React from 'react'
type propsType = {
  name: string;
}


export default function Testing({name}: propsType) {


  return (
    <div>
      <p>My name is: {name}</p>
      <p>I am : {name}</p>
      <p>My name is: {name}</p>
    </div>
  )
}
