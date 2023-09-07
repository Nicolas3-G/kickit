import React from 'react'
import styles from "./cards.module.css"

export const NoteCard = () => {
  return (
    <div className={`${styles.card} ${styles["note-card"]}`}>
      <h1 className={styles.title}>Welcome!</h1>
      <p>Welcome to our group page. Please check out our featured section.</p>
    </div>
  )
}

export const AnnoucementLogCard = () => {
  const annoucementList = [{text: "Hey everyone 👋 we are moving locations to garys pub!", sender: "admin", time: "Sept 4"}, {text: "Justin124 joined the group!", sender: "system", time: "Sept 5"}, {text: "Chris112 joined the group!", sender: "system", time: "Sept 3"}, {text: "Reminder 🔔 Tuesday session is canceled until further notice❗❗❗", sender: "admin", time: "Sept 4"}]

  return (
    <div className={`${styles.card} ${styles["annoucement-log-card"]}`}>
      <h1 className={styles["annoucement-title"]}>Annoucements</h1>
      <div className={styles["annoucement-feed"]}>
          {annoucementList.map((annoucement) => {
            return(
              <div className={styles.annoucement}>
                <span className={`${styles["sender-name"]} ${styles[annoucement.sender]}` }>{annoucement.sender}</span>
                <span style={{marginRight: "5px"}}>:</span>
                <span>{annoucement.text}</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export const UpcomingEventCard = () => {
  return (
    <div className={`${styles.card} ${styles["upcoming-event-card"]}`}>
      <h1 className={styles["small-title"]}>Next Event</h1>
      <div className={styles["event-holder"]}>
        <img src="feedElementImages/image-1.png" className={styles["event-image"]} />
        <div className={styles["upcoming-event-button-holder"]}>
          <button className={styles["event-button"]}>RSVP</button>
          <button className={styles["event-button"]}>View</button>
        </div>
      </div>
    </div>
  )
}

