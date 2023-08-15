import PropTypes from 'prop-types'

const Title = ({ title }) => {
    return (
        <h3 className="text-sm font-semibold mb-3">{title}</h3>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title
