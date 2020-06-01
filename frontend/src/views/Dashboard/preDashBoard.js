import React from 'react'
import  './preDashBoard.css';
import DashboardPage from './Dashboard';
import Chart from './chartsPage/chartspage'

class PreDashBoard extends React.Component{
    render(){
        return(
            <div className="Main">
                <DashboardPage/>
                <Chart/>
            </div>

        )
    }
}

export default PreDashBoard