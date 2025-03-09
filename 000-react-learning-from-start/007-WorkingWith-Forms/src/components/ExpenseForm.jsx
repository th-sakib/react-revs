import { useState } from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";

function ExpenseForm({
  setExpenses,
  expense,
  setExpense,
  selectedFormEditId,
  setSelectedFormEditId,
}) {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    // e.target.value | holds the value which is the formData.title, formData.category states
    // e.target.name | holds the name of the input field as it was written in the input fields attribute

    // console.log(e.target.value); //results: ""
    // console.log(e.target.name); // results: title, category, amount

    const { name, value } = e.target;

    // setFormData({ ...formData, title: e.target.value });
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  const validationConfig = {
    title: [
      { required: "true", message: "Title is requied" },
      { minLenth: 3, message: "Title must be minimum 3 character long" },
    ],
    category: [{ required: "true", message: "category is requied" }],
    amount: [{ required: "true", message: "amount is requied" }],
  };

  const validateFormData = () => {
    const errorsData = {};

    // Object.entries(expense) // returns key value pairs in an array
    Object.entries(expense).forEach(([key, value]) => {
      /**
       * here some method use to iterate over the validatConfig's array (array is the props)
       *
       * because some method stop execution when it return true. so if the first rule returns true the loop will stop.
       */
      validationConfig[key].some((rules) => {
        if (rules.required && !value) {
          errorsData[key] = rules.message;
          return true;
        }

        if (rules.minLenth && value.trim().length < 3) {
          errorsData[key] = rules.message;
          return true;
        }
      });
    });

    // repetative way to validate
    // if (!expense.title) {
    //   errorsData.title = "Title is required";
    // }

    // if (!expense.category) {
    //   errorsData.category = "Please Select a Category";
    // }

    // if (!expense.amount) {
    //   errorsData.amount = "Amount is required";
    // }

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationRes = validateFormData();
    if (Object.keys(validationRes).length) return;

    /** ************ uncontrolled input form value retrival ************ */
    // const data = getFormData(e.target);
    // setExpense((prev) => [...prev, { ...data, id: crypto.randomUUID() }]);

    if (selectedFormEditId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === selectedFormEditId) {
            return { ...expense, id: selectedFormEditId };
          }
          return prevExpense;
        })
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setSelectedFormEditId("");
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
    setSelectedFormEditId(false);
  };

  /** ************ uncontrolled input form value retrival ************ */
  // const getFormData = (form) => {
  //   const formData = new FormData(form);

  //   const data = {};
  //   for (const [key, value] of formData) {
  //     data[key] = value;
  //   }

  //   return data;
  // };

  /** ************ ONE WAY DATABINDING ***********
   * This means only our code can menipulate data but not the other way.
   *
   * that's why we have to update the state in every keystroke by using onChange handler
   *
   * but there is frameworks like angular which has two way data binding ,
   * where input fields update dom without explicitely having the command in code.
   */

  return (
    <div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          label="title"
          name="title"
          id="title"
          value={expense.title}
          onChange={handleChange}
          error={errors.title}
        />
        {/* <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={expense.category}
            // onChange={(e) =>
            //   setFormData({ ...formData, category: e.target.value })
            // }
            onChange={handleChange}
          >
            <option hidden>Select Category</option>
            <option value="bills">Bills</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
          <p className="error">{errors.category}</p>
        </div> */}
        <Select
          label="Category"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          errorMsg={errors.category}
          defaultField="Select a Category"
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        />
        {/* <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            value={expense.amount}
            // onChange={(e) =>
            //   setFormData({ ...formData, amount: e.target.value })
            // }
            onChange={handleChange}
          />
          <p className="error">{errors.amount}</p>
        </div> */}
        <Input
          type="number"
          label="Amount"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          error={errors.amount}
        />
        <button className="add-btn">
          {selectedFormEditId ? "Save" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
