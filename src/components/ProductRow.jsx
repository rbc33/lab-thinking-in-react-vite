import PropTypes from 'prop-types'

const ProductRow = ({ product }) => {
	return (
		<>
			<div className="prodRow">
				{product.inStock ? (
					<p>{product.name}</p>
				) : (
					<p className="outStock">{product.name}</p>
				)}
				<p>{product.price}</p>
			</div>
			<hr />
		</>
	)
}
ProductRow.propTypes = {
	product: PropTypes.object.isRequired,
}

export default ProductRow
