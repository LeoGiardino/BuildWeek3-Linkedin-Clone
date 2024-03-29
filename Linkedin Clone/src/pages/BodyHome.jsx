import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions/profiles'
import '../styles/BodyProfile.css'
import RightProfile from '../components/RightProfile';
import CentroProfile from '../components/profiloComponents/CentroProfile';



export default function BodyHome() {


    return (
        <>
            <div className='d-flex container p-4 principale' style={{ maxWidth: '1128px' }}>

                <CentroProfile />
                <RightProfile />
            </div>

        </>
    )
}
