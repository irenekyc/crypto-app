import { FunctionComponent } from "react";
import { Line } from "react-chartjs-2";

interface PriceChartProps {
  value: number[];
  labels: string[];
  yAxesLabel: string;
}

const PriceChart: FunctionComponent<PriceChartProps> = ({
  yAxesLabel,
  value,
  labels,
}: PriceChartProps) => {
  const data = {
    labels,
    datasets: [
      {
        label: yAxesLabel,
        data: value,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default PriceChart;
