import { Checkbox, List } from "antd";
//fake data is here sorry i will fix after have real data
const data = [
  {
    title: 'Received message',
    description: `Received message`,
  },
  {
    title: 'Received mail',
    description: 'Received mail',
  },
  {
    title: 'Alternate Email',
    description: 'Registered email: ant***@gmail.com',
  },
];

export const ListAdditional = () => {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[<Checkbox />]}
        >
          <List.Item.Meta
            title={<>{item.title}</>}
            description={
              <>
                <span>{item.description}</span>
              </>
            }
          />
        </List.Item>
      )}
    />
  )
}
