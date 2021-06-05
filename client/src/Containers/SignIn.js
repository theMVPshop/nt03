import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { getUser, signIn, signOut } from '../Redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    signInStatus: state.signInStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => dispatch(getUser(user)),
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
