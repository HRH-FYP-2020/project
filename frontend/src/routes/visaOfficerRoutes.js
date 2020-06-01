
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// import UserProfile from '../views/UserProfile/UserProfile';
import UserProfile from '../views/UserProfile/UserProfile'
import SettingsIcon from "@material-ui/icons/Settings";
import TableList from "views/TableList/TableList.js";
import Settings from 'views/Settings/Settings'
import ViewApplications from "views/visa/visaTables/viewApplicationTable/viewApplicaton"
import NotificationsPage from "views/Notifications/Notifications.js";
import ShowData from 'views/visa/visaDataShow/visaDataShow'
const dashboardRoutes = [
  {
    path: "/userProfile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/visaOfficer"
  },
  {
    path: "/applicationToPak",
    name: "APPLICATION(TO PAK)",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/visaOfficer"
  },
  {
    path: "/applicationFromPak",
    name: "APPLICATION(From PAK)",
    icon: "content_paste",
    component: TableList,
    layout: "/visaOfficer"
  },
  {
    path: "/applications",
    name: "VIEW APPLICATIONS",
    icon: "content_paste",
    component: ViewApplications,
    layout: "/visaOfficer"
  },
  {
    path: "/settings",
    name: "SETTING",
    icon: SettingsIcon,
    component: Settings,
    layout: "/visaOfficer"
  },
  {
    path: "/ViewApplications/data/:email",
    name: "view Data",
    icon: "content_paste",
    component: ShowData,
    layout: "/visaOfficer",
    hide:"true"
  }
];

export default dashboardRoutes;
