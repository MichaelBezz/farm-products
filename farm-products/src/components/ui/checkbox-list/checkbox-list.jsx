import {Ul} from '../../styled';
import Checkbox from '../checkbox/checkbox';

function CheckboxList({
  name, // имя
  selectValues, // массив выбранных значений
  onChange, // событие при изменении
  labelComponent, // Компонент для отображения label
  onClickLabel = () => {},
  options // массив с объектами для выбора {title: заголовок, value: значение}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {options.map((option, index) => (
        <li key={option.value}>
          <Checkbox
            name={name}
            value={option.value}
            isChecked={selectValues.includes(option.value)}
            onChange={handleChange}
            labelComponent={labelComponent}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
          />
        </li>
      ))}
    </Ul>
  );
}

export default CheckboxList;
