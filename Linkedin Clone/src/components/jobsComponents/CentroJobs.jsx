import { useSelector } from 'react-redux'
import '../../styles/CentroProfile.css'
import '../../styles/ColorPallette.css'
import AltreOfferteComp from './AltreOfferteComp'
import ConsigliatiComp from './ConsigliatiComp'
import OfferteComp from './OfferteComp'
import PremiumJobsComp from './PremiumJobsComp'
import SearchResults from './SearchResults'
import SelezioneComp from './SelezioneComp'


export default function CentroJobs() {

  const risultati = useSelector(state => state.lavoriTrovati)
  console.log(risultati)
  return (
    <>

      <div className='centro me-3' style={{ width: '100%' }}>
        <OfferteComp/>
        {risultati && <SearchResults risultati = {risultati} /> }
        <ConsigliatiComp />
        <PremiumJobsComp />
        <SelezioneComp />
        <AltreOfferteComp />
      </div>
    </>

  )
}
