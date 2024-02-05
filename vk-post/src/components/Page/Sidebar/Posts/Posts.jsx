import React, { useEffect, useState } from "react";
import s from "./Posts.module.scss";
import Post from "./Post";
function PostList() {
  const [postText, setPostText] = useState("");
  const [postList, setPostList] = useState([]);
  const [like, setLike] = useState(0);

  const date = "";

  const doPost = () => {
    console.log(postText);
    fetch(
      "https://vk-posts-data-base-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: "Name",
          text: postText,
          date: new Date().toDateString(),
          likes: 0,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      setPostText("");
      getPosts();
    });
  };

  const getPosts = () => {
    fetch(
      "https://vk-posts-data-base-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const rezult = [];
        for (const key in data) {
          rezult.push({
            id: key,
            text: data[key].text,
            date: data[key].date,
            name: data[key].name,
            likes: data[key].likes,
          });
        }

        setPostList(rezult);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

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
        <button type="submit" onClick={doPost}>
          Отправить
        </button>
      </label>
      {postList.map((item) => (
        <Post id={item.id} />
      ))}
    </div>
  );
}

export default PostList;
