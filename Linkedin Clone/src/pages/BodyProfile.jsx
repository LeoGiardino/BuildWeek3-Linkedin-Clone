import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions/profiles'
import '../styles/BodyProfile.css'
import RightProfile from '../components/profiloComponents/RightProfile';
import CentroProfile from '../components/profiloComponents/CentroProfile';

export default function BodyProfile() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile())
    }, [])


    return (
        <>
            <div className='d-flex w-100 container p-4 principale'>

                <CentroProfile />
                <RightProfile />
            </div>

        </>
    )
}
