import PropTypes from 'prop-types'
import { AiOutlinePlus } from 'react-icons/ai'

const Product = ({ product }) => {
    return (
        <div className='bg-white p-3 text-sm font-semibold flex flex-col items-center text-center relative gap-y-1'>
            <button className='absolute top-2 right-3 w-8 h-8 flex items-center rounded-lg text-brand-color shadow-md bg-white justify-center border-gray-200 transition-colors hover:border-brand-color border'>
                <AiOutlinePlus size={16} />
            </button>
            <img src={`/${product.image}`} alt={product.title} />
            <div className=' text-brand-color'>₺{product.price}</div>
            <div className=' text-gray-900'>{product.title}</div>
            <div className=' text-gray-500'>{product.alt}</div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product;