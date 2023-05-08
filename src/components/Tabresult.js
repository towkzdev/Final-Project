import {Tab, Tabs } from 'react-bootstrap';
import "./Tabresult.css"
import Alltab from './Alltab';
import TabADHA from './TabADHD';
import TabLDR from './TabLDR';
import TabLDW from './TabLDW';
import TabLDM from './TabLDM';
import TabAutism from './TabAutism';


const Tabresult = () => {
    return (
        <Tabs
            defaultActiveKey="all"
            id="fill-tab-example"
            className="mb-3"
            fill
            variant='pills'
            
        >
            <Tab eventKey="all" title="ทั้งหมด">
                <Alltab/>
            </Tab>
            <Tab eventKey="adhd" title="ด้าน ADHD">
                <TabADHA/>
            </Tab>
            <Tab eventKey="ldr" title="ด้าน LDR">
                <TabLDR/>
            </Tab>
            <Tab eventKey="ldw" title="ด้าน LDW">
                <TabLDW/>
            </Tab>
            <Tab eventKey="ldm" title="ด้าน LDM">
                <TabLDM/>
            </Tab>
            <Tab eventKey="auts" title="ด้าน Autism">
                <TabAutism/>
            </Tab>
        </Tabs>
    );
}

export default Tabresult;
