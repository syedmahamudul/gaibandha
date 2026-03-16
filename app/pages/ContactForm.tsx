'use client'
import { useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${name}. We received your message.`)
  }

  return (
    <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input type="text" placeholder="Name" className="w-full p-3 mb-4 border rounded" value={name} onChange={e => setName(e.target.value)} required/>
      <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" value={email} onChange={e => setEmail(e.target.value)} required/>
      <textarea placeholder="Message" className="w-full p-3 mb-4 border rounded" value={message} onChange={e => setMessage(e.target.value)} required/>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">Send Message</button>
    </form>
  )
}