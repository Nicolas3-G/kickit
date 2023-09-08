import React, { useEffect, useState } from 'react'
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
  const annoucementList = [{ text: "Hey everyone 👋 we are moving locations to garys pub!", sender: "admin", time: "Sept 4" }, { text: "Justin124 joined the group!", sender: "system", time: "Sept 5" }, { text: "Chris112 joined the group!", sender: "system", time: "Sept 3" }, { text: "Reminder 🔔 Tuesday session is canceled until further notice❗❗❗", sender: "admin", time: "Sept 4" }]

  return (
    <div className={`${styles.card} ${styles["annoucement-log-card"]}`}>
      <h1 className={styles["annoucement-title"]}>Annoucements</h1>
      <div className={styles["annoucement-feed"]}>
        {annoucementList.map((annoucement) => {
          return (
            <div className={styles.annoucement}>
              <span className={`${styles["sender-name"]} ${styles[annoucement.sender]}`}>{annoucement.sender}</span>
              <span style={{ marginRight: "5px" }}>:</span>
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

export const GalleryCard = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["galleryImages/meetup-test.jpeg", "galleryImages/meetup-test-2.jpeg", "galleryImages/meetup-test-3.jpeg"];

  useEffect(() => {
    console.log("image index changed", imageIndex);
  }, [imageIndex])

  const incrementImageIndex = () => {
      imageIndex < images.length - 1 ? setImageIndex(imageIndex + 1) : setImageIndex(0);
  }

  const decrementImageIndex = () => {
      imageIndex != 0 ? setImageIndex(imageIndex - 1) : setImageIndex(images.length - 1);
  }

  return (
    <div className={`${styles.card} ${styles["gallery-card"]}`}>
      <h1 className={styles["small-title"]}>Gallery</h1>
      <div className={styles["gallery-holder"]}>
        <div className={styles["gallery-image-holder"]}>
          <button onClick={() => decrementImageIndex()} className={styles["gallery-button"]}><img src="icons/arrow-icon.png" style={{transform: "rotate(180deg)"}} className={styles["arrow-icon"]}/></button>
          <img src={images[imageIndex]} className={styles["gallery-image"]} />
          <button onClick={() => incrementImageIndex()} className={styles["gallery-button"]}><img src="icons/arrow-icon.png" className={styles["arrow-icon"]}/></button>
        </div>

      </div>
    </div>
  )
}

export const LatestCreationsCard = () => {
  return (
    <div className={`${styles.card} ${styles["latest-creations-card"]}`}>
      <h1 className={styles["small-title"]}>Latest Creations</h1>
      <div className={styles["event-holder"]}>
        <img src="feedElementImages/image-6.png" className={styles["event-image"]} />
        <div className={styles["latest-creations-card-ui"]}>
          <div className={styles["creations-text-holder"]}>
            <p className={styles["creation-name"]}>Creation Name</p>
            <p className={styles["creator-name"]}>Creator Name</p>
          </div>

          <button className={styles["event-button"]}>View</button>
        </div>
      </div>
    </div>
  )
}

