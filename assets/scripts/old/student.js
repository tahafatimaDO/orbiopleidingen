import React from 'react';
 
 const Student = (props) => (
    <div className="bg-gray-200 p-5 my-4" key={props.key}>
        <h3 className="text-m">Student 1</h3>
        <div className="flex space-x-5 mt-3">
            <input type="text" name="" id="" placeholder="Voornaam" value={props.first} className="border p-2  w-1/2" />
            <input type="email" name="" id="" placeholder="Achternaam"  value={props.second} className="border p-2 w-1/2" />
        </div>
        <div className="flex space-x-5 mt-3">
            <input type="text" name="" id="" placeholder="Geboortedatum" className="border p-2  w-1/2" />
        </div>


    </div>
 );
 
 export default Student;