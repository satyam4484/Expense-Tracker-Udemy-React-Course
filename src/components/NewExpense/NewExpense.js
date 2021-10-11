import ExpenseForm from "./ExpenseForm"


const NewExpense = (props)=>{

    const saveExpenseDataHandler = (expense)=>{
        const expenseData = {
            ...expense,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    

    return (
        <div>
            <ExpenseForm onSaveFormData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;