import React from 'react';
import { useState } from 'react';

const Day1 = () => {

    const stories = [ { title: 'React', url: 'https://reactjs.org/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0, },
    { title: 'Redux', url: 'https://redux.js.org/', author: 'Dan Abramov, Andrew Clark', num_comments: 2, points: 5, objectID: 1, }, ];

    const [searchTerm, setSearchTerm] = useState('')

    const searchHandle = (event) =>{
        setSearchTerm(event.target.value)
    }

    const findTitle = stories.filter ((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase())) 



    return (
        <div>
            <h1>Day 1</h1>
            <Search onSearch={searchHandle} />

            <List stories={findTitle}/>
           
            
        </div>
    )



}

const Search = ({onSearch}) =>{
    return (<div>
        <label htmlFor='search'>Search : </label>
        <input id='search' type='text' onChange={onSearch}></input>
    </div>)
    
}

const List = (props) => {
    return props.stories.map( (story) =>{
        return <div>
            {story.title}
        </div>
    }

    )
}

// function Day1() {
//     const names = ["Kim", "Lee", "Park", "Oh", "Chung", "Choi"]

//     const [searchName, setSearchName] = useState('')

//     const searchHandle = (event) =>{
//         setSearchName(event.target.value);
//     }

//     const findName = names.filter((name) => name.toLowerCase().includes(searchName.toLocaleLowerCase()));

//     return (
//         <div>
//             <Search onSearch={searchHandle} />
//             <hr></hr>
//             <List names={findName} />
//         </div>
//     );
// }

// const Search = (props)=>{
//     return (
//         <div>
//             <label htmlFor="search"> Search :  </label>
//             <input id='search' type='text' onChange={props.onSearch}/>
//         </div>
//     )
    
// }
// const List = (props) =>{
//     return props.names.map( (name) => {
//         return(
//             <div>
//                 {name}
//             </div>
//         );
//     })
// }



export default Day1;