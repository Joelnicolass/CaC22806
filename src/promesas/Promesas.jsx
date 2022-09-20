import React, { useEffect, useState } from "react";

// respuesta
const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
};

const fakeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
};

const Promesas = () => {
  const [count, setCount] = useState(0);

  const getUser = async () => {
    console.log("se llama a la api");
    try {
      const user = await fakeApi();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Promesas</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Promesas;
