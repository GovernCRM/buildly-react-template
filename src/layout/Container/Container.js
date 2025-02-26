import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import _ from 'lodash';
import { Container } from '@mui/material';
import { UserContext, getUser } from '@context/User.context';
import TopBar from '../TopBar/TopBar';
import UserManagement from '@pages/UserManagement/UserManagement';
import { routes } from '@routes/routesConstants';
import { hasAdminRights, hasGlobalAdminRights } from '@utils/permissions';
import { isMobile } from '@utils/mediaQuery';
import './ContainerStyles.css';
import Community from '@pages/Community/Community';
import Relationship from '@pages/Relationship/Relationship';
import Management from '@pages/Management/Management';

const ContainerDashboard = ({ location, history }) => {
  const userData = getUser();
  const [navHidden, setNavHidden] = useState(false);

  const subNavItems = [
    { label: 'Community', value: 'community' },
    { label: 'Relationship', value: 'relationship' },
    { label: 'Management', value: 'management' },
  ];

  return (
    <div className="containerRoot">
      <UserContext.Provider value={getUser()}>
        <TopBar
          navHidden={navHidden}
          setNavHidden={setNavHidden}
          options={subNavItems}
          location={location}
          history={history}
        />
        <Container
          className={`containerContent ${!isMobile() && 'containerContentMaxWidth'}`}
        >
          <Route
            exact
            path={routes.APP}
            render={() => <Redirect to={routes.COMMUNITY} />}
          />
          {(hasAdminRights(userData)
            || hasGlobalAdminRights(userData))
            && (
              <Route
                path={routes.USER_MANAGEMENT}
                component={UserManagement}
              />
            )}
          <Route
            path={routes.COMMUNITY}
            component={Community}
          />
          <Route
            path={routes.RELATIONSHIP}
            component={Relationship}
          />
          <Route
            path={routes.MANAGEMENT}
            component={Management}
          />
        </Container>
      </UserContext.Provider>
    </div>
  );
};

export default ContainerDashboard;
