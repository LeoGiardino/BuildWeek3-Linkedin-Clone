import '../../styles/CentroProfile.css'
import '../../styles/ColorPallette.css'
import ConsigliatiComp from './ConsigliatiComp'
import OfferteComp from './OfferteComp'
import PremiumJobsComp from './PremiumJobsComp'
import SelezioneComp from './SelezioneComp'


export default function CentroJobs() {
  return (
    <>

      <div className='centro me-3' style={{ width: '100%' }}>
        <OfferteComp />
        <ConsigliatiComp />
        <PremiumJobsComp />
        <SelezioneComp />
      </div>
    </>

  )
}
