
import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import People from './People'

export default function App() {
  return (
    <Fragment>
    {/* <PageContainer> */}
      <Router primary={false} component={Fragment}>
        <People path="/" />
        {/* <Person path="launch/:launchId" /> */}
      </Router>
    {/* </PageContainer> */}
    {/* <Footer /> */}
  </Fragment>
  );
  }
