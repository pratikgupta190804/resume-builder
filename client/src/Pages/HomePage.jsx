import React from "react";
import { useStoreAuth } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { authUser } = useStoreAuth();
  const navigate = useNavigate();
  if(!authUser){
    navigate('/login');
  }
  return (
    authUser && (
      <div className="min-h-screen bg-gray-900">
        <h1 className="text-3xl bg-orange-500">Home Page</h1>
      </div>
    ) 
    
  );
};

export default HomePage;
