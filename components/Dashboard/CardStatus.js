export default function CardStatus(props) {
    return (
        <div className="row mt-3 ms-1 me-1 mb-2">
            <div className="col-sm-12 col-md-6 col-l-6 col-xl-3">
                <div className="card bg-danger img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="mb-0 text-white">TOTAL POSITIF</p>
                                <h2 className="mb-0 number-font">20000</h2>
                                <p className="mb-0 text-white">ORANG</p>
                            </div>
                            <div className="ms-auto"><img src="images/positif.png" width="50" height="50" alt="Positif" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-l-6 col-xl-3">
                <div className="card bg-success img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="mb-0 text-white">TOTAL SEMBUH</p>
                                <h2 className="mb-0 number-font">50000</h2>
                                <p className="mb-0 text-white">ORANG</p>
                            </div>
                            <div className="ms-auto"><img src="images/sembuh.png" width="50" height="50" alt="Positif" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-l-6 col-xl-3">
                <div className="card bg-secondary img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="mb-0 text-white">TOTAL MENINGGAL</p>
                                <h2 className="mb-0 number-font">10000</h2>
                                <p className="mb-0 text-white">ORANG</p>
                            </div>
                            <div className="ms-auto"><img src="images/meninggal.png" width="50" height="50" alt="Positif" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-l-6 col-xl-3">
                <div className="card bg-info img-card box-primary-shadow border">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-white">
                                <p className="mb-0 text-white">TOTAL AKTIF</p>
                                <h2 className="mb-0 number-font">2705</h2>
                                <p className="mb-0 text-white">ORANG</p>
                            </div>
                            <div className="ms-auto"><img src="images/active2.png" width="50" height="50" alt="Positif" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}