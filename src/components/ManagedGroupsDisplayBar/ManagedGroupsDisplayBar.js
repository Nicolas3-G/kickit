import { StateContext } from "@/app/page";
import styles from "./ManagedGroupsDisplayBar.module.css";
import { useContext, useEffect, useState } from 'react';

const ManagedGroupsDisplayBar = ({ handleFeedElementClick, setCurrentView, userId }) => {
    const [managedGroups, setManagedGroups] = useState([]);
    const { state } = useContext(StateContext);

    useEffect(() => {
        generateManagedGroups();
    }, [])

    const generateManagedGroups = () => {
        let generatedGroups = [];
        state.groups.forEach((group) => {
            if (group.ownerId == userId) {
                generatedGroups.push(group)
            } 
        })
        setManagedGroups(generatedGroups)
    }

    // const isMemberInGroup = (group) => {
    //     return group.members.includes(userId);
    // }

    const CreateGroupCard = () => {
        return (
            <article className={styles["create-group-card"]}>
                {managedGroups.length != 0 ?  <p>Add a new group...</p>:<p>You have no groups...</p>}
                <button onClick={() => setCurrentView("createGroup")} className={styles.button}>Create Group</button>
            </article>
        )
    }


    return (
        <section>
            <h2>Managed Groups</h2>
            <div className={styles.bar}>
                {/* {managedGroups.length == 0 && <CreateGroupCard />} */}
                {managedGroups.map((group, groupIdx) => (
                    // Card for each group
                    <article onClick={() => handleFeedElementClick(group.id, "group")} className={styles.card} style={{backgroundImage: `url(${group.thumbnail})`}}>
                        <div className={styles.overlay}>
                            <h3 className={styles["card-title"]}>{group.title}</h3>
                            <p className={styles["card-desc"]}>{group.desc}</p>
                        </div>

                        {/* Render join button based on if user is in group */}
                        {/* <button onClick={() => handleViewGroupClick(groupIdx)}>View Group</button>
                        {!isMemberInGroup(group) ? 
                        <button onClick={() => handleJoinGroupClick(group.title)} className={styles["button-2"]}>Join Group</button>
                        :<button onClick={() => handleLeaveGroupClick(group.title)} className={styles["button-2"]}>Leave Group</button>}
                        {group.ownerId == userId && <button onClick={() => handleDeleteGroupClick(group.title)}>Delete Group</button>} */}
                    </article>
                ))}
                <CreateGroupCard />
            </div>
        </section>
    )
}

export default ManagedGroupsDisplayBar;