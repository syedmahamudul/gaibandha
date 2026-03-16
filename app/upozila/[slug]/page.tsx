import { notFound } from 'next/navigation'

const upozilas = {
  fulchhari: 'Fulchhari is a scenic upazila with rivers and greenery.',
  sundarganj: 'Sundarganj is known for agriculture and markets.',
  palashbari: 'Palashbari has historical sites and local culture.',
  gaibandha_sadar: 'Gaibandha Sadar is the main administrative center.',
}

interface PageProps {
  params: { slug: string }
}

export default function UpozilaPage({ params }: PageProps) {
  const content = upozilas[params.slug]
  if (!content) return notFound()

  return (
    <section className="py-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">{params.slug.replace('_', ' ').toUpperCase()}</h1>
      <p className="text-gray-700 text-lg">{content}</p>
    </section>
  )
}