import PropTypes from 'prop-types'
import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {
	return (
		<div>
			<div className="prodRow header">
				<p>Name</p>
				<p>Price</p>
			</div>
			{products.map((p) => (
				<ProductRow key={p.id} product={p} />
			))}
		</div>
	)
}
ProductTable.propTypes = {
	products: PropTypes.array.isRequired,
}
export default ProductTable
