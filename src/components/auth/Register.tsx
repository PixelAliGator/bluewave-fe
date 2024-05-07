import "./register.css";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import {
  RenderState,
  updateRenderState,
} from "../../observables/appObservables";

type ProfileData = {
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
};

const Registration: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Basic validation for example purposes

    if (
      !profileData.email ||
      !profileData.password ||
      !profileData.passwordConfirmation
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (profileData.password !== profileData.passwordConfirmation) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      // Here you would send the data to the server
      const res = await axios.post(
        "http://127.0.0.1:8080/api/register",
        profileData
      ); // Clear form

      setProfileData({
        email: "",
        username: "",
        password: "",
        passwordConfirmation: "",
      }); // Reset error message

      setErrorMessage(""); // Redirect or inform the user of successful registration

      updateRenderState(RenderState.LOGIN);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
            <h2>Registration</h2>
            
      <form onSubmit={handleSubmit}>
                
        <div className="field">
                    <label className="label">Email</label>
                    
          <div className="control">
                        
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="input"
              placeholder="Email"
            />
                      
          </div>
                  
        </div>
                
        <div className="field">
                    <label className="label">Username</label>
                    
          <div className="control">
                        
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleChange}
              className="input"
              placeholder="Username"
            />
                      
          </div>
                  
        </div>
                
        <div className="field">
                    <label className="label">Password</label>
                    
          <div className="control">
                        
            <input
              type="password"
              name="password"
              value={profileData.password}
              onChange={handleChange}
              className="input"
              placeholder="Password"
            />
                      
          </div>
                  
        </div>
                
        <div className="field">
                    <label className="label">Confirm Password</label>
                    
          <div className="control">
                        
            <input
              type="password"
              name="passwordConfirmation"
              value={profileData.passwordConfirmation}
              onChange={handleChange}
              className="input"
              placeholder="Confirm Password"
            />
                      
          </div>
                  
        </div>
                
        {errorMessage && (
          <div className="notification is-danger">{errorMessage}</div>
        )}
                
        <div className="control">
                    
          <button type="submit" className="button is-primary">
            Register
          </button>
                  
        </div>
              
      </form>
          
    </div>
  );
};

export default Registration;
