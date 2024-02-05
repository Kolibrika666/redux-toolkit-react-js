

// registerUser
const registerUser = async (email, pass) => {
  const res = await fetch("https://vkcopy-2b9fe-default-rtdb.asia-southeast1.firebasedatabase.app/auth.json", {
    method: "POST",
    body: JSON.stringify({
      email,
      pass
    })
  })
  if (res.status === 200) {
    const data = await res.json()
    return data
  } else throw new Error("can't register, try latter!")
  //Возвращает значение

  // if (res.status === 200) return res.json()
  // Возвращает промис
}

// getUser


// logInUser

export {registerUser}
