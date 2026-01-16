import React from 'react'

export default function Slider() {
  return (
   <section className="container p-0 mt-3  mx-auto">
  <div
    id="myShopSlider"
    className="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myShopSlider"
        data-bs-slide-to={0}
        className="active"
      />
      <button
        type="button"
        data-bs-target="#myShopSlider"
        data-bs-slide-to={1}
      />
      <button
        type="button"
        data-bs-target="#myShopSlider"
        data-bs-slide-to={2}
      />
    </div>
    {/* Slides */}
    <div className="carousel-inner">
      {/* Slide 1 */}
      <div className="carousel-item active">
        <img
          src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?semt=ais_hybrid&w=740&q=80"
          className="d-block w-100 slider-img"
          alt="Sale"
        />
        <div className="carousel-caption text-start">
          <h1>Big Sale</h1>
          <p>Up to 50% off on latest products</p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="carousel-item">
        <img
          src="https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg"
          className="d-block w-100 slider-img"
          alt="New Arrivals"
        />
        <div className="carousel-caption">
          <h1>New Arrivals</h1>
          <p>Discover trending collections</p>
          <a href="#" className="btn btn-warning">
            Explore
          </a>
        </div>
      </div>
      {/* Slide 3 */}
      <div className="carousel-item">
        <img
          src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg"
          className="d-block w-100 slider-img"
          alt="Fast Delivery"
        />
        <div className="carousel-caption text-end">
          <h1>Fast Delivery</h1>
          <p>Get your order delivered quickly</p>
          <a href="#" className="btn btn-success">
            Order Now
          </a>
        </div>
      </div>
    </div>
    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#myShopSlider"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#myShopSlider"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </div>
</section>

  )
}
