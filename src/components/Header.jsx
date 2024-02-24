import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import profile from "../assets/profile.webp";
import gptlogo from "../assets/gptlogo.png";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => { navigate("/");})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-12 py-4 bg-gradient-to-b from-black z-10 w-full">
      <div className="flex justify-between items-center w-full">
        <img
          className="w-44"
          src={gptlogo}
          alt="logo"
        />
        {user && (
          <div className="flex items-center p-2 gap-4">
            <img className="w-12 h-12" alt="usericon" src={profile} />
            <button onClick={handleSignOut} type="button" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Sign Out
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
