import CartDetails from '@/components/CartDetails'
import InnerpageHeader from '@/components/InnerpageHeader'
import { cartdata } from '@/data/cartdata'
import React from 'react'

const page = () => {
  return (
    <div className='cart'>
      <InnerpageHeader pageTitle={"Shopping Cart"} breadcrums={"Account"} />
      <CartDetails cartdata={cartdata}/>
    </div>
  )
}

export default page
