import React from 'react'
import styles from './Home.module.css'
import ImgSilder from './imgslider'
import Viewer from './viewer'
import Recommended from './Recommended'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
 import viewer from './viewer'

import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import db from '../../firebase'
import {setMovies} from '../../features/user/movies/moiveSlice'

import { selectUserName } from '../../features/user/userSlice'



const Home = (props) => {
const dispatch = useDispatch();
const userName = useSelector(selectUserName);
let recommends= [];
let newDisneys = [];
let originals=[];
let trendings=[];



useEffect(() => {
  const fetchMovies = async () => {
    try {
      const snapshot = await db.collection('movies').get();
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const categorizedMovies = {
        recommend: fetchedData.filter((movie) => movie.type === 'recommend'),
        newDisney: fetchedData.filter((movie) => movie.type === 'new'),
        original: fetchedData.filter((movie) => movie.type === 'original'),
        trending: fetchedData.filter((movie) => movie.type === 'trending'),
      };

      dispatch(setMovies(categorizedMovies));
      console.log(categorizedMovies.newDisney);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  fetchMovies();
}, [dispatch]);

  return (
    <div className={styles.container}>

<ImgSilder/>
 <Viewer/>
 <Recommended/>
 <NewDisney/>
 <Originals/>
 <Trending/>
    </div>
  )
}

export default Home
