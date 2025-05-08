import React, { useState, useEffect } from "react";

export default function Surflist({ isAdmin, onAdminLogin, onAdminLogout }) {
  // Local state for listing items and the add-listing form
  const [listings, setListings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    contact: "",
    duration: "30",
  });

  // Modal + password for admin login
  const [showModal, setShowModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  // Load listings from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("surfListings")) || [];
    const now = Date.now();
    // Filter out expired items
    const filtered = stored.filter((item) => now < item.expiry);
    setListings(filtered);
    // Save back after filtering
    localStorage.setItem("surfListings", JSON.stringify(filtered));
  }, []);

  // Update form fields
  const handleInputChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Add a new listing
  const handleSubmit = (e) => {
    e.preventDefault();
    const expiry = Date.now() + parseInt(form.duration) * 86400000; // days in ms
    const newItem = { ...form, id: Date.now(), expiry };
    const updated = [...listings, newItem];
    setListings(updated);
    localStorage.setItem("surfListings", JSON.stringify(updated));
    // Reset form
    setForm({ title: "", price: "", contact: "", duration: "30" });
  };

  // Delete an existing listing
  const handleDelete = (id) => {
    const updated = listings.filter((item) => item.id !== id);
    setListings(updated);
    localStorage.setItem("surfListings", JSON.stringify(updated));
  };

  // Determine the icon for contact (email vs phone)
  const getContactIcon = (contact) =>
    contact.includes("@") ? "📧" : "📱";

  // Trigger the parent's onAdminLogin() with the typed password
  const handleAdminLoginClick = () => {
    onAdminLogin(adminPassword);
    setShowModal(false);
    setAdminPassword("");
  };

  return (
    <section
      id="surflist"
      className="bg-black text-white px-6 py-12 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">
        🌊 Surflist: Buy, Sell and Trade
      </h2>

      {/* Add Listing Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        <input
          name="title"
          placeholder="Item name (e.g. 6'0 shortboard)"
          className="p-2 rounded text-black"
          value={form.title}
          onChange={handleInputChange}
          required
        />
        <input
          name="price"
          placeholder="Price (e.g. £150)"
          className="p-2 rounded text-black"
          value={form.price}
          onChange={handleInputChange}
          required
        />
        <input
          name="contact"
          placeholder="Contact (email or phone)"
          className="p-2 rounded text-black"
          value={form.contact}
          onChange={handleInputChange}
          required
        />
        <select
          name="duration"
          className="p-2 rounded text-black"
          onChange={handleInputChange}
          value={form.duration}
        >
          <option value="7">1 week</option>
          <option value="14">2 weeks</option>
          <option value="30">1 month</option>
        </select>
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-sky-500 hover:bg-sky-600 text-white p-2 rounded"
        >
          Add Listing
        </button>
      </form>

      {/* Display Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded shadow relative text-left"
          >
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sky-400 font-semibold">{item.price}</p>
            <button
              onClick={() =>
                alert(`${getContactIcon(item.contact)} Contact: ${item.contact}`)
              }
              className="mt-2 px-3 py-1 bg-sky-700 hover:bg-sky-600 text-white rounded text-sm"
            >
              Contact Seller
            </button>
            {isAdmin && (
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-2 right-2 text-red-400 hover:text-red-600 text-lg"
              >
                🗑️
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Admin Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded shadow max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Admin Login</h3>
            <input
              type="password"
              placeholder="Enter admin password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={handleAdminLoginClick}
                className="bg-sky-600 text-white px-4 py-2 rounded"
              >
                Login
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="text-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Login/Logout UI */}
      <div className="mt-8">
        {!isAdmin && (
          <button
            onClick={() => setShowModal(true)}
            className="text-xs text-sky-400 underline hover:text-sky-300"
          >
            Admin Login
          </button>
        )}
        {isAdmin && (
          <p className="text-xs text-green-400">
            Admin mode active
            <button
              onClick={onAdminLogout}
              className="ml-2 underline text-red-400 hover:text-red-600"
            >
              Close admin mode
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
