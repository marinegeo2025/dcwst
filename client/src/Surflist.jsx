import React, { useState } from "react";

export default function Surflist({ isAdmin, onAdminLogin, onAdminLogout }) {
  const [showModal, setShowModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  const handleAdminLoginClick = () => {
    onAdminLogin(adminPassword);
    setShowModal(false);
    setAdminPassword("");
  };

  return (
    <section
      id="surflist"
      className="bg-black text-white px-4 h-10 max-w-fit mx-auto flex items-center justify-center rounded-md"
    >
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
