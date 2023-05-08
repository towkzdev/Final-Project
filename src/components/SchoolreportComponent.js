import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import School from './School';
import Grade from './grade';


const SchoolreportComponent = () => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Tabs
                        defaultActiveKey="schoolreport"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                        variant='pills'
                    >
                        <Tab eventKey="schoolreport" title="ระดับโรงเรียน" >
                            <School />
                        </Tab>

                        <Tab eventKey="gradereport" title="ระดับชั้นเรียน">
                          <Grade/>
                        </Tab>

                    </Tabs>
                </Col>

            </Row>


        </div>
    )
}
export default SchoolreportComponent;
