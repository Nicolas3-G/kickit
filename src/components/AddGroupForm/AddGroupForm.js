"use client";

import { useState } from "react";
import styles from "./AddGroupForm.module.css";

const AddGroupForm = ({ handleAddGroupClick }) => {
    const [groupName, setGroupName] = useState();
    const [groupDesc, setGroupDesc] = useState();
    const [groupThumbnail, setGroupThumbnail] = useState();
    const [sendClicked, setSendClicked] = useState();

    const handleThumbnailUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setGroupThumbnail(event.target.result)
        };
        reader.readAsDataURL(file);
    }

    return (
        <form className={styles.form} onSubmit={(e) => handleAddGroupClick(e, groupName, groupDesc, groupThumbnail)}>
            <div className={styles["input-holder"]}>
                <label htmlFor="groupName">Group Name</label>
                <input className={styles.input} id="groupName" onChange={(e) => setGroupName(e.target.value)} type="text" />
            </div>
            <div className={styles["input-holder"]}>
                <label htmlFor="groupName">Group Description</label>
                <textarea className={styles.input} id="groupName" onChange={(e) => setGroupDesc(e.target.value)} />
            </div>
            <div className={styles["input-holder"]}>
                <label htmlFor="groupName">Group Thumbnail</label>
                <input className={styles.input} type="file" id="groupThumbnail" onChange={handleThumbnailUpload} />
            </div>
            <div className={styles["button-loader-holder"]}>
                <button className={styles.button} onClick={() => setSendClicked(true)} type="submit">Add Group</button>
                {sendClicked && <p className={styles["confirmation-text"]}>Group Added</p>}
            </div>

        </form>
    )
}

export default AddGroupForm;