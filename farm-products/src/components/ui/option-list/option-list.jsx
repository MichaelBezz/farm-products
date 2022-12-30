import {Ul} from '../../styled';
import {Option, Property} from './styles';

function OptionsList({list = [], delimeter = ": "}) {
  return (
    <Ul>
      {list.map((option) => (
        <Option key={option.property}>
          <Property>
            {option.property}
            {delimeter}
          </Property>

          {option.value}
        </Option>
      ))}
    </Ul>
  );
}

export default OptionsList;
