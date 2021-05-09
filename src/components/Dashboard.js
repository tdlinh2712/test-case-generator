import React, { useState } from 'react'
import TabBar from '../container/TabBar'
import Tab from '../container/Tab'
import ProblemTab from './ProblemTab/index'
import ScriptTab from './ScriptTab'
import TestCasesTab from './TestCasesTab'
import TestResultTab from './TestResultTab'

const Dashboard = () => {
    const [selectedTab,setSelectedTab] = useState("test-cases");
    return (
        <div>
            <TabBar selectedTab={selectedTab} onHandleChangeTab={setSelectedTab}/>
            <Tab activeTab={selectedTab}>
                <ProblemTab name="problem"/>
                <TestCasesTab name="test-cases"/>
                <ScriptTab name="submissions"/>
                <TestResultTab name="results"/>
            </Tab>
        </div>
    )
}

export default Dashboard;