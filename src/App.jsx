import React ,{useState} from 'react';
import ResourceList from './ResourceList.jsx';
import UserList from './UserList.jsx';
const App =()=>{
    const [resource, setResource] = useState('posts')
return(
    <div>
        <UserList></UserList>
        <button onClick={()=>setResource('posts')}>posts</button>
        <button onClick={()=>setResource('todos')}>todos</button>
        <ResourceList resource = {resource}></ResourceList>
    </div>
)
}
export default App