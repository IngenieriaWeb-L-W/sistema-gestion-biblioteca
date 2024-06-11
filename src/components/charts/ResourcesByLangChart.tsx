"use client";

import { useAppDispatch } from "@/config/redux/store.config";
import { fetchResourceStatsByLangMiddleware } from "@/middleware/resource-stats.middleware";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ResourcesByLangChartProps = {
  resourceId: string;
};

const ResourcesByLangChart = ({ resourceId }: ResourcesByLangChartProps) => {
  const dispatch = useAppDispatch();
  const [chartData, setChartData] =
    useState<ChartData<"doughnut", number[], string>>();

  useEffect(() => {
    dispatch(fetchResourceStatsByLangMiddleware(resourceId)).then((data) => {
      if (!data) return;
      setChartData({
        labels: [...data.map(({ lang }) => lang)],
        datasets: [
          {
            label: "# of items",
            data: [...data.map(({ count }) => count)],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    });
  }, [dispatch, resourceId]);

  return (
    <div>
      {chartData ? (
        <Doughnut data={chartData} /* options={options}*/ />
      ) : (
        <div>
          <p className="w-full text-center my-5">Loading chart info...</p>
        </div>
      )}
    </div>
  );
};

export default ResourcesByLangChart;
