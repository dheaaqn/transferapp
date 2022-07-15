import { Col, Row } from "antd";
import * as React from "react";
import ContentComp from './content';

export default class Index extends React.Component {
    render() {
        return (
            <Row style={{margin: '5% 0'}} justify="center">
                <Col>
                    <ContentComp />
                </Col>
            </Row>
        )
    }
}