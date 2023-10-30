import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
        <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
            <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
             <form action="">
             <div className="relative my-4" >
                <input type="email"  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:text-white focus:border-blue-600 peer "/>
                <label htmlFor="">Your Email</label>
             </div>
             <div className="relative my-4"  >
                <input type="password"  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:text-white focus:border-blue-600 peer "/>
                <label htmlFor="">Your Password </label>
             </div>
            <div>
             <div>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="Remember Me"></label>
             </div>
            <span>Forgot password?</span>
            </div><ocus:outline-none></ocus:outline-none>
            <button type="submit">Login</button>
            <div>
                <span>New here?<Link to='Register'>Create an Account </Link></span>
            </div>
             </form>
        </div> 
      
    </div>
  );
};

export default Login;
