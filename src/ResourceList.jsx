import React from 'react';
import UseResources from './UseResources'

const ResourceList =({resource})=>{
    const resources = UseResources(resource)
  
   return(
        <div>
            <ul>{resources.map(({id,title})=><li key={id}>{title}</li>)}</ul>
       
        </div>
    )
}
export default ResourceList