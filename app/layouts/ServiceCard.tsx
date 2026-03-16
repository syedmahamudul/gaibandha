interface ServiceProps {
  title: string
  description: string
  icon?: string
}

export function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}