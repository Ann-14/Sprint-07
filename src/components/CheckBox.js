import { CheckBoxStyled } from "../styles/StyledComponents";


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
        <CheckBoxStyled
          type="checkbox"
          className="w-4 h-4 text-blue-600  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
