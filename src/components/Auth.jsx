import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authActions } from '../store/auth';

export const Auth = () => {
  const auth = useSelector((state) => state.auth.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  function loginUser() {
    dispatch(authActions.toggleLogHandler());
    navigate("/calculator")
  }
  function logoutUser() {
    dispatch(authActions.toggleLogHandler());
    navigate("/")

  }
  return (
    <div>
      {auth ? (
        <Button onClick={logoutUser}>LogOut</Button>
      ) : (
        <Button onClick={loginUser}>LogIn</Button>
      )}
    </div>
  );
};
const Button = styled.button`
  height: 60px;
  width: 120px;
  font-size: 24px;
  border: none;
  border-radius: 10px;
  :active {
    background-color: #bbebeb;
  }
`;
