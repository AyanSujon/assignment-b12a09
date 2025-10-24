import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import useTitle from '../Hooks/useTitle';

const Profile = () => {
      // for changing Page title Dynamically.
    useTitle("Profile");
    const { user, setLoading,  updateProfileFunction } = useContext(AuthContext);
    const ExistingDisplayName = user?.displayName;
    const ExistingPhotoURL = user?.photoURL;

        const [isEditing, setIsEditing]= useState(false);
  const [displayName, setdisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

// console.log({displayName, photoURL})


  const saveProfile = async (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);

    try {
      // Update Firebase user profile
      await updateProfileFunction(displayName, photoURL);
        setIsEditing(false);
        setLoading(false)
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile!");
    }
  };


    return (

    <>
      {!isEditing ? (
        //  View mode
        <div className="flex justify-center space-y-3 my-5 ">
          <div className=" flex flex-wrap text-center md:text-start justify-between items-center bg-white/15 space-y-3 p-10 rounded-lg gap-5">
            <figure>
            <img
              className="w-50 h-50 mx-auto rounded-lg border-2 border-primary object-cover"
              src={
                user?.photoURL ||
                "https://i.ibb.co.com/tp3xgXbG/avater.jpg"
              }
              alt="Avatar"
            />
            </figure>
              <div className='space-y-3'>
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-white">{user?.email}</p>

            <button
              onClick={() => setIsEditing(true)} // toggle to edit mode
              className="btn bg-primary hover:bg-[#eb3154] text-white"
            >
              Edit Profile
            </button>
              </div>
          </div>
        </div>
      ) : (
        // Edit mode
        <div className="card mx-auto my-5 bg-white/10 backdrop-blur-sm w-full max-w-sm shadow">
          <div className="card-body">
            <form onSubmit={saveProfile}>
              <h1 className="text-3xl font-bold text-center mb-6">
                Update Your Info
              </h1>

              <fieldset className="fieldset text-white">
                {/* Name */}
                <label className="label">Name</label>
                <input
                
                  value={displayName}
                  onChange={(e) => setdisplayName(e.target.value)}
                  type="text"
                  name="name"
                  className="input bg-white/10 backdrop-blur-sm w-full"
                  placeholder="Your name"
                />

                {/* Photo URL */}
                <label className="label mt-3">Photo URL</label>
                <input
                
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  type="text"
                  name="photo"
                  className="input bg-white/10 backdrop-blur-sm w-full"
                  placeholder="Your Photo URL"
                />

                <div className="flex gap-2 mt-5">
                  <button type="submit" className="btn btn-primary w-1/2">
                    Save Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEditing(false)} // cancel editing
                    className="btn bg-gray-600 hover:bg-gray-700 text-white w-1/2"
                  >
                    Cancel
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </>




















    );
};

export default Profile;