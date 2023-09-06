import { useContext, useEffect, useState } from "react";
import styles from "./GroupsDisplayBar.module.css";
import { StateContext } from "@/app/page";

const GroupsDisplayBar = ({ handleFeedElementClick, userId }) => {
    const [feedElements, setFeedElements] = useState([]);
    const { state } = useContext(StateContext);

    useEffect(() => {
        generateFeed();
    }, []);

    const generateFeed = () => {
        // Randomly selects a dataset (events/groups/creations) and pops a value off and add its to the feedElements
        let feedElements = [];
        console.log("Generating Feed")
        while (feedElements.length < 9) {
            const randomNumber = Math.floor(Math.random() * 3);
            const elementChoices = [state.groups, state.events, state.creations];
            const randomIndex = Math.floor(Math.random() * elementChoices[randomNumber].size) + 1;
            // Select element with random number for dataset choide and random index for element choice
            const feedElement = elementChoices[randomNumber].get(randomIndex);

            if (feedElement && !feedElements.includes(feedElement)) {
                feedElements.push(feedElement);
            }
        }
        console.log("Feed Elements:", feedElements);
        setFeedElements(feedElements);
    }

    

    const isMemberInGroup = (group) => {
        return group.members.includes(userId);
    }

    const Tag = ({ type }) => {
        return (
            <div className={`${styles.tag} ${styles[type]}`}>
                <div className={`${styles["tag-dot"]} ${styles[type]}`}/>
                <p>{type}</p>
            </div>
        )
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Near you</h2>
            <div className={styles.bar}>
                {feedElements.map((feedElement, feedElementIdx) => (
                    // Card for each group
                    <article onClick={() => handleFeedElementClick(feedElement.id, feedElement.type)} className={styles.card} style={{ backgroundImage: `url(${feedElement.thumbnail})` }}>
                        <div className={styles.overlay}>
                            <h3 className={styles["card-title"]}>{feedElement.title}</h3>
                            <p className={styles["card-desc"]}>{feedElement.desc}</p>
                        </div>
                        <div className={styles["tag-bar"]}>
                            <Tag type={feedElement.type}/>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default GroupsDisplayBar;