import React from 'react';
import Company from './company';
import Student from './student';

 const Form = (props) => (
    <>
        <form action="" className="form bg-white p-6 relative">
               
               <h3 className="text-2xl text-gray-900 font-semibold">Aanmeldformulier</h3>
               <ul>
                   <li>Cursus: {props.event.name}</li>
                   <li>Datum: {props.event.dates.date}</li>
               </ul>
               <Company />
               {props.students.map((student, key) => {
                    <Student first={student.firstname} last={student.lastname} birth={student.birthdate} key={key}/>
               })}
                <button onClick={props.addstudent}>Add student</button>
               
               <hr></hr>
               <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property" className="border p-2 mt-3 w-full"></textarea>
               <div className="flex items-baseline space-x-2 mt-2">
                   <input type="checkbox" name="" id="" className="inline-block"/>
                   <p className="text-gray-600 text-sm">Ik ga akkoord met de algemene voorwaarden.</p>
               </div>
               <input type="submit" value="Submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"/>

           </form>
    </>
 );
 
 export default Form;