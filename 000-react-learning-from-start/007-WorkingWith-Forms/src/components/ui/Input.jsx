function Input({ label, id, name, value, onChange, error, type }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        // onChange={(e) =>
        //   setFormData({ ...formData, title: e.target.value })
        // }
        onChange={onChange}
      />
      <p className="error">{error}</p>
    </div>
  );
}

export default Input;
