import { ClockCircleOutlined, FlagOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider, Tag } from "antd"
const { Meta } = Card;
export const PipelineItem = () => {
  return (
    <>
      <Card
        style={{
          width: '100%',
          height: 160,
          borderRadius: 5,
          marginTop: 10,
          boxShadow: '0px 0px 9px 0px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Meta
          title={
            <>
              <span style={{ fontWeight: 300 }}><FlagOutlined style={{ color: 'green' }} /> Abm - 002</span>
              <Tag color={'blue'} style={{ marginLeft: 10, borderRadius: 5 }}>Design</Tag>
            </>
          }
          description={
            <>
              <div style={{ fontSize: 16 }}>
                UX - User Flow
              </div>
              <Divider style={{ marginBottom: 6, borderTop: '1px solid #D4D4D8' }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span><MessageOutlined style={{ fontSize: 18 }} /> 2 </span>
                  <span><ClockCircleOutlined style={{ fontSize: 18 }} /> 2h </span>
                  <span>
                    <Tag style={{ marginLeft: 10, borderRadius: 5 }}>2h</Tag>
                  </span>

                </div>
                <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                </Avatar.Group>
              </div>
            </>
          }
        />
      </Card>
    </>
  )
}
