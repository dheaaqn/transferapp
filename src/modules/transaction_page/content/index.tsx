import { Button, Card, Col, Row, Tooltip, Typography } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import TableFiles from './_components/table_files';
import TableTransaction from './_components/table_transaction';
import InfoUser from './_components/info_user';

const { Title } = Typography;

const Index = () => {
    let navigate = useNavigate();

    return (
        <>
        <Card style={{ marginBottom: '30px', borderRadius: '8px'}}>
            <Row justify="space-between">
                <Col>
                    <Title level={4}>User Information</Title>
                </Col>
                <Col>
                    <Tooltip title="Click to Transfer">
                        <Button type="primary" onClick={() => navigate('/transfer')}>Transfer</Button>
                    </Tooltip>
                </Col>
            </Row>
            <InfoUser/>
        </Card>
        <Card style={{ marginBottom: '30px', borderRadius: '8px'}}>
            <Row>
                <Col>
                    <Title level={4}>Uploaded Files</Title>
                </Col>
            </Row>
            <TableFiles/>
        </Card>
        <Card style={{ marginBottom: '30px', borderRadius: '8px'}}>
            <Row>
                <Col>
                    <Title level={4}>History Transaction</Title>
                </Col>
            </Row>
            <TableTransaction/>
        </Card>
        </>
    )
}

export default Index;