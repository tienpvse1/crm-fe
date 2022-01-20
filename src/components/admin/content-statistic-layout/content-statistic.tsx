import { ThemeColor } from '@constance/color';
import { Col, Row } from 'antd'
import { SubContentLeft } from './sub-content-left/sub-content-left';
import { SubContentRight } from './sub-content-right/sub-content-right';

export const ContentStatistic = () => {

  return (
    <>
      <Row gutter={[42, 0]}>
        <Col span={14} >
          <SubContentLeft />
        </Col>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            border: ThemeColor.cardBorder,
            boxShadow: ThemeColor.boxShadowCardDashBoard
          }} span={10}  >
          <SubContentRight />
        </Col>
      </Row>
    </>
  )
}