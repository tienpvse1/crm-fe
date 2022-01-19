import { Col, Row } from 'antd'
import { ReactNode } from 'react'

interface WrapperRowTitleProps {
  title: string;
  children?: ReactNode;
  titleSize: string;
}

export const WrapperRowTitle = ({ children, title, titleSize }: WrapperRowTitleProps) => {
  return (
    <>
      <Row>
        <Col className="wrapper-title-admin-page" span={24} >
          <span style={{ fontSize: `${titleSize}` }} className="title-admin-page">{title}</span>
          {children}
        </Col>
      </Row>
    </>
  )
}
