import { DropboxOutlined, MoreOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'

export const CardOrders = () => {
    return (
        <Card className='featured-item' title="Total Orders" bordered={true} extra={<MoreOutlined />}>
            <Row gutter={[40, 24]} className='feature-container'>
                <Col span={8} >
                    <span className='feature-info'>$25k</span>
                </Col>
                <Col span={8} className='feature-cover'>
                    <span className='featureRate'>+$8,700
                    </span>
                </Col>
                <Col span={8} className='feature-cover'>
                    <DropboxOutlined className='featureIcon' />
                </Col>
            </Row>
            <span className='featureSub'>Since last week</span>
        </Card>

    )
}
