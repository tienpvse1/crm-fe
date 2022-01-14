import { LineChartOutlined, MoreOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";

export const CardSale = () => {
    return (
        <Card className='featured-item' headStyle={{ color: '#082253' }} title="Total Sales" bordered={true} extra={<MoreOutlined />}>
            <Row gutter={[40, 24]} className='feature-container'>
                <Col span={8} >
                    <span className='feature-info'>$13k</span>
                </Col>
                <Col span={8} className='feature-cover'>
                    <span className='featureRate'>+$2,700
                    </span>
                </Col>
                <Col span={8}>
                    <LineChartOutlined className='featureIcon' />
                </Col>
            </Row>
            <span className='featureSub'>Since last week</span>
        </Card>
    )
}
