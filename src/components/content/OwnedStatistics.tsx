import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ChartData,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { Doughnut } from "react-chartjs-2";

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

const OwnedStatistics = () => {
  const categoriesData: ChartData<"doughnut", number[], string> = {
    xLabels: [
      "Categoría 1",
      "Categoría 2",
      "Categoría 3",
      "Categoría 4",
      "Categoría 5",
      "Categoría 6",
    ],
    yLabels: [
      "Categoría 1",
      "Categoría 2",
      "Categoría 3",
      "Categoría 4",
      "Categoría 5",
      "Categoría 6",
    ],
    labels: [
      "Categoría 1",
      "Categoría 2",
      "Categoría 3",
      "Categoría 4",
      "Categoría 5",
      "Categoría 6",
    ],
    datasets: [
      {
        label: "# of resources",
        data: [12, 19, 3, 5, 2, 3],
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
  };

  const resourcesTypesData: ChartData<"doughnut", number[], string> = {
    xLabels: [
      "Resource Type 1",
      "Resource Type 2",
      "Resource Type 3",
      "Resource Type 4",
      "Resource Type 5",
      "Resource Type 6",
      "Resource Type 7",
      "Resource Type 8",
      "Resource Type 9",
    ],
    yLabels: [
      "Resource Type 1",
      "Resource Type 2",
      "Resource Type 3",
      "Resource Type 4",
      "Resource Type 5",
      "Resource Type 6",
      "Resource Type 7",
      "Resource Type 8",
      "Resource Type 9",
    ],
    labels: [
      "Resource Type 1",
      "Resource Type 2",
      "Resource Type 3",
      "Resource Type 4",
      "Resource Type 5",
      "Resource Type 6",
      "Resource Type 7",
      "Resource Type 8",
      "Resource Type 9",
    ],
    datasets: [
      {
        label: "# of resources",
        data: [12, 19, 3, 5, 2, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const monthsData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    values: [3, 4, 2, 5, 6, 3, 4], // Número de libros prestados por mes
  };

  const loansPerMonthData = {
    labels: monthsData.labels, // Ej: ['Enero', 'Febrero', 'Marzo', ...]
    datasets: [
      {
        label: "Resources borrowed per month",
        data: monthsData.values, // Ej: [3, 4, 2, 5, ...]
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  // const loansPerMonthOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Evolución de Libros Prestados por Mes",
  //     },
  //   },
  // };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  // };

  return (
    <Fragment>
      <section className="flex flex-row justify-evenly items-start">
        <div className="w-1/3 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Your favorite categories
          </h2>
          <Doughnut data={categoriesData} /* options={options}*/ />
        </div>

        <div className="w-1/3  mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Your favorite resources types
          </h2>
          <Doughnut data={resourcesTypesData} /* options={options}*/ />
        </div>
      </section>

      <section>
        <div className="p-20 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Your loans per month
          </h2>
          <Line data={loansPerMonthData} /* options={loansPerMonthOptions} */ />
        </div>
      </section>
    </Fragment>
  );
};

export default OwnedStatistics;