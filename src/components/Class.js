import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spent: [
        { description: "Food", amount: 300 },
        { description: "Fruit", amount: 200 },
      ],
    };
  }

  handleClick() {
    this.setState([
      ...this.state.spent,
      {
        description: document.querySelector("#desc").value,
        amount: document.querySelector("#amount").value,
      },
    ]);
    console.log(this.state.spent);
    document.querySelector("#desc").value = "";
    document.querySelector("#amount").value = "";
  }

  render() {
    return (
      <div style={{marginTop:"60px"}}>
        <h1>Class component</h1>
        <div>
          <input type="text" id="desc" /> &nbsp;
          <input type="text" id="amount" /> &nbsp;
          <button onClick={() => this.handleClick()}>Add</button>
        </div>
        <h4 style={{ marginBottom: "0px" }}>Spent List</h4>
        <ol>
          {this.state.spent.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.description}</span> : <span>{item.amount}</span>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default ClassComponent;
