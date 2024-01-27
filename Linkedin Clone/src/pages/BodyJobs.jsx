import '../styles/BodyProfile.css'
import CentroJobs from '../components/jobsComponents/CentroJobs';

import RightJobs from '../components/jobsComponents/RightJobs';
import LeftJobs from '../components/jobsComponents/LeftJobs';




export default function BodyProfile() {



    return (
        <>
            <div className='d-flex w-100 container p-4 principale'>
                <LeftJobs />
                <CentroJobs />
                <RightJobs />
            </div>

        </>
    )
}
