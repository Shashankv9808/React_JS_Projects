import React from 'react'
import "../css/PopularCategories.css"

export const PopularCategories = ({ categories, type }) => {

    return (
        <div className="container">
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card" style={type === "Categories" ? { background: "#f3f4f6" } : { background: "#FC8A06" }}>
                        <img src={category.img} alt={category.name} className="category-image" />
                        <div className="category-info">
                            <h2 className="category-name" style={type === "Categories" ? { color: "#000000" } : { color: "#FFFFFF" }}>{category.name}</h2>
                            {type === "Categories" ? <p className="category-restaurants">{category.restaurants} Restaurants</p> : <></>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
