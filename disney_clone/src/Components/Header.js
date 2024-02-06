import { Link ,useNavigate} from 'react-router-dom';
import { auth, provider } from '../firebase';
import {signInWithPopup, signOut} from 'firebase/auth'
import styles from './Header.module.css';
import Logo from './Assets/logo.svg';
import Homeicon from './Assets/home-icon.svg';
import Movie from './Assets/movie-icon.svg';
import Search from './Assets/search-icon.svg';
import SeriesIcon from './Assets/series-icon.svg';
import Watchlist from './Assets/watchlist-icon.svg';
import Original from './Assets/original-icon.svg';
import { useDispatch , useSelector } from 'react-redux';

import { selectUserName,  selectUserPhoto,setSignOutState,setUserLoginDetails } from '../features/user/userSlice';
import Login from './Login';
import { useEffect } from 'react';
const Header = (props) => {

const dispatch =useDispatch();
const push = useNavigate();
const username= useSelector(selectUserName);
const userphoto = useSelector(selectUserPhoto);



const handleAuth = async () => {
    try {
      if (!username) {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
  
        setUser(user);
        console.log(user);
      } else {
        await auth.signOut();
        dispatch(setSignOutState());
        push('/');
      }
    } catch (error) {
      console.log("An error occurred ", error);
      if (error.message) {
        alert(error.message);
      }
    }
  };
        
        const setUser = (user) =>{
            dispatch(setUserLoginDetails({
                name : user.displayName, 
                email: user.email,
                photo : user.photoURL,
            }));
        }

        const userphotos = userphoto

useEffect (()=>{
    auth.onAuthStateChanged( async (user)=>{
        if(user){
            setUser(user)
            push('./home')
        }
    })
},[username])
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src={Logo} alt="Logo" />
            </div>
            
            { !username ? (
                <button className={styles.login} onClick ={handleAuth} >Log in</button> ) :( <>


            <div className={styles.navmenu}>
                <Link to="/Home">
                    <img src={Homeicon} alt="Home" />
                    <span>HOME</span>
                </Link>
                <Link to="/Search">
                    <img src={Search} alt="Search" />
                    <span>Search</span>
                </Link>
                <Link to="/watchlist">
                    <img src={Watchlist} alt="watchlist" />
                    <span>Watchlist</span>
                </Link>
                <Link to="/Original">
                    <img src={Original} alt="Originals" />
                    <span>Originals</span>
                </Link>
                <Link to="/Movie">
                    <img src={Movie} alt="Movie" />
                    <span>Movies</span>
                </Link>
                <Link to="/Series">
                    <img src={SeriesIcon} alt="Series" />
                    <span>Series</span>
                </Link>
            </div>
            <div className={styles.signout}>
            <img  className= {styles.userimg} src={userphotos}  alt = {username}></img> 
<div>
    <span className={styles.signoutbutton} onClick={handleAuth}>Sign Out</span>
</div>
            </div>
            </>  )}
        </div> 
    );
};


export default Header ;
