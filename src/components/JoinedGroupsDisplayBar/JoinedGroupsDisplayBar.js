import { StateContext } from "@/app/page";
import styles from "./JoinedGroupsDisplayBar.module.css";
import { useContext, useEffect, useState } from 'react';

const JoinedGroupsDisplayBar = ({ handleFeedElementClick, setCurrentView, userId }) => {
    const [joinedGroups, setJoinedGroups] = useState([]);
    const { state } = useContext(StateContext); 

    useEffect(() => {
        generateJoinedGroups();
    }, [])

    const generateJoinedGroups = () => {
        let generatedGroups = [];
        state.groups.forEach((group) => {
            if (group.members.includes(userId) && group.ownerId != userId) {
                generatedGroups.push(group)
            } 
        })
        setJoinedGroups(generatedGroups)
    }

    const JoinGroupCard = () => {
        return (
            <article className={styles["create-group-card"]}>
                {joinedGroups.length != 0 ?  <p>Find a new group...</p>:<p>You are not a member of any groups...</p>}
                <button onClick={() => setCurrentView("createGroup")} className={styles.button}>Find a Group!</button>
            </article>
        )
    }


    return (
        <section>
            <h2>Joined Groups</h2>
            <div className={styles.bar}>
                {/* {managedGroups.length == 0 && <CreateGroupCard />} */}
                {joinedGroups.map((group, groupIdx) => (
                    // Card for each group
                    <article onClick={() => handleFeedElementClick(group.id, "group")} className={styles.card} style={{backgroundImage: `url(${group.thumbnail})`}}>
                        <div className={styles.overlay}>
                            <h3 className={styles["card-title"]}>{group.title}</h3>
                            <p className={styles["card-desc"]}>{group.desc}</p>
                        </div>
                    </article>
                ))}
                <JoinGroupCard />
            </div>
        </section>
    )
}

export default JoinedGroupsDisplayBar;