export function HeroBanner() {
  return (
    <section className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: "url('/images/gaibandha.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fadeIn">
          Welcome to Gaibandha District
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fadeIn delay-500">
          Explore culture, history, tourism, and development
        </p>
        <a href="#services" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
          Explore Now
        </a>
      </div>
    </section>
  )
}