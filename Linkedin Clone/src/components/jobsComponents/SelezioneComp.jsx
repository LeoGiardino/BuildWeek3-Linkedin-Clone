import '../../styles/JobsStyle/Jobs.css'
import { Card } from 'react-bootstrap'
import { ArrowRight, Dot, Linkedin, XLg } from 'react-bootstrap-icons'

export default function SelezioneComp() {
    return (
        <Card className='compBackgroundForm'>
            <Card.Body className='d-flex flex-column pb-0' >
                <div className='d-flex flex-column justify-content-between mb-4'>
                    <h5>Selezione in corsoe</h5>
                    <p className='pageGrayTxt sottotitoloCons'>Offerte di lavoro che potrebbero esserti sfuggite</p>

                </div>


                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C560BAQFDryFqR1ruog/company-logo_100_100/0/1630577965936/plantronic_logo?e=1714608000&v=beta&t=6_nBqF0wyvP6NTv4BvtvWDk6xp19vzI3mIMRdfKWwq8'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>Sviluppatore Full Stack</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>Tech Solutions srl</span>
                            <span className='periodoFormazione'>Milano, Lombardia, Italia (Remoto)</span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center'>
                                <div className='mb-1'><img className='rounded-circle' src='https://picsum.photos/60' /></div>
                                <span>Il tuo profilo è in linea con questa offerta di lavoro</span> </span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center '>Promosso <Dot /> <Linkedin className='me-1 logoLinkedinBianco' /> Candidatura semplice </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C4E0BAQG4_M15KuPhEQ/company-logo_100_100/0/1630591167037/nucleus_agency_logo?e=1714608000&v=beta&t=1u6FlYhUiRM-MaT2STTjTN0_PtuasK9XoAQkhs5IEm8'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>Ingegnere del Software</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>Innovative Tech srl</span>
                            <span className='periodoFormazione'>Roma, Lazio, Italia (Ibrido)</span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center'>
                                <div className='mb-1'><img className='rounded-circle' src='https://picsum.photos/60' /></div>
                                <span>Il tuo profilo è in linea con questa offerta di lavoro</span> </span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center '>Promosso <Dot /> <Linkedin className='me-1 logoLinkedinBianco' /> Candidatura semplice </span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C4D0BAQHAVvaCq-ucrA/company-logo_100_100/0/1631330219983?e=1714608000&v=beta&t=_82nhbMcja8JDggrqSBJih7W4XLE9axsPK3b5zDe_KQ'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>Analista di Sistemi</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>Systems Pro srl</span>
                            <span className='periodoFormazione'>Napoli, Campania, Italia (In Ufficio)</span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center'>
                                <div className='mb-1'><img className='rounded-circle' src='https://picsum.photos/60' /></div>
                                <span>Il tuo profilo è in linea con questa offerta di lavoro</span> </span>
                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center '>Promosso <Dot /> <Linkedin className='me-1 logoLinkedinBianco' /> Candidatura semplice </span>
                        </div>
                    </div>
                </div>

            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutto <ArrowRight /></Card.Footer>

        </Card>
    )
}
