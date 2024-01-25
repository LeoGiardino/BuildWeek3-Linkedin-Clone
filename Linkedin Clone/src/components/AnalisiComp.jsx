import { ArrowRight, BarChartFill, EyeFill, PeopleFill, Search } from 'react-bootstrap-icons';
import '../styles/AnalisiComp.css';
import { Card } from 'react-bootstrap';


export default function AnalisiComp() {
    return (
        <Card className='compBackground'>
            <Card.Body className='d-flex flex-column' >
                <div className=''>
                    <h5>Analisi</h5>
                    <div className='pageGrayTxt align-items-center d-flex'>
                        <EyeFill />
                        <span>Solo per te</span>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-between'>
                            <div className='icons'><PeopleFill /></div>
                            <div className='d-flex flex-column'>
                                <span>37 visualizzazioni del profilo</span>
                                <span>Scopri chi ha visitato il tuo profilo</span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className='icons'><BarChartFill /></div>
                            <div className='d-flex flex-column'>
                                <span>238 impressioni del post</span>
                                <span>Scopri chi sta interagendo con i tuoi post</span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className='icons'><Search /></div>
                            <div className='d-flex flex-column'>
                                <span>1 comparsa nei motori di ricerca</span>
                                <span>Vedi quante volte compari nei risultati di ricerca</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className='text-center analisiFooter'>Mostra tutte le analisi <ArrowRight /></Card.Footer>
        </Card>
    );
}
