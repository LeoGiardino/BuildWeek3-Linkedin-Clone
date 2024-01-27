import { Card } from 'react-bootstrap'
import '../../styles/RisorseComp.css'
import { ArrowRight, EyeFill, PeopleFill, Router } from 'react-bootstrap-icons'

export default function RisorseComp() {
    return (
        <Card className='compBackgroundRisorse'>
            <Card.Body className='d-flex flex-column' >
                <div className=''>
                    <h5>Risorse</h5>
                    <div className='pageGrayTxtRisorse align-items-center d-flex'>
                        <EyeFill />
                        <span>Solo per te</span>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between flex-column align-items-start'>

                        <div className='d-flex justify-content-between firstRow'>
                            <div className='icons'><Router /></div>
                            <div className='d-flex flex-column'>
                                <div>
                                    <a href="#">Modalità di creazione di contenuti </a><span className='pageGrayTxtRisorseNo'>No</span></div>
                                <span>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between secondRow'>
                            <div className='icons'><PeopleFill /></div>
                            <div className='d-flex flex-column'>
                                <a href="#">La mia rete</a>
                                <span>Salva e gestisci i tui collegamenti e interessi.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutte le risorse (5) <ArrowRight /></Card.Footer>
        </Card>
    )
}
