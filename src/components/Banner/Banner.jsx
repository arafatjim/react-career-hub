

const Banner = () => {
          return (
                    <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-[#927AFF]">Dream Job</span></h1>
                <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary bg-[#927AFF] text-white font-semibold">Get Started</button>
              </div>
            </div>
          </div>
          );
};

export default Banner;