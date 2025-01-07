import { ReactNode, useContext } from 'react'
import classes from './Layout.module.scss'
import clsx from 'clsx'
import { ThemeContext } from '@/context/ThemeContext/ThemeContext'

type LayoutProps = {
    children :  ReactNode
  }

const Layout = ({children} : LayoutProps) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={clsx(classes.layout, classes[`layout__${theme}`])}>
        {children}
    </div>
  )
}

export default Layout