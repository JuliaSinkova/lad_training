import { ReactNode } from 'react'
import classes from './Layout.module.scss'

type LayoutProps = {
    children :  ReactNode
  }

const Layout = ({children} : LayoutProps) => {
  return (
    <div className={classes.layout}>
        {children}
    </div>
  )
}

export default Layout