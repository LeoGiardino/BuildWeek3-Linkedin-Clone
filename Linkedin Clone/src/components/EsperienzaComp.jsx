import { Card } from 'react-bootstrap'
import { PlusLg } from 'react-bootstrap-icons'
import '../styles/EsperienzaComp.css'


export default function EsperienzaComp() {
    return (
        <Card className='compBackgroundExp'>
            <Card.Body className='d-flex flex-column' >
                <div className='d-flex justify-content-between mb-4'>
                    <h5>Esperienza</h5>
                    <div className='d-flex justify-content-between'>
                        <PlusLg className='addPlusExp' />
                        <img className="infoPenExp" src="/src/assets/free_icon.svg" alt="" />
                    </div>
                </div>

                {/* PARTE DINAMICA DA RICREARE CON LA CHIAMATA API */}
                <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='/src/assets/company.svg'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='professione'>Professione</span>
                            <span className='azienda'>azienda</span>
                            <span className='periodo'>inizio - fine</span>
                            <span className='descrizione'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='/src/assets/company.svg'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='professione'>Professione</span>
                            <span className='azienda'>azienda</span>
                            <span className='periodo'>inizio - fine</span>
                            <span className='descrizione'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
                        </div>
                    </div>
                </div>     <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='/src/assets/company.svg'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='professione'>Professione</span>
                            <span className='azienda'>azienda</span>
                            <span className='periodo'>inizio - fine</span>
                            <span className='descrizione'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
                        </div>
                    </div>
                </div>     <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                    <div className='d-flex justify-content-between align-items-start '>
                        <div className='imgAzienda'><img src='/src/assets/company.svg'></img></div>
                        <div className='d-flex flex-column'>
                            <span className='professione'>Professione</span>
                            <span className='azienda'>azienda</span>
                            <span className='periodo'>inizio - fine</span>
                            <span className='descrizione'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span>
                        </div>
                    </div>
                </div>

            </Card.Body>
        </Card>
    )
}
