import './App.css'
import { useState } from 'react'
import { useFetch } from './Hooks/useFetch'

export const App = () => {
  const [url, setURL] = useState("http://localhost:5058/api/Product");
  const { data: productData, setData, loading } = useFetch(url);

  const sortData = () => {
    const filteredData = productData.filter((product) => product.inStock === true);
    setData(filteredData);
  }

  return (
    <section>
      {loading && <p>Loading...</p>}
      <h1>Product List</h1>
      <div className='filter'>
        <button onClick={() => setURL("http://localhost:5058/api/Product/")}>All</button>
        <button onClick={() => sortData()}>In Stock</button>
      </div>

      {productData && productData.map((product) => (
        <div className='card' key={product.productID}>
          <p className='id'>{product.productID}</p>
          <p className='name'>{product.productName}</p>
          <p className='info'>
            <span>{product.productPrice}</span>
            <span className={product.inStock ? "instock" : "unavailable"}>{product.inStock ? "In Stock" : "Unavailable"}</span>
          </p>
        </div>
      ))}
    </section>
  )
}
