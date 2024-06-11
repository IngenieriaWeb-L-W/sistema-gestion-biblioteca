import { Fragment } from "react";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import ResourcesByLangChart from "../charts/ResourcesByLangChart";
import ResourcesByTestimonialsChart from "../charts/ResourcesByLangTestimonialsChart";
import ResourcesByStatusChart from "../charts/ResourcesByStatusChart";

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

      {/* <section>
        <div className="p-20 mx-auto">
          <h2 className="text-center mt-5 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Resource loans count by period
          </h2>
          <Line data={loansPerMonthData} />
          <button
            className="inline-flex mt-5 ml-3 bg-blue-800 items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            type="button"
          >
            Change period
          </button>
        </div>
      </section> */}
    </Fragment>
  );
};

export default ResourceStatistics;
