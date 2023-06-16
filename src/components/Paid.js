import React from 'react'
import Header from './Header'
import ListOrder from './ListOrder'

const Paid = () => {
  return (
    <div>
    <Header showIcon="true" />
    <div className="main">
      <div className="container">
      <ListOrder/>
      </div>
    </div></div>
  )
}

export default Paid