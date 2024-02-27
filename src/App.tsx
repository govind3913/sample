// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse,
//   ListItemIcon,
//   IconButton,
// } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import InboxIcon from '@material-ui/icons/ExpandLess';

// // Import your custom components
// import Component1 from './Component1';
// import Component2 from './Component2';
// import Component3 from './Component3';

// const fullDrawerWidth = 240;
// const reducedDrawerWidth = 60;

// interface SidebarItem {
//   text: string;
//   path?: string;
//   component: React.ComponentType<any>; // Specify type as React component
//   subItems?: SidebarItem[];
//   icon?: React.ReactNode; // Define icon prop
// }

// const sidebarItems: SidebarItem[] = [
//   {
//     text: 'Component 1',
//     path: '/component1',
//     component: Component1,
//     icon: <InboxIcon />, // Example icon
//   },
//   {
//     text: 'Component 2',
//     path: '/component2',
//     component: Component2,
//     icon: <InboxIcon />, // Example icon
//   },
//   {
//     text: 'Component 3',
//     subItems: [
//       { text: 'Subcomponent 1', path: '/component3/sub1', component: Component1 },
//       { text: 'Subcomponent 2', path: '/component3/sub2', component: Component1 },
//     ],
//     component: Component3,
//     icon: <InboxIcon />, // Example icon
//   },
// ];

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//     appBar: {
//       zIndex: theme.zIndex.drawer + 1,
//     },
//     drawer: {
//       flexShrink: 0,
//     },
//     drawerPaper: {
//       width: fullDrawerWidth,
//     },
//     drawerPaperCollapsed: {
//       width: reducedDrawerWidth,
//     },
//     drawerContainer: {
//       overflow: 'auto',
//       overflowX: 'hidden'
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       marginLeft: fullDrawerWidth, // Adjusting the margin based on full width
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     contentCollapsed: {
//       marginLeft: reducedDrawerWidth, // Adjusting the margin based on collapsed width
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//     },
//     nested: {
//       paddingLeft: theme.spacing(4),
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//   })
// );

// const App: React.FC = () => {
//   const classes = useStyles();
//   const [collapsed, setCollapsed] = useState(false);
//   const [subMenuOpen, setSubMenuOpen] = useState(false);

//   const toggleDrawerWidth = () => {
//     setCollapsed(!collapsed);
//   };

//   const toggleSubMenu = () => {
//     setSubMenuOpen(!subMenuOpen);
//   };

//   const renderSidebarItems = (items: SidebarItem[] | undefined, isNested?: boolean) =>
//     items?.map((item, index) => (
//       <React.Fragment key={index}>
//         {item.path ? (
//           <ListItem button component={Link} to={item.path} className={isNested ? classes.nested : ''}>
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItem>
//         ) : (
//           <React.Fragment>
//             <ListItem button onClick={toggleSubMenu} className={isNested ? classes.nested : ''}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//               {subMenuOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
//             </ListItem>
//             <Collapse in={!subMenuOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {renderSidebarItems(item.subItems, true)}
//               </List>
//             </Collapse>
//           </React.Fragment>
//         )}
//       </React.Fragment>
//     ));

//   return (
//     <Router>
//       <div className={classes.root}>
//         <AppBar position="fixed" className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="menu"
//               onClick={toggleDrawerWidth}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap>
//               Fixed Topbar
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           className={classes.drawer}
//           variant="permanent"
//           classes={{
//             paper: collapsed ? classes.drawerPaperCollapsed : classes.drawerPaper,
//           }}
//         >
//           <Toolbar />
//           <div className={classes.drawerContainer}>
//             <List>
//               {renderSidebarItems(sidebarItems)}
//             </List>
//           </div>
//         </Drawer>
//         <main className={`${classes.content} ${collapsed ? classes.contentCollapsed : ''}`}>
//           <Toolbar />
//           <Routes>
//             {sidebarItems.map((item, index) => (
//               <Route key={index} path={item.path} element={<item.component />} />
//             ))}
//             {sidebarItems
//               .filter(item => item.subItems)
//               .map((item, index) =>
//                 item.subItems!.map((subItem, subIndex) => (
//                   <Route
//                     key={index + '-' + subIndex}
//                     path={subItem.path}
//                     element={<subItem.component />}
//                   />
//                 ))
//               )}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InboxIcon from '@material-ui/icons/ExpandLess';
import DashboardIcon from '@material-ui/icons/Dashboard'; // Import additional icons
import AssessmentIcon from '@mui/icons-material/Assessment';

// Import your custom components
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

const fullDrawerWidth = 240;
const reducedDrawerWidth = 60;

interface SidebarItem {
  text: string;
  path?: string;
  component: React.ComponentType<any>; // Specify type as React component
  subItems?: SidebarItem[];
  icon?: React.ReactNode; // Define icon prop
}

const sidebarItems: SidebarItem[] = [
  {
    text: 'Component 1',
    path: '/component1',
    component: Component1,
    icon: <DashboardIcon />, // Use DashboardIcon for Component 1
  },
  {
    text: 'Component 2',
    path: '/component2',
    component: Component2,
    icon: <AssessmentIcon />, // Use InboxIcon for Component 2
  },
  {
    text: 'Component 3',
    subItems: [
      { text: 'Subcomponent 1', path: '/component3/sub1', component: Component1,icon: <AssessmentIcon /> },
      { text: 'Subcomponent 2', path: '/component3/sub2', component: Component1,icon: <AssessmentIcon /> },
    ],
    component: Component3,
    icon: <AssessmentIcon />, // Use ExpandLessIcon for Component 3
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      width: fullDrawerWidth,
    },
    drawerPaperCollapsed: {
      width: reducedDrawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
      overflowX: 'hidden'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginLeft: fullDrawerWidth, // Adjusting the margin based on full width
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    contentCollapsed: {
      marginLeft: reducedDrawerWidth, // Adjusting the margin based on collapsed width
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleDrawerWidth = () => {
    setCollapsed(!collapsed);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const renderSidebarItems = (items: SidebarItem[] | undefined, isNested?: boolean) =>
    items?.map((item, index) => (
      <React.Fragment key={index}>
        {item.path ? (
          <ListItem button component={Link} to={item.path} className={isNested ? classes.nested : ''}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ) : (
          <React.Fragment>
            <ListItem button onClick={toggleSubMenu} className={isNested ? classes.nested : ''}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {subMenuOpen ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </ListItem>
            <Collapse in={!subMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderSidebarItems(item.subItems, true)}
              </List>
            </Collapse>
          </React.Fragment>
        )}
      </React.Fragment>
    ));

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawerWidth}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Fixed Topbar
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: collapsed ? classes.drawerPaperCollapsed : classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {renderSidebarItems(sidebarItems)}
            </List>
          </div>
        </Drawer>
        <main className={`${classes.content} ${collapsed ? classes.contentCollapsed : ''}`}>
          <Toolbar />
          <Routes>
            {sidebarItems.map((item, index) => (
              <Route key={index} path={item.path} element={<item.component />} />
            ))}
            {sidebarItems
              .filter(item => item.subItems)
              .map((item, index) =>
                item.subItems!.map((subItem, subIndex) => (
                  <Route
                    key={index + '-' + subIndex}
                    path={subItem.path}
                    element={<subItem.component />}
                  />
                ))
              )}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

