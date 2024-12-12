import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Profile.module.scss'
import { faUser } from '@fortawesome/free-solid-svg-icons'
type ProfileProps = {
    firstName: string,
    LastName: string

}
const Profile = ({firstName, LastName}: ProfileProps) => {
  return (
    <div className={classes.profile}>
       <FontAwesomeIcon icon={faUser} size='xl' />
        <div>{firstName} {LastName}</div>
    </div>
  )
}

export default Profile