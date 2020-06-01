
import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import abroad from "@material-ui/icons/AirplanemodeActive";
import SettingsIcon from "@material-ui/icons/Settings";
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from "views/Member/memberTable/memberTable";
// import NotificationsPage from "views/Notifications/Notifications.js";
import ViewData from 'views/showData/showData'
import VisaArrival from 'views/visa/VisaArrival/VisaArrival'
import Settings from 'views/Settings/Settings'

import VisaAbroad from 'views/visa/visaAbroad/visaAbroad'
const dashboardRoutes = [
  {
    path: "/userProfile",
    name: "USER PROFILE",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/member"
  },
  {
    path: "/requests",
    name: "RECOMMENDATION",
    icon: Notifications,
    component: TableList,
    layout: "/member"
  },
  {
    path: "/visa/abrod",
    name: "VISA ABROD",
    icon: abroad,
    component: VisaAbroad,
    layout: "/member"
  },
  {
    path: "/visa/arrival",
    name: "VISA ARRIVAL",
    icon: abroad,
    component: VisaArrival,
    layout: "/member"
  },
  {
    path: "/settings",
    name: "SETTING",
    icon: SettingsIcon,
    component: Settings,
    layout: "/member"
  },
  {
    path: "/userData/:email",
    name: "view Data",
    icon: "content_paste",
    component: ViewData,
    layout: "/member",
    hide:"true"
  }
];

export default dashboardRoutes;
