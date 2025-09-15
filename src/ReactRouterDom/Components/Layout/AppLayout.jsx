import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import WaterLoader from './WaterLoader';

function AppLayout() {

  const navigation = useNavigation();
  console.log(navigation)
  if(navigation.state==="loading")return(
    <>
    <WaterLoader/>
    </>
  )
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>

    </>
  )
}

export default AppLayout



