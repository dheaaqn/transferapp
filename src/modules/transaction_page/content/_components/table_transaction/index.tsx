import { Col, Row, Table } from "antd";
import * as React from "react";
import columns from './columns'

const Index = () => {
    return (
        <Row style={{marginTop: '30px'}}>
            <Col span={24}>
                <Table columns={columns}/>
            </Col>
        </Row>
    )
}

export default Index;