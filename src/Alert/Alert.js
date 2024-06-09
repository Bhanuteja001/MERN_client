import React from 'react'

import "./alert.css"

export default function Alert(props) {

  return (

    props.alert && <div className={`alert d-flex justify-content-around align-items-center alert-top-right alert-${props.alert.type} `} role="alert">
      <i className="bi bi-exclamation-triangle "></i>{props.alert.message}
    </div>
  )
}
