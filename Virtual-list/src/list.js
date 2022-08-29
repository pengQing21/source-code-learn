import React, { useEffect, useState } from 'react';
import img from './img.jpg'
import HOC from './V-HOC';

// 子组件
const Item = ({ id }) => {

    return (
        <div style={{ display: 'flex', alignItems: 'center', padding: 5 }}>
            <img src={img} width={80} height={60} alt="" />列表{id}
        </div>
    )
}

const ItemHoc = HOC(Item)

const Index = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        let arr = []
        for (let i = 0; i < 500; i++) {
            arr.push(i)
        }
        setList(arr)
    }, [])

    if (list.length === 0) return <></>

    return (
        <div>
            <ItemHoc list={list} />
        </div>
    );
}

export default Index;