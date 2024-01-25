import { ArrowRight, BarChartFill, EyeFill, PeopleFill, Search } from 'react-bootstrap-icons';
import '../styles/AnalisiComp.css';
import { Card } from 'react-bootstrap';


export default function AnalisiComp() {
    return (
        <Card className='compBackgroundAnalisi'>
            <Card.Body className='d-flex flex-column' >
                <div className=''>
                    <h5>Analisi</h5>
                    <div className='pageGrayTxtAnalisi align-items-center d-flex'>
                        <EyeFill />
                        <span>Solo per te</span>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex justify-content-between'>
                            <div className='icons'><PeopleFill /></div>
                            <div className='d-flex flex-column'>
                                <a href="#">37 visualizzazioni del profilo</a>
                                <span>Scopri chi ha visitato il tuo profilo</span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className='icons'><BarChartFill /></div>
                            <div className='d-flex flex-column'>
                                <a href="#">238 impressioni del post</a>
                                <span>Scopri chi sta interagendo con i tuoi post</span>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <div className='icons'><Search /></div>
                            <div className='d-flex flex-column'>
                                <a href="#">1 comparsa nei motori di ricerca</a>
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
