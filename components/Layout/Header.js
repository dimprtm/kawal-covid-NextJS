import Head from 'next/Head'
import Nav from 'react-bootstrap/Nav'
import { useRouter } from 'next/router'

export default function Header(props) {
    const router = useRouter();
    return (
        <>
            <Head><title>Kawal Covid</title></Head>
            <nav
                className="main-header navbar navbar-expand navbar-light navbar-white fixed-top border-bottom"
                style={{ backgroundColor: "white" }}
            >
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#">
                            <img src="images/niomic-logo.png" style={{ width: "100px" }} />
                        </a>
                    </li>
                </ul>

                <div className="container">
                    <div className="ms-auto hidden-sm-down">
                        <Nav variant="pills" defaultActiveKey={router.pathname == "/" ? "link-0" : "link-1"}>
                            <Nav.Item>
                                <Nav.Link eventKey="link-0" href="/">Global</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="/indonesia">Indonesia</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </nav>
        </>
    );
};