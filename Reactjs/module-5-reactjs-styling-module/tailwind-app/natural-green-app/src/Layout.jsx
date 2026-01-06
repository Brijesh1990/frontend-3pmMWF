import React,{useState} from 'react'
import { FaSearch,FaShoppingCart,FaBars,FaTimes,FaPlayCircle,FaStar } from 'react-icons/fa'
import logo from '../src/assets/images/Glass-bg/logo.png'
import flower from '../src/assets/images/Plant/1.png'
import client from '../src/assets/images/Glass-bg/logo.png'
export default function Layout() {
const [open, setOpen] = useState(false);
return (
<>
{/* header */}
<header className="text-white shadow-2xl top-0 sticky bg-green-900 z-10">
<div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

{/* Logo */}
<div className="flex items-center gap-3 text-2xl font-bold">
<img src={logo} alt="Planto Logo" className="w-10 h-10" />
<span>Planto</span>
</div>
<nav className="hidden lg:flex">

<ul className="flex gap-4 text-lg">
<li>
<a href="#" className="block hover:text-yellow-300">Home</a>
</li>

{/* Dropdown */}
<li className="relative group">
<button className="flex items-center gap-2 hover:text-yellow-300">
Plant Type
<span className="text-sm">▾</span>
</button>

<ul className="absolute left-0 mt-2 w-40 rounded-md  text-base shadow-lg 
opacity-0 invisible group-hover:opacity-100 group-hover:visible 
transition-all duration-200">
<li>
<a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300">
Indoor Plants
</a>
</li>
<li>
<a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300">
Outdoor Plants
</a>
</li>
<li>
<a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300">
Succulents
</a>
</li>
</ul>
</li>

<li>
<a href="#" className="block hover:text-yellow-300">More</a>
</li>
<li>
<a href="#" className="block hover:text-yellow-300">Contact</a>
</li>
</ul>
</nav>
{/* Icons */}
<div className="hidden lg:flex items-center gap-6 text-xl">
<FaSearch className="cursor-pointer hover:text-yellow-300" />
<FaShoppingCart className="cursor-pointer hover:text-yellow-300" />
</div>

{/* Mobile Toggle Button */}
<button
className="lg:hidden text-2xl"
onClick={() => setOpen(!open)}
>
{open ? <FaTimes /> : <FaBars />}
</button>
</div>

{/* Mobile Menu */}
{open && (
<div className="lg:hidden px-5 py-4">

<ul className="flex flex-col gap-4 text-lg">
<li>
<a href="#" className="block hover:text-yellow-300">Home</a>
</li>

{/* Dropdown */}
<li className="relative group">
<button className="flex items-center gap-2 hover:text-yellow-300">
Plant Type
<span className="text-sm">▾</span>
</button>

<ul className="absolute left-0 mt-2 w-40 rounded-md bg-gray-800 text-base shadow-lg 
opacity-0 invisible group-hover:opacity-100 group-hover:visible 
transition-all duration-200">
<li>
<a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300">
Indoor Plants
</a>
</li>
<li>
<a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300">
Outdoor Plants
</a>
</li>
<li>
<a href="#" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300">
Succulents
</a>
</li>
</ul>
</li>

<li>
<a href="#" className="block hover:text-yellow-300">More</a>
</li>
<li>
<a href="#" className="block hover:text-yellow-300">Contact</a>
</li>
</ul>
<div className="flex gap-6 mt-4 text-xl">
<FaSearch className="cursor-pointer" />
<FaShoppingCart className="cursor-pointer" />
</div>
</div>
)}
</header>

{/* naturals banners created  */}
<section
id="natural-banner"
className="text-white px-6 py-16 md:px-12 lg:px-20"
>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto w-full items-center">

{/* Left Content */}
<div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
Breathe Naturals
</h1>

{/* Buttons */}
<div className="flex flex-wrap justify-center md:justify-start gap-4">
<button className="border-2 border-white rounded-xl px-6 py-2 hover:bg-white hover:text-green-900 transition">
Explore
</button>

<button className="border-2 border-white rounded-xl px-6 py-2 flex items-center gap-2 hover:bg-white hover:text-green-900 transition">
<FaPlayCircle className="text-xl" />
Play
</button>
</div>

{/* Testimonial Card */}
<div className="bg-green-950 rounded-3xl p-6 sm:p-8 max-w-sm shadow-xl text-left">
<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
<img
src={client}
alt="client"
className="w-20 h-20 rounded-full shadow border-2 p-2"
/>

<div>
<b className="text-lg block">
Alen Patel
</b>
<div className="text-yellow-500">
<FaStar className="inline" />
<FaStar className="inline" />
<FaStar className="inline" />
<FaStar className="inline" />
<FaStar className="inline" />
</div>
</div>
</div>

<p className="mt-4 text-sm sm:text-base">
Survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged.
</p>
</div>
</div>

{/* Right Card */}
<div className="flex justify-center md:justify-end">
<div className="bg-green-950 rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-xl text-center md:text-left">
<img
src={flower}
alt="Calathea plant"
className="w-full h-auto object-contain -mt-20 mb-4 mx-auto"
/>

<p className="text-xl font-semibold">
Trendy House Plant
</p>
<h2 className="text-2xl font-bold mt-1">
Calathea Plant
</h2>

<button className="border-2 border-white rounded-xl px-6 py-2 mt-6 hover:bg-white hover:text-green-900 transition">
Buy Now
</button>
</div>
</div>

</div>
</section>


{/* content create here */}
<section className="w-full px-4 md:px-12 lg:px-20 space-y-20">

  {/* TRENDY PLANTS */}
  <div className="bg-green-950 rounded-3xl border border-white p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10">
    
    <div className="w-full lg:w-1/2 text-white space-y-4">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
        For Small Desk AI Plant
      </h1>
      <p className="text-sm sm:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="flex gap-4 flex-wrap">
        <button className="border-2 border-white rounded-xl px-6 py-2 hover:bg-white hover:text-green-900 transition">
          Explore
        </button>
        <button className="border-2 border-white rounded-xl px-4 py-2 hover:bg-white hover:text-green-900 transition">
          <FaShoppingCart />
        </button>
      </div>
    </div>

    <div className="w-full lg:w-1/2 flex justify-center">
      <img src={flower} alt="plant" className="max-w-xs sm:max-w-sm" />
    </div>
  </div>

  {/* TOP SELLING */}
  <div className="space-y-10">
    <h1 className="text-white text-center text-3xl sm:text-5xl font-bold">
      Our Top Selling
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-green-950 rounded-3xl p-6 text-white space-y-4">
          <img src={flower} alt="plant" className="w-full object-contain" />
          <h2 className="text-xl font-bold">Small Desk AI Plant</h2>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">Rs. 450/-</span>
            <button className="border border-white rounded-xl px-4 py-2 hover:bg-white hover:text-green-900 transition">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* CUSTOMER REVIEWS */}
  <div className="space-y-10 text-white">
    <h1 className="text-center text-3xl sm:text-5xl font-bold">
      Customer Reviews
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-green-950 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-4">
            <img src={client} alt="client" className="w-16 h-16 rounded-full border p-1" />
            <div>
              <p className="font-semibold">Alen Patel</p>
              <div className="text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="inline" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm">
            Survived not only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* OUR BEST */}
  <div className="bg-green-950 rounded-3xl border border-white p-6 md:p-10 flex flex-col lg:flex-row items-center gap-10">
    <div className="w-full lg:w-1/2 flex justify-center">
      <img src={flower} alt="best plant" className="max-w-xs sm:max-w-sm" />
    </div>

    <div className="w-full lg:w-1/2 text-white space-y-4">
      <h1 className="text-2xl sm:text-4xl font-bold">
        Our Best AI Plant
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="flex gap-4 flex-wrap">
        <button className="border-2 border-white rounded-xl px-6 py-2 hover:bg-white hover:text-green-900 transition">
          Explore
        </button>
        <button className="border-2 border-white rounded-xl px-4 py-2 hover:bg-white hover:text-green-900 transition">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  </div>

{/* contact us section */}


<div className="bg-green-950 rounded-3xl border border-white p-6 md:p-10 mt-16 text-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
    Contact Us
  </h2>

  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left: Contact Info + Map */}
    <div className="w-full lg:w-1/2 space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">Our Address</h3>
        <p>
          Green AI Plants 🌱 <br />
          123 Eco Street <br />
          Silicon Valley, CA 94043 <br />
          United States
        </p>
        <p className="mt-3">
          📞 +1 (123) 456-7890 <br />
          ✉️ contact@aiplants.com
        </p>
      </div>

      {/* Google Map */}
      <div className="w-full h-64 rounded-xl overflow-hidden border border-white">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Silicon%20Valley&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>

    {/* Right: Contact Form */}
    <div className="w-full lg:w-1/2">
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-xl bg-white text-green-900 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-xl bg-white text-green-900 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full px-4 py-2 bg-white rounded-xl text-green-900 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="border-2 border-white  rounded-xl px-6 py-2 hover:bg-white hover:text-green-900 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>


{/* our teams */}


<div className="bg-green-950 rounded-3xl border border-white p-6 md:p-10 mt-16 text-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
    Our Team
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Team Member 1 */}
    <div className="bg-green-900 rounded-2xl p-5 text-center hover:scale-105 transition">
      <img
        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
        alt="Team member"
        className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-white"
      />
      <h3 className="text-xl font-semibold mt-4">Alex Green</h3>
      <p className="text-sm text-green-200">AI Botanist</p>
      <p className="text-sm mt-3">
        Expert in AI-powered plant growth and sustainability.
      </p>
    </div>

    {/* Team Member 2 */}
    <div className="bg-green-900 rounded-2xl p-5 text-center hover:scale-105 transition">
      <img
        src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
        alt="Team member"
        className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-white"
      />
      <h3 className="text-xl font-semibold mt-4">Sophia Leaf</h3>
      <p className="text-sm text-green-200">Plant Scientist</p>
      <p className="text-sm mt-3">
        Researching eco-friendly plant genetics using AI.
      </p>
    </div>

    {/* Team Member 3 */}
    <div className="bg-green-900 rounded-2xl p-5 text-center hover:scale-105 transition">
      <img
        src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
        alt="Team member"
        className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-white"
      />
      <h3 className="text-xl font-semibold mt-4">Daniel Root</h3>
      <p className="text-sm text-green-200">AI Engineer</p>
      <p className="text-sm mt-3">
        Building intelligent systems for smart plant care.
      </p>
    </div>

    {/* Team Member 4 */}
    <div className="bg-green-900 rounded-2xl p-5 text-center hover:scale-105 transition">
      <img
        src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
        alt="Team member"
        className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-white"
      />
      <h3 className="text-xl font-semibold mt-4">Emma Bloom</h3>
      <p className="text-sm text-green-200">UX Designer</p>
      <p className="text-sm mt-3">
        Designing intuitive experiences for plant lovers.
      </p>
    </div>

  </div>
