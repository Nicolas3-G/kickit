import styles from './MainWindow.module.css';
import ExploreTab from '../tabs/ExploreTab/ExploreTab';
import MyGroupsTab from '../tabs/MyGroupsTab/MyGroupsTab';
import { useContext, useState } from 'react';
import FocusItemTab from '../tabs/FocusItemTab/FocusItemTab';
import { ACTIONS } from '@/actions/actions';
import { StateContext } from '@/app/page';

const MainWindow = ({ activeTab, setActiveTab, userId, setUserId }) => {
    const [focusedItem, setFocusedItem] = useState([]);
 
    const {state, dispatch} = useContext(StateContext);

    // Components
    const SelectUserComponent = () => {
        return (
            <div>
                <select value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value="3430">User 1</option>
                    <option value="3431">User 2</option>
                </select>
                <p>User: {userId}</p>
            </div>
        )
    }


    // Functions
    const handleAddGroupClick = (e, groupName, groupDesc, groupThumbnail) => {
        e.preventDefault();
        const newGroup = { id: (state.groups.size + 1), title: `${groupName}`, type: "group", desc: `${groupDesc}`, members: [userId], ownerId: userId, thumbnail: groupThumbnail }
        dispatch({ type: ACTIONS.ADD_GROUP, payload: { group: newGroup } })
    }

    const handleJoinGroupClick = (groupId) => {
        dispatch({ type: ACTIONS.JOIN_GROUP, payload: { groupId, userId } })
    }

    const handleLeaveGroupClick = (groupId) => {
        dispatch({ type: ACTIONS.LEAVE_GROUP, payload: { groupId, userId } })
    }

    const handleDeleteGroupClick = (groupTitle) => {
        // console.log("Deleteing Group: ", groupTitle);
        // setGroups((prev) => {
        //     return prev.filter((group) => {
        //         if (groupTitle != group.title) {
        //             return group;
        //         }
        //     })
        // })
    }

    const handleFeedElementClick = (id, type) => {
        setFocusedItem([id, type]);
        setActiveTab("focusItem");
    }

    return (
        <section className={styles.section}>
            {activeTab == "explore" && <ExploreTab handleFeedElementClick={handleFeedElementClick} userId={userId} />}
            {activeTab == "myGroups" && <MyGroupsTab userId={userId} handleAddGroupClick={handleAddGroupClick} handleFeedElementClick={handleFeedElementClick} />}
            {activeTab == "focusItem" && <FocusItemTab userId={userId} handleLeaveGroupClick={handleLeaveGroupClick} handleJoinGroupClick={handleJoinGroupClick} focusedItem={focusedItem} />}
        </section>
    )
}

export default MainWindow;