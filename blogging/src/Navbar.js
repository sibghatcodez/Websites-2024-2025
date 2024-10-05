import Container from 'react-bootstrap/Container';
import Navibar from 'react-bootstrap/Navbar';

function NavbarMethod() {
  return (
    <Navibar className="bg-body-tertiary">
      <Container>
        <Navibar.Brand href="#home">Navbar with text</Navibar.Brand>
        <Navibar.Toggle />
        <Navibar.Collapse className="justify-content-end">
          <Navibar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navibar.Text>
        </Navibar.Collapse>
      </Container>
    </Navibar>
  );
}

export default NavbarMethod;