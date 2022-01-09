import { Card, Col, Row } from 'antd';
import { DollarCircleTwoTone, DropboxOutlined, LineChartOutlined, MoreOutlined, TagOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "../../dashboard/card/card.css";
import { CardMoney } from './card-money';
import { CardOrders } from './card-orders';
import { CardSale } from './card-sales';
import { CardTicket } from './card-ticket';
export const CardBoard = () => {
    const SIZE_CARD = 6;
    const SIZE_GUTTER = 18;
    const SIZE_OFFSET = 0;
    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={SIZE_GUTTER}>
                    <Col span={SIZE_CARD} offset={SIZE_OFFSET}>
                        <CardMoney />
                    </Col>
                    <Col span={SIZE_CARD}>
                        <CardOrders />
                    </Col>
                    <Col span={SIZE_CARD}>
                        <CardSale />
                    </Col>
                    <Col span={SIZE_CARD}>
                        <CardTicket />
                    </Col>
                </Row>
            </div>
        </>
    )
}
