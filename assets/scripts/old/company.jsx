import React from 'react';
 
 const Company = () => (
    <div className="bg-gray-200 p-5 my-4">
        <h3 className="text-m">Bedrijsgegevens</h3>

        <div className="flex space-x-5 mt-3">
            <input type="text" name="" id="" placeholder="Bedrijfsnaam" className="border p-2  w-1/2" />
            <input type="email" name="" id="" placeholder="Emailadres" className="border p-2 w-1/2" />
        </div>
        <div className="flex space-x-5 mt-3">
            <input type="text" name="" id="" placeholder="Adres" className="border p-2  w-1/2" />
            <input type="text" name="" id="" placeholder="Huisnummer" className="border p-2 w-1/2" />
        </div>
        <div className="flex space-x-5 mt-3">
            <input type="text" name="" id="" placeholder="Postcode" className="border p-2  w-1/2" />
            <input type="text" name="" id="" placeholder="Stad" className="border p-2 w-1/2" />
        </div>



    </div>
 );
 
 export default Company;