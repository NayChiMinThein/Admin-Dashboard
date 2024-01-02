import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import ListTable from "../../components/table/ListTable"

const ProductLists = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <div className="m-6">
            <ListTable/>
        </div>
      </div>
    </div>
  )
}

export default ProductLists