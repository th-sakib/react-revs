import { useState } from "react";
import useFilter from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

function ExpenseTable({
  expenses,
  setExpenses,
  setExpense,
  setSelectedFormEditId,
}) {
  // const [category, setCategory] = useState("");
  const [contextPosition, setContextPosition] = useState({
    left: 0,
    top: 0,
  });
  const [rowId, setRowId] = useState(null);
  const [filteredCategory, setCategory] = useFilter(
    expenses,
    (data) => data.category
  ); // refine with filter hook
  const total = expenses.reduce((acc, total) => {
    return acc + +total.amount;
  }, 0);

  // const filteredCategory = expenses.filter((expense) =>
  //   expense.category.toLowerCase().includes(category)
  // );

  return (
    <div>
      <ContextMenu
        contextPosition={contextPosition}
        setContextPosition={setContextPosition}
        rowId={rowId}
        expenses={expenses}
        setExpenses={setExpenses}
        setExpense={setExpense}
        setSelectedFormEditId={setSelectedFormEditId}
      />
      <table
        className="expense-table"
        onClick={() => setContextPosition({ left: 0, top: 0 })}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCategory.map((expense) => (
            <tr
              key={expense.id}
              onContextMenu={(e) => {
                e.preventDefault();
                setContextPosition({ left: e.clientX, top: e.clientY });
                setRowId(expense.id);
              }}
            >
              <td>{expense.title}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>${total}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
