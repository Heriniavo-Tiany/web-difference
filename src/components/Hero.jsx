import { BsCalendar3, BsSearch } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'
import Button from './Button'

function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto text-center">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 mb-16 shadow-2xl">
                    <BsSearch className="text-mint text-3xl" />
                    <h2 className="text-black text-xl md:text-2xl font-bold tracking-tight">
                        CRÉER UN SITE WEB <span className="underline decoration-4 underline-offset-4">VRAIMENT</span> UNIQUE
                    </h2>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
                    <span className="text-white">Votre </span>
                    <span className="text-mint">site</span>
                    <span className="text-white"> doit </span>
                    <span className="text-mint">donner envie</span>
                    <span className="text-white"> de</span>
                    <br />
                    <span className="text-mint">rester</span>
                    <span className="text-white">, pas de </span>
                    <span className="text-white line-through decoration-mint decoration-4">revenir</span>
                    <span className="text-white"> en</span>
                    <br />
                    <span className="text-mint line-through decoration-white decoration-4">arrière</span>
                    <span className="text-white">.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-medium">
                    Design moderne, SEO solide, Suivi complet :
                </p>
                <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-4xl mx-auto">
                    on construit un site qui retient vos visiteurs et vous apporte des résultats.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                    <div className="relative">
                        <Button
                            variant="primary"
                            icon={<BsCalendar3 />}
                        >
                            Prendre RDV
                        </Button>
                        {/* Hand-drawn arrow and text */}
                        <div className="absolute -bottom-16 left-0 flex items-center gap-2">
                            <svg
                                className="w-24 h-16 text-white"
                                viewBox="0 0 100 60"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <path d="M 10 10 Q 20 30, 40 35 T 70 45" />
                                <path d="M 60 38 L 70 45 L 65 52" />
                            </svg>
                            <span className="text-white font-handwriting text-xl" style={{ fontFamily: 'cursive' }}>
                Un p'tit click ?
              </span>
                        </div>
                    </div>

                    <Button
                        variant="secondary"
                        icon={<HiArrowDown />}
                    >
                        Découvrir nos projets
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero