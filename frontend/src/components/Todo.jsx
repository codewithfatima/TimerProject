import React from 'react';
import { useState, useEffect } from 'react';
import './todo.css'


const Todo = () => {
  const [changeTheme, setChangeTheme] = useState('');
   const [toggleState , settoggleState] = useState(1);
   const [visiability , setVisiability] = useState(true)
   const [time , setTime] = useState({hr:0, min:0 , sec:0 , milli:0});
   const [status , setStatus] = useState()

 let upHr = time.hr;
 let upMin = time.min;
 let upSec = time.sec;
 let upMilli = time.milli;

  const start = () =>{
      myFun();
    setStatus(setInterval(myFun, 10))
  }   
  const stop = () =>{
    clearInterval(status);
  }
  const reset= () =>{
    clearInterval(status);
    setTime({hr:0, min:0 , sec:0 , milli:0})
  } 
    const myFun= () =>{
      if(upMilli === 100){
        upMilli = 0;
        upSec++;
      }
      if(upSec === 60){
        upSec = 0;
        upMin++;
      }
      if(upMin === 60){
        upMin = 0;
        upHr++;
      }
      upMilli++;
      return setTime({hr:upHr , min:upMin, sec:upSec, milli:upMilli})
    }
  


   const toggleTab = (index) =>{
    settoggleState(index)
   }
 
 
  return (
    <div>
      <h1>Hello world </h1>
      <div className="container">
        <div className="bloc">
          <div className={toggleState === 1 ? "tabs active-tabs" :"tabs"} onClick={()=>toggleTab(1)}> Tab1</div>
          <div className= {`tabs ${toggleState === 2 ? "tabs active-tabs" : "tabs"}`} onClick={()=>toggleTab(2)} >Tab 2</div>
          <div className= {`tabs ${toggleState === 3 ? "tabs active-tabs" : "tabs"}`} onClick={()=>toggleTab(3)}>Tab 3</div>
        </div>

        <div className= {`content ${toggleState === 1 ? "active-content" : "contents"}`}>
          <h2>Content</h2>
          <hr />
          <p>Lorem, ipsum Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime libero enim amet facere quam ratione fuga corporis tempore architecto nostrum saepe nesciunt earum corrupti, similique voluptate quaerat illum! Maxime, fugit incidunt.</p>
        </div>

        <div className= {`content ${toggleState === 2 ? "active-content" : "contents"}`}>
          <h2>Content</h2>
          <hr />
          <p>Lorem 2 , ipsum Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime libero enim amet facere quam ratione fuga corporis tempore architecto nostrum saepe nesciunt earum corrupti, similique voluptate quaerat illum! Maxime, fugit incidunt.</p>
        </div>

        <div className= {`content ${toggleState === 3 ? "active-content" : "contents"}`}>
          <h2>Content</h2>
          <hr />
          <p>Lorem 3 , ipsum Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maxime libero enim amet facere quam ratione fuga corporis tempore architecto nostrum saepe nesciunt earum corrupti, similique voluptate quaerat illum! Maxime, fugit incidunt.</p>
        </div>

        <button style={{ backgroundColor: 'yellow' }} > Change Theme </button>
      </div>


     <div className="blogpost">
      <p>Success </p>
     </div>
    
    
    
    {/* stop watch  */}

    <div className="container">
      <h1>{time.hr+ " : "+time.min+ " : "+time.sec+" : "+time.milli}</h1>
      <div className="buttons">
        <button className="btn" onClick={start}>Start</button>
        <button className="btn" onClick={stop}>Stop</button>
        <button className='btn' onClick={reset}>Reset</button>
      </div>
    </div>
    <div className='contentss'>

     <div className='div'>HELLO FROM REACTJS ...!!</div>
     <div className='div'>HELLO FROM REACTJS ...!!</div>
     <div className='div'>HELLO FROM REACTJS ...!!</div>
     <div className='div'>HELLO FROM REACTJS ...!!</div>
     <div className='div'>HELLO FROM REACTJS ...!!</div>
     <div className='div'>HELLO FROM REACTJS ...!!</div>
     <div className='div'>HELLO FROM REACTJS ...!!</div>
     <div className='div'>HELLO FROM REACTJS ...!!</div>
    
    </div>
    
    
    </div>

  );
};

export default Todo;