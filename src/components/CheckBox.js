import { CheckBoxStyled } from "../styles/PanelStyled";


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
