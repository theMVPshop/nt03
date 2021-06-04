import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { getUser } from '../Redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => dispatch(getUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
