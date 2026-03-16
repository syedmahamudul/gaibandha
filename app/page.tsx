import { HeroBanner } from "./layouts/HeroBanner"
import { ServiceCard } from "./layouts/ServiceCard"

export default function Home() {
  const services = [
    { title: 'Education', description: 'All schools and colleges info', icon: '🎓' },
    { title: 'Healthcare', description: 'Hospitals, clinics, and health programs', icon: '🏥' },
    { title: 'Tourism', description: 'Rivers, parks, and landmarks', icon: '🌴' },
    { title: 'Agriculture', description: 'Farming and local produce info', icon: '🌾' },
  ]

  return (
    <div>
      <HeroBanner />
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-700 mt-4">Explore services offered in Gaibandha district</p>
        </div>
        <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </section>
    </div>
  )
}