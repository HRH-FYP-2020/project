
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// import UserProfile from '../views/UserProfile/UserProfile';
import NewApplication from '../views/signup/signup'
import UserProfile from '../views/UserProfile/UserProfile'
// import Login from 'views/Login/login'
import TableList from "views/MemberShip/memberShipTable";
import MemberShipRecords from "views/MemberShip/MemberShipRecords/MemberShipRecords,";
// import TableList from "views/TableList/TableList.js";
// import ViewData from '../views/listView/dataShow/showData'
import MemberShipRecordsData from '../views/showData/showDataMemberShip.js/showRecordsOfMemberShip'
import ViewData from 'views/showData/showData'
import NotificationsPage from "views/Notifications/Notifications.js";
const dashboardRoutes = [
  {
    path: "/userProfile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/memberShip"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/memberShip"
  },
  {
    path: "/newapplication",
    name: "New Application",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NewApplication,
    layout: "/memberShip"
  },
  {
    path: "/request",
    name: "MemberShip Request",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/memberShip"
  },
  {
    path: "/records",
    name: "MemberShip Records",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: MemberShipRecords,
    layout: "/memberShip"
  },
  {
    path: "/viewData/:email",
    name: "view Data",
    icon: "content_paste",
    component: ViewData,
    layout: "/memberShip",
    hide:"true"
    
  },
  {
    path: "/data/:email",
    name: "Recrds",
    icon: "content_paste",
    component: MemberShipRecordsData,
    layout: "/memberShip",
    hide:"true"
    
  },
  {
    path: "/logout",
    name: "Log Out",
    icon: "content_paste",
    component: ViewData,
    layout: "/memberShip",
       
  }

];

export default dashboardRoutes;
