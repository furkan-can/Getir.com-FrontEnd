import PropTypes from 'prop-types'

const Title = ({ title }) => {
    return (
        <h3 className="text-sm font-semibold mb-3 px-8 pt-3 md:pt-0 md:px-0">{title}</h3>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title
