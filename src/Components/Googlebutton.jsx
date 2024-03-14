import Googlelogo from "../assets/img/Google.svg";
import { useGoogleLogin } from "@react-oauth/google";
function Googlebutton() {
    const login = useGoogleLogin({
        onSuccess : tokenResponse => console.log(tokenResponse)
    })
  return (
    <>
      <div className="font-Jakarta">
      <button onClick={login} className="bg-neutral-200 font-bold text-xs w-28 h-10 rounded-md flex items-center justify-center align-middle gap-2 container">
        <img src={Googlelogo} />
        Google
      </button>
    </div>
    </>
  
  );
}

export default Googlebutton;