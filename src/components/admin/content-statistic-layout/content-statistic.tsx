import { Col, Row } from 'antd'
import { ChartColumn } from './chart-column'

export const ContentStatistic = () => {
  return (
    <>
      <Row style={{ height: '500px' }} gutter={[48, 0]}>
        <Col span={14} >
          <ChartColumn />
        </Col>
        <Col span={10}  >
          <div style={{ background: 'yellow', height: '100%' }}>789</div>
        </Col>
      </Row>
    </>
  )
}