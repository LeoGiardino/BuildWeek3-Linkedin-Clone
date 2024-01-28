import '../../styles/JobsStyle/Jobs.css'
import { Card } from 'react-bootstrap'
import { ArrowRight, XLg } from 'react-bootstrap-icons'

export default function PremiumJobsComp() {
    return (
        <Card className='compBackgroundForm'>
            <div className='bordinoPremium'></div>
            <Card.Body className='d-flex flex-column pb-0' >
                <div className='d-flex flex-column justify-content-between mb-4'>
                    <div className='mb-1 d-flex align-items-center'><div className='premiumIcon me-2'></div><div className='premiumTitle'>PREMIUM</div></div>
                    <h5>Offerte di lavoro per cui rientri fra i migliori candidati</h5>
                    <p className='pageGrayTxt sottotitoloCons'>In base alle tue probabilità di ricevere una risposta</p>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow w-100'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons premiumPic me-3'><img src='https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAHzAAAAJGJiZDM1MGJkLTIzOTAtNDhmMS1hZTM5LTEzZDk2NWQ4ZDhjYQ.png'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente elencoPremium '>Vedi l’elenco completo delle offerte di lavoro per cui saresti fra i migliori candidati</span><XLg className='iconcineCons' /></div>

                            <span className='periodoFormazione secondoSottotitolo d-flex align-items-center'>
                                <div className='mb-1 tantiProfili'><img className='rounded-circle tantiProfili1 w-25' src='https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAhCAAAAJDBmNzFjMzUzLWFlNTAtNDRkZi1hNmZlLTljNjI0MzRlMmY4YQ.png' /><img className='rounded-circle tantiProfil2 w-25' src='https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAdKAAAAJDQ1YjQ5MTk5LTY2ZGUtNDI2MC05YmQ1LTE3YjE4ZWNlN2ZkYg.png' /><img className='rounded-circle tantiProfili3 w-25' src='https://media.licdn.com/media/AAUQAgE2AAgAAQAAAAAAAAHzAAAAJGJiZDM1MGJkLTIzOTAtNDhmMS1hZTM5LTEzZDk2NWQ4ZDhjYQ.png' /></div>
                                <span className='sottotitoloPremiumAcc'>Milioni di utenti usano Premium</span></span>
                            <button className='btn2 btnblue border-0 fw-bold premiumbtn my-2 w-50'>Prova Premium per 0 EUR</button>
                            <span className='periodoFormazione secondoSottotitolo'>Prova gratuita di 1 mese. Annulli in qualsiasi momento.</span>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow w-100'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C560BAQHXCcWkyTZT1g/company-logo_100_100/0/1630671881172/techyon_recruitment_logo?e=1714608000&v=beta&t=HQW07CbbOauQMU6nkDtECHI0dyQ8satqN08rVnFIItU'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>PROGRAMMATORE FRONT END | SVILUPPATORE JAVASCRIPT | WEB DEVELOPER FULL REMOTE</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>Techyon</span>
                            <span className='periodoFormazione'>Italia (Da remoto)</span>
                            <span className='periodoFormazione secondoSottotitolo'>2 settimane fa</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start mb-4 expRow'>
                    <div className='d-flex justify-content-between align-items-start consigliatiGroup w-100'>
                        <div className='imgAziendaCons me-3'><img src='https://media.licdn.com/dms/image/C4E0BAQE78Bw7_60ztw/company-logo_100_100/0/1631354838509?e=1714608000&v=beta&t=ttpapsUmJzPz6s-ZtR-YpGxjX2kOsaY8sFXoolXaSdc'></img></div>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex justify-content-between align-items-center'><span className='ente consigliatiPosizione'>LAVORO FLESSIBILE PER NEODIPLOMATI TEMPO DETERMINATO | PESCARA</span><XLg className='iconcineCons' /></div>
                            <span className='nomeFormazione'>Fondazione Patrizio Paoletti</span>
                            <span className='periodoFormazione'>Pescara, Abruzzo, Italia (Da remoto)</span>
                            <span className='periodoFormazione secondoSottotitolo'>10 mesi fa</span>
                        </div>
                    </div>
                </div>

            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutto <ArrowRight /></Card.Footer>

        </Card>
    )
}
