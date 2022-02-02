import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  page: {
      backgroundColor: "#f9f9f9",
      width: "100%"
  }
})

export default function Layout({ children }) {
  const classes = useStyle()

  return (
    <div>
      {/* app bar */}

      {/* side drawer */}
      
      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}
