

const FaQ = () => {
  return (
    <>
    <div className="flex items-center justify-center mb-10">
        <h1 className="font-bold text-center lg:text-4xl text-2xl">Frequently Asked Questions</h1>
    </div>
    <div className="flex flex-col gap-5">
    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    What is Artisan Haven?
  </div>
  <div className="collapse-content"> 
    <p>Artisan Haven is an online marketplace dedicated to connecting artisans and craft enthusiasts. We provide a platform for artisans to showcase and sell their unique creations, and for art lovers to discover and purchase one-of-a-kind handmade items.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How do I buy from Artisan Haven?
  </div>
  <div className="collapse-content"> 
    <p>Buying from Artisan Haven is easy! Simply browse through our curated collection of crafts and artworks, select the items you love, and proceed to checkout. We offer secure payment options for a hassle-free shopping experience.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Can I sell my crafts on Artisan Haven?
  </div>
  <div className="collapse-content"> 
    <p>Absolutely! We welcome artisans from all around the world to join our community. Whether you're a seasoned crafter or just starting out, you can create your own storefront on Artisan Haven and start selling your handmade goods to a global audience.</p>
  </div>
</div>
</div>
</>
  )
}

export default FaQ