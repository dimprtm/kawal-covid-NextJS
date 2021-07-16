import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import NumberFormat from 'react-number-format';
const { sum, getAllMonth } = require('../../util/library');

export default function Grafik(props) {
    let dataCovid = null;
    let data = null;

    if (!props.isGlobal) {
        dataCovid = getAllMonth(props);
        data = {
            labels: dataCovid.label,
            datasets: [
                {
                    label: "Jumlah Positif",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgb(220,53,69, 0.5)",
                    borderColor: "rgb(220,53,69)",
                    borderCapStyle: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(220,53,69)",
                    pointBackgrounColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgb(220,53,69)",
                    pointHoverBorderColor: "#000",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid.positif
                },
                {
                    label: "Jumlah Sembuh",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgb(25,135,84, 0.5)",
                    borderColor: "rgb(25,135,84)",
                    borderCapStyle: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(25,135,84)",
                    pointBackgrounColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgb(25,135,84)",
                    pointHoverBorderColor: "#000",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid.sembuh
                },
                {
                    label: "Jumlah Meninggal",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgb(108,117,125, 0.5)",
                    borderColor: "rgb(108,117,125)",
                    borderCapStyle: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(108,117,125)",
                    pointBackgrounColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgb(108,117,125)",
                    pointHoverBorderColor: "#000",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid.meninggal
                },
                {
                    label: "Jumlah Aktif",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgb(13,202,240, 0.5)",
                    borderColor: "rgb(13,202,240)",
                    borderCapStyle: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(13,202,240)",
                    pointBackgrounColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: "rgb(13,202,240)",
                    pointHoverBorderColor: "#000",
                    pointBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataCovid.active
                },
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
                data: [sum('Confirmed', props), sum('Recovered', props), sum('Deaths', props)],
                backgroundColor: [
                    "#DC3545",
                    "#198754",
                    "#6C757D"
                ],
                hoverBackgroundColor: [
                    "#DC3545",
                    "#198754",
                    "#6C757D"
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
                                <h3 className="mb-1">
                                    <NumberFormat
                                        value={sum('Confirmed', props)}
                                        displayType={'text'}
                                        thousandSeparator={","}
                                        decimalSeparator={"."}
                                        defaulValue={0}
                                    />
                                </h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span>ORANG</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">SEMBUH</h5>
                                <h3 className="mb-1">
                                    <NumberFormat
                                        value={sum('Recovered', props)}
                                        displayType={'text'}
                                        thousandSeparator={","}
                                        decimalSeparator={"."}
                                        defaulValue={0}
                                    />
                                </h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span>ORANG</p>
                            </div>
                            <div className="col text-center">
                                <h5 className="font-weight-normal mt-2">MENINGGAL</h5>
                                <h3 className="mb-1">
                                    <NumberFormat
                                        value={sum('Deaths', props)}
                                        displayType={'text'}
                                        thousandSeparator={","}
                                        decimalSeparator={"."}
                                        defaulValue={0}
                                    />
                                </h3>
                                <p className="mb-0 text-muted"><span className="text-lg font-weight-700"></span>ORANG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
