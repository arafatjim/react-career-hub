import { Link } from "react-router-dom";
import { MdRoom } from "react-icons/md";
import { MdMonetizationOn } from "react-icons/md";

const Job = ({job}) => {
          const {logo,id,job_title, company_name, remote_or_onsite,location,job_type,salary, job_description, job_responsibility, educational_requirments, experience,contact_information}=job;
          return (
                    <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure className="p-4"><img src={logo} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title text-3xl">{job_title}</h2>
                    <p className="text-xl">{company_name}</p>
                    <div className="grid grid-cols-2 w-72  text-xl my-4">

                              <button className="border border-[#927AFF] rounded-md px-4 py-3 font-bold text-[#927AFF] mr-4"><Link to="">Remote</Link></button>

                              <button className="border border-[#927AFF] rounded-md px-4 py-3  font-bold text-[#927AFF]"><Link to="">Full Time</Link></button>
                              </div>
                              <div className="grid grid-cols-2">
                                        
                                        <div className="flex gap-2 text-3xl">
                                        <h1><MdRoom></MdRoom></h1>
                                        <p className="text-2xl font-semibold">{location}</p>
                                        </div>
                              

                                        
                                        <div className="flex gap-2 text-2xl">
                                                  <h1><MdMonetizationOn></MdMonetizationOn></h1>
                                                  <p className="text-2xl font-semibold">Salary {salary}</p>
                                        </div>
                                        
                              </div>
                    
                    <div className="card-actions justify-start ">
                    <Link  to={`/job/${id}`}>
                              <button className="btn btn-primary bg-gradient-to-r from-[#7E90FE]-0 via-[#9873FF]-50 text-white font-extrabold">View Details</button>
                    </Link>
                    </div>
                    </div>
                    </div>
          );
};

export default Job;