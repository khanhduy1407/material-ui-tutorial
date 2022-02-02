import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons'

const drawerWidth = 240

const useStyle = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    active: {
      backgroundColor: "#f4f4f4"
    },
    title: {
      padding: theme.spacing(2)
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyle()
  const history = useHistory()
  const location = useLocation()

  const menuItem = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/"
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create"
    }
  ]

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}>
        <div>
          <Typography variant="h5" className={classes.title}>
            NKDuy Notes
          </Typography>
        </div>

        {/* list / links */}
        <List>
          {menuItem.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}
