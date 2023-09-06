import AddGroupForm from '@/components/AddGroupForm/AddGroupForm';
import ManagedGroupsDisplayBar from '../../ManagedGroupsDisplayBar/ManagedGroupsDisplayBar';
import styles from './MyGroupsTab.module.css';
import { useState } from 'react';
import JoinedGroupsDisplayBar from '@/components/JoinedGroupsDisplayBar/JoinedGroupsDisplayBar';

const MyGroupsTab = ({ handleAddGroupClick, handleFeedElementClick, userId }) => {
    const [currentView, setCurrentView] = useState("main");

    return (
        <>
            {currentView == "main" && <>
                <ManagedGroupsDisplayBar userId={userId} handleFeedElementClick={handleFeedElementClick} setCurrentView={setCurrentView} />
                <JoinedGroupsDisplayBar userId={userId} handleFeedElementClick={handleFeedElementClick} />
            </>}
            {currentView == "createGroup" &&  <>
                <h1>Create a Group</h1>
                <AddGroupForm handleAddGroupClick={handleAddGroupClick} />
            </>}


        </>
    )
}

export default MyGroupsTab;