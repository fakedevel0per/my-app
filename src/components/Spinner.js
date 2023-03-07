import React from 'react'
import loadingLight from './Spinner-Light.gif'
import loadingDark from './Spinner-Dark.gif'
const Spinner = (props) => {
  return (
    <div className="text-center">
      <img src={`${props.mode==='light'?loadingLight:loadingDark}`} alt="loading" className="my-3" />
    </div>
  )

}

export default Spinner
