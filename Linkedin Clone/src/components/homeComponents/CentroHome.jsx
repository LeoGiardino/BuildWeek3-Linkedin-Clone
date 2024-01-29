import '../../styles/CentroProfile.css'
import '../../styles/ColorPallette.css'
import AggiuntaPostComp from './AggiuntaPostComp'
import CorpoPostsComp from './CorpoPostsComp'



export default function CentroHome() {
  return (
    <>

      <div className='centro me-3' style={{ width: '100%' }}>
       <AggiuntaPostComp />
       <CorpoPostsComp />
      </div>
    </>

  )
}
