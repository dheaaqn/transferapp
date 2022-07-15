import * as React from "react";
import UploadFile from './_components/upload_file';
import InfoUser from './_components/info_user';
import { Button, Card, Col, Row, Space, Tooltip, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const Index = () => {
    let url = '/files/template_transfer.xlsx';
    let navigate = useNavigate();

    return (
        <>
            <Card style={{ margin: '4% 12%', borderRadius: '8px'}}>
                <Row justify="space-between">
                    <Col>
                        <Title level={4}>User Information</Title>
                    </Col>
                </Row>
                <InfoUser/>
            </Card>
            <Card style={{margin: '4% 12%', borderRadius: '8px'}}>
                <Row justify="space-between">
                    <Col>
                        <Title level={4}>Transfer</Title>
                    </Col>
                    <Col>
                        <Space>
                            <a href={url} download><Button type="primary">Download Template</Button></a>
                            <Tooltip title="Back to main page">
                                <Button onClick={() => navigate('/')}>Cancel Transaction</Button>
                            </Tooltip>
                        </Space>
                    </Col>
                </Row>
                <UploadFile/>
            </Card>
        </>
    )
}

export default Index;