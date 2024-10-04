import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";

export const Header = () => {
    const handleLogout = () => {
        
    };
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    <Link to={"/home"} className="nav-link">
                        Buscar heroe
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to={"/search"} className="nav-link">
                            Buscar Heroe
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/dcHeroes"} className="nav-link">
                            DC Heroes
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/marvelHeroes"} className="nav-link">
                            Marvel Heroes
                        </Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Collapse className="justify-content-end gap-2">
                    <Navbar.Text>Ingresado como: admin</Navbar.Text>
                    <Nav.Item>
                        <div 
                            className="d-flex justify-content-center align-items-center"
                            onClick={handleLogout}
                        >
                            <span 
                                style={{color: "#fff", cursor:"pointer"}}
                                className="material-symbols-outlined"
                            >
                                logout
                            </span>
                        </div>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
