import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  DoughnutControllerChartOptions,
} from "chart.js";
import { MAIN_YELLOW, TINT_GREY } from "utils/color";

ChartJS.register(ArcElement, Tooltip, Legend);

const Status = () => {
  const data = {
    labels: ["Ready to deploy", "Archive"],
    datasets: [
      {
        label: "Facility Status",
        data: [30, 70],
        fill: false,
        backgroundColor: [TINT_GREY, MAIN_YELLOW],
        hoverOffset: 4,
        tension: 0.1,
      },
    ],
  };

  const options: Partial<
    ChartOptions<"doughnut"> & DoughnutControllerChartOptions
  > = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          boxPadding: 10,
          color: "black",
          borderRadius: 5,
        },
      },
    },
  };

  return <Doughnut data={data} height={400} options={options} />;
};

export default Status;
