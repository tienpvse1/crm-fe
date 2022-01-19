import { WrapperRowCard } from "@components/admin/wrapper-row-card";
import { SearchBar } from "@components/search-bar";
import { IStatisticsCard } from "@interfaces/admin/statistics-card";
import { Col, Row } from "antd"
import { Column } from "@ant-design/plots";
import { ThemeColor } from "../constance/color";
import { WrapperRowTitle } from "@components/admin/wrapper-row-title";
import { DashBoardAnnotation } from "@components/dashboard/dashboard-annotation";

const dataCard: IStatisticsCard[] =
  [
    {
      title: 'Product Sold',
      numberOfSales: '13.8k',
      percent: {
        status: 'increase',
        value: 12
      },
      color: '#fff3f0'
    },
    {
      title: 'Total Profit',
      numberOfSales: '$1.237k',
      percent: {
        status: 'decrease',
        value: 13
      },
      color: '#fff6f0'
    },
    {
      title: 'Total No. of Claims',
      numberOfSales: '1.3M',
      percent: {
        status: 'increase',
        value: 10
      },
      color: '#fffbf0'
    },
    {
      title: 'New Customer',
      numberOfSales: '25.6k',
      percent: {
        status: 'increase',
        value: 9
      },
      color: '#f0f6ff'
    }

  ]

const data = [
  {
    type: '2015',
    value: 15,
  },
  {
    type: '2016',
    value: 5,
  },
  {
    type: '2017',
    value: 9,
  },
  {
    type: '2018',
    value: 30,
  },
  {
    type: '2019',
    value: 24,
  },
  {
    type: '2020',
    value: 40,
  },
  {
    type: '2021',
    value: 20,
  },
  {
    type: '2022',
    value: 30,
  },
];

const paletteSemanticPink = '#f8cbca';
const brandColor = ThemeColor.primaryColor;
const config: any = {
  data,
  xField: 'type',
  yField: 'value',
  seriesField: '',
  color: ({ type }: any) => {
    if (type === '2016' || type === '2017') {
      return paletteSemanticPink;
    }

    return brandColor;
  },
  label: {
    content: (originData: any) => {
      const val = parseFloat(originData.value);

      if (val < 10) {
        return (val * 1).toFixed(1) + '%';
      }
    },
    offset: 10,
  },
  legend: false,
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
};

export const AdminPage = () => {

  return (
    <>
      <WrapperRowTitle
        title="OverView"
        titleSize="27px"
        children={<SearchBar placeholder="Search for id, name or phone number" />}
      />
      <Row gutter={[0, 46]}>
        <Col className="header-admin-page" span={24}>
          <WrapperRowCard dataCard={dataCard} />
        </Col>

        <Col className="content-admin-page" span={24}>
          <Row style={{ height: '500px' }} gutter={[48, 0]}>
            <Col span={14} >
              <WrapperRowTitle
                title="Claims Over The Years"
                titleSize="21px"
                children={
                  <DashBoardAnnotation
                    titleDot1="Approved"
                    titleDot2="Submitted"
                    styleNameDot1="chart-dot-1"
                    styleNameDot2="chart-dot-2"
                    styleNameWrapperDot="graph-annotation"
                  />}
              />
              <Column {...config} />
            </Col>
            <Col span={10}  >
              <div style={{ background: 'yellow', height: '100%' }}>789</div>
            </Col>
          </Row>
        </Col>

        <Col className="footer-admin-page" style={{ height: '400px' }} span={24}>
          <div style={{ background: '#0092ff', height: '100%' }}>101112</div>
        </Col>
      </Row>
    </>
  )
}
