import React, { useState } from "react";



const products = [
    { id: 1, name: "Green Pepper", category: "Vegetables", price: 50, oldPrice: 65, image: "https://img.freepik.com/free-photo/diet-fresh-nutrition-mangos-summer_1339-80.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid" },
    { id: 2, name: "Corn", category: "Vegetables", price: 50, oldPrice: 65, image: "https://img.freepik.com/premium-photo/juicy-sliced-mango-isolated-white_171081-1365.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid" },
    { id: 3, name: "Cauliflower", category: "Vegetables", price: 50, oldPrice: 65, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mushroom", category: "Vegetables", price: 50, oldPrice: 65, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlItdunKKrV-8fQutsMrMnVLuRdWpUOuA7-g&s" },
    { id: 5, name: "Apple", category: "Fruits", price: 40, oldPrice: 55, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Banana", category: "Fruits", price: 30, oldPrice: 45, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wKa89NLtaNQEZip_EBf_WAZbR7ebUKSxzA&s" },
];

const categories = ["All", "Fruits", "Vegetables"];

const FilterVegetable = () => {
    const [selectCategories, setCategoreis] = useState("All");
    const [searchQuery , setSearchQuery] = useState("");

    const filterCategories = products.filter( product => ( selectCategories === "All" || product.category === selectCategories) && product.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
    return (
        <div className="p-6">
            {/* filter button  */}
            <h1 className="text-2xl font-bold text-center pb-5">Our Organic Products</h1>

             {/* Searchbar  */}
             <div className="mb-6 flex justify-center">
                <input 
                    type="text"
                    placeholder="🔍 Search for products..."
                    value={searchQuery}
                    onChange={(e)=> setSearchQuery (e.target.value)}
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div className="flex gap-4 my-4">
                {
                    categories.map(category => (
                        <div>
                         <button onClick={() => setCategoreis(category)}
                                key={category} className={`px-4 py-2 rounded-lg ${selectCategories === category ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{category} </button>
                        </div>
                    ))
                }
            </div>
            {/* show all fruits  */}
            <div className="grid grid-cols-4 gap-4">


                { 
                filterCategories.length > 0 ? 
                    filterCategories.map(product => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-md">
                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                            <h2 className="font-semibold mt-2">{product.name}</h2>
                            <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                            <p className="line-through text-gray-500">${product.oldPrice.toFixed(2)}</p>

                        </div>
                    )) : <p className="flex items-center justify-center text-center text-4xl text-red-500"> No product found</p>
                }
            </div>

        </div>
    )
}

export default FilterVegetable