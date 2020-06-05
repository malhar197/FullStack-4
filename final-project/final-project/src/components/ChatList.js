import React , {useState, useEffect} from 'react';
import axios from 'axios';

export default function ChatList() {
    const [chats,setChats] = useState([]);
  
    useEffect(()=>{
        axios.get('http://localhost:3030/logs/chats')
        .then(res =>{
            console.log(res.data);
            const chats = res.data;
            setChats(chats);
        });
    },[]);

    return (
        <>
        <table>
        <th>Message</th>
        <th>Sender</th>
        <th>Date and time</th>
            {chats.map(chat => (
                <tr>
                <td>{chat.message}</td>
                <td>{chat.sender}</td>
                <td>{chat.createdAt}</td>
                </tr>
            ))}
        </table>
    </>
    );
}