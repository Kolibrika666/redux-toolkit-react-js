import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import PostList from "./Sidebar/Posts/Posts";
function Page() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <PostList />
      </main>
    </>
  );
}

export default Page;
