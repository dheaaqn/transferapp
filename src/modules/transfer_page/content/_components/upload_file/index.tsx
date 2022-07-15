import * as React from "react";
import { InboxOutlined } from '@ant-design/icons';
import { Card, Upload, message, Row, Col, Button, Popconfirm } from "antd";
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;

const Index = () => {
    const [showFiles, setShowFiles] = React.useState<boolean>(false);
    const [fileList, setFileList] = React.useState<UploadFile[]>([]);
    const [disabled, setDisabled] = React.useState<boolean>(true);

    let navigate = useNavigate();

    const props:UploadProps = {
        name: 'file',
        multiple: false,
        accept: '.xlsx',
        showUploadList: showFiles,
        maxCount: 1,
        beforeUpload: (file) => {
            const types = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
            if(!types.includes(file.type)) {
                message.error(`${file.name} is not xlsx file`)
                setFileList([]);
            } else {
                setFileList([...fileList, file]);
            }
            return false;
        },
        onRemove: () => {
            setFileList([]);
        }
    }

    const handleSubmit = () => {
        console.log("DATA", fileList)
        message.success("Data Uploaded Succesfully")
        setFileList([]);
        navigate('/')
    }

    const handleCancel = () => {
        message.warning("Please check your data")
    }

    React.useEffect(() => {
        if(fileList.length > 0) {
            setDisabled(false);
            setShowFiles(true);
        } else {
            setDisabled(true);
            setShowFiles(false);
        }
    }, [fileList])

    return (
        <Card style={{margin: '4% 12%', borderRadius: '8px'}}>
            <Dragger {...props}>
                <div className="ant-upload-drag-icon">
                    <InboxOutlined style={{fontSize: '32px'}}/>
                </div>
                <p className="ant-upload-text">Click or drag file to this area to <span style={{fontWeight: 'bold'}}>upload</span></p>
                <p className="ant-upload-hint">
                    Support massive transfer to other bank with accepted file .xlsx
                </p>
            </Dragger>
            <Row justify="end" style={{marginTop: '30px'}}>
                <Col>
                    <Popconfirm 
                        title="Are you sure to upload this file?"
                        onConfirm={() => handleSubmit()}
                        onCancel={() => handleCancel()}
                        okText="Yes"
                        cancelText="No">
                            <Button disabled={disabled} type="primary">Upload</Button>
                    </Popconfirm>
                </Col>
            </Row>
        </Card>
    )
}

export default Index;