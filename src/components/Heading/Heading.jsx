import React from 'react'

export default function Heading(props) {
  return (
    <>
        <div>
            <h1 className="h__monument">{props.heading1}</h1>
            <h1 className="h__monument">{props.heading2}</h1>
            <p className="p__montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
            <p className="p__montserrat">eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="p__montserrat">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <p className="p__montserrat">nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </>
  )
}
