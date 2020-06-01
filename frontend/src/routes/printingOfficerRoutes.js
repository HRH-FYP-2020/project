
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// import UserProfile from '../views/UserProfile/UserProfile';
import UserProfile from '../views/UserProfile/UserProfile'
import SettingIcon from "@material-ui/icons/SettingsOutlined"
import TableList from "views/Delivery/financeTable/finacneTable";
import ViewData from 'views/showData/showData'
import Settings from 'views/Settings/Settings'
// import NotificationsPage from "views/Notifications/Notifications.js";
const dashboardRoutes = [
  {
    path: "/userProfile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/printingOfficer"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/printingOfficer"
  // },
  {
    path: "/request",
    name: "Printing Request",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/printingOfficer"
  },
   // },
   {
    path: "/settings",
    name: "Settings",
    icon: SettingIcon,
    component: Settings,
    layout: "/printingOfficer"
  },
  {
    path: "/viewData/:email",
    name: "view Data",
    icon: "content_paste",
    component: ViewData,
    layout: "/printingOfficer",
    hide:"true"
    
  },
];

export default dashboardRoutes;
