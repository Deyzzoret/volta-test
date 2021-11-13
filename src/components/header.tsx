import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <Navbar bg='dark' expand='sm' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link ><Link to="/" className="header header1"> Accueil</Link></Nav.Link>
              <Nav.Link ><Link to="/list-state" className="header header1"> Voir vos enregistrements </Link></Nav.Link>
              <Nav.Link><Link to="/form-state" className="header header1">Formulaire santé </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
