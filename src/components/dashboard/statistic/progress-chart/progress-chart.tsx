import { Tooltip, Progress, Row, Col } from 'antd';

export const ProgressChart = () => {
    const MONEY = 14850;
    return (
        <div className='progress-chart'>
            <Tooltip className='chart' title=" Bank Transfer /  Credit Card">
                <Progress percent={60} strokeWidth={8} format={(percent?: number) =>
                    <>
                        <span className='moneyInfo'>${MONEY}</span>
                        <span className='moneySub'>Month Sales</span>
                    </>
                } width={200} type="circle" />
                <Row gutter={[20, 12]}>
                    <Col className='info' span={12} >
                        <div className='dot'></div>
                        <span className='title'>Bank Transfer </span>
                    </Col>
                    <Col className='info' span={12}>
                        <div className='dot second'></div>
                        <span className='title'>Credit Card</span>
                    </Col>
                </Row>
            </Tooltip>
        </div>
    )
}
