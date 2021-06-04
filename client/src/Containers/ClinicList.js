import { connect } from 'react-redux';
import ClinicList from '../components/ClinicSearch/ClinicList';
//import { getUser } from '../Redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(ClinicList);
