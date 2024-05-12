import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom"; //useNaviagte isa hook but Navigate is a component
//The Outlet component is typically used in React Router v6 to render child routes within a parent route, while Navigate is used for imperative navigation, such as programmatically redirecting a user to a different route.
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
 