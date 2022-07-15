import { Col, Row, Typography } from "antd";
import * as React from "react";

const {Title, Text} = Typography;

const Index = () => {
    return (
        <Row style={{marginTop: '30px'}} justify="space-between">
            <Col>
                <Title level={5}>John Doe</Title>
                <Text type="secondary">9000004327028</Text>
            </Col>
            <Col>
                <Title level={5}>Rp. 10.000.000</Title>
                <Text type="secondary">Current Balance</Text>
            </Col>
        </Row>
    )
}

export default Index;