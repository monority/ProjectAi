import React from 'react'
import Header from './Header';

const NotFound = () => {
  return (


    <div className="notFound">
      <Header
      showIcon="true"
      />
      <div className="wrapper">
        <div>4</div><img src={`${process.env.PUBLIC_URL}/pizzaicon.png`} alt="" /><div>4</div>
        <div>not found</div>
      </div>
    </div>
  )
}

export default NotFound;