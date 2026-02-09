import React from 'react'
import HeaderApp from './components/HeaderApp'
import SearchApp from './components/SearchApp'
import SliderApp from './components/SliderApp'
import ContentApp from './components/ContentApp'
import Footer from './components/FooterApp'
export default function Layout() {
  return (
    
    <>
        <HeaderApp />   
        <SearchApp />
        <SliderApp />
        <ContentApp />
        <Footer />     
    </>
  )
}
