import React,{useState,useEffect} from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Person from "@material-ui/icons/Person";
// import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axiosInstance from '../../utils/API'


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Success from "components/Typography/Success";

const useStyles = makeStyles(styles);
export default function Dashboard() {
  const [totalMember,settotalMember] = useState(0)
  const [PendingApplications,setPendingApplications] = useState(0)
  useEffect(()=>{
    axiosInstance.get('/get/totalEmployes/data')
            .then(res=>{
        var totalMembers = 0,pendingApp=0 
        for(var i=0;i<res.data.users.length;i++){
           if(res.data.users[i].role==="member"){
            totalMembers =totalMembers+1
           }
           if(res.data.users[i].role ==="member" || res.data.users[i].role=== "admin" || res.data.users[i].role==="financeOfficer"||res.data.users[i].role==="deliveryOfficer" || res.data.users[i].role === "printingOfficer" || res.data.users[i].role==="membershipOfficer"|| res.data.users[i].role=== "eventsOfficer" ){
            
           }else{
            pendingApp = pendingApp+1
           }
          }
          setPendingApplications(
            pendingApp
          )
              settotalMember(
                   totalMembers
                  )     
            })
  },[])
  // let 
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card  style={ {border: "2px solid #dddddd"},{boxShadow:"5px 5px  20px 0.5px gray"}}>
            <CardHeader color="info"  icon>
              <CardIcon color="info">
                <Person/>
              </CardIcon>
              <p className={classes.cardCategory} style={{color: "red"}}>Total Member Of COC</p>
              <h3 className={classes.cardTitle}>
                {totalMember}            
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <DateRange />
                <p>
                  Todays Update
                </p>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card  style={ {border: "2px solid #dddddd"},{boxShadow:"5px 5px  20px 0.5px gray"}}>
            <CardHeader color="danger"  icon>
              <CardIcon color="danger">
                <Person />
              </CardIcon>
              <p className={classes.cardCategory}>Pending Applications</p>
              <h3 className={classes.cardTitle}>{PendingApplications}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Latest Update
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={ {border: "2px solid #dddddd"},{boxShadow:"5px 5px  20px 0.5px gray"}} >
            <CardHeader color="danger" icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total No. Employees</p>
              <h3 className={classes.cardTitle}>{PendingApplications}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card  style={ {border: "2px solid #dddddd"},{boxShadow:"5px 5px  20px 0.5px gray"}}>
            <CardHeader color="info" icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Pending Applications</p>
              <h3 className={classes.cardTitle}>{PendingApplications}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
