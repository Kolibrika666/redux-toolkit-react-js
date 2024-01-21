import { useSelector } from 'react-redux';
import LoginPage from '../pages/login/App';

const WithAuthComponent = ({children}) => {
  const userName = useSelector(state => state.auth.userName)
  if (userName) return (
    <>
      {children}
    </>
  ) 
  else return <LoginPage />
}

export default WithAuthComponent;
