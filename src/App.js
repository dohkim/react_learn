import React from 'react';



// function App() {
const App = () => {

  const stories = [ { title: 'React', url: 'https://reactjs.org/', author: 'Jordan Walke', num_comments: 3, points: 4, objectID: 0, },
  { title: 'Redux', url: 'https://redux.js.org/', author: 'Dan Abramov, Andrew Clark', num_comments: 2, points: 5, objectID: 1, }, ];

  const [searchTerm, setSearchTerm] = React.useState('');

    
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter(
    (story) => story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
  

  return (
    <div>
      <h1>My Hacker Stories</h1>      

      <Search onSearch={handleChange}/> 
    

    {/*
    using below function 
     {list.map(function(item, index) {
      return <div key={index}>{item.title}</div>;
    })} */}

    <List list={searchedStories}/>

  </div>

  );
}
const Search = (props) =>{  
  return(<div>
    <label htmlFor="search">Search: </label> 
  <input id="search" type="text" onChange={props.onSearch} /> 
  </div>)
}

// function List(){
const List = (props) => {
  // return list.map(function(item){
  return props.list.map((item) => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}> {item.title}</a>
        </span>
        <span> {item.author}</span>
        <span> {item.num_comments}</span>
        <span> {item.points}</span>
      </div>
    );
  })
}




export default App;


/*
Make Search Form
<label htmlFor="search">Search: </label> 
<input id="search" type="text" />


const welcome = { greeting: 'Hey', title: 'React', };
{welcome.greeting} {welcome.title}
*/
