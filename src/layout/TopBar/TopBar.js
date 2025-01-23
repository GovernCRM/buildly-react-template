import React, { useState } from 'react';
import _ from 'lodash';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import {
  AccountCircle,
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import logo from '@assets/topbar2-logo.png';
import { getUser } from '@context/User.context';
import { oauthService } from '@modules/oauth/oauth.service';
import { routes } from '@routes/routesConstants';
import { hasAdminRights, hasGlobalAdminRights } from '@utils/permissions';
import AdminMenu from './AdminMenu';
import AccountMenu from './AccountMenu';
import './TopBarStyles.css';
import { useTabStore } from '@zustand/alert/alertStore';

const TopBar = ({
  navHidden,
  setNavHidden,
  history,
  options,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [settingEl, setSettingEl] = useState(null);
  const [organization, setOrganization] = useState(null);
  const { activeTab, setActiveTab } = useTabStore();

  const user = getUser();
  let isAdmin = false;
  let isSuperAdmin = false;
  let org_uuid = user.organization.organization_uuid;

  // eslint-disable-next-line no-undef
  const ver = VERSION;

  if (user) {
    if (!organization) {
      setOrganization(user.organization.name);
    }
    isAdmin = hasAdminRights(user) || hasGlobalAdminRights(user);
    isSuperAdmin = hasGlobalAdminRights(user);
    org_uuid = user.organization.organization_uuid;
  }

  const settingMenu = (event) => {
    setSettingEl(event.currentTarget);
  };

  const handleUserManagementClick = () => {
    history.push(`${routes.USER_MANAGEMENT}/current-users`);
    setSettingEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogoutClick = () => {
    oauthService.logout();
    history.push('/');
  };

  return (
    <AppBar position="fixed" className="topbarAppBar">

      <Toolbar>
        <IconButton
          edge="start"
          className="topbarMenuButton"
          onClick={() => setNavHidden(!navHidden)}
          aria-label="menu"
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <button type="button" onClick={() => history.push(routes.DASHBOARD)} className="topbar-logo-button">
          <img
            src={logo}
            className="topbarLogo"
            alt="Company text logo"
          />
        </button>
        <div className="topbarMenuRight">
          {options.map((tab) => <Typography sx={{ display: { xs: 'none', md: 'block' } }} variant="subtitle2" className={`topbarheading ${activeTab === tab.label ? 'activetabstyle' : ''}`} onClick={() => { history.push(routes[tab.value.toUpperCase()]); setActiveTab(tab.label); }}>{tab.label}</Typography>)}
          {isAdmin && (
            <IconButton
              aria-label="admin section"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={settingMenu}
              color="secondary"
            >
              <SettingsIcon fontSize="large" />
            </IconButton>
          )}
          <AdminMenu
            settingEl={settingEl}
            setSettingEl={setSettingEl}
            handleUserManagementClick={handleUserManagementClick}
          />
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="secondary"
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <AccountMenu
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            user={user}
            organizationName={organization}
            handleLogoutClick={handleLogoutClick}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
