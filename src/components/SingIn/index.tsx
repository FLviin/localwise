import {FaGoogle} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'



import styles from './styles.module.scss'

export function SignIn(){
    const isUserLoggedIn = false;

    return isUserLoggedIn ?(
        <button type="button" className={styles.signInButton}>
            <FaGoogle color="#04d361"/>
            User Name
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGoogle color="#eba417"/>
            Sign in With Google
        </button>
    )
}