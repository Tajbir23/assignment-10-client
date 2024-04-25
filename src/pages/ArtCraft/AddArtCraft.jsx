import { useState } from "react";


const AddArtCraft = () => {

    const [formData, setFormData] = useState({
        image: '',
        item_name: '',
        subcategory_name: '',
        short_description: '',
        price: '',
        rating: '',
        customization: 'no',
        processing_time: '',
        stock_status: 'In stock',
        user_email: '',
        user_name: ''
      });




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, for example, sending the data to a backend API
        console.log(formData);
        // Reset form data after submission if needed
        setFormData({
          image: '',
          item_name: '',
          subcategory_name: '',
          short_description: '',
          price: '',
          rating: '',
          customization: 'no',
          processing_time: '',
          stock_status: 'In stock',
          user_email: '',
          user_name: ''
        });
      };
  return (
    <>
        <div className="container mx-auto mt-8 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Add Craft Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="image" className="block mb-2">Image URL</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="w-full border rounded py-2 px-3" />
          </div>
          <div>
            <label htmlFor="item_name" className="block mb-2">Item Name</label>
            <input type="text" id="item_name" name="item_name" value={formData.item_name} onChange={handleChange} className="w-full border rounded py-2 px-3" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="subcategory_name" className="block mb-2">Subcategory Name</label>
          <input type="text" id="subcategory_name" name="subcategory_name" value={formData.subcategory_name} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="short_description" className="block mb-2">Short Description</label>
          <textarea id="short_description" name="short_description" value={formData.short_description} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="block mb-2">Price</label>
            <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded py-2 px-3" />
          </div>
          <div>
            <label htmlFor="rating" className="block mb-2">Rating</label>
            <input type="number" id="rating" name="rating" min={0} max={5} maxLength={1} value={formData.rating} onChange={handleChange} className="w-full border rounded py-2 px-3" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="customization" className="block mb-2">Customization</label>
          <select id="customization" name="customization" value={formData.customization} onChange={handleChange} className="w-full border rounded py-2 px-3">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="processing_time" className="block mb-2">Processing Time</label>
          <input type="text" id="processing_time" name="processing_time" value={formData.processing_time} onChange={handleChange} className="w-full border rounded py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="stock_status" className="block mb-2">Stock Status</label>
          <select id="stock_status" name="stock_status" value={formData.stock_status} onChange={handleChange} className="w-full border rounded py-2 px-3">
            <option value="In stock">In stock</option>
            <option value="Made to Order">Made to Order</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="user_email" className="block mb-2">User Email</label>
            <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} className="w-full border rounded py-2 px-3" />
          </div>
          <div>
            <label htmlFor="user_name" className="block mb-2">User Name</label>
            <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} className="w-full border rounded py-2 px-3" />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Add</button>
      </form>
    </div>
    </>
  )
}

export default AddArtCraft