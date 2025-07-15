import React from 'react'
type propsType = {
  myName: string;
}


export default function Testing(props: propsType) {


  return (
    <div>
      <h1>{myName}</h1>
    </div>
  )
}
