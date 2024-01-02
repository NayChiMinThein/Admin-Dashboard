import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import ListTable from "../../components/table/ListTable"
import Widgets from "../../components/widget/Widgets"

const Home = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <div className="w-full">
          <Navbar/>
          <div className="grid grid-cols-4 gap-6 m-6">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>
          <div className="flex mx-6">
            <Featured width="w-1/3"/>
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} width="w-2/3"/>
          </div>
          <div className="mx-6 my-6 shadow-md p-4 text-neutral-500 dark:text-neutral-400 font-medium">
            <div className="text-lg mb-3">Latest Transactions</div>
            <ListTable/>
          </div>
        </div>
    </div>
  )
}

export default Home