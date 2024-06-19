import React from "react";

export default function Expense({ name, amount, deleteExpense, index }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <p>{name}</p>
      <p>{amount}</p>
      <button style={{padding:'5px 10px'}} onClick={() => deleteExpense(index)}>delete</button>
    </div>
  );
}