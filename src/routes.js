import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  NotFound,
  // UserPage,
  // RepoPage,
  MainPage,
  FaqPage
} from 'containers';

      // <Route path="/:login" component={UserPage} />
      // <Route path="/:login/:name" component={RepoPage} />
export default () => {
  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Route>
  );
  return routes;
};
