function Checkbox({
  name,
  value,
  isChecked,
  onChange,
  labelComponent,
  text,
  onClick
}) {
  const LabelComponent = labelComponent;

  return (
    <label>
      <input
        className="visually-hidden"
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelComponent>
    </label>
  );
}

export default Checkbox;
