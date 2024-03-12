import movies from '../movies.js';

export default function List ({item}){
 
    return (
      
      <ul>
        {movies.map(item => (
          <li key={item.title}><b>Title: </b>{item.title}<b>Year: </b>{item.year}<b>Director: </b>{item.director}<b>Duration: </b>{item.duration}<b>Genre: </b>{item.genre}<b>Score: </b>{item.score}</li>
          
        ))}
        
      </ul>
    )
  }
  
  