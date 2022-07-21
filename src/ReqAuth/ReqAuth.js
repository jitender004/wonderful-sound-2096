import { useSelector } from "react-redux";
const ReqAuth = ({ children }) => {
const isAuth=useSelector((state)=>state.AuthReducer.isAuth)

if(isAuth===false){

}

  return children;
};
export default ReqAuth;
