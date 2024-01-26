import { Card } from 'react-bootstrap'
import '../styles/AttivitaComp.css'
import { ArrowRight, Dot } from 'react-bootstrap-icons'


export default function AttivitaComp() {
    return (
        <Card className='compBackgroundExp'>
            <Card.Body className='d-flex flex-column pb-0' >
                <div className='d-flex justify-content-between mb-1'>
                    <div>
                        <h5>Attività</h5>
                        <span className='followerz'>630 follower</span>
                    </div>
                    <button className='btn2 fw-bold btnblue'>Crea un post</button>
                </div>

                <div className='mb-4'>
                    <button className='fw-bold btngreen '>Post</button>
                    <button className='fw-bold btnblue2 '>Video</button>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                    <span className='azioneAttivita'>Utente ha diffuso questo post <Dot /> 1 giorno</span>
                    <div className='d-flex mt-1'>
                        <div className='imgAttivita'><img className='rounded-1' src='https://picsum.photos/60'></img></div>
                        <div className='d-flex flex-column justify-content-between'>
                            <span className='titoloPost'>Questo post è proprio incredibile -emoji fuoco- 1</span>
                            <span className='titoloPost'>Altre cose che compaiono nei post 1</span>
                        </div>
                    </div>
                    <div className='reactions d-flex justify-content-between align-items-center w-100 m-0'>
                        <p className=' d-flex justify-content-between align-items-center'>
                            <img src='https://static.licdn.com/aero-v1/sc/h/emei2gdl9ikg7penkh9ij9llx' />
                            <img src='https://static.licdn.com/aero-v1/sc/h/9wt27hvi2lgll1v30u00n0p5p' />
                            <img src='https://static.licdn.com/aero-v1/sc/h/3bhtnif60blspoiyhoex4lfx' />
                            <span className='reactionsNum'>614</span>
                        </p>
                        <p>20 commenti</p>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                    <span className='azioneAttivita'>Utente ha diffuso questo post <Dot /> 1 giorno</span>
                    <div className='d-flex mt-1'>
                        <div className='imgAttivita'><img className='rounded-1' src='https://picsum.photos/60'></img></div>
                        <div className='d-flex flex-column justify-content-between'>
                            <span className='titoloPost'>Questo post è proprio incredibile -emoji fuoco- 2</span>
                            <span className='titoloPost'>Altre cose che compaiono nei post 2</span>
                        </div>
                    </div>
                    <div className='reactions d-flex justify-content-between align-items-center w-100 m-0'>
                        <p className=' d-flex justify-content-between align-items-center'>
                            <img src='https://static.licdn.com/aero-v1/sc/h/emei2gdl9ikg7penkh9ij9llx' />
                            <img src='https://static.licdn.com/aero-v1/sc/h/9wt27hvi2lgll1v30u00n0p5p' />
                            <img src='https://static.licdn.com/aero-v1/sc/h/esahr356vrv0vklww6hcjar1j' />
                            <span className='reactionsNum'>357</span>
                        </p>
                        <p>20 commenti <Dot /> 121 diffusioni post</p>
                    </div>
                </div>

                <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                    <span className='azioneAttivita'>Utente ha diffuso questo post <Dot /> 1 giorno</span>
                    <div className='d-flex mt-1'>
                        <div className='imgAttivita'><img className='rounded-1' src='https://picsum.photos/60'></img></div>
                        <div className='d-flex flex-column justify-content-between'>
                            <span className='titoloPost'>Questo post è proprio incredibile -emoji fuoco- 3</span>
                            <span className='titoloPost'>Altre cose che compaiono nei post 3</span>
                        </div>
                    </div>
                    <div className='reactions d-flex justify-content-between align-items-center w-100 m-0'>
                        <p className=' d-flex justify-content-between align-items-center'>
                            <img src='https://static.licdn.com/aero-v1/sc/h/emei2gdl9ikg7penkh9ij9llx' />
                            <img src='https://static.licdn.com/aero-v1/sc/h/esahr356vrv0vklww6hcjar1j' />
                            <img src='https://static.licdn.com/aero-v1/sc/h/3bhtnif60blspoiyhoex4lfx' />
                            <span className='reactionsNum'>891</span>
                        </p>
                        <p>20 commenti</p>
                    </div>
                </div>

            </Card.Body>
            <Card.Footer className='text-center risorseFooter'>Mostra tutti i post (617) <ArrowRight /></Card.Footer>
        </Card>
    )
}
