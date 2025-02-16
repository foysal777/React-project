import React, { useState } from 'react'



const products = [
    { id: 1, name: "Green Pepper", category: "Vegetables", price: 50, oldPrice: 65, image: "https://img.freepik.com/free-photo/diet-fresh-nutrition-mangos-summer_1339-80.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid" },
    { id: 2, name: "Corn", category: "Vegetables", price: 50, oldPrice: 65, image: "https://img.freepik.com/premium-photo/juicy-sliced-mango-isolated-white_171081-1365.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid" },
    { id: 3, name: "Cauliflower", category: "Vegetables", price: 50, oldPrice: 65, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Mushroom", category: "Vegetables", price: 50, oldPrice: 65, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Apple", category: "Fruits", price: 40, oldPrice: 55, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Banana", category: "Fruits", price: 30, oldPrice: 45, image: "https://via.placeholder.com/150" },
];

const categories = ["All" , "Fruit" , "Vegetable"];
const [selectCategories , setCategoreis ] = useState("All");
const FilterVegetable = () => {
    return (
        <div>
            {/* filter button  */}

         
                <h1 className="text-2xl font-bold">Our Organic Products</h1>
                <div className="flex gap-4 my-4">
                  {
                    categories.map(c => (

                        <div> 

                         <button className={}> </button>
                        </div>
                    ) )
                  }
                </div>
                {/* show all fruits  */}
                <div className="grid grid-cols-4 gap-4">
                    {
                        products.map(product => (
                            <div key={product.id} className="border p-4 rounded-lg shadow-md">
                                <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                                <h2 className="font-semibold mt-2">{product.name}</h2>
                                <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                                <p className="line-through text-gray-500">${product.oldPrice.toFixed(2)}</p>

                            </div>
                        ))
                    }
                </div>

            </div>
            )
}

            export default FilterVegetable