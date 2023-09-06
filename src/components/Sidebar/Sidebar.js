import styles from "./Sidebar.module.css";

const Sidebar = ({ setActiveTab, activeTab }) => {




    return (
        <section className={styles.section}>
            <div className={styles["main-title-holder"]}>
                <img className={styles["main-icon"]} src="kickit-icon.png" alt="Kickit Logo" />
                <h1 className={styles.title}>Kickit</h1>
            </div>
            <nav className={styles["nav-holder"]}>
                <div className={styles["nav-list"]}>
                    <div className={`${styles["nav-item"]} ${activeTab == "explore" && styles["selected"]}`} onClick={() => setActiveTab("explore")}>
                        <a className={styles["nav-link"]} href="#">Explore</a>
                    </div>
                    <div className={`${styles["nav-item"]} ${activeTab == "myGroups" && styles["selected"]}`} onClick={() => setActiveTab("myGroups")}>
                        <a className={styles["nav-link"]} href="#">My Groups</a>
                    </div>
                    <div className={styles["nav-item"]}>
                        <a className={styles["nav-link"]} href="#">Social</a>
                    </div>
                    <div className={styles["nav-item"]}>
                        <a className={styles["nav-link"]} href="#">Settings</a>
                    </div>
                </div>

            </nav>
            
        </section>
    )
}

export default Sidebar;