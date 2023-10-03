import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Features = () => {
          const [jobs, setJobs] = useState([]);
          const [dataLength, setLength]=useState(4);
          useEffect(() => {
                    fetch('jobs.json')
                    .then(res => res.json())
                    .then(data => setJobs(data));
          },[])

          return (
                    <div>
                         <div>
                         <h2 className="text-5xl text-center font-semibold">Featured Jobs: {jobs.length}</h2> 
                         <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>    
                    </div>
                    <div className="grid grid-cols-2 gap-6 py-10">
                         {
                              jobs.slice(0, dataLength).map(job => <Job key={jobs.id} job={job}></Job>)
                         }
                    </div>
                    <div className="text-center">
                         <div className={ dataLength === jobs.length ? 'hidden' : ''}>
                         <button onClick={() =>setLength(jobs.length)} className="btn btn-primary my-6   bg-gradient-to-r from-[#7E90FE]-0 via-[#9873FF]-50 text-white      font-extrabold">Show All</button>
                    </div>
                    </div>
                    </div>
          );
};

export default Features;