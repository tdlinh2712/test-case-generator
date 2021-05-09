import React, { useState } from 'react'
import TabBar from '../container/TabBar'
import Tab from '../container/Tab'


const Dashboard = () => {
    const [selectedTab,setSelectedTab] = useState("problem");
    return (
        <div>
            <TabBar selectedTab={selectedTab} onHandleChangeTab={setSelectedTab}/>
            <Tab activeTab={selectedTab}>
                <div name="problem"> Problem </div> 
                <div name="submissions"> Submissions </div>
                <div name="report"> Test Report </div>
            </Tab>
        </div>
    )
}

export default Dashboard;