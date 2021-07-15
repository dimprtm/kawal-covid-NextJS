import React from 'react'
import { Line, Pie } from 'react-chartjs-2'

export default function Grafik(props) {
    let dataCovid = null;
    let data = null;

    if (!props.isGlobal) {
        dataCovid = [12, 4, 35, 10, 6, 7, 22, 7, 67, 5, 54];
        data = {
            labels: ["2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar", "8 Mar", "9 Mar", "10 Mar", "11 Mar", "12 Mar"],
            datasets: [
                {
                    label: "Jumlah Positif",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(229, 56, 50, 0.4)",
                    borderColor: "rgba(229,56, 50,1)",
                    borderCapStyle: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgba(229,56,50,1)",
                    pointBackgrounColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgba(229,56,50,1)",
                    pointHoverBorderColor: "rgb(220,220,220,1)",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid
                }
            ]
        }
    }
    const dataPie = {
        labels: [
            "Positif",
            "Sembuh",
            "Meninggal"
        ],
        datasets: [
            {
                data: [2000, 1854, 1234],
                backgroundColor: [
                    "#ff6384",
                    "#36a2eb",
                    "#ffce56"
                ],
                hoverBackgroundColor: [
                    "#ff6384",
                    "#36a2eb",
                    "#ffce56"
                ]
            }
        ]
    }

    return (
        <div className="row mb-5">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card bg-white overflow-hidden">
                    <div className="card-header">
                        <h3 className="card-title">{props.isGlobal ? "Statistik Virus Corona Di Dunia" : "Statistik Virus Corona Di Indonesia"}</h3>
                    </div>
                    <div className="card-body">
                        <div className="chart-wrapper">
                            {props.isGlobal ? <Pie data={dataPie} /> : <Line data={data} width={100} height={50} />}
                        </div>
                        <div className="row mt-6">
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">POSITIF</h5>
                                <h3 className="mb-1">20000</h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span>ORANG</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">SEMBUH</h5>
                                <h3 className="mb-1">12000</h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span>ORANG</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">MENINGGAL</h5>
                                <h3 className="mb-1">1000</h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span>ORANG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
