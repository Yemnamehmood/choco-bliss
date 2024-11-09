// Import required libraries and components
import { useState } from "react";
import Image from "next/image";

const chocolates = [
  { name: "Dark Delight", description: "Rich, dark chocolate with a bold flavor.", price: "$10", src: "/chocolate-delight-wrapped-bar-dark-wooden-backdrop-temptation_795881-11470.jpg" },
  { name: "Caramel Crunch", description: "Smooth caramel wrapped in dark chocolate.", price: "$12", src: "/Butlers-Milk-Chocolate-Caramel-Crunch-Bar-Aesthetic.jpg" },
  { name: "Mint Mingle", description: "Dark chocolate with a refreshing mint taste.", price: "$11", src: "/chopped-chocolate-pieces-mint-dessert-600nw-2495920937.webp" },
  { name: "Berry Bliss", description: "Dark chocolate infused with a hint of berry.", price: "$13", src: "/delicious-dark-chocolate-bars-with-fresh-blueberries-and-mint-photo.jpg" },
  { name: "Hazelnut Heaven", description: "Creamy hazelnuts blended into dark chocolate.", price: "$14", src: "/61vQgAkIgAL._SL1000_.jpg" },
  { name: "Orange Zest", description: "Zesty orange with a rich chocolate finish.", price: "$11", src: "/dark-chocolate-bar-with-oranges-oranges-table_896782-3451.jpg" },
  { name: "Sea Salt Spark", description: "Balanced sea salt and dark chocolate combo.", price: "$10", src: "/dark-chocolate-sea-salt-caramels.jpg.webp" },
  { name: "Mocha Magic", description: "Perfect blend of coffee and dark chocolate.", price: "$13", src: "/white-cup-coffee-dark-chocolate-with-coffee-beans_1019437-1615.avif" },
  { name: "Almond Bliss", description: "Crunchy almonds in smooth dark chocolate.", price: "$12", src: "/istockphoto-1367800088-612x612.jpg" },
  { name: "Coconut Dream", description: "Exotic coconut with dark chocolate.", price: "$14", src: "/Coconut-chocolates_1200x800.avif" },
  { name: "Raspberry Rose", description: "Dark chocolate with raspberry and rose essence.", price: "$15", src: "/michele-blackwell-evRB-x0TJkM-unsplash.jpg" },
  { name: "Peppermint Twist", description: "Cool peppermint and rich dark chocolate.", price: "$10", src: "/istockphoto-1095618582-612x612.jpg" },
  { name: "Toffee Temptation", description: "Crunchy toffee meets smooth chocolate.", price: "$13", src: "/closeup-toffee-milk-chocolate-bar-pieces-rich-delectable-toffee-milk-chocolate-bars-arranged-rows-showcasing-texture-328211527.webp" },
  { name: "Chili Choco", description: "Dark chocolate with a hint of spicy chili.", price: "$11", src: "/recipe-chili_mocha-page.webp" },
  { name: "Honeycomb Harmony", description: "Sweet honeycomb in smooth chocolate.", price: "$15", src: "/Honeycomb-Dark2_6a84e9d7-37a5-4bfc-b6e0-2abbe022c7ed_375x375_crop_center.webp" },
];

