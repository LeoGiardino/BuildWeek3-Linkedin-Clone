import '../styles/InteressiComp.css'
import { ArrowRight, Check2 } from 'react-bootstrap-icons'
import { Card } from 'react-bootstrap'

export default function InteressiComp() {
    return (
        <Card className='compBackgroundAnalisi'>
            <Card.Body className='d-flex flex-column intCard' >
                <div className='inNav'>
                    <h5 className='pt-4 mb-3'>Interessi</h5>
                    <div className='inTab d-flex fw-bold mt-2'>
                        <span className='intActive'>
                            Aziende
                        </span>
                        <span className='mx-5'>
                            Newsletter
                        </span>
                        <span>
                            Scuole o università
                        </span>
                    </div>
                </div>

                <div className='d-flex align-items-center px-4 inBody justify-content-start'>

                    <div className='d-flex align-items-start pt-2 w-50'>
                        <div className='imgAzienda'><img src='https://picsum.photos/40'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='enteCertif'>IBM</span>
                            <span className='periodoCertif'>15.820.541 follower</span>
                            <button className='seguiti d-flex justify-content-evenly align-items-start'><Check2 className='align-self-center fs-5' /> Già segui</button>
                        </div>
                    </div>

                    <div className='d-flex align-items-start pt-2 w-50'>
                        <div className='imgAzienda'><img src='https://picsum.photos/40/40'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='enteCertif'>Accenture</span>
                            <span className='periodoCertif'>11.515.928 follower</span>
                            <button className='seguiti d-flex justify-content-evenly align-items-start'><Check2 className='align-self-center fs-5' /> Già segui</button>
                        </div>
                    </div>

                </div>

            </Card.Body>
            <Card.Footer className='text-center analisiFooter'>Mostra tutte le aziende <ArrowRight /></Card.Footer>
        </Card>
    )
}
