import { notFound } from 'next/navigation'

// Define allowed Upozila keys as a type directly
type UpozilaKey = 'fulchhari' | 'sundarganj' | 'palashbari' | 'gaibandha_sadar'

// Map keys to descriptions
const upozilas: Record<UpozilaKey, string> = {
  fulchhari: 'Fulchhari is a scenic upazila with rivers and greenery.',
  sundarganj: 'Sundarganj is known for agriculture and markets.',
  palashbari: 'Palashbari has historical sites and local culture.',
  gaibandha_sadar: 'Gaibandha Sadar is the main administrative center.',
}

interface PageProps {
  params: { slug: string }
}

export default function UpozilaPage({ params }: PageProps) {
  // Assert that the slug is one of the valid keys
  const key = params.slug as UpozilaKey

  // If invalid slug, show 404
  const content = upozilas[key]
  if (!content) return notFound()

  return (
    <section className="py-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">
        {key.replace('_', ' ').toUpperCase()}
      </h1>
      <p className="text-gray-700 text-lg">{content}</p>
    </section>
  )
}