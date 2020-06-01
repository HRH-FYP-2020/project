
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// import UserProfile from '../views/UserProfile/UserProfile';
import UserProfile from '../views/UserProfile/UserProfile'

import TableList from "views/Delivery/financeTable/finacneTable";
// import NotificationsPage from "views/Notifications/Notifications.js";
const dashboardRoutes = [
  {
    path: "/userProfile",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/deliveryOfficer"
  },
  {
    path: "/request",
    name: "MemberShip Request Bills",
    icon: "content_paste",
    component: TableList,
    layout: "/deliveryOfficer"
  }
];

export default dashboardRoutes;
