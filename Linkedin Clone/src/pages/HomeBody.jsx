
import '../styles/BodyProfile.css'
import CentroHome from '../components/homeComponents/CentroHome';
import LeftHome from '../components/homeComponents/LeftHome';
import RightHome from '../components/homeComponents/RightHome';




export default function BodyProfile() {



    return (
        <>
            <div className='d-flex w-100 container p-4 principale'>
                <LeftHome />
                <CentroHome />
                <RightHome />
            </div>

        </>
    )
}
