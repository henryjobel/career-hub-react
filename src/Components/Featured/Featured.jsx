import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const Featured = () => {

    const [jobs,setJobs] = useState([]);
    const [dataLength, setDatalength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
        
    },[])

    return (
        <div className="max-w-6xl mx-auto">

            <div className='text-center'>
                <h1 className='text-5xl'>Featured Jobs</h1>
                <p className='text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-20">
            {
                jobs.slice(0,dataLength).map(job => <Job key={jobs.id}job={job}></Job>)
            }
            </div>
            <div className="text-center pt-4">
            <div className={dataLength === jobs.length && 'hidden'}>
                <button className="btn btn-primary" onClick={()=> setDatalength(jobs.length)}>Show All Jobs</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;