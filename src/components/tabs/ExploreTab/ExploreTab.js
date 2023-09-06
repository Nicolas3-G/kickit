import ForYouDisplay from '@/components/ForYouDisplay/ForYouDisplay';
import GroupsDisplayBar from '../../GroupsDisplayBar/GroupsDisplayBar';
import styles from './ExploreTab.module.css';

const ExploreTab = ({ userId, handleFeedElementClick }) => {
    
    const CallToActionComponent = () => {
        return (
            <div className={styles["gradient-wrapper"]}>
                <section className={styles.cta}>
                    <p>Create and manage your own group completely free, start by signing up today </p>
                    <button className={styles["cta-button"]}>Sign Up</button>
                </section>
            </div>

        )
    }
    
    return (
        <>
            <GroupsDisplayBar handleFeedElementClick={handleFeedElementClick} userId={userId} />
            <CallToActionComponent />
            <ForYouDisplay handleFeedElementClick={handleFeedElementClick} userId={userId} />
        </>
    )
}

export default ExploreTab;