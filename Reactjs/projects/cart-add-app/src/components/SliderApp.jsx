import { useEffect, useState , useRef} from "react";

export default function SliderApp() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Big Sale",
      subtitle: "Weekly Super Discounts",
      bg: "bg-green-200",
      badge: "Up to 30% Off",
    },
    {
      title: "Organic Fruits",
      subtitle: "Fresh & Healthy",
      bg: "bg-orange-200",
      badge: "Fresh Deals",
    },
    {
      title: "Fresh Vegetables",
      subtitle: "Farm to Home",
      bg: "bg-yellow-200",
      badge: "Limited Offer",
    },
  ];

  const totalSlides = slides.length;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

return (

<div className="max-w-6xl mx-auto px-4 py-10">
      <div className="relative overflow-hidden rounded-2xl">

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full">
              <div
                className={`h-[260px] md:h-[340px] ${slide.bg}
                            flex items-center justify-center text-center p-6`}
              >
                <div>
                  <span className="inline-block bg-black/70 text-white text-sm px-4 py-1 rounded-full mb-4">
                    {slide.badge}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="mt-2">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setIndex((index - 1 + totalSlides) % totalSlides)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={() => setIndex((index + 1) % totalSlides)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition
                ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
