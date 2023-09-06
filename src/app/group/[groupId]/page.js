"use client";

import { getAllGroups } from "@/lib/getAllGroups";
import { useEffect, useState } from "react";

const GroupPage = ({ params }) => {
    const [group, setGroup] = useState({});


    useEffect(() => {
        let groupArray = localStorage.getItem("groupArray");
        groupArray = JSON.parse(groupArray);
        setGroup(groupArray[params.groupId]);
    }, [])


    const handleTestClick = async () => {
        console.log("Test Clicked");
        let groupArray = localStorage.getItem("groupArray");
        groupArray = JSON.parse(groupArray);
        console.log("Group Array: ", groupArray);
    }



    return (
        <div>
            <h1>{group.title}</h1>
            <button onClick={() => handleTestClick()}>Run Test</button>
        </div>
    )
}

export default GroupPage;