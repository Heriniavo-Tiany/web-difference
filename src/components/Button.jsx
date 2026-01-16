import PropTypes from 'prop-types'

function Button({ children, variant = 'primary', icon, onClick, className = '' }) {
    const baseStyles = 'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105'

    const variants = {
        primary: 'bg-mint text-dark hover:bg-mint/90',
        secondary: 'bg-transparent text-mint border-2 border-mint hover:bg-mint/10'
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {icon && <span className="text-2xl">{icon}</span>}
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    icon: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default Button