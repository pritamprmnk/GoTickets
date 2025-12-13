import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { FaEnvelope, FaHome, FaPhone, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";

export default function MyProfile() {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [address, setAddress] = useState(user?.address || "");
  const [phone, setPhone] = useState(user?.phone || "");
const handleUpdateProfile = (e) => {
  e.preventDefault();

  if (auth.currentUser) {
    updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
      .then(() => {
        user.address = address;
        user.phone = phone;

        toast.success("Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        toast.error("Failed to update profile");
      });
  }
};


  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">My Profile</h1>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 gap-4 md:gap-0">
          <div className="flex gap-6 items-center">
            <img
              src={user?.photoURL || "/assets/avatar.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full border object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {user?.displayName || "User Name"}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            {isEditing ? "Cancel" : "Update Profile"}
          </button>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <form onSubmit={handleUpdateProfile} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-400 text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-500 text-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-500 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg px-4 py-3 mt-2 mb-4 focus:outline-none focus:border-teal-500 text-gray-800"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-teal-500 text-white px-5 py-3 rounded-lg font-medium hover:bg-teal-600"
            >
              Save Changes
            </button>
          </form>
        )}

        {/* DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <div className="flex items-center mt-2 bg-gray-100 p-4 rounded-lg">
               <FaUser className="mr-3 text-blue-500" size={20} />
              <span className="text-gray-700 font-medium">{user?.displayName}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email Address</label>
            <div className="flex items-center mt-2 bg-gray-100 p-4 rounded-lg">
              <FaEnvelope className="mr-3 text-blue-500" size={20} />
              <span className="text-gray-700 font-medium">{user?.email}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Phone Number</label>
            <div className="flex items-center mt-2 bg-gray-100 p-4 rounded-lg">
              <FaPhone className="mr-3 text-blue-500" size={20} />
              <span className="text-gray-700 font-medium">{user?.phone || "No phone added"}</span>
            </div>
          </div>

          <div className="">
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <div className="flex items-center mt-2 bg-gray-100 p-4 rounded-lg">
              <FaHome className="mr-3 text-blue-500" size={20} />
              <span className="text-gray-700 font-medium">{user?.address || "No address added"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
