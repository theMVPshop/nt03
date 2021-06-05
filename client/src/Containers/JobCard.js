import { connect } from 'react-redux';
import JobCard from '../components/JobCard';
//import { getUser } from '../Redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(JobCard);
