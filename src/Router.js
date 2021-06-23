import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Landing from '../src/components/Landing';
import JobSearch from '../src/components/JobSearch';
import JobPostings from '../src/components/JobPostings';
import ClinicSearch from '../src/components/ClinicSearch/ClinicSearch';
import ClinicSearchResults from './components/ClinicSearch/ClinicSearchResults';
import ResumeBuilder from './components/ResumeBuilder';

// Imported components for user login system
// import SignIn from './Containers/SignIn';
// import SignUp from './components/SignUp';
// import AddressBook from './components/AddressBook';
// import SavedJobs from './components/SavedJobs';

// Auth code to verify user
// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies['loggedIn'] ? true : false;
// };
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to='/login' />
//       }
//     />
//   );
// };


function Router() {
  const [jobSearch, setJobSearch] = useState({});
  const [clinicSearch, setClinicSearch] = useState('');

  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route path='/job-search'>
        <JobSearch setJobSearch={setJobSearch} />
      </Route>
      <Route path='/job-postings'>
        <JobPostings jobSearch={jobSearch} setJobSearch={setJobSearch} />
      </Route>
      <Route path='/clinic-search'>
        <ClinicSearch setClinicSearch={setClinicSearch} />
      </Route>
      <Route path='/clinic-results'>
        <ClinicSearchResults clinicSearch={clinicSearch} />
      </Route>
      <Route path='/resume-builder' component={ResumeBuilder}></Route>

      {/* Components for user login and retrieve info */}
      {/* <Route path='/sign-in' component={SignIn}></Route> */}
      {/* <Route path='/sign-up' component={SignUp}></Route> */}
      {/* <Route path='/address-book' component={AddressBook}></Route> */}
      {/* <Route path='/saved-jobs' component={SavedJobs}></Route> */}

    </Switch>
  );
}

export default Router;
