import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'

const drawerWidth = 240

const useStyle = makeStyles({
  page: {
      backgroundColor: "#f9f9f9",
      width: "100%"
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  }
})

export default function Layout({ children }) {
  const classes = useStyle()

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
          <Typography variant="h5">
            NKDuy Notes
          </Typography>
        </div>
      </Drawer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}
