import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./Utils/AxiosWithAuth";

const Users = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/jokes")
      .then(res => {
        console.log(`success > `, res);
        console.log(`data > `, res.data);
        setJokes(res.data);
      })
      .catch(err => console.log(`fail > `, err.message));
  }, []);

  return (
    <div>
      <ul>
        {jokes.map(joke => {
          return <li key={joke.id}>{joke.joke}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
