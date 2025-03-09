function ContextMenu({
  contextPosition,
  setContextPosition,
  rowId,
  expenses,
  setExpenses,
  setExpense,
  setSelectedFormEditId,
}) {
  if (!contextPosition.left) return;

  const handleDelete = () => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== rowId));
    setContextPosition({ left: 0, top: 0 });
  };

  const handleEdit = () => {
    const selectedData = expenses.find((expense) => expense.id === rowId);
    setExpense({
      title: selectedData.title,
      category: selectedData.category,
      amount: selectedData.amount,
    });
    setSelectedFormEditId(selectedData.id);
    setContextPosition({ left: 0, top: 0 });
  };

  return (
    <div className="context-menu" style={{ ...contextPosition }}>
      <div onClick={handleEdit}>Edit</div>
      <div onClick={handleDelete}>Delete</div>
    </div>
  );
}

export default ContextMenu;
