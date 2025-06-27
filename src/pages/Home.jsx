import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = `http://sefdb02.qut.edu.au:3000`;

export default function Home() {
  const [ searchId, setSearchId] = useState("");
  // Account functions
  //Login
  //Login details

  const login = () => {
    const url = `${API_URL}/user/login`; 
      fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: 'jester@gmail.com', password: 'password' }), // old is mike@gmail.com
      })
      .then((res) =>
        res.json().then((res) => {
          localStorage.setItem("token", res.bearerToken.token);
          localStorage.setItem("refresh", res.refreshToken.token);
          console.log(res);
          console.log(localStorage.getItem("token"))
          console.log(localStorage.getItem("refresh"))
        })
      )
      // you need to get the refresh token
      .catch((error) => console.log(error));
    };

  const userRefresh = () => {
    const url = `${API_URL}/user/refresh`;
    const refresh = localStorage.getItem("refresh");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refresh })
    })
    .then((res) =>
      res.json().then((res) => {
        localStorage.setItem("token", res.bearerToken.token);
        localStorage.setItem("refresh", res.refreshToken.token);
        console.log(res);
        console.log(localStorage.getItem("token"))
        console.log(localStorage.getItem("refresh"))
      })
    )
    // you need to get the refresh token
    .catch((error) => console.log(error));
  };

  const logout = () => {
    const url = `${API_URL}/user/logout`
    const refresh = localStorage.getItem("refresh");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refresh })
    })
    .catch((error) => console.log(error));

    localStorage.setItem("token", '');
    localStorage.setItem("refresh", '');
  };

  const register = () => {
    const url = `${API_URL}/user/register`
    fetch(url, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "jester@gmail.com", password: "password" })
    })
    .then((res) =>
        res.json().then((res) => {
          console.log(res);
        })
      )
      .catch((error) => console.log(error));
  };


  // Movie and actor functions
  //Get person details from the api 
  function getPersonDetails(id) {
    //id = 'nm0000408';
    const url = `${API_URL}/people/${id}`;
    const token = localStorage.getItem("token")
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
     },
   })
      .then((res) =>
        res.json().then((res) => {
          console.log(res);
       })
     )
      .catch((error) => console.log(error));
  };

  const SearchMovies = () => {
    const one = 'Kate & Leopold';
    const two = '';
    const three = '';
    const url = `${API_URL}/movies/search?title=${one}&year=${two}&page=${three}`
    const token = localStorage.getItem("token")  
    
    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
     }
   })
      .then((res) =>
        res.json().then((res) => {
          console.log(res);
       })
     )
      .catch((error) => console.log(error));
  };

const movieId = "tt0035423";
const getMovieData = (thing) => {
  //const movieId = "tt0035423";
  const url = `${API_URL}/movies/data/${thing}`
  const token = localStorage.getItem("token") 

  fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
   }
 })
    .then((res) =>
      res.json().then((res) => {
        console.log(res);
     })
   )
    .catch((error) => console.log(error));
};


  return (
    <main>
      <h1>Home</h1>
      <button onClick={register}>Regsiter</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={userRefresh}>refresh user login</button>
      {/* <button onSubmit={setSearchId("nm0000408")} onClick={getPersonDetails(searchId)}>Get Person Details</button>     */}
      <button onClick={SearchMovies}>Search Movies</button>
      <button onClick={getMovieData(movieId)}>get movie data</button>
    </main>
  );
}

