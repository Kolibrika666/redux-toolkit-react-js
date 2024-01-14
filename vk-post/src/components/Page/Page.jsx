import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Posts from "./Sidebar/Posts/Posts";
function Page() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Posts />
      </main>
    </>
  );
}

export default Page;
