import { Card } from 'react-bootstrap'
import { Dot, Gem } from 'react-bootstrap-icons'
import '../../styles/InformazioniComp.css'


export default function InformazioniComp() {
    return (
        <Card className='compBackgroundInfo'>
            <Card.Body className='d-flex flex-column' >
                <div className='d-flex justify-content-between mb-4'>
                    <h5>Informazioni</h5>
                    <img className="infoPen2" src="/src/assets/free_icon.svg" alt="" />
                </div>
                <div className='d-flex justify-content-between flex-column align-items-start'>
                    <p>Sono un appassionato di tecnologia con un particolare amore per il frontend. Attualmente, sto arricchendo le mie competenze tecniche attraverso un corso intensivo di Full Stack Development. La mia passione per la tecnologia mi spinge a rimanere sempre aggiornato sulle ultime tendenze e innovazioni.</p>
                    <div className='d-flex secondInfoRow'>
                        <div className='icons'><Gem /></div>
                        <div className='d-flex flex-column'>
                            <a href="#">Competenze principali</a>
                            <span>JavaScript <Dot /> HTML <Dot /> CSS <Dot /> Node.js <Dot /> React</span>
                        </div>
                    </div>

                </div>
            </Card.Body>
        </Card>
    )
}
