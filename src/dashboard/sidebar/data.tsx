import { HomeIcon } from "./icons/HomeIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { SettingsIcon } from "./icons/SettingsIcon";

export const data = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "RBAC",
    icon: <ProjectIcon />,
    link: "/admin/rbac",
  },
  {
    title: "RBAC TEST",
    icon: <SettingsIcon />,
    link: "/client/rbac",
  },
  // {
  //   title: "Calendar",
  //   icon: <CalendarIcon />,
  //   link: "/admin/calendar",
  // },
  // {
  //   title: "Time manage",
  //   icon: <TimeManageIcon />,
  //   link: "/admin/time-manage",
  // },
  // {
  //   title: "Reports",
  //   icon: <ReportIcon />,
  //   link: "/admin/reports",
  // },
  // {
  //   title: "Settings",
  //   icon: <SettingsIcon />,
  //   link: "/admin/settings",
  // },
  // {
  //   title: "Documentation",
  //   icon: <DocIcon />,
  //   link: "/admin/documentation",
  // },
];
