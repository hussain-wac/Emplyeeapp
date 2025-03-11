import { Navigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { userState } from "../../jotai/userState";

const Protected = ({ children }) => {
  const user = useAtomValue(userState)
  return user ? children : <Navigate to="/" replace />;
};

export default Protected;
