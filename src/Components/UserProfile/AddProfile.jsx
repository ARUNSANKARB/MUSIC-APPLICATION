import React, { useContext, useState } from 'react';
import { AuthUserContext } from '../../context/AuthContextApi';
import { toast } from 'react-toastify';
import Language from "./JSON/languages.json";
import State from "./JSON/states.json";
import Country from "./JSON/countries.json";
import City from "./JSON/cities.json";
import { doc, setDoc } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import { __DB } from '../../backend/firebaseconfig';

const AddProfile = () => {
  let { authUser } = useContext(AuthUserContext);
  let navigate = useNavigate();
  let location = useLocation();

  let [userDetails, setUserDetails] = useState({
    username:'',
    contactNumber:'',
    gender:'',
    dob:'',
    age:'',
    lang:'',
    country:'',
    state:'',
    city:'',
    address:'',
    role: "user",
  });

  let { username, contactNumber, gender, dob, age, lang, country, state, city, address, role } = userDetails;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { displayName, photoURL, email, uid } = authUser;
      let payload = {
        ...userDetails,
        displayName,
        photoURL,
        email,
        uid
      };
      let user_profile_collection = doc(__DB, "users_details", uid);
      await setDoc(user_profile_collection, payload);
      toast.success("User details have been updated successfully");
      navigate("/user/profile");
    } catch (error) {
      toast.error(error.code.slice(5));
      console.log("Error while uploading data: ", error);
    }
  };

  return (
    <section className='w-[100%] h-[calc(100vh-70px)] flex justify-center rounded items-center text-white'>
      <div className='w-[80%] bg-gray-700 rounded'>
        <header className='w-full h-[70px] flex justify-center items-center bg-blue-600'>
          <h1 className='text-white text-3xl font-bold'>Add User Details</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-between items-center p-5'>
            <div>
              <ul>
                <li className='flex flex-col'>
                  <label htmlFor='username' className='font-semibold'>Name</label>
                  <input type='text' className='border w-[200px]' name='username' id='username' value={username} onChange={handleInputChange} />
                </li>
                <li className='flex flex-col'>
                  <label htmlFor='dob' className='font-semibold'>DOB</label>
                  <input type='date' className='border w-[200px]' name='dob' id='dob' value={dob} onChange={handleInputChange} />
                </li>
                <li className='flex flex-col'>
                  <label htmlFor='country' className='font-semibold'>Country</label>
                  <input type='text' className='border w-[200px]' name='country' id='country' value={country} onChange={handleInputChange} list='countryList' />
                  <datalist id='countryList'>
                    {Country.map((country, index) => (
                      <option key={index} value={country} />
                    ))}
                  </datalist>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='flex flex-col'>
                  <label htmlFor='contactNumber' className='font-semibold'>Contact Number</label>
                  <input type='number' className='border w-[200px]' name='contactNumber' id='contactNumber' value={contactNumber} onChange={handleInputChange} />
                </li>
                <li className='flex flex-col'>
                  <label htmlFor='age' className='font-semibold'>Age</label>
                  <input type='number' className='border w-[200px]' name='age' id='age' value={age} onChange={handleInputChange} />
                </li>
                <li className='flex flex-col'>
                  <label htmlFor='state' className='font-semibold'>State</label>
                  <input type='text' className='border w-[200px]' name='state' id='state' value={state} onChange={handleInputChange} list='stateList' />
                  <datalist id='stateList'>
                    {State.map((state, index) => (
                      <option key={index} value={state} />
                    ))}
                  </datalist>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='flex flex-col'>
                  Gender
                  <div className='border w-[210px] flex justify-evenly'>
                    <label className='font-semibold'><input type='radio' name='gender' value='Male' checked={gender === 'Male'} onChange={handleInputChange}  /> Male</label>
                    <label className='font-semibold'><input type='radio' name='gender' value='Female' checked={gender === 'Female'} onChange={handleInputChange}  /> Female</label>
                    <label className='font-semibold'><input type='radio' name='gender' value='Others' checked={gender === 'Others'} onChange={handleInputChange}  /> Others</label>
                  </div>
                </li>
                <li className='flex flex-col'>
                  <label htmlFor='lang' className='font-semibold'>Language</label>
                  <input type='text' className='border w-[200px]' name='lang' id='lang' value={lang} onChange={handleInputChange} list='langList' />
                  <datalist id='langList'>
                    {Language.map((Language, index) => <option key={index} value={Language} />)}
                  </datalist>
                </li>
                <li className='flex flex-col'>
                  <label htmlFor='lang' className='font-semibold'>City</label>
                  <input type='text' className='border w-[200px]' name='city' id='city' value={city} onChange={handleInputChange} list='cityList' />
                  <datalist id='cityList'>
                    {City.map((city, index) => <option key={index} value={city} />)}
                  </datalist>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col px-5'>
            <label htmlFor='address' className='font-semibold'>Address</label>
            <textarea className='border' name='address' id='address' value={address} onChange={handleInputChange}></textarea>
          </div>
          <div className='flex justify-center py-2'>
            <button type='submit' className='w-[200px] border bg-blue-600 text-lg rounded-lg cursor-pointer font-semibold hover:bg-blue-700'>
              Add User
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProfile;
