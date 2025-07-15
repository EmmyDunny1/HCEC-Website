import React from 'react'
type propsType = {
  name: string;
}


export default function Testing({name}: propsType) {


  return (
    <div>
      <>My name is: {name}</>
    </div>
  )
}
