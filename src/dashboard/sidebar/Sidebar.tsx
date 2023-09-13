import css from "../style.module.css";
import { SidebarItems } from "./SidebarItems";
import { SidebarHeader } from "./SidebarHeader";
import { useDashboardContext } from "../Provider";
import { Logout } from "./Logout";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

// height: -webkit-fill-available;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
  container: "pb-32 lg:pb-6 flex flex-col justify-between",
  close: "hidden lg:block lg:w-64 lg:z-auto",
  open: "w-8/12 absolute z-40 sm:w-5/12 lg:hidden",
  default: "bg-white h-screen overflow-y-auto top-0 lg:relative",
};

export function Sidebar(props: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container} style={{ height: "inherit" }}>
        <div>
          <SidebarHeader />
          <SidebarItems />
        </div>
        <Logout />
      </div>
    </aside>
  );
}
