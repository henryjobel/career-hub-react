import { CiLocationOn, CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact bg-base-100  shadow-md">
            <div className='justify-start flex ml-9'>
            <figure><img src={logo} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="btn btn-outline btn-info mr-2">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-info">{job_type}</button>
                </div>
                <div className='mt-4 flex gap-4'>
                    <h1 className='flex'><CiLocationOn className='text-2xl mr-2'></CiLocationOn>{location}</h1>
                    <h2 className='flex'><CiDollar className='text-2xl mr-2'></CiDollar> Salary{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;