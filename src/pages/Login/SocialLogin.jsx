import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handlerGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const loggedInUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="divider">Or</div>
      <button
        onClick={handlerGoogleLogin}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle className="text-red-400" />
      </button>
    </div>
  );
};

export default SocialLogin;
