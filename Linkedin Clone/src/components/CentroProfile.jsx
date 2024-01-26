import '../styles/CentroProfile.css'
import '../styles/ColorPallette.css'
import PrimoBox from './PrimoBox'
import AnalisiComp from './AnalisiComp'
import RisorseComp from './RisorseComp'
import InformazioniComp from './InformazioniComp'
import EsperienzaComp from './EsperienzaComp'

export default function CentroProfile() {
  return (
    <>

      <div className='centro me-3' style={{ width: '100%' }}>
        <PrimoBox />
          <AnalisiComp />
        <RisorseComp />
        <InformazioniComp />
        <EsperienzaComp />
      </div>
    </>

  )
}
