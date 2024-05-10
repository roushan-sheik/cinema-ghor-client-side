// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import useUserContext from "../../hooks/useUserContext";

function LogInButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signinWithGoogle,  } = useUserContext();
  // google login
  function handleGoogleLogin() {
    signinWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
 
 
  return (
    <div className=" flex gap-4 flex-col justify-between md:flex-row">
      <button
        onClick={handleGoogleLogin}
        className="flex gap-2 px-3 py-2 rounded-xl  justify-center items-center bg-white text_pri border-2 "
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png"
          alt=""
          className="w-4 h-4  "
        />
        <span> Sign in with Google</span>
      </button>
    
    </div>
  );
}
export default LogInButton;
