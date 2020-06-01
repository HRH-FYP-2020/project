
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Setting from "@material-ui/icons/SettingsOutlined"
// import UserProfile from '../views/UserProfile/UserProfile';
import UserProfile from '../views/UserProfile/UserProfile'

import TableList from "views/Delivery/financeTable/finacneTable";
import ModifyPayment from "views/modifyPayment/modifyPayment";
import ViewData from 'views/showData/showData'
const dashboardRoutes = [
  {
    path: "/userProfile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/financeOfficer"
  },
  {
    path: "/viewApplication",
    name: "View Application",
    icon: Notifications,
    component: TableList,
    layout: "/financeOfficer"
  },
  {
    path: "/modifyPayment",
    name: "Modify Payment",
    icon: Notifications,
    component: ModifyPayment,
    layout: "/financeOfficer"
  },
  {
    path: "/viewChallan",
    name: "View Challan",
    icon: Notifications,
    component: TableList,
    layout: "/financeOfficer"
  },
  {
    path: "/viewData/:id",
    name: "view Data",
    icon: "content_paste",
    component:ViewData,
    layout: "/financeOfficer",
    hide:"true"
    
  },
  {
    path: "/Setting",
    name: "Settings",
    icon: Setting,
    component: TableList,
    layout: "/financeOfficer"
  }
];

export default dashboardRoutes;
