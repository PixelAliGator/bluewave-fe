import './login.css'
import  { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { getPayload, setToken } from '../lib/auth';
import { updateUser } from '../observables/authObservable';
import { RenderState, updateRenderState } from '../observables/appObservables';

type ProfileData = {
  email: string;
  password: string;
};

export default function Login() {
  const [profileData, setProfileData] = useState<ProfileData>({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic validation for example purposes
    if (!profileData.email || !profileData.password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      // Here you would send the data to the server
      const res = await axios.post('http://127.0.0.1:8080/api/login', profileData);
      setToken(res.data.token);
      // Clear form
      const payload = getPayload();
      if(typeof payload === "string"){
        updateUser(payload);
      }
     
      // Reset error message
      setErrorMessage('');
      if(!payload.user.profileCompleted){
      // Redirect or inform the user of successful registration
      updateRenderState(RenderState.PROFILE_SETUP)
      }else{
      updateRenderState(RenderState.HOME)
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label htmlFor="email" className="label">Email</label>
          <div className="control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profileData.email}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="password" className="label">Password</label>
          <div className="control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={profileData.password}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>
        {errorMessage && <div className="notification is-danger">{errorMessage}</div>}
        <div className="control">
          <button type="submit" className="button is-primary">Login</button>
        </div>

      </form>
    </div>
  );
}