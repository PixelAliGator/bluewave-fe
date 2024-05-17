import { useState, ChangeEvent, FormEvent } from 'react';
import  './profileSetup.css'; // Make sure to create this CSS module
import { RenderState, updateRenderState } from '../observables/appObservables';
import { getToken } from '../lib/auth';
import axios from 'axios';

// Define the type for the profile state
type ProfileState = {
  height: string;
  weight: string;
  age: string;
  gender: string;
};

function ProfileSetup() {
  const [profile, setProfile] = useState<ProfileState>({
    height: '',
    weight: '',
    age: '',
    gender: '',
  });

  // Correct type for handleChange to handle change events from input and select
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Correct type for handleSubmit to handle form submission events
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profile);

    try{
      await axios.post('http://127.0.0.1:8080/api/user', profile, {
      headers:{'Authorization':`Bearer ${getToken()}`}
    })
  }catch(e){
    console.log(e);
  }
    
   updateRenderState(RenderState.HOME) // This is a placeholder redirect
  };

  return (
    <div className='profileSetupForm'>
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className='profileForm'>
        <input
          name="height"
          type="number"
          placeholder="Height (in cm)"
          value={profile.height}
          onChange={handleChange}
          className='inputField'
        />
        <input
          name="weight"
          type="number"
          placeholder="Weight (in kg)"
          value={profile.weight}
          onChange={handleChange}
          className='inputField'
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
          className='inputField'
        />
        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          className='selectField'
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" className='submitButton'>Submit</button>
      </form>
    </div>
  );
}

export default ProfileSetup;
