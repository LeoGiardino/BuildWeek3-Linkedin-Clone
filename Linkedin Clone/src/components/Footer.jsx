import { Container, Row, Col, Dropdown, Nav, NavLink } from 'react-bootstrap';
import { CaretDownFill, GearFill, QuestionCircleFill, ShieldShaded } from 'react-bootstrap-icons';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer text-white">
            <Container>
                <Row>
                    <Col xs={6} md={2}>
                        <Nav className="flex-column">
                            <NavLink>Informazioni</NavLink>
                            <NavLink>Linee guida della community</NavLink>
                            <NavLink>Privacy e condizioni <CaretDownFill /></NavLink>
                            <NavLink>Sales Solutions</NavLink>
                            <NavLink>Centro sicurezza</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={6} md={2}>
                        <Nav className="flex-column">
                            <NavLink>Accessibilità</NavLink>
                            <NavLink>Carriera</NavLink>
                            <NavLink>Opzioni per gli annunci pubblicitari</NavLink>
                            <NavLink>Mobile</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={6} md={2}>
                        <Nav className="flex-column">
                            <NavLink>Talent Solutions</NavLink>
                            <NavLink>Soluzioni di marketing</NavLink>
                            <NavLink>Pubblicità</NavLink>
                            <NavLink>Piccole imprese</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={6} md={3}>
                        <Nav className="flex-column">
                            <NavLink>
                                <div className='d-flex align-items-start'>
                                    <QuestionCircleFill className='mt-1 me-1' />
                                    <div className='d-flex flex-column'>
                                        <span>Domande?</span><span>Visita il nostro Centro assistenza</span>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink>
                                <div className='d-flex align-items-start'>
                                    <GearFill className='mt-1 me-1' />
                                    <div className='d-flex flex-column'>
                                        <span>Gestisci il tuo account e la tua privacy</span><span>Vai alle impostazioni</span>
                                    </div>
                                </div>
                            </NavLink>
                            
                            <NavLink><ShieldShaded /> Trasparenza sui contenuti consigliati <br /> <span>Scopri di più sui contenuti consigliati.</span>
                            </NavLink>
                        </Nav>
                    </Col>
                    <Col xs={12} md={3}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Seleziona lingua
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Italiano (Italiano)</Dropdown.Item>
                                <Dropdown.Item href="#">Inglese</Dropdown.Item>
                                <Dropdown.Item href="#">Francese</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col className="py-3 copyRightLinkedin">Linkedin Corporation © 2024</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
