import { setUserEmail } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../redux/store";

const ReduxComponent = (props: any) => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  function updateEmail(email: string) {
    // console.log("updateEmail", email);
    dispatch(setUserEmail({}));
  }

  return (
    <>
      <div>username:{JSON.stringify(user)}</div>

      <button
        onClick={() => updateEmail("sam@gmail.com")}
        className="bg-red-500 rounded-md px-2 text-white"
      >
        Update
      </button>
    </>
  );
};

export default ReduxComponent;
