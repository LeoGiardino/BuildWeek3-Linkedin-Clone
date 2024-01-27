import { Card } from 'react-bootstrap'
import { ArrowRight, BoxArrowUpRight, Dot, PlusLg } from 'react-bootstrap-icons'
import '../../styles/LicenzeComp.css'


export default function LicenzeComp() {
    return (
        <Card className='compBackgroundLic'>
            <Card.Body className='d-flex flex-column' >
                <div className='d-flex justify-content-between mb-4'>
                    <h5>Licenze e certificazioni</h5>
                    <div className='d-flex justify-content-between'>
                        <PlusLg className='addPlusExp' />
                        <img className="infoPenExp" src="/src/assets/free_icon.svg" alt="" />
                    </div>
                </div>


                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='https://picsum.photos/40'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='certif'>Certificazione</span>
                            <span className='enteCertif'>Ente Certificazione</span>
                            <span className='periodoCertif'>Data di rilascio: </span>
                            <button className='credenziali d-flex justify-content-evenly align-items-start'>Mostra credenziale <BoxArrowUpRight className='align-self-center mb-1' /></button>
                            <span className='competenze'>
                                <strong>Competenze:</strong> JavaScript <Dot /> HTML <Dot /> CSS <Dot /> Node.js <Dot /> React
                            </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 '>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='https://picsum.photos/40/40'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='certif'>Certificazione</span>
                            <span className='enteCertif'>Ente Certificazione</span>
                            <span className='periodoCertif'>Data di rilascio: </span>
                            <button className='credenziali d-flex justify-content-evenly align-items-start'>Mostra credenziale <BoxArrowUpRight className='align-self-center mb-1' /></button>
                            <span className='competenze'>
                                <strong>Competenze:</strong> JavaScript <Dot /> HTML <Dot /> CSS <Dot /> Node.js <Dot /> React
                            </span>
                        </div>
                    </div>
                </div>


            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutte le licenze e certificazioni (6) <ArrowRight /></Card.Footer>

        </Card>
    )
}
