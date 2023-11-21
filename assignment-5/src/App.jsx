import { useState } from "react";
import Data from "./Component/Data";

const App = () => {

  const [data, setData] = useState([
    {
      id: 0,
      name: "Haider K.",
      age: 24,
      email: "haiderkamrann@gmail.com",
    },
    {
      id: 1,
      name: "Hammad",
      age: 25,
      email: "hammad@gmail.com",
    },
    {
      id: 2,
      name: "Zain Alizai",
      age: 26,
      email: "zainalizai@gmail.com",
    },
    {
      id: 3,
      name: "Mubazar",
      age: 25,
      email: "mubazar@gmail.com",
    },
    {
      id: 4,
      name: "Farooq",
      age: 24,
      email: "farooq@gmail.com",
    },
  ]);

  function Update(id) {
    const index = data.findIndex((user) => {
      return user.id === id;
    });
    console.log(index);
    const updatedItem = {
      id: id,
      name: "Ali",
      age: 24,
      email: "ali@gmail.com",
    };
    data.splice(index, 1, updatedItem);

    setData([...data]);
  }
  
  return (
    <>
      {data.map((user) => {
        return (
          <Data id={user.id} key={user.id} name={user.name} age={user.age} gmail={user.email} update={Update}/>
        );
      })}
    </>
  );
};

export default App;
