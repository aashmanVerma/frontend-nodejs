import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../redux/store';

export default function Toggle() {

    const dispatch = useDispatch();

    const mode = useSelector((state)=>state.toggle.mode);
    const [color,setColor] = useState("light");


    const toggleState=()=>{
        if (mode=="light") {
            dispatch(change("dark"))
            setColor("dark");
        } else {
            dispatch(change("light"))
            setColor("light");
        }
    }

  return (
    <div className={`${color} w-[5rem] h-[2.3rem] rounded-3xl inline-block relative`} onClick={toggleState}>
        <motion.div className={`w-[1.9rem] h-[1.9rem] bgcolor rounded-full absolute top-[0.20rem] left-1`}
        initial={{x:0}}
        animate={color=="light"?{x:0}:{x:40}}
        ></motion.div>
    </div>
  )
}
