import { Container, Navbar } from 'react-bootstrap'


const Footer = () => {
    return (
        <Navbar className="bg-dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">EXAMPLE SCHOOL</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Allright Reserved <a href="#login" className='text-decoration-none'>Yanadawa</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer