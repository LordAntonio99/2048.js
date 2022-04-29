import React from "react";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <main className="">
      <Sidebar />
      <Body />
      <Right />
    </main>
  );
};

export default Dashboard;
