import { useContext, useEffect, useState } from "react";
import styles from "./FocusItemTab.module.css";
import { StateContext } from "@/app/page";
import {MemberDisplayBar, FeaturedDisplayBar}from "./components/displayBars";
import {NoteCard, AnnoucementLogCard, UpcomingEventCard, GalleryCard, LatestCreationsCard} from "./components/cards";

const FocusItemTab = ({ focusedItem, handleJoinGroupClick, handleLeaveGroupClick, userId }) => {
    const [itemData, setItemData] = useState(null);
    const { state } = useContext(StateContext);

    useEffect(() => {
        let dataset;
        switch (focusedItem[1]) {
            case "group":
                dataset = state.groups;
                break;
            case "event":
                dataset = state.events;
                break;
            case "creation":
                dataset = state.creations;
                break;
        }

        const item = dataset.get(focusedItem[0]);
        setItemData(item);
    }, [state, focusedItem]);

    const isMemberInGroup = () => {
        return itemData.members.includes(userId);
    }

    return (
        <div className={styles.section}>
            {itemData && <>
                <section className={styles.header}>
                    <div className={styles["image-holder"]}>
                        <img className={styles["item-image"]} src={itemData.thumbnail} alt="item image" />
                    </div>
                    <div className={styles["header-text"]}>
                        <h1 className={styles["item-title"]}>{itemData.title}</h1>
                        <span className={styles["icon-text-holder"]}><img className={styles["location-icon"]} src="icons/location-icon.png" /> San Francisco, CA</span>
                        <p>{itemData.desc}</p>
                    </div>
                    <div className={styles["corner-ui"]}>
                        <p>Member Count: 113</p>
                        {/* Dynamnic button to leave or join group*/}
                        {itemData.type == "group" && (!isMemberInGroup(itemData) ?
                            <button onClick={() => handleJoinGroupClick(itemData.id)} className={styles["button-2"]}>Join Group</button>
                            : <button onClick={() => handleLeaveGroupClick(itemData.id)} className={styles["button-2"]}>Leave Group</button>)}
                        {/* Delete button for owner*/}
                        <div className={styles["organizor-holder"]}>
                            <p>Organized by: Admin</p>
                        </div>
                    </div>
                </section>
                <main className={styles["main-grid"]}>
                    <NoteCard />
                    <MemberDisplayBar focusedItem={focusedItem} />
                    <FeaturedDisplayBar />
                    <AnnoucementLogCard />
                    <UpcomingEventCard />
                    <GalleryCard />
                    <LatestCreationsCard />
                </main>



                {/* {itemData.ownerId == userId && <button onClick={() => handleDeleteGroupClick(group.title)}>Delete Group</button>} */}
            </>}
        </div>
    )
}

export default FocusItemTab;