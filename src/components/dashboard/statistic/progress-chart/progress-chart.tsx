import { Progress, Tooltip } from "antd";
import { ReactNode } from "react";

interface ProgressChartMiniProps {
  tooltipText: string;
  percent: number;
  strokeWidth?: number;
  width: number;
  format?: ReactNode;
  annotation?: ReactNode;
}

export const ProgressChart = ({
  tooltipText,
  percent,
  strokeWidth = 5,
  width,
  format,
  annotation
}: ProgressChartMiniProps) => {
  return (
    <>
      <Tooltip title={tooltipText}>
        <Progress
          percent={percent}
          strokeWidth={strokeWidth}
          format={() => format}
          width={width}
          type="circle" />
        {annotation}
      </Tooltip>
    </>
  );
};
