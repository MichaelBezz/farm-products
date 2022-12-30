import {useState} from 'react';
import {TabSection, TabList, TabItem, TabButton, Content} from './styles';

function Tabs({tabsList = []}) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <TabSection>
      <TabList>
        {tabsList.map((tab, index) => (
          <TabItem key={tab.title}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? {as: "span"}
                : {onClick: () => {setSelectIndex(index)}}
              )}
            >
              {tab.title}
            </TabButton>
          </TabItem>
        ))}
      </TabList>

      <Content $maxContentHeight="105px">
        {tabsList[selectIndex].content}
      </Content>
    </TabSection>
  );
}

export default Tabs;
