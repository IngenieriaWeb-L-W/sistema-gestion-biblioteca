import { Fragment } from "react";
import { Line } from "react-chartjs-2";

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
import { Doughnut } from "react-chartjs-2";
import ResourcesByLangChart from "../charts/ResourcesByLangChart";
import ResourcesByStatusChart from "../charts/ResourcesByStatusChart";
import ResourcesByTestimonialsChart from "../charts/ResourcesByLangTestimonialsChart";

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

type ResourceStatistics = {
  id: string;
};

const ResourceStatistics = ({ id }: ResourceStatistics) => {
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

  const barChartData = (labels: string[], values: number[]) => ({
    labels,
    datasets: [
      {
        label: "Número de Recursos Prestados",
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  // const barChartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Recursos más Prestados",
  //     },
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const barChartExampleData: { [key: string]: any } = {
    BOOK: {
      labels: [
        "Libro 1",
        "Libro 2",
        "Libro 3",
        "Libro 4",
        "Libro 5",
        "Libro 6",
        "Libro 7",
        "Libro 8",
        "Libro 9",
        "Libro 10",
      ],
      values: [12, 19, 3, 5, 2, 3, 7, 8, 9, 10],
    },
    MAGAZINE: {
      labels: [
        "Revista 1",
        "Revista 2",
        "Revista 3",
        "Revista 4",
        "Revista 5",
        "Revista 6",
        "Revista 7",
        "Revista 8",
        "Revista 9",
        "Revista 10",
      ],
      values: [5, 10, 3, 8, 6, 9, 2, 7, 4, 11],
    },
    DVD: {
      labels: [
        "DVD 1",
        "DVD 2",
        "DVD 3",
        "DVD 4",
        "DVD 5",
        "DVD 6",
        "DVD 7",
        "DVD 8",
        "DVD 9",
        "DVD 10",
      ],
      values: [3, 7, 8, 9, 6, 5, 4, 2, 11, 10],
    },
  };

  return (
    <Fragment>
      <section className="flex flex-row justify-evenly items-start">
        <div className="w-1/3 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Resources by Status
          </h2>
          <ResourcesByStatusChart resourceId={id} />
        </div>

        <div className="w-1/3  mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Resources by Language
          </h2>
          <ResourcesByLangChart resourceId={id} />
        </div>
      </section>
      <section className="flex mt-10 mb-5 flex-row justify-evenly items-start">
        <div className="w-1/2  mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <ResourcesByTestimonialsChart resourceId={id} />
        </div>
      </section>

      <section>
        <div className="p-20 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Resource loans count by period
          </h2>
          <Line data={loansPerMonthData} /*options={loansPerMonthOptions}*/ />
          <button
            className="inline-flex mt-5 ml-3 bg-blue-800 items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            type="button"
          >
            Change period
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default ResourceStatistics;
