
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// import UserProfile from '../views/UserProfile/UserProfile';
import UserProfile from '../views/UserProfile/UserProfile'

// import TableList from "views/TableList/TableList.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
import Chalan from "views/notMember/chalan/chalan";
const dashboardRoutes = [
  {
    path: "/userProfile",
    name: " Show Chalan",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Chalan,
    layout: "/notMember"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: Chalan,
    layout: "/notMember"
  },
  {
    path: "/request",
    name: "Show Request  Status ",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Chalan,
    layout: "/notMember"
  }
];

export default dashboardRoutes;
