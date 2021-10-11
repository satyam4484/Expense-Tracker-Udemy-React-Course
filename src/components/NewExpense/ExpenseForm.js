import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event)=>{
    const expense = {
        title:enteredTitle,
        amount:enteredAmount,
        date : new Date(enteredDate),
    }
    props.onSaveFormData(expense);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <h1>Add New Expense </h1>
        <div>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="Title"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
            //   min="0.05"
            //   step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
