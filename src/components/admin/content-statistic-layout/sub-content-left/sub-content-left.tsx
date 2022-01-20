import { DashBoardAnnotation } from "@components/dashboard/dashboard-annotation";
import { ChartColumn } from "@components/dashboard/statistic/chart-column/chart-column";
import { WrapperRowTitle } from "@components/layout/title-pages/wrapper-row-title";

export const SubContentLeft = () => {
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
      <ChartColumn />
    </>
  )

};
