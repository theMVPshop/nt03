import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { signOut } from '../Redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    signInStatus: state.signInStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
