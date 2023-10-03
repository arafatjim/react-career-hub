import { Link } from "react-router-dom";


const Job = ({job}) => {
          const {logo,job_title, company_name, remote_or_onsite,location,job_type,salary, job_description, job_responsibility, educational_requirments, experience,contact_information}=job;
          return (
                    <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure className="p-4"><img src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title text-3xl">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="grid grid-cols-2 gap-4">
                    <Link to=""><button className="border-none rounded-2xl px-6 py-3  bg-[#927AFF]">{`Remote`}</button>{`Full Time`}</Link>
                    <Link to=""><button></button></Link>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                    </div>
                    </div>
          );
};

export default Job;