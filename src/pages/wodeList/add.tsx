import React,{useState,useEffect} from "react";
import styles from "./index.less";
import { Input, Tag,message,Button,Modal } from "antd";
const addtab = (props:any)=>{
    const [ispopup,setIspopup] = useState<boolean>(false)
    const [obj,setObj] = useState<object>({})
    const {record} = props
    useEffect(()=>{
        console.log("父组件传递过来的值",record)
        setObj(record)
    })

return (
  <div className={styles.container}>
       <p>姓名{record.name}<Input defaultValue={record.name}/></p>
       <p>年龄{record.age}<Input defaultValue={record.age}/></p>
       <p>介绍{record.address}<Input defaultValue={record.address}/></p>
       <p>标题{record.name}<Input defaultValue={record.name}/></p>
       <p>提示{record.name}<Input defaultValue={record.name}/></p>

  </div>
);
}
export default (addtab)