import { Card } from 'react-bootstrap'
import { ArrowRight, InfoSquareFill, PeopleFill } from 'react-bootstrap-icons'
import '../../styles/CompetenzeComp.css'


export default function CompetenzeComp() {
    return (
        <Card className='compBackgroundLic'>
            <Card.Body className='d-flex flex-column' >
                <div className='d-flex justify-content-between'>
                    <h5>Competenze</h5>
                    <div className='d-flex justify-content-between'>
                        <img className="infoPenExp" src="/src/assets/free_icon.svg" alt="" />
                    </div>
                </div>
                <div className='pageGrayTxtAnalisi align-items-center d-flex mt-1'>
                    <InfoSquareFill className='me-1' /><span>Hai aggiunto il numero massimo di competenze</span>
                </div>

                <div className='d-flexflex-column align-items-start'>
                    <div className='d-flex align-items-start flex-column mt-1 expRow'>
                        <span className='competenza'>SQL</span>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <div className='imgComp'><img src='https://picsum.photos/30'></img></div>
                            <span>Udemy</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <div className='imgComp'><img className='rounded-circle' src='https://picsum.photos/30/30'></img></div>
                            <span>Confermata da 15 persone negli ultimi 6 mesi</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <div className='imgComp'><PeopleFill className='iconCompetenze mb-1' /></div>
                            <span>14 conferme</span>
                        </div>
                    </div>

                    <div className='d-flex align-items-start flex-column mt-1 expRow'>
                        <span className='competenza'>Node.js</span>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <div className='imgComp'><img src='https://picsum.photos/30'></img></div>
                            <span>Udemy</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <div className='imgComp'><img className='rounded-circle' src='https://picsum.photos/30/30'></img></div>
                            <span>Confermata da 15 persone negli ultimi 6 mesi</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-2'>
                            <div className='imgComp'><PeopleFill className='iconCompetenze mb-1' /></div>
                            <span>14 conferme</span>
                        </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutte le competenze (50) <ArrowRight /></Card.Footer>

        </Card>
    )
}
