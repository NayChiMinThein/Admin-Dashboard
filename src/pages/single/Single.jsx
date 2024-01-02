import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import userImg from "../../images/sefile-removebg.png"
import Chart from "../../components/chart/Chart"
import ListTable from "../../components/table/ListTable"

const Single = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="m-6 flex gap-5">
          <div className="shadow-md w-1/3 p-5 relative dark:bg-slate-950 dark:shadow-slate-800">
            <div className="absolute top-0 right-0 text-sm text-violet-800 bg-violet-100 py-1 px-2 rounded-tr-md">
              Edit
            </div>
            <h4 className="text-xl text-neutral-400 font-bold mb-5">Information</h4>
            <div className="flex">
              <img src={userImg} className="w-36 h-36 rounded-full object-cover border-2 border-violet-600 me-5" />
              <div className="">
                <h2 className="text-4xl text-neutral-600 dark:text-neutral-300 font-bold">Ivis Jane</h2>
                <div className="my-3">
                  <span className="font-medium text-neutral-500 dark:text-neutral-400 me-1">Email : </span>
                  <span className="dark:text-white">ivisjane@gmail.com</span>
                </div>
                <div className="">
                  <span className="font-medium text-neutral-500 dark:text-neutral-400 me-1">Phone : </span>
                  <span className="dark:text-white">+95 9769 394623</span>
                </div>
                <div className="my-3">
                  <span className="font-medium text-neutral-500 dark:text-neutral-400 me-1">Address : </span>
                  <span className="dark:text-white">Mmk St. 66 Sanchaung Yd. Yangon</span>
                </div>
                <div className="">
                  <span className="font-medium text-neutral-500 dark:text-neutral-400 me-1">Country : </span>
                  <span className="dark:text-white">Myanmar</span>
                </div>
              </div>
            </div>
          </div>
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" width="w-2/3"/>
        </div>
        <div className="mx-6 shadow-md p-4 text-neutral-500 font-medium">
          <div className="text-lg mb-4">Latest Transactions</div>
          <ListTable/>
      </div>
    </div>
  </div>
  )
}

export default Single