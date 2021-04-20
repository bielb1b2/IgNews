import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client';


import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession()

    console.log("Sessão: ", session)

    return session ? (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signOut()}
    >
        <FaGithub color="#04d361"/>
        {session.user.name}
        <FiX color="#737390" className={styles.closeIcon}/>
    </button>
    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn('github')}
    >
        <FaGithub color="#eba417"/>
        Sign In with Github
    </button>
    )
}