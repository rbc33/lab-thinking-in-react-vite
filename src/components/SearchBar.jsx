import PropTypes from 'prop-types'
import { useState } from 'react'

const SearchBar = ({ onSearch, onStock }) => {
	const [search, setSearch] = useState('')
	const [inStock, setInStock] = useState(false)
	const handleSearch = (e) => {
		setSearch(e.target.value)
		onSearch(e.target.value)
	}
	const handleInStockChange = (e) => {
		setInStock(e.target.checked)
		onStock(e.target.checked)
		// You might want to add a callback here to filter by stock status as well
	}
	return (
		<>
			<label htmlFor="search">Search</label>
			<br />
			<input
				id="search"
				type="text"
				value={search}
				placeholder="Search..."
				onChange={handleSearch}
			/>
			<br />
			<label>
				Only show products in stock
				<input
					type="checkbox"
					checked={inStock}
					onChange={handleInStockChange}
				/>
			</label>
		</>
	)
}
SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
	onStock: PropTypes.func.isRequired,
}

export default SearchBar
