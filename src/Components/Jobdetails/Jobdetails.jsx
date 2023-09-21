import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Jobdetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams() 
    const idint = parseInt(id);
    const job = jobs.find(job => job.id === idint)
    console.log(jobs,id)
    return (
        <div>
            <h1>{job.job_title}</h1>
        </div>
    );
};

export default Jobdetails;