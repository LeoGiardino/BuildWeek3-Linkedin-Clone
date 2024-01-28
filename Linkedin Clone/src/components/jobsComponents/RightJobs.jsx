import '../../styles/RightProfile.css'
import "../../styles/sideBar.css"
import { CaretDownFill, Linkedin } from 'react-bootstrap-icons'






export default function RightJobs() {

  return (
    <div className='destra d-none d-lg-block '>
      <div className='d-flex flex-wrap justify-content-center mx-3'>
        <p className='titoloFooter footerJobs'>Informazioni</p>
        <p className='titoloFooter footerJobs'>Accessibilità</p>
        <p className='titoloFooter footerJobs'>Centro assistenza</p>
        <p className='titoloFooter footerJobs'>Privacy e condizioni <CaretDownFill /></p>
        <p className='titoloFooter footerJobs'>Opzioni per gli annunci pubblicitari</p>
        <p className='titoloFooter footerJobs'>Pubblicità</p>
        <p className='titoloFooter footerJobs'>Servizi alle aziende <CaretDownFill /></p>
        <p className='titoloFooter footerJobs'>Scarica l'app Linkedin</p>
        <p className='titoloFooter footerJobs'>Altro</p>
      </div>
      <div className='d-flex justify-content-center'>
        <span className='footerJobs pageWhtTxt'><span className='fw-bold'>Linked</span><Linkedin className='mb-1' /> LinkedIn Corporation © 2024</span>
      </div>
    </div>
  )
}
