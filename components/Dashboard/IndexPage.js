import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CardStatus from './CardStatus'
import Grafik from './Grafik'
import Table from './Table'

export default function IndexPage(props) {
    const contenStyle = {
        minHeight: "90vh",
        top: "56px",
        backgroundColor: "#f1f1f9",
        overflow: "hidden"
    }

    return (
        <div style={{ backgroundColor: "#f1f1f9" }}>
            <Header />
            <div className="container content position-relative" style={contenStyle}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center text-center">
                        <p className="mt-5 h2">KAWAL COVID</p>
                    </div>
                    <div className="col-12 d-flex justify-content-center text-center">
                        <p className="mt-3 f18">Pantau Kasus Covid Terkini</p>
                    </div>
                </div>
                <CardStatus />
                <Grafik isGlobal={props.isGlobal} />
                <Table isGlobal={props.isGlobal} />
            </div>
            <Footer rightContent={""}
                leftContent={<div className="ms-2 font-weight-bold">Niomic-Tech @2021 All Right Reserved</div>}
            />
        </div>
    )
}