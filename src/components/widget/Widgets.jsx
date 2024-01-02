/* eslint-disable react/prop-types */
import { IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";

const Widgets = ({type}) => {
  let data;

  // temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <div className="bg-red-200 p-2 rounded-md">
            <FaRegUser className="text-xs text-red-600"/>
          </div>
      )
      }
    break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all orders',
        icon: (
          <div className="bg-yellow-100 p-2 rounded-md">
            <MdOutlineShoppingCart className="text-yellow-600"/>
          </div>
        )
      }
    break;
    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <div className="bg-green-200 p-2 rounded-md">
            <LuCircleDollarSign className="text-green-600"/>
          </div>
        )
      }
    break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'View details',
        icon: (
          <div className="bg-violet-200 p-2 rounded-md">
            <MdOutlineAccountBalanceWallet className="text-violet-600"/>
          </div>
        )
      }
    break;
    default:
    break;
  }

  return (
    <div className="shadow-md rounded-md p-3 dark:bg-slate-950 dark:shadow-slate-700">
      <div className="flex items-center justify-between mb-4">
        <span className="text-neutral-400 font-bold">{data.title}</span>
        <div className="flex text-green-700">
          <IoIosArrowUp className="text-lg me-1"/>
          {diff} %
        </div>
      </div>
      <span className="text-3xl font-light dark:text-white">{data.isMoney && '$'} {amount}</span>
      <div className="flex items-center justify-between mt-3 dark:text-white">
        <span className="text-sm underline">{data.link}</span>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets