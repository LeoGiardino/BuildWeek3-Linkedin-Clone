import '../styles/BodyProfile.css'
import CentroJobs from '../components/jobsComponents/CentroJobs';

import RightJobs from '../components/jobsComponents/RightJobs';
import LeftJobs from '../components/jobsComponents/LeftJobs';




export default function BodyProfile() {



    return (
        <>
            <div className='d-flex container p-4 principale' style={{ maxWidth: '1128px' }}>
                <LeftJobs />
                <CentroJobs />
                <RightJobs />
            </div>

        </>
    )
}
