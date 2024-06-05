import { Fragment } from "react";
import { Bar, Line } from "react-chartjs-2";

import { ResourceTypes } from "@/interfaces/resource/Type";
import {
  ArcElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
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

const AllUsersStatistics = () => {
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
            Users&apos; favorite categories
          </h2>
          <Doughnut data={categoriesData} /* options={options}*/ />
        </div>

        <div className="w-1/3  mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Users&apos; favorite resources types
          </h2>
          <Doughnut data={resourcesTypesData} /* options={options}*/ />
        </div>
      </section>

      <section>
        <div className="p-20 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Number of resources borrowed per month
          </h2>
          <Line data={loansPerMonthData} /* options={loansPerMonthOptions} */ />
        </div>
      </section>

      <section>
        <div className="p-20 mx-auto">
          {/* <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Number of resources borrowed per month
          </h2> */}
          {Object.keys(ResourceTypes)
            .filter((type) => type !== ResourceTypes.ALL)
            .map((type) => (
              <Fragment key={type}>
                <h2 className="mt-20 text-2xl text-center mb-2">
                  Most borrowed resources type: {type}
                </h2>
                <Bar
                  data={barChartData(
                    barChartExampleData[type]?.labels || [],
                    barChartExampleData[type]?.values || []
                  )} /* options={loansPerMonthOptions} */
                />
              </Fragment>
            ))}
        </div>
      </section>
    </Fragment>
  );
};

export default AllUsersStatistics;