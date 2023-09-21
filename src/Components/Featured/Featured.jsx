import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const Featured = () => {

    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
        
    },[])

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl'>Featured Jobs</h1>
                <p className='text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <dir>
            {
                jobs.map(job => <Job key={jobs.id}job={job}></Job>)
            }
            </dir>
        </div>
    );
};

export default Featured;