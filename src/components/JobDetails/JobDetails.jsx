import { useLoaderData, useParams } from "react-router-dom";
import { MdRoom } from "react-icons/md";
import { LuSubtitles } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import { Toast, ToastContainer } from "react-toastify/dist/components";
import { toast } from "react-toastify";

const JobDetails = () => {
          const jobs= useLoaderData();
          const {id}=useParams();
          const job = jobs.find(job => job.id === parseInt(id));
          console.log(job);
          const handleApplyJob= () =>{
                    toast('You have applied successful')
          }
          return (
                    <div className="my-14">
                          <h1>jobs details of : { job.job_title}</h1>   
                          <div className="grid gap-8 md:grid-cols-4">
                              <div className=" md: col-span-3">
                                        <h3 className="text-4xl">Details</h3>
                                        <p>{job.company_name}</p>
                                        <p><span className="text-2xl font-semibold">Job Description:</span> {job.job_description}</p>
                                        <p><span className="text-2xl font-semibold">Job Responsibility:</span> {job.job_responsibility}</p>
                                        <p className="text-2xl font-semibold">Educational Requirements:</p>
                                        <p>{job.educational_requirements}</p>
                                        <p className="text-2xl font-semibold">Experience: </p>
                                        <p>{job.experiences}</p>
                              </div>
                              <div className="border border-black ">
                                        <h1 className="text-4xl"> Job Details</h1>
                                        <div className="flex gap-2 text-base px-2 font-semibold">
                                                  <h1 className=""><MdRoom></MdRoom></h1>
                                                  <p>Salary: {job.salary} (Per Month)</p>
                                                  <h1><LuSubtitles></LuSubtitles></h1>
                                        </div>
                                        <button onClick={handleApplyJob} className="btn btn-primary bg-[#927AFF] w-full text-white">Apply Now</button>
                              </div>
                              </div> 
                              <ToastContainer></ToastContainer>
                    </div>
          );
};

export default JobDetails;