import React, { useEffect, useState } from "react";
import s from "./Posts.module.scss";
import { Button, ButtonDoPost } from "../../Button";
function Posts() {
  const [postText, setPostText] = useState("");

  const doPost = () => {
    fetch(
      "https://vk-posts-data-base-default-rtdb.europe-west1.firebasedatabase.app/",
      {
        method: "POST",
        body: JSON.stringify({
          text: postText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((rez) => {
        alert(rez);
        return rez.json();
      })
      .then((data) => {
        alert(data);
      });
  };

  // useEffect(() => {
  //   doPost();
  // }, []);

  return (
    <div className={s.posts}>
      <h3>Новости</h3>
      <label className={s.label}>
        <input
          type="text"
          placeholder="Введите ваше сообщение"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <ButtonDoPost onClick={doPost} />
      </label>
    </div>
  );
}

export default Posts;
