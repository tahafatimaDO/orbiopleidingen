import React from 'react';
 
 const Company = (props) => {

     if(props.companystate == true){
        return <CompanySuccess companyName={props.name} companyEmail={props.email} companyCity={props.city} companyStreet={props.street} companyPostcode={props.postcode} companyPhone={props.phone} /> ;
     } else {
        return (
            <div key={props.id} className="card column company">
                <h4>Contactgegevens</h4>
                <div className="columns is-multiline">
                    <div className="field column is-half">
                        <label className="label">Bedrijfsnaam (wanneer zakelijk)</label>
                        <div className="control">
                            <input name="Name" className="input" id={props.id} onChange={props.handleChange} value={props.name}></input>
                            {(props.errors.Name)? <div className="alert alert-danger" role="alert">{props.errors.Name}</div> : ""}
                        </div>
                    </div>
                    <div className="field column is-half">
                        <label className="label">Emailadres *</label>
                        <div className="control">
                            <input name="email" className="input" id={props.id} onChange={props.handleChange} value={props.email}></input>
                            {(props.errors.email) ? <div className='alert alert-danger'>{props.errors.email}</div>: ""}
                        </div>
                    </div>
                    <div className="field column is-half">
                        <label className="label">Telefoonnummer *</label>
                        <div className="control">
                            <input name="Phone" className="input" id={props.id} onChange={props.handleChange} value={props.phone}></input>
                            {(props.errors.Phone) ? <div className='alert alert-danger'>{props.errors.Phone}</div>: ""}
                        </div>
                    </div>
                    <div className="field column is-half">
                        <label className="label">Straat + huisnummer *</label>
                        <div className="control">
                            <input name="Street" className="input" id={props.id} onChange={props.handleChange} value={props.street}></input>
                            {(props.errors.Street) ? <div className='alert alert-danger'>{props.errors.Street}</div>: ""}
                        </div>
                    </div>
                    <div className="field column is-half">
                        <label className="label">Postcode *</label>
                        <div className="control">
                            <input name="Postcode" className="input" id={props.id} onChange={props.handleChange} value={props.postcode}></input>
                            {(props.errors.Postcode) ? <div className='alert alert-danger'>{props.errors.Postcode}</div>: ""}
                        </div>
                    </div>
                    <div className="field column is-half">
                        <label className="label">Stad *</label>
                        <div className="control">
                            <input name="City" className="input" id={props.id} onChange={props.handleChange} value={props.city}></input>
                            {(props.errors.City) ? <div className='alert alert-danger'>{props.errors.City}</div>: ""}
                        </div>    
                    </div>
                    <div className="field column is-half">
                    <small>* = verplicht</small>
                    </div>
                </div>
            </div>
         )
     }
};

const CompanySuccess = (props) => {
    return(
        <div className="card col-md-12 company">
            <p>Bedrijfsgegevens</p>
            <p>Bedrijfsnaam: {props.companyName}</p>
            <p>Emailadres: {props.companyEmail}</p>
            <p>Telefoon: {props.companyPhone}</p>
            <p>Straat + huisnummer: {props.companyStreet}</p>
            <p>Postcode: {props.companyPostcode}</p>
            <p>Stad: {props.companyCity}</p>
        </div>
    );
}
 
 export default Company;