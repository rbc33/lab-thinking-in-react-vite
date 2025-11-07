import { useState } from 'react'
import jsonData from '../data.json'
import ProductTable from '../components/ProductTable'
import SearchBar from '../components/SearchBar'

const ProductsPage = () => {
	const [products, setProducts] = useState(jsonData)
	console.log(products)

	const handleSearch = (searchTerm) => {
		const filteredProducts = jsonData.filter((product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setProducts(filteredProducts)
	}
	const handleStock = (inStock) => {
		const filteredProducts = jsonData.filter((product) =>
			inStock ? product.inStock : true
		)
		setProducts(filteredProducts)
	}

	return (
		<div>
			<SearchBar onSearch={handleSearch} onStock={handleStock} />
			<ProductTable products={products} />
		</div>
	)
}

export default ProductsPage
