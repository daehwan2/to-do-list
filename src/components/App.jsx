import { useEffect, useState } from "react";
import { authService } from "../fbase";
import Home from "../routes/Home";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../_actions/user_action";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      dispatch(SetUser(user));
      setInit(true);
    });
  }, []);

  return (
    <div>
      {init ? (
        Object.keys(user).length !== 0 ? (
          <>hi</>
        ) : (
          <Home />
        )
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default App;
