import React from 'react'

export default function Table(props) {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-14">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">{props.isGlobal ? "Data Kasus Virus Corona Di Dunia" : "Data Kasus Virus Corona Di Indonesia"}</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover mb-0 text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>{props.isGlobal ? "Negara" : "Provinsi"}</th>
                                            <th>Positif</th>
                                            <th>Sembuh</th>
                                            <th>Meninggal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.isGlobal ?
                                            <>
                                                <tr>
                                                    <td>1.</td>
                                                    <td>US</td>
                                                    <td>10348348</td>
                                                    <td>839489</td>
                                                    <td>34909043</td>
                                                </tr>
                                                <tr>
                                                    <td>2.</td>
                                                    <td>India</td>
                                                    <td>13434448348</td>
                                                    <td>8393434489</td>
                                                    <td>349077689043</td>
                                                </tr>
                                            </>
                                            :
                                            <>
                                                <tr>
                                                    <td>1.</td>
                                                    <td>Jawa Barat</td>
                                                    <td>848</td>
                                                    <td>89</td>
                                                    <td>2043</td>
                                                </tr>
                                                <tr>
                                                    <td>2.</td>
                                                    <td>Jawa Tengah</td>
                                                    <td>238</td>
                                                    <td>89</td>
                                                    <td>1043</td>
                                                </tr>
                                                <tr>
                                                    <td>3.</td>
                                                    <td>Jawa Timur</td>
                                                    <td>564</td>
                                                    <td>877</td>
                                                    <td>2213</td>
                                                </tr>
                                            </>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
