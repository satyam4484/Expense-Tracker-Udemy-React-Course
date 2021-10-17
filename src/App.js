import React,{useState} from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [add , setAdd] = useState(false);
  const [expense,setExpense] = useState(DummyExpense)
  const addExpenseHandler = expense =>{
    setExpense(prevExpenses =>{
      return [expense,...prevExpenses];
    });
  }

  const addHandler = (e)=>{
    if(add == false) {
      setAdd(true);
    }else{
      setAdd(false);
    }
    
  }
  
  return (
    <div>
      {add?
      <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <button  onClick={addHandler}>Cancel</button>
      </>
      :<button onClick={addHandler}>Add Expenses</button>}
      <Expenses items = {expense}/>
    </div>
  )
};

export default App;
