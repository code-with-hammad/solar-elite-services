import { MessageCircle } from 'lucide-react'

const WA_BASE = 'https://wa.me/923027635720?text='
const WA_MSG = encodeURIComponent("Hi, I'm interested in a solar/fabrication quote from Solar Elite Services.")

export function WhatsAppButton() {
  return (
    <a
      href={`${WA_BASE}${WA_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg animate-whatsapp hover:scale-110 transition-transform"
      style={{ background: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
    </a>
  )
}
