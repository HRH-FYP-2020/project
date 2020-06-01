
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Messages from "@material-ui/icons/Mail";
import Application from "@material-ui/icons/Receipt";
import Person from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import App from "@material-ui/icons/Apps"
import event from "@material-ui/icons/CalendarToday"
import MessagesLayout from 'views/Messages/Messages'
// import Logout from "@material-ui/icons/"
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/preDashBoard.js";

import UserProfile from "views/UserProfile/UserProfile.js";
// import UpdateProfile from "views/UserProfile/updateProfile";
// import TableList from "views/TableList/TableList.js";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
import CreateUser from 'views/Admin/createUser/createuser'
// import NotificationsPage from "views/Notifications/Notifications.js";
import AccountDetails from "views/Admin/viewUsers/viewUsers"
import ViewApplications from "views/Admin/viewMembersData/viewApplication"
import ViewData from 'views/showData/showData'
import ViewMemberShip from "views/Admin/ViewMembers/ViewMemberShips"
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";
import Settings from 'views/Settings/Settings'
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/createAccount",
    name: "Create Account",
    icon: Application,
    component: CreateUser,
    layout: "/admin"
  },
  {
    path: "/AccountDetails",
    name: "Accounts Details",
    icon: Application,
    component: AccountDetails,
    layout: "/admin"
  },
  {
    path: "/ViewApplications",
    name: "View Applications",
    icon: App,
    component: ViewApplications,
    layout: "/admin"
  },
  {
    path: "/ViewMemberShips",
    name: "Members",
    icon: App,
    component: ViewMemberShip,
    layout: "/admin"
  },
  {
    path: "/ViewEvents",
    name: "View Events",
    icon: event,
    // component: ViewMemberShip,
    layout: "/admin"
  },
  {
    path: "/messages",
    name: "Messages",
    icon: Messages,
    component:MessagesLayout,
    layout: "/admin",
    
  },

  {
    path: "/settings",
    name: "Setting",
    icon: SettingsIcon,
    component: Settings,
    layout: "/admin"
  },
  // {
  //   path: "/LogOut",
  //   name: "LOGOUT",
  //   icon: Person,
  //   // component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Registred Users",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   // component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },

  {
    path: "/viewApplication/data/:email",
    name: "view Data",
    icon: "content_paste",
    component:ViewData,
    layout: "/admin",
    hide:"true"
    
  },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // },
  // {
  //   path: "/admin/updatProfile",
  //   name: "Update Profile",
  //   icon: Unarchive,
  //   component: UpdateProfile,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
