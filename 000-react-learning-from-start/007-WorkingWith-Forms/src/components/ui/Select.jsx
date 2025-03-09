function Select({
  label,
  id,
  name,
  value,
  onChange,
  errorMsg,
  options,
  defaultField,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        // onChange={(e) =>
        //   setFormData({ ...formData, category: e.target.value })
        // }
        onChange={onChange}
      >
        {defaultField && <option>{defaultField}</option>}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{errorMsg}</p>
    </div>
  );
}

export default Select;
