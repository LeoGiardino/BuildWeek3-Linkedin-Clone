import '../../styles/JobsStyle/Jobs.css'
import { Card } from 'react-bootstrap'
import { ArrowRight, Dot, Linkedin, XLg } from 'react-bootstrap-icons'
import LavoroCard from './LavoroCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Lavori } from '../../redux/actions/Lavori'

export default function ConsigliatiComp() {
    const dispatch = useDispatch()
    const lavori = useSelector(state => state.listaLavori)

    // console.log(lavori)

    useEffect(() => {
        dispatch(Lavori())
    }, [])
    return (
        <Card className='compBackgroundForm'>
            <Card.Body className='d-flex flex-column pb-0' >
                <div className='d-flex flex-column justify-content-between mb-4'>
                    <h5>Consigliato per te</h5>
                    <p className='pageGrayTxt sottotitoloCons'>Sulla base del tuo profilo e della tua cronologia delle ricerche</p>

                </div>
                {lavori.slice(0, 5).map(lav => <LavoroCard key= {lav._id} company = {lav.company_name} location = {lav.candidate_required_location} published = {lav.publication_date} titolo = {lav.title} />)}

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow w-100'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C4D0BAQHL3_d-rsuSAg/company-logo_100_100/0/1677679858366/repagroup_logo?e=1714608000&v=beta&t=aqFA06z1Dm3RzmfrSsVDK3OfDZ2AyjriwmVV1t_PYzQ'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>Candidatura spontanea - REPA IT</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>REPA</span>
                            <span className='periodoFormazione'>Cesena, Emilia Romagna, Italia (Da remoto)</span>
                            <span className='periodoFormazione secondoSottotitolo'>2 mesi fa</span>

                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C4D0BAQHP3yN4lbvnag/company-logo_100_100/0/1635411948339/m_live_europe_logo?e=1714608000&v=beta&t=HSwGRJcoH9T2ivZGfn7JcvtVJMf2fYvon5qIBdWi6D0'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>Software Engineer</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>M-Live Europe </span>
                            <span className='periodoFormazione'>San Giovanni in Marignano, Emilia Romagna, Italia (In sede)</span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center'>
                                <div className='mb-1'><img className='rounded-circle' src='https://picsum.photos/60' /></div>
                                <span>Il tuo profilo è in linea con questa offerta di lavoro</span> </span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center '>Promosso <Dot /> <Linkedin className='me-1 logoLinkedinBianco' /> Candidatura semplice </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C560BAQEZ4dQ-7W7Hqw/company-logo_100_100/0/1630592044375/mr_apps_logo?e=1714608000&v=beta&t=1TF8HYSbAujpBaV9UVnnMMLfT177G53pw7t59JyeTII'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>Sviluppatori Backend e Sviluppatori Frontend</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>Mr. APPs srl</span>
                            <span className='periodoFormazione'>Rimini, Emilia Romagna, Italia (Ibrido)</span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center '>Promosso <Dot /> <Linkedin className='me-1 logoLinkedinBianco' /> Candidatura semplice </span>
                        </div>
                    </div>
                </div>

            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutto <ArrowRight /></Card.Footer>

        </Card>
    )
}
