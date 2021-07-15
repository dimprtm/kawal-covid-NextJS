import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CardStatus from './CardStatus'

export default function IndexPage() {
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
            </div>
            <Footer rightContent={""}
                leftContent={<div className="ms-2 font-weight-bold">Niomic-Tech @2021 All Right Reserved</div>}
            />
        </div>
    )
}