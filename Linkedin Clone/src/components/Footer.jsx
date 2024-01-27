import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { CaretDownFill, GearFill, QuestionCircleFill, ShieldShaded } from 'react-bootstrap-icons';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer text-white">
            <Container>
                <Row>
                    <Col xs={6} md={2}>
                        <Nav className="flex-column">
                            <NavLink className='titoloFooter'>Informazioni</NavLink>
                            <NavLink className='titoloFooter'>Linee guida della community</NavLink>
                            <NavLink className='titoloFooter'>Privacy e condizioni <CaretDownFill /></NavLink>
                            <NavLink className='titoloFooter'>Sales Solutions</NavLink>
                            <NavLink className='titoloFooter'>Centro sicurezza</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={6} md={2}>
                        <Nav className="flex-column">
                            <NavLink className='titoloFooter'>Accessibilità</NavLink>
                            <NavLink className='titoloFooter'>Carriera</NavLink>
                            <NavLink className='titoloFooter'>Opzioni per gli annunci pubblicitari</NavLink>
                            <NavLink className='titoloFooter'>Mobile</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={6} md={2}>
                        <Nav className="flex-column">
                            <NavLink className='titoloFooter'>Talent Solutions</NavLink>
                            <NavLink className='titoloFooter'>Soluzioni di marketing</NavLink>
                            <NavLink className='titoloFooter'>Pubblicità</NavLink>
                            <NavLink className='titoloFooter'>Piccole imprese</NavLink>
                        </Nav>
                    </Col>

                    <Col xs={6} md={3}>
                        <Nav className="flex-column">
                            <NavLink>
                                <div className='d-flex align-items-start'>
                                    <QuestionCircleFill className='mt-1 me-1' />
                                    <div className='d-flex flex-column'>
                                        <span className='titoloFooter'>Domande?</span><span className='sottotitoloFooter'>Visita il nostro Centro assistenza</span>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink>
                                <div className='d-flex align-items-start'>
                                    <GearFill className='mt-1 me-1' />
                                    <div className='d-flex flex-column'>
                                        <span className='titoloFooter'>Gestisci il tuo account e la tua privacy</span><span className='sottotitoloFooter'>Vai alle impostazioni</span>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink>
                                <div className='d-flex align-items-start'>
                                    <ShieldShaded className='mt-1 me-1' />
                                    <div className='d-flex flex-column'>
                                        <span className='titoloFooter'>Trasparenza sui contenuti consigliati</span><span className='sottotitoloFooter'>Scopri di più sui contenuti consigliati.</span>
                                    </div>
                                </div>
                            </NavLink>
                        </Nav>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className="d-flex flex-column align-items-start">
                            <span className='sottotitoloFooter'>Seleziona lingua</span>
                            <button className='btnFooter w-100'>Italiano (Italiano) <CaretDownFill /></button>
                        </div>
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
