import { useContext, useEffect, useState } from "react";
import { CraftContext } from "../../Root";
import { ToastContainer } from "react-toastify";
import Success from "../../components/SweetAlert/Success";
import Error from "../../components/SweetAlert/Error";
import { Helmet } from "react-helmet";

const AddArtCraft = () => {
  const { user, render, setRender } = useContext(CraftContext);

  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    fetch("https://art-craft-server-three.vercel.app/sub_categories")
      .then((res) => res.json())
      .then((data) => setSubcategory(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      image,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      user_email,
      user_name,
    } = e.target;
    const formData = {
      image: image.value,
      item_name: item_name.value,
      subcategory_name: subcategory_name.value,
      short_description: short_description.value,
      price: price.value,
      rating: rating.value,
      customization: customization.value,
      processing_time: processing_time.value,
      stock_status: stock_status.value,
      user_email: user_email.value,
      user_name: user_name.value,
    };

    console.log(formData);
    fetch("https://art-craft-server-three.vercel.app/add_craft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        e.target.reset();
        Success(`${formData?.item_name} is added successfully`);
        setRender(!render);
      })
      .catch((err) => Error(err.message));
  };
  return (
    <>
    <Helmet>
      <title>Add Craft Item</title>
      <meta name="description" content="Add Craft Item" />
    </Helmet>
      <ToastContainer />
      <div className="container mx-auto mt-8  p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Add Craft Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="image" className="block mb-2">
                Image URL
              </label>
              <input
                type="text"
                id="image"
                name="image"
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="item_name" className="block mb-2">
                Item Name
              </label>
              <input
                type="text"
                id="item_name"
                name="item_name"
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="subcategory_name" className="block mb-2">
              Subcategory Name
            </label>

            <select
              id="subcategory_name"
              name="subcategory_name"
              className="w-full border rounded py-2 px-3"
              required
            >
              <option>Select Subcategory</option>
              {subcategory.map((sub) => (
                <option key={sub._id} value={sub.name}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="short_description" className="block mb-2">
              Short Description
            </label>
            <textarea
              id="short_description"
              name="short_description"
              className="w-full border rounded py-2 px-3"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="block mb-2">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="customization" className="block mb-2">
              Customization
            </label>
            <select
              id="customization"
              name="customization"
              className="w-full border rounded py-2 px-3"
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="processing_time" className="block mb-2">
              Processing Time
            </label>
            <input
              type="text"
              id="processing_time"
              name="processing_time"
              className="w-full border rounded py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock_status" className="block mb-2">
              Stock Status
            </label>
            <select
              id="stock_status"
              name="stock_status"
              className="w-full border rounded py-2 px-3"
              required
            >
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="user_email" className="block mb-2">
                User Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                disabled
                defaultValue={user?.email}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="user_name" className="block mb-2">
                User Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                disabled
                defaultValue={user?.displayName}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddArtCraft;
