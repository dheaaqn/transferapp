import { Button } from "antd";
import * as React from "react";

const column = [
    {
        key: 'index',
        title: 'No.',
        dataIndex: 'index',
        width: 50,
        render: (index:number) => {return index + 1}
    },
    {
        key: 'nama_file',
        title: 'Nama File',
        dataIndex: 'nama_file'
    },
    {
        key: 'tanggal_upload',
        title: 'Tanggal Upload',
        dataIndex: 'tanggal_upload'
    },
    {
        width: 150,
        render: () => (
            <Button>Action</Button>
        )
    }
]

export default column;