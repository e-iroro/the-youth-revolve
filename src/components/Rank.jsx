import React from "react";

function Rank() {
  return (
    <div className="relative py-10 overflow-x-auto shadow-md sm:rounded-lg">
    <h1 className=" font-bold text-3xl text-center py-4">View Our Leaderboard </h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Day
            </th>
            <th scope="col" className="px-6 py-3">
              WEEK
            </th>
            <th scope="col" className="px-6 py-3">
              MONTH
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Renike Balogun
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Ayo Balogun
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Wole Balogun
            </th>

          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Renike Balogun
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Ayo Balogun
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Wole Balogun
            </th>

          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Rank;
