import { FaCalendarAlt } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import Button from './Button'
import logoBulle from "../assets/img/logo_Bulle.png";
import click from "../assets/img/Un_Ptit_Click.png";

function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl mx-auto text-center">
                {/* Top Badge */}
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 mb-16 shadow-2xl">
                    <img src={logoBulle} alt="Logo Bulle" className="w-8 h-8"/>
                    <h2 className="text-black text-xl md:text-2xl font-bold tracking-tight">
                        CRÉER UN SITE WEB <span className="underline decoration-4 underline-offset-4">VRAIMENT</span> UNIQUE
                    </h2>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                    <span className="text-white">Votre </span>
                    <span className="text-mint">site</span>
                    <span className="text-white"> doit </span>
                    <span className="text-mint">donner envie</span>
                    <span className="text-white"> de</span>
                    <br />
                    <span className="text-mint">rester</span>
                    <span className="text-white">, pas de </span>
                    <span className="text-white line-through decoration-dark decoration-8">revenir</span>
                    <span className="text-white line-through decoration-dark decoration-8"> en</span>
                    <br />
                    <span className="text-mint line-through decoration-dark decoration-8">arrière</span>
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
                            icon={<FaCalendarAlt />}
                        >
                            Prendre RDV
                        </Button>
                        {/* Hand-drawn arrow and text */}
                        <div className="absolute -bottom-18 -left-8 flex items-center gap-2">
                            <img src={click} alt="Un ptit click?"/>
                        </div>
                    </div>

                    <Button
                        variant="secondary"
                    >
                        Découvrir nos projets
                        <HiArrowDown />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero