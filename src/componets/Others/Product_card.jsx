export default function ProductCards() {
    const products = [
      {
        title: "DISCOUNT 20%",
        description: "LOW SUGAR RASPBERRY JAM D'Arbo from Austria made with Sorbitol.",
        image: "https://oem-beverage.com/media/zoo/images/orange-juice-drink-303ml-short-can_0_0.webp", // Replace with actual path
        bgColor: "bg-red-400",
      },
      {
        title: "PEACH",
        description: "When it comes to Lemon, our mind remembers Washington automatically.",
        image: "https://m.media-amazon.com/images/I/71gPSEqb5xL.jpg", // Replace with actual path
        bgColor: "bg-yellow-400",
      },
      {
        title: "APPLE JUICES",
        description: "When it comes to apples, our mind remembers Washington automatically.",
        image: "https://i5.walmartimages.com/seo/ReaLemon-100-Lemon-Juice-32-fl-oz_51d1f604-3f91-49d1-b250-26e0191c1d0b.4e80aa6c10176093d2990dbe4880104c.jpeg", // Replace with actual path
        bgColor: "bg-green-400",
      },
    ];
  
    return (
      <div className="flex gap-4 justify-center p-6">
        {products.map((product, index) => (
          <div key={index} className={`p-6 rounded-xl shadow-lg ${product.bgColor} w-80`}>
            <h2 className="text-white text-xl font-bold">{product.title}</h2>
            <p className="text-white text-sm italic mt-2">{product.description}</p>
            <img src={product.image} alt={product.title} className="mt-4 w-full h-40 object-cover rounded-4xl" />
          </div>
        ))}
      </div>
    );
  }
  