export default function Home() {
  const [selectedChocolate, setSelectedChocolate] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <main className="bg-[#3b2f2f] text-white min-h-screen">
      {/* Header and Navbar */}
      <header className="text-center p-4">
        <h1 className="text-5xl font-bold">Choco Bliss</h1>
        <nav className="flex justify-center space-x-6 mt-4">
          <a href="#home" className="hover:text-[#ffcbcb]">Home</a>
          <a href="#about" className="hover:text-[#ffcbcb]">About</a>
          <a href="#products" className="hover:text-[#ffcbcb]">Products</a>
          <a href="#blog" className="hover:text-[#ffcbcb]">Blog</a>
          <a href="#contact" className="hover:text-[#ffcbcb]">Contact Us</a>
        </nav>
      </header>

      {/* Chocolate Video Header */}
      <section id="home" className="relative h-80 w-full">
        <video className="absolute inset-0 w-full h-full object-cover" src="/4226091-uhd_3840_2160_25fps.mp4" autoPlay loop muted />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-[#ffcbcb]">Indulge in the Finest Chocolates</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 text-center">
        <h2 className="text-3xl font-bold">About Choco Bliss</h2>
        <p className="mt-4 text-lg">Welcome to Choco Bliss, where we bring you a world of exquisite chocolates crafted with passion and care. Our selection ranges from classic flavors to unique creations, all designed to satisfy every chocolate lover&apos;s craving.</p>
      </section>

      {/* Products Section */}
      <section id="products" className="p-8">
        <h2 className="text-3xl font-bold text-center">Our Chocolates</h2>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Search chocolates..."
            className="p-2 rounded bg-[#4e3d3d] text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {chocolates
            .filter((choc) => choc.name.toLowerCase().includes(search.toLowerCase()))
            .map((choc, index) => (
              <div key={index} className="bg-[#4e3d3d] p-4 rounded-lg relative hover:scale-105 hover:shadow-lg hover:bg-[#5a4545]">
                <Image src={choc.src} alt={choc.name} width={300} height={200} className="object-cover rounded-md"/>

                <h3 className="text-xl mt-2">{choc.name}</h3>
                <p>{choc.description}</p>
                <p className="text-xl font-bold">{choc.price}</p>
                <button className="bg-[#2c1f1f] mt-2 p-2 rounded text-white hover:bg-black transition-colors">Add to Cart</button>
                <button
                  onClick={() => setSelectedChocolate(choc)}
                  className="absolute top-2 right-2 text-xl text-white"
                >
                  View
                </button>
              </div>
            ))}
        </div>

        {selectedChocolate && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
            <div className="bg-[#4e3d3d] p-6 rounded-lg max-w-xs text-center relative">
            <button
                onClick={() => setSelectedChocolate(null)}
                className="absolute top-2 right-2 text-white text-xl"
              >
                &times;
              </button>
              <Image src={selectedChocolate.src} alt={selectedChocolate.name} width={300} height={200} className="object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold">{selectedChocolate.name}</h3>
              <p>{selectedChocolate.description}</p>
              <p className="text-xl font-bold">{selectedChocolate.price}</p>
              <button className="bg-[#2c1f1f] mt-4 p-2 rounded text-white hover:bg-black transition-colors duration-200 ease-in-out">Order Now</button>
              <br/>
              <br/>
              <button className="bg-[#2c1f1f] mt-2 p-2 rounded text-white hover:bg-black transition-colors duration-200 ease-in-out">Add to Cart</button>
            </div>
          </div>
        )}

      </section>

      {/* Blog Section */}
      <section id="blog" className="p-8">
        <h2 className="text-3xl font-bold text-center">Our Blog</h2>
        <article className="mt-6 bg-[#4e3d3d] p-6 rounded-lg">
          <h3 className="text-2xl font-bold">Exploring the World of Chocolates</h3>
          <p className="mt-4">Choco Bliss is your gateway to exploring a delightful world of rich, delicious chocolates. We dive deep into the art of chocolate-making, the health benefits of dark chocolate, and creative ways to enjoy chocolate in everyday life. Stay tuned for more insights, recipes, and chocolate inspiration!</p>
        </article>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="mailto:contact@chocobliss.com" className="text-2xl">📧</a>
          <a href="https://wa.me/yourwhatsappnumber" className="text-2xl">📱</a>
          <a href="https://instagram.com/yourinstagram" className="text-2xl">📸</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center bg-[#2c1f1f]">
        <p>&copy; {new Date().getFullYear()} Choco Bliss by Yemna Mehmood</p>
      </footer>
    </main>
  );
}
