export const CheckBox = ({
  label,
  value,
  onChange,
  name,
  id,
  checked,
  onclick,
}) => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          onClick={onclick}
        />
        {label}
      </label>
    </>
  );
};
