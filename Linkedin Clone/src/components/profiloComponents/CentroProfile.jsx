import '../../styles/CentroProfile.css'
import '../../styles/ColorPallette.css'
import PrimoBox from './PrimoBox'
import AnalisiComp from './AnalisiComp'
import RisorseComp from './RisorseComp'
import InformazioniComp from './InformazioniComp'
import EsperienzaComp from './EsperienzaComp'
import FormazioneComp from './FormazioneComp'
import LicenzeComp from './LicenzeComp'
import CompetenzeComp from './CompetenzeComp'
import InteressiComp from './InteressiComp'
import AttivitaComp from './AttivitaComp'

export default function CentroProfile() {
  return (
    <>

      <div className='centro me-3' style={{ width: '100%' }}>
        <PrimoBox />
        <AnalisiComp />
        <RisorseComp />
        <InformazioniComp />
        <AttivitaComp />
        <EsperienzaComp />
        <FormazioneComp />
        <LicenzeComp />
        <CompetenzeComp />
        <InteressiComp />
      </div>
    </>

  )
}
