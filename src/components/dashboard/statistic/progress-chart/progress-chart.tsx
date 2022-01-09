import '../progress-chart/progress-chart.css';
import { Tooltip, Progress, Row, Col } from 'antd';
import 'antd/dist/antd.css';

export const ProgressChart = () => {
    const MONEY = 14850;
    return (
        <div className='progress-chart'>
            <Tooltip className='chart' color={'#3c76f1'} title=" Bank Transfer /  Credit Card">
                <Progress percent={60} strokeWidth={8} trailColor='#d8e4fc' format={(percent?: number) =>
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
