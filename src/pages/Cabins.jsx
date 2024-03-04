import React from 'react'
import Row from './../ui/Row'
import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
import CabinTableOperations from '../features/cabins/CabinTableOperations'

const Cabins = () => {
  return (
    <>
     <Row type="horizontal" >
      <Heading>All Cabins</Heading> 
      <CabinTableOperations/>
      </Row>
    <CabinTable/>
    </>
   
  )
}

export default Cabins