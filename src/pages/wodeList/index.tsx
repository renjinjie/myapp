import React, { useState, useEffect } from "react";
import styles from "./index.less";
import { Table, Tag, message, Button, Modal } from "antd";
const { confirm } = Modal;
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AddHtml from './add'
const wodetablist = (props: any) => {
    const [ispopup, setIspopup] = useState<boolean>(false)
    const [isadd, setIsadd] = useState<boolean>(false)
    const [record, setRecord] = useState<object>({})
    useEffect(() => {
        console.log("props", props)
    })

    const columns = [
        {
            title: "姓名",
            dataIndex: "name",
            key: "name",
            render: (text: any) => <a>{text}</a>
        },
        {
            title: "年龄",
            dataIndex: "age",
            key: "age"
        },
        {
            title: "介绍",
            dataIndex: "address",
            key: "address"
        },
        {
            title: "标题",
            key: "tags",
            dataIndex: "tags",
            render: (tags: any) => (
                <span>
                    {tags.map((tag: any) => {
                        let color = tag.length < 5 ? "skyblue" : "green";
                        if (tag === "loser") {
                            color = "#f50";
                        }
                        console.log(tag.toUpperCase())
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            )
        },
        {
            title: "提示",
            key: "action",
            render: (text: any, record: any) => (
                <span>
                    <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                </span>
            )
        },
        {
            title: "操作",
            key: "caozuo",
            render: (text: any, record: any) => (
                <span>
                    <a style={{ marginRight: 16 }} onClick={() => updateItemClick(record)}>修改</a>
                    <a style={{ marginRight: 16 }} onClick={() => rovmeItemClick(record)}>删除</a>
                </span>
            )
        }
    ];

    // 修改
    const updateItemClick = (item: any) => {
        console.log(item.key)
        setIspopup(true)
        setIsadd(false)
        setRecord(item)
    }
    // 删除
    const rovmeItemClick = (item: any) => {
        console.log(item.key)
        confirm({
            title: '确认删除?',
            icon: <ExclamationCircleOutlined />,
            content: null,
            onOk() {
                message.success("删除成功" + item.key);
            },
            onCancel() {
                message.error("取消" + item.key);
            },
        });
    }
    // 新增
    const addtabItem = () => {
        setRecord({})
        console.log("新增11111111111111111")
        setIspopup(true)
        setIsadd(true)
    }
    const handleOk = () => {
        console.log("ok")
        setIspopup(false)
    }
    const handleCancel = () => {
        console.log("cancel")
        setIspopup(false)
    }
    const data = [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            tags: ["nice", "developer"]
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["loser"]
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park",
            tags: ["cool", "teacher"]
        },
        
    ];

    return (
        <div className={styles.container}>
            <Button type="primary" className="add_button" onClick={() => { addtabItem() }}>新增</Button>
            <div id="components-table-demo-basic">
                <Table columns={columns} dataSource={data} />
            </div>
            <Modal title={isadd ? '新增' : '修改'} visible={ispopup} onOk={handleOk} onCancel={handleCancel}>
                <AddHtml record={record} />
            </Modal>
        </div>
    );
}
export default (wodetablist)