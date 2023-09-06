import { useEffect, useState, useContext } from "react";
import styles from "./ForYouDisplay.module.css";
import { StateContext } from "@/app/page";
import classNames from "classnames";

const ForYouDisplay = ({ handleFeedElementClick, userId }) => {
    const [feedElements, setFeedElements] = useState([]);
    const [selectedPrefs, setSelectedPrefs] = useState([]);
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
                <div className={`${styles["tag-dot"]} ${styles[type]}`} />
                <p>{type}</p>
            </div>
        )
    }


    const PreferenceButton = ({ name }) => {
        const handlePreferenceClick = () => {
            if (!selectedPrefs.includes(name) && selectedPrefs.length < 5) {
                setSelectedPrefs((prev) => [...prev, name])
            } else if (selectedPrefs.includes(name)) {
                setSelectedPrefs((prev) => prev.filter((pref) => pref != name))
            }
        }

        return (
            <button onClick={() => { handlePreferenceClick() }} className={classNames(styles["pref-button"], styles[name], selectedPrefs.includes(name) ? styles.selected : "")}>
                <img src={`pref-images/${name}-icon.png`} class={styles["pref-image"]} />
                <label>{name}</label>
            </button>
        )
    }

    const ProgressBubble = ({ id }) => {
        return (
            <div className={classNames(styles["progress-bubble"], selectedPrefs[id] && styles.fill)}>
                <div className={styles.inner} />
            </div>
        )

    }

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>For you</h2>
            <div className={styles.bar}>
                <section className={styles["preference-display"]}>
                    {selectedPrefs && <div className={styles["pref-bar"]}>
                        <PreferenceButton name="nature" />
                        <PreferenceButton name="business" />
                        <PreferenceButton name="cooking" />
                        <PreferenceButton name="music" />
                        <PreferenceButton name="entertainment" />
                        <PreferenceButton name="reading" />
                        <PreferenceButton name="art" />
                        <PreferenceButton name="tech" />
                    </div>}
                    <div className={styles["pref-bottom-bar"]}>
                        <div className={styles["progress-bar"]}>
                            <ProgressBubble id={0} />
                            <ProgressBubble id={1}/>
                            <ProgressBubble id={2}/>
                            <ProgressBubble id={3}/>
                            <ProgressBubble id={4}/>
                            <p>{selectedPrefs ?  (selectedPrefs[4] ? "5 out of 5 selected!":`You can choose ${5 - selectedPrefs.length} more`):"Choose up to 5!"}</p>
                        </div>
                        <button>Submit</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default ForYouDisplay;