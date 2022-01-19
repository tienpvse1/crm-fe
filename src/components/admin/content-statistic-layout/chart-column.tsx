import { Column } from '@ant-design/charts';
import { DashBoardAnnotation } from '@components/dashboard/dashboard-annotation';
import { ThemeColor } from "../../../constance/color";
import { WrapperRowTitle } from '../../layout/title-pages/wrapper-row-title';

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

export const ChartColumn = () => {
  return (
    <>
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
    </>
  )
}
