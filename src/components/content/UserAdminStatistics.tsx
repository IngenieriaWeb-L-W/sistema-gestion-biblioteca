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

const UserAdminStatistics = () => {
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
      <h1 className="text-5xl text-red-500 font-black">
        Agregar aquí un select para traer el usuario lueg ver las estadisticas
        del mismo, estadisticas de admin, como por ejemplo los libros que ha
        prestado, los libros que ha devuelto, los libros que tiene en prestamo,
        los eventos de login, edición de perfil, log de actividades, etc.
      </h1>
      <section className="flex flex-row justify-evenly items-start">
        <div className="w-1/3 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            User&apos;s favorite categories
          </h2>
          <Doughnut data={categoriesData} /* options={options}*/ />
        </div>

        <div className="w-1/3  mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            User&apos;s favorite resources types
          </h2>
          <Doughnut data={resourcesTypesData} /* options={options}*/ />
        </div>
      </section>

      <section className="flex my-10 flex-row justify-evenly items-start">
        <div className="w-1/3 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            User&apos;s loans per month
          </h2>
          <Line data={loansPerMonthData} /*options={loansPerMonthOptions}*/ />
          <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
            <div>
              <button
                className="inline-flex bg-blue-800 items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                type="button"
              >
                Change period
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/3 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            User&apos;s logins per month
          </h2>
          <Line data={loansPerMonthData} /*options={loansPerMonthOptions}*/ />
          <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
            <div>
              <button
                className="inline-flex bg-blue-800 items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                type="button"
              >
                Change period
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default UserAdminStatistics;
