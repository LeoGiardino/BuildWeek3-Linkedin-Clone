import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions/profiles'
import '../styles/BodyProfile.css'
import RightProfile from '../components/RightProfile';
import CentroProfile from '../components/CentroProfile';


export default function BodyProfile() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile())
    }, [])

    const state = useSelector(state => state.profili)
    console.log(state);

    return (
        <>
            <div className='d-flex h-100 w-100 container p-4'>

                <CentroProfile />
                <RightProfile />

            </div>

        </>
    )
}
