import { useAtomValue } from "jotai";
import { userState } from "../jotai/userState";
const useToken = () =>{
const user = useAtomValue(userState)
const token = user?.token;

return {token}

}

export default useToken;
