import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
  const verifyUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3002/verify",
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      setUser(res.data.user);
      setLoading(false);
    } catch (err) {
      console.log(err);
      window.location.href = "http://localhost:3001/login";
    }
  };

  verifyUser();
}, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard />
    </>
  );
};

export default Home;