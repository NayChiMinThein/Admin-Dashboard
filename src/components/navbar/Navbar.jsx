import { 
  MdOutlineSearch, MdOutlineLanguage, MdOutlineDarkMode, MdOutlineLightMode, MdOutlineFullscreenExit, MdNotificationsNone,
  MdChatBubbleOutline, MdOutlineList} from "react-icons/md";
import authorImg from "../../images/sefile-removebg.png"
import { useDarkMode } from "../../darkMode/DarkModeProvider";

const Navbar = () => {
  const {darkMode, setDarkMode} = useDarkMode()

  return (
    <nav className="border border-transparent border-b-slate-200 dark:border-b-slate-800 py-2 text-slate-600 
      dark:text-gray-400">
      <div className="flex items-center justify-between">
        <div className="flex items-center ms-4 my-1 border border-slate-100 dark:border-slate-600 py-2 px-1 
          rounded-md">
          <input type="text" className="outline-0 ms-1 text-sm dark:bg-slate-950" placeholder="Search..."/>
          <MdOutlineSearch className="text-xl"/>
        </div>

        <div className="flex items-center me-4">
          <div className="flex items-center me-4 text-sm">
            <MdOutlineLanguage className="text-lg me-1"/>
            English
          </div>
          <div className="me-6 cursor-pointer" onClick={() => setDarkMode(prevMode => !prevMode)}>
            {darkMode ? <MdOutlineLightMode className="text-xl"/> : <MdOutlineDarkMode className="text-xl"/>}
          </div>
          <div className="me-6">
            <MdOutlineFullscreenExit className="text-lg"/>
          </div>
          <div className="me-6 relative">
            <MdNotificationsNone className="text-lg"/>
            <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-4 h-4 text-xs text-center">
              1
            </div>
          </div>
          <div className="me-6 relative">
            <MdChatBubbleOutline className="text-lg"/>
            <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-4 h-4 text-xs text-center">
              2
            </div>
          </div>
          <div className="me-5">
            <MdOutlineList className="text-lg"/>
          </div>
          <img src={authorImg} className="w-8 h-8 rounded-full border border-violet-600" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar