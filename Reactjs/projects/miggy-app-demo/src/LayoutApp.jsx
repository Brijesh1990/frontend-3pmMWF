import React from 'react'
import NavbarApp from './components/NavbarApp'
import BannerApp from './components/BannerApp'
import CategoryApp from './components/CategoryApp'
import ProductApp from './components/ProductApp'
import ReviewsApp from './components/ReviewsApp'
import DownloadApp from './components/DownloadApp'
import FooterApp from './components/FooterApp'
import WhatsappApp from './components/WhatsappApp'
export default function LayoutApp() {
  return (
    <div>
      <NavbarApp />
      <BannerApp />
      <CategoryApp />
      <ProductApp />
      <ReviewsApp />
      <DownloadApp />
      <FooterApp />
      <WhatsappApp />
    </div>
  )
}
