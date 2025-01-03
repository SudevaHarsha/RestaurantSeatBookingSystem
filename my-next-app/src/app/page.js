import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navigation";

export default function Home() {
  const dishes = ["0","Chicken starter","Paneer Butter Masala","Noodle Mania","Chicken Fry","Mushroom Masala", "Gobi 65"]
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar />
      
      <section
        id="hero"
        className="bg-cover bg-center bg-[url('/hero-image.jpg')] h-[85vh] sm:h-80 md:h-screen flex items-center justify-center text-white"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Savor the Moment at Us</h1>
          <p className="text-xl mb-6">
            Extraordinary dishes with world-class quality.
          </p>
          <Link
            href="/booking"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Reserve Your Table Now
          </Link>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between">
            
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                About Us
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Our restaurant is not just about food—it's about creating
                memories. Discover our story, our journey to excellence, and our
                dedication to providing the best dining experience in town.
              </p>
              <p className="text-gray-500">
                We take pride in sourcing fresh, local ingredients, and creating
                delicious meals that satisfy all your senses. Every dish is
                crafted with passion and care, and we invite you to experience
                the warmth and comfort of our atmosphere.
              </p>
            </div>

            {/* Image Content */}
            <div className="mt-8 md:mt-0 w-full md:w-1/2">
              <img
                src="/about-image.jpg"
                alt="About Us"
                className="mx-auto rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
            Our Signature Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((recipe) => (
              <div
                key={recipe}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
              >
                <Image
                  src={`/recipe-${recipe}.jpg`}
                  alt={`Recipe ${recipe}`}
                  width={500}
                  height={500}
                  className="w-full h-56 object-cover rounded-t-lg transform transition-all duration-500 hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {dishes[recipe]}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    A brief description of the recipe that will make your mouth
                    water.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-semibold inline-block mt-2 transform transition-transform hover:scale-105 duration-200"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Great Section */}
      <section id="great" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
              <div className="mb-4 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2L15 8H9L12 2Z" />
                  <circle cx="12" cy="12" r="8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-500 mb-3">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600">
                We use the freshest ingredients for all our dishes.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
              <div className="mb-4 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 2l3 7h7l-6 5 2 7-6-4-6 4 2-7-6-5h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-500 mb-3">
                Top Chefs
              </h3>
              <p className="text-gray-600">
                Our chefs are world-renowned for their culinary expertise.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
              <div className="mb-4 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M3 10l3-7h12l3 7-3 7H6l-3-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-500 mb-3">
                Elegant Ambiance
              </h3>
              <p className="text-gray-600">
                Dine in a setting that complements your experience.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
              <div className="mb-4 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M7 10l5-5 5 5m-5 5v7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-500 mb-3">
                Exceptional Service
              </h3>
              <p className="text-gray-600">
                Our staff are here to make your visit memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <div
                key={review}
                className="bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      review * 10
                    }.jpg`} // Placeholder images
                    alt={`Customer ${review}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                </div>
                <p className="text-gray-600 text-lg italic mb-4">
                  "Amazing food and wonderful service. A must-visit!"
                </p>
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={star <= 4 ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M12 .587l3.668 7.431L23.8 9.161l-5.6 5.469 1.324 7.72-6.55-3.445L8.76 22.35l1.325-7.721L4.5 9.161l8.132-.143L12 .587z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-600 font-semibold text-xl">
                  - Customer {review}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Visited on: January 2, 2025
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Deva's Kitchen. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
