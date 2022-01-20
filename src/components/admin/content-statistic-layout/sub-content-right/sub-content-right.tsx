import { TinyLine } from '@ant-design/charts';
import { ArrowUpOutlined, SmileTwoTone } from '@ant-design/icons';
import { ProgressChart } from '@components/dashboard/statistic/progress-chart/progress-chart';
import { ThemeColor } from '@constance/color';
import { Col, Row } from 'antd';
import { AvatarGroup } from './avatar-group';
import { CardStatistic } from './card-statistic';

export const SubContentRight = () => {
  const data = [
    264, 300, 417, 500, 400, 309, 200, 550, 520, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    width: 150,
    height: 120,
    autoFit: false,
    data,
    smooth: true,
    color: '#d62728'//primary color
  };

  return <>
    <Row>
      <Col span={24}>
        <CardStatistic
          titleCard="Sales Team Target"
          content={
            <>
              <span>75%</span>
              <span style={{ float: 'right', marginTop: '17px', marginRight: '17px' }}>
                <AvatarGroup />
              </span>
            </>
          }
          contentBottom={
            <span className="note-report">Achieved</span>
          }
          chartComponent={
            <ProgressChart
              tooltipText="75% Achieved"
              percent={75}
              width={110}
              format={<span className='icon-chart'><SmileTwoTone twoToneColor="#ebbf10" /></span>}
            />
          }
        />
      </Col>
      <Col span={24}>
        <CardStatistic
          titleCard="Cleared Queue"
          content={
            <>
              25k
            </>
          }
          contentBottom={
            <>
              <span className="note-report">No of Bills</span>
              <span style={{ color: ThemeColor.percentColorIncrease, marginLeft: '20px' }} className="percent-card" >
                <ArrowUpOutlined />+12%
              </span>
            </>
          }
          chartComponent={<TinyLine {...config} />}
        />
      </Col>
    </Row>
  </>;
};
