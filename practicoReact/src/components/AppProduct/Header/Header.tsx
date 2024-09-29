import { Container, Navbar } from "react-bootstrap"

export const Header = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Carga de productos</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
