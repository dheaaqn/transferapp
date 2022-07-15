import { Button } from "antd";
import * as React from "react";

const column = [
    {
        key: 'penerima',
        title: 'Nama Penerima',
        dataIndex: 'penerima'
    },
    {
        key: 'kode_bank',
        title: 'Kode Bank',
        dataIndex: 'kode_bank'
    },
    {
        key: 'nama_bank',
        title: 'Nama Bank',
        dataIndex: 'nama_bank'
    },
    {
        key: 'rekening_penerima',
        title: 'Nomor Rekening Penerima'
    },
    {
        width: 150,
        render: () => (
            <Button>Action</Button>
        )
    }
]

export default column;