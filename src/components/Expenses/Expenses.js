import React , {useState} from "react";

import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseChart from "./ExpenseChart";
import './Expenses.css'
import Card from "../UI/Card"

const Expenses = (props)=>{
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filterExpenses = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // using vairable 
    let expense = <p>No Expenses Found </p>
    if( filterExpenses.length > 0) {
        expense = filterExpenses.map(expense =>
            <ExpenseItem key={expense.id} title={expense.title} amount = {expense.amount} date = {expense.date}/> 
    )};
    
    

    return (
        <Card className="expenses">
            <ExpenseFilter  selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
            <ExpenseChart  expenses = {filterExpenses}/>
            {expense}


            {/* ****************************************************************************************** */}
            {/* javscript and method */}
            {/* {filterExpenses.length === 0 && <p>No Expenses Found </p>}
            {filterExpenses.length > 0 && filterExpenses.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount = {expense.amount} date = {expense.date}/> 
            )} */}

            {/* *********************************************************************************** */}
            {/* using javascript ternary operator  */}
            {/* {filterExpenses.length === 0 ? <p>No expensed Found</p>:
                filterExpenses.map(expense =>
                    <ExpenseItem key={expense.id} title={expense.title} amount = {expense.amount} date = {expense.date}/> 
                    )
            } */}
        </Card>
    )
}

export default Expenses;