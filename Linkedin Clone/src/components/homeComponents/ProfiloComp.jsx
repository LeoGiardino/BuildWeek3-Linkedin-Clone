import { Card } from 'react-bootstrap'
import '../../styles/HomeStyle/Profilo.css'
import { BookmarkFill, PlusLg } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

export default function ProfiloComp() {


    const profilo = useSelector((state) => state?.profili?.profili);

    


    return (
        <>
            <Card>
                <div className='imgsContainer mb-3'>
                    <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4E16AQGJAgsZMcUGcw/profile-displaybackgroundimage-shrink_350_1400/0/1646321291738?e=1711584000&v=beta&t=S6CGjbsodn1yzBo9nvtq7vtii1_9Gm2mA_uVNy4kSiI" />
                    <img className='imgPropicHome' src={profilo?.image} />
                </div>
                <Card.Body className='px-0 pb-0'>
                    <Card.Title className='text-center'>{profilo?.name} {profilo?.surname}</Card.Title>
                    <div className='descrizioneProfilo'>
                        {profilo?.title}
                    </div>
                    <div className='collegamentiProfilo'>
                        <div className='d-flex justify-content-between mb-2'>
                            <span>Visitatori del profilo</span>
                            <span className='pageBlueTxt'>49</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span>Collegamenti</span>
                            <span className='pageBlueTxt'>94</span>
                        </div>
                        <span className='expandWeb'>Espandi la tua rete</span>
                    </div>
                    <div className='premiumProfilo'>
                        <p className='m-0'>Accedi a strumenti e informazioni in esclusiva</p>
                        <div className='d-flex align-items-center'>
                            <div className='premiumIcon me-2 mb-1'></div><div className='pageWhtTxt'>Prova Premium per 0 EUR</div>
                        </div>
                    </div>
                    <div className='prefeProfilo'>
                        <BookmarkFill className='me-2 mb-1 iconcine' />
                        <span className='pageWhtTxt'>I miei elementi</span>
                    </div>
                </Card.Body>
            </Card>

      <Card>
        <Card.Body className="px-0 py-0">
          <div className="linksProfilo ">
            <div>
              <p>Gruppi</p>
              <p>Eventi</p>
              <p className="mb-0">Hastag seguiti</p>
            </div>

            <div>
              <PlusLg className="iconcine" />
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-center risorseFooter">
          Scopri di più
        </Card.Footer>
      </Card>
    </>
  );
}
