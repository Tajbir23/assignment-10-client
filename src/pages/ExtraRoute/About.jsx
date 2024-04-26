
const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Welcome to Artisan Haven
        </h2>
        <div className="mt-6 text-lg leading-7 text-gray-700">
          <p>
            At Artisan Haven, we celebrate creativity and craftsmanship. Our platform is a sanctuary
            for artisans and craft enthusiasts alike, providing a vibrant marketplace where unique
            creations come to life.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="max-w-xs sm:max-w-md bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Mission</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                We are passionate about fostering a community where artisans can showcase their talents
                and connect with a global audience.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">What We Offer</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explore a curated collection of handcrafted goods, ranging from intricately woven textiles
                to beautifully sculpted ceramics. Each item is a one-of-a-kind masterpiece, crafted with
                love and care.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Get Involved</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Join us at Artisan Haven and become part of our growing community. Together, let's celebrate
                the beauty of handmade craftsmanship and unleash the artist within.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About