import { 
    MdDashboard, MdOutlineCreditCard, MdLocalShipping, MdInsertChart, MdNotificationsNone, MdOutlinePsychology, 
    MdSettings, MdLogout } from "react-icons/md";
import { FaRegUser, FaShop } from "react-icons/fa6";
import { BiHealth } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../darkMode/DarkModeProvider";

const Sidebar = () => {
    // eslint-disable-next-line no-unused-vars
    const {darkMode, setDarkMode} = useDarkMode()

  return (
    <div className="w-60 border-r-2 border-r-slate-100 dark:border-r-slate-800 h-screen sticky top-0 left-0">
        <div className="my-4 text-center">
            <Link to="/">
                <span className="text-2xl text-violet-700 dark:text-violet-400 font-semibold">
                    ivisadmin
                </span>
            </Link>
            <hr className="mt-3 dark:border-slate-800" />
        </div>
        <div className="mx-4 text-neutral-600 dark:text-slate-400">
            <ul>
                <p className="text-sm font-semibold text-neutral-500">MAIN</p>
                <Link to="/">
                    <li className="flex ms-4 mt-2 mb-5 hover:text-violet-800 dark:hover:text-violet-500">
                        <MdDashboard className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                        <span className="">Dashboard</span>
                    </li>
                </Link>

                <p className="text-sm font-semibold text-neutral-500">LISTS</p>
                <Link to="/users">
                    <li className="flex ms-4 mt-3 mb-2 hover:text-violet-800 dark:hover:text-violet-500">
                        <FaRegUser className="text-violet-700 dark:text-violet-500 me-2"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products">
                    <li className="flex ms-4 mb-2 hover:text-violet-800 dark:hover:text-violet-500">
                        <FaShop className="text-lg text-violet-700 dark:text-violet-500 me-2"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li className="flex ms-4 mb-2 hover:text-violet-800 dark:hover:text-violet-500">
                    <MdOutlineCreditCard className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Orders</span>
                </li>
                <li className="flex ms-4 mb-5 hover:text-violet-800 dark:hover:text-violet-500">
                    <MdLocalShipping className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Delievery</span>
                </li>
                
                <p className="text-sm font-semibold text-neutral-500">USEFUL</p>
                <li className="flex ms-4 mt-2 mb-2 hover:text-violet-800 dark:hover:text-violet-500">
                    <MdInsertChart className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Stats</span>
                </li>
                <li className="flex ms-4 mb-5 hover:text-violet-800 dark:hover:text-violet-500">
                    <MdNotificationsNone className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Notifications</span>
                </li>

                <p className="text-sm font-semibold text-neutral-500">SERVICE</p>
                <li className="flex ms-4 mt-2 mb-2 hover:text-violet-800 dark:hover:text-violet-500">
                    <BiHealth className="text-lg text-violet-700 dark:text-violet-500 me-2"/>
                    <span>System Health</span>
                </li>
                <li className="flex ms-4 mb-2 hover:text-violet-800 dark:hover:text-violet-500">
                    <MdOutlinePsychology className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Logs</span>
                </li>
                <li className="flex ms-4 mb-5 hover:text-violet-800 dark:hover:text-violet-500">
                    <MdSettings className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Settings</span>
                </li>

                <p className="text-sm font-semibold text-neutral-500">USER</p>
                <li className="flex ms-4 mt-2 mb-2 hover:text-violet-800 dark:hover:text-violet-500">
                    <CgProfile className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Profile</span>
                </li>
                <li className="flex ms-4 mb-5 hover:text-violet-800 dark:hover:text-violet-500">
                    <MdLogout className="text-xl text-violet-700 dark:text-violet-500 me-2"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>

        <p className="text-sm font-semibold text-neutral-500 mx-4">THEME</p>
        <div className="mx-8 mt-2 flex">
            <button
                className="w-7 h-7 border border-violet-300 rounded-md bg-slate-50 me-3"
                onClick={() => setDarkMode(false)}
            ></button>
            <button 
                className="w-7 h-7 border border-violet-300 rounded-md bg-slate-950"
                onClick={() => setDarkMode(true)}
            ></button>
        </div>
    </div>
  )
}

export default Sidebar