import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, firestore, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);

  const [name, setName] = useState("");

  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(firestore, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  
  return (
    <div className="dashboard">
      <div className="dashboard-info">
        <div>{name}</div>
        <div>{user?.email}</div>
      </div>

      <a href="/article-editor"><button className="dashboard-article">
        Create article
      </button></a>

      <button className="dashboard__btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}