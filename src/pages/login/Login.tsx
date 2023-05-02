/* eslint-disable import/no-default-export */
import { loginSlice } from 'app/providers/StoreProvider/config/reducers';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/redux';

const Sign = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    dispatch(loginSlice.actions.signIn());
    window.localStorage.setItem('isLogin', 'true');
  };
  return (
    <div>
      <div>Sign page</div>
      <Link
        to="/editor"
        onClick={handleSubmit}
      >
        Submit
      </Link>
    </div>
  );
};

export default Sign;
