import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'

function CalendlyPage() {
    const navigate = useNavigate()

    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            // Cleanup script when component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-mint hover:text-mint/80 transition-colors mb-8 text-lg font-semibold"
                >
                    <HiArrowLeft className="text-2xl" />
                    Retour à l'accueil
                </button>

                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-8">
                    Prenons <span className="text-mint">rendez-vous</span>
                </h1>
                <p className="text-gray-300 text-center text-lg mb-8 max-w-2xl mx-auto">
                    Choisissez un créneau qui vous convient pour discuter de votre projet
                </p>

                {/* Calendly Widget */}
                <div className="bg-[#1a1a1a] rounded-2xl p-4 shadow-2xl">
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/sampilahy-heriniavo?background_color=1a1a1a&text_color=ffffff&primary_color=5fffc1"
                        style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default CalendlyPage