</div>


<div className="bg-green-950 rounded-3xl border border-white p-6 md:p-10 mt-16 text-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
    What Our Clients Say
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Testimonial 1 */}
    <div className="bg-green-900 rounded-2xl p-6 hover:scale-105 transition">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
          alt="Client"
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h3 className="font-semibold">Michael Green</h3>
          <p className="text-sm text-green-200">Urban Gardener</p>
        </div>
      </div>

      <p className="text-sm mb-4">
        “The AI plant recommendations transformed my home garden. Easy to use
        and incredibly accurate!”
      </p>

      <div className="flex text-yellow-400">
        ★★★★★
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-green-900 rounded-2xl p-6 hover:scale-105 transition">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
          alt="Client"
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h3 className="font-semibold">Sarah Bloom</h3>
          <p className="text-sm text-green-200">Interior Designer</p>
        </div>
      </div>

      <p className="text-sm mb-4">
        “Beautiful plants with smart care tips. My clients love the results
        every time.”
      </p>

      <div className="flex text-yellow-400">
        ★★★★★
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-green-900 rounded-2xl p-6 hover:scale-105 transition">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
          alt="Client"
          className="w-14 h-14 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h3 className="font-semibold">Daniel Roots</h3>
          <p className="text-sm text-green-200">Plant Shop Owner</p>
        </div>
      </div>

      <p className="text-sm mb-4">
        “AI Plants helped scale my business with healthier plants and happier
        customers.”
      </p>

      <div className="flex text-yellow-400">
        ★★★★☆
      </div>
    </div>

  </div>
</div>


</section>

{/* footer  */}

<footer className="bg-green-950 text-white mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-16">

    {/* Footer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* LOGO & DESCRIPTION */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-bold">GreenPlant</h2>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          Bringing nature to your desk with smart AI plants.
          Fresh, modern, and eco-friendly solutions for your home and office.
        </p>
      </div>

      {/* QUICK LINKS */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Quick Links</h3>
        <ul className="space-y-2 text-gray-300">
          <li>
            <a href="#" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Best Selling
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Reviews
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* SUBSCRIBE */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Subscribe</h3>
        <p className="text-sm text-gray-300">
          Subscribe to get latest updates and offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl text-white outline-none focus:ring-2 focus:ring-green-500 border-1"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 transition px-6 py-3 rounded-xl font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-green-800 mt-12 pt-6 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} GreenPlant. All rights reserved.
    </div>

  </div>
</footer>

</>
)
}
