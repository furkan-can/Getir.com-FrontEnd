import PropTypes from 'prop-types'


const Category = ({ category }) => {
    return (
        <a className=' group flex flex-col gap-y-2 transition items-center text-center p-2 hover:bg-purple-50' href='#'>
            <img className='w-12 h-12 rounded border-gray-200 border' src={`/${category.image}`} alt={category.title} />
            <span className='text-sm font-semibold text-gray-700 tracking-tight whitespace-nowrap group-hover:text-brand-color'>{category.title}</span>
        </a>
    )
}

Category.propTypes = {
    category: PropTypes.object.isRequired
}

export default Category
