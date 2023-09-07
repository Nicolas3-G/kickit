import React, { useContext } from 'react'
import styles from "./displayBars.module.css"
import { StateContext } from '@/app/page'

export const MemberDisplayBar = ({ focusedItem }) => {
    const { state } = useContext(StateContext);

    const group = state.groups.get(focusedItem[0]);

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Members</h1>
            {group && <div className={styles["members-holder"]}>
                {group.members.map((member) => {
                    return (<div className={styles["user-card"]}>
                        <div className={styles["user-image"]} />
                        {member}
                    </div>)
                })}
            </div>}
        </div>
    )
}

export const FeaturedDisplayBar = ({ focusedItem }) => {
    const { state } = useContext(StateContext);

    // const group = state.groups.get(focusedItem[0]);

    const feedItems = [[3, "creation"], [1, "event"], [2, "event"]]

    // for each feed item we need to display a card and for each card we need to look up that item for the info

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Featured</h1>
            <div className={styles["featured-holder"]}>
                {feedItems.map((item) => {
                    const index = item[0];
                    const itemData = state.events.get(index)
                    return (
                        <div className={styles["featured-card"]} style={{backgroundImage: `url(${itemData.thumbnail})`}}>
                            {itemData.title}
                        </div>
                    )
                })}
            </div>


        </div>
    )
}


