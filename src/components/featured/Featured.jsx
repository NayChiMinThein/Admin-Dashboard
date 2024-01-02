/* eslint-disable react/prop-types */
import { FiMoreVertical } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = ({width}) => {
  return (
    <div className={`me-4 shadow-md p-4 text-neutral-500 dark:text-slate-400 dark:bg-slate-950 
      dark:shadow-slate-800 ${width}`}>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Total Revenue</h2>
        <FiMoreVertical className="text-xl"/>
      </div>
      <div className="mt-6 text-center">
        <div className="w-32 mx-auto">
          <CircularProgressbar
            value={70}
            text="70%"
            strokeWidth={5}
            styles={{
              path: {
                stroke: 'rgb(139 92 246)'
              },
              text: {
                fill: 'rgb(139 92 246)'
              }
            }}
          />
        </div>
        <p className="mt-4 text-lg">Total sales made today</p>
        <p className="text-4xl mt-5 mb-6 text-black dark:text-slate-300">$420</p>
        <p>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="flex items-center justify-around mt-7">
          <div>
            <h4>Target</h4>
            <div className="flex mt-2 text-red-600">
              <IoIosArrowDown className="text-base me-1"/>
              <p>$12.4k</p>
            </div>
          </div>
          <div>
            <h4>Last Week</h4>
            <div className="flex mt-2 text-green-700">
              <IoIosArrowUp className="text-base me-1"/>
              <p>$12.4k</p>
            </div>
          </div>
          <div>
            <h4>Last Month</h4>
            <div className="flex mt-2 text-green-700">
              <IoIosArrowUp className="text-base me-1"/>
              <p>$12.4k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured