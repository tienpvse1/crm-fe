import { IStatisticsCard } from '@interfaces/admin/statistics-card'
import { Col, Row } from 'antd'
import CardSales from './card-sales'

interface WrapperRowCardProps {
  dataCard: IStatisticsCard[];
}

export const WrapperRowCard = ({ dataCard }: WrapperRowCardProps) => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {dataCard.map((cardInfo: any, index: number) =>
        <Col key={cardInfo.title} span={6}>
          <CardSales cardInfo={cardInfo} cardIndex={index} />
        </Col>)}
    </Row>
  )
}
