import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axiosInstance from '../../../utils/API'

class ChartsPage extends React.Component {
  state = {
    dataBar: {
      labels: ["Monday", "Tuesday", "Wednesday","thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "% Login ",
          data: [],
          backgroundColor: [
            "rgba(255, 134,159,1)",
            "rgba(98,  182, 239,1)",
            "rgba(255, 218, 128,1)",
            "rgba(113, 205, 205,1)",
            "rgba(170, 128, 252,1)",
            "rgba(255, 177, 101,1)",
            "rgba(255, 134,159,1)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)",
            "rgba(255, 134, 159, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.5)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

componentDidMount(){
    axiosInstance.get('/column/data')
  .then(res=>{
    var dummy =this.state.dataBar.datasets[0] 
    dummy.data=[res.data[0].monday,res.data[0].tuesday,res.data[0].wednesday,res.data[0].thursday,res.data[0].friday,res.data[0].saturday,res.data[0].sunday]
    this.setState(dummy)
    // console.log(this.state.dataBar.datasets[0].data)
})
}

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Bar chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;