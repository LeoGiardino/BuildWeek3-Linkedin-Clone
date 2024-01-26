import { Card } from 'react-bootstrap'
import { ArrowRight, Dot, PlusLg } from 'react-bootstrap-icons'
import '../styles/FormazioneComp.css'


export default function FormazioneComp() {
    return (
        <Card className='compBackgroundForm'>
            <Card.Body className='d-flex flex-column' >
                <div className='d-flex justify-content-between mb-4'>
                    <h5>Formazione</h5>
                    <div className='d-flex justify-content-between'>
                        <PlusLg className='addPlusExp' />
                        <img className="infoPenExp" src="/src/assets/free_icon.svg" alt="" />
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='/src/assets/company.svg'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='ente'>Ente</span>
                            <span className='nomeFormazione'>nomeFormazione</span>
                            <span className='periodoFormazione'>inizio - fine</span>
                            <span className='modalita'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
                            <span className='competenze'>
                                <strong>Competenze:</strong> JavaScript <Dot /> HTML <Dot /> CSS <Dot /> Node.js <Dot /> React
                            </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='/src/assets/company.svg'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='ente'>Ente</span>
                            <span className='nomeFormazione'>nomeFormazione</span>
                            <span className='periodoFormazione'>inizio - fine</span>
                            <span className='modalita'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
                            <span className='competenze'>
                                <strong>Competenze:</strong> JavaScript <Dot /> HTML <Dot /> CSS <Dot /> Node.js <Dot /> React
                            </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='/src/assets/company.svg'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='ente'>Ente</span>
                            <span className='nomeFormazione'>nomeFormazione</span>
                            <span className='periodoFormazione'>inizio - fine</span>
                            <span className='modalita'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
                            <span className='competenze'>
                                <strong>Competenze:</strong> JavaScript <Dot /> HTML <Dot /> CSS <Dot /> Node.js <Dot /> React
                            </span>
                        </div>
                    </div>
                </div>


            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutti i titoli di studio (5) <ArrowRight /></Card.Footer>

        </Card>
    )
}
