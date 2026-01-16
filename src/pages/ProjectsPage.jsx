import {useNavigate} from 'react-router-dom'
import {HiArrowLeft, HiExternalLink} from 'react-icons/hi'
import {BsArrowRight} from 'react-icons/bs'

function ProjectsPage() {
    const navigate = useNavigate()

    const projects = [
        {
            id: 1,
            title: "Luxe Immobilier",
            category: "Immobilier",
            description: "Plateforme de vente immobilière haut de gamme avec visites virtuelles 3D et système de réservation intégré.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
            tags: ["React", "Three.js", "Stripe"],
            metrics: {
                conversion: "+145%",
                traffic: "+230%",
                time: "3 mois"
            },
            link: "#"
        },
        {
            id: 2,
            title: "FitnessPro Academy",
            category: "Fitness & Bien-être",
            description: "Application web de coaching sportif avec suivi personnalisé, plans d'entraînement et intégration vidéo.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
            tags: ["Next.js", "MongoDB", "WebRTC"],
            metrics: {
                conversion: "+180%",
                traffic: "+310%",
                time: "4 mois"
            },
            link: "#"
        },
        {
            id: 3,
            title: "GastroDécouverte",
            category: "Restauration",
            description: "Site vitrine et système de réservation pour un restaurant gastronomique avec menu interactif.",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
            tags: ["Vue.js", "Node.js", "Calendar API"],
            metrics: {
                conversion: "+95%",
                traffic: "+165%",
                time: "2 mois"
            },
            link: "#"
        },
        {
            id: 4,
            title: "TechConsult Solutions",
            category: "Consulting",
            description: "Site corporate avec blog technique, système de prise de rendez-vous et espace client sécurisé.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            tags: ["React", "Tailwind", "Auth0"],
            metrics: {
                conversion: "+120%",
                traffic: "+200%",
                time: "3 mois"
            },
            link: "#"
        },
        {
            id: 5,
            title: "ÉcoMode Boutique",
            category: "E-commerce",
            description: "Boutique en ligne de mode éthique avec filtres avancés, wishlist et recommandations personnalisées.",
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
            tags: ["Shopify", "React", "AI"],
            metrics: {
                conversion: "+210%",
                traffic: "+285%",
                time: "5 mois"
            },
            link: "#"
        },
        {
            id: 6,
            title: "Atelier Créatif",
            category: "Portfolio",
            description: "Portfolio interactif pour un studio de design avec galerie dynamique et animations sur mesure.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
            tags: ["React", "GSAP", "WebGL"],
            metrics: {
                conversion: "+175%",
                traffic: "+240%",
                time: "2 mois"
            },
            link: "#"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Back button */}
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-mint hover:text-mint/80 transition-colors mb-12 text-lg font-semibold"
                >
                    <HiArrowLeft className="text-2xl"/>
                    Retour à l'accueil
                </button>

                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Nos <span className="text-mint">Projets</span>
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto">
                        Des sites web qui convertissent et captivent. Découvrez comment nous avons transformé les
                        visions de nos clients en succès digitaux.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-gradient-to-b from-[#252525] to-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-mint/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-mint/20"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
                                <div
                                    className="absolute top-4 right-4 bg-mint text-dark px-4 py-2 rounded-full font-bold text-sm">
                                    {project.category}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-mint transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-mint/10 text-mint rounded-full text-xs font-semibold border border-mint/20"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-800">
                                    <div>
                                        <div className="text-mint font-bold text-lg">{project.metrics.conversion}</div>
                                        <div className="text-gray-500 text-xs">Conversion</div>
                                    </div>
                                    <div>
                                        <div className="text-mint font-bold text-lg">{project.metrics.traffic}</div>
                                        <div className="text-gray-500 text-xs">Trafic</div>
                                    </div>
                                    <div>
                                        <div className="text-mint font-bold text-lg">{project.metrics.time}</div>
                                        <div className="text-gray-500 text-xs">Durée</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className="bg-gradient-to-r from-mint/10 to-mint/5 rounded-3xl p-12 text-center border border-mint/20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Prêt à créer votre <span className="text-mint">succès</span> ?
                    </h2>
                    <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                        Rejoignez nos clients satisfaits et donnez vie à votre projet web dès aujourd'hui.
                    </p>
                    <button
                        onClick={() => navigate('/rendez-vous')}
                        className="inline-flex items-center gap-3 bg-mint text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-mint/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Démarrer mon projet
                        <BsArrowRight className="text-2xl"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage