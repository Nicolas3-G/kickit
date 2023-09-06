"use client";

import styles from './page.module.css'
import React, { useEffect, useState, useReducer } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import MainWindow from '@/components/MainWindow/MainWindow';
import reducer from '@/actions/actions';
import initialReducerState from '@/lib/InitialReducerState';

export const StateContext = React.createContext();

export default function Home() {
  const [activeTab, setActiveTab] = useState("explore");
  const [userId, setUserId] = useState(3430);

  const [state, dispatch] = useReducer(reducer, initialReducerState);

  useEffect(() => { console.log("Watching User: ", userId) }, [userId]);

  useEffect(() => { console.log("Watching Groups: ", state.groups) }, [state.groups]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <main className={styles.main}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainWindow setActiveTab={setActiveTab} userId={userId} setUserId={setUserId} activeTab={activeTab} />
      </main>
    </StateContext.Provider>
  )
}
