import React, { useState } from "react";

const Functional = () => {
  const [spent, setSpent] = useState([
    { description: "Food", amount: 300 },
    { description: "Fruit", amount: 200 },
  ]);
  const handleClick = () => {
    setSpent([
      ...spent,
      {
        description: document.querySelector("#desc").value,
        amount: document.querySelector("#amount").value,
      },
    ]);
    console.log(spent);
    document.querySelector("#desc").value = "";
    document.querySelector("#amount").value = "";
  };
  return (
    <div>
      <h1>Function component</h1>
      <div>
        <input type="text" id="desc" /> &nbsp;
        <input type="text" id="amount" /> &nbsp;
        <button onClick={() => handleClick()}>Add</button>
      </div>
      <h4 style={{marginBottom:"0px"}}>Spent List</h4>
      <ol>
        {spent.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.description}</span> : <span>{item.amount}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Functional;
