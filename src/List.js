import React from 'react';

function List()
{
    const Courses=[
       {id:1,name:"angular Courses"},
       {id:2,name:"React Courses"},
       {id:3,name:"Vue Courses"},
       {id:4,name:"Mern Courses"}
    ];

    const Developer=[
        {
            name:"sathish",
            skils:[
                {name:"Angular",type:"Frontend"},
                {name:"Express",type:"Backend"}
            ]
        },
        {
            name:"Mathew",
            skils:[
                {name:"Reactjs",type:"Frontend"},
                {name:"Nodejs",type:"Backend"}
            ]
        }
    ];

    const person={
        username:"sathish",
        email:"sathishfreelanc5@gmail.com",
        website:"www.sathishtech.com"
    }
    return(
       <div className='App'>
            <header className='App-header'>
                <h1>React Js List and Keys</h1>
                <ul>
                  {Courses.map((data)=>(<li key={data.id}>{data.name}</li>))}
                </ul>
                <ul>
                  {Courses.map((data,index)=>(<li key={index}>{data.name}</li>))}
                </ul>
                <div>
                    {Developer.map((dev,index)=>(
                       <div key={index}>
                          <h2>{dev.name} Skils</h2>
                            <div>
                                {dev.skils.map((skil,index)=>(
                                    <p key={index}>
                                        {skil.type} -{skil.name}
                                    </p>
                                ))}
                            </div>
                       </div>
                    ))}
                </div>
                <div>
                    {Object.keys(person).map(key=>(
                       <p>{person[key]}</p>
                    ))}
                </div>
            </header>
       </div>
    );
}

export default List;