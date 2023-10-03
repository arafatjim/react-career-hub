import { Link } from "react-router-dom";

const ErrorPage = () => {
          return (
                    <div>
                          <h1>Opps !!!</h1>
                          <h5>Sorry there is no page</h5>  
                          <p>Page not found</p> 
                          {/* <Link to='/'>Go Back To Home</Link>  */}
                          <Link to='/'><button className="bg-red-400">Go Back To Home</button></Link>
                    </div>
          );
};

export default ErrorPage;