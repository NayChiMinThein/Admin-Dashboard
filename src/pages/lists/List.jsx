import Datatable from "../../components/dataTable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"

const List = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List