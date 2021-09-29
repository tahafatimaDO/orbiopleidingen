import React from 'react';
 
 const Company = (props) => {

     if(props.companystate == true){
        return <CompanySuccess companyName={props.name} companyEmail={props.email} companyCity={props.city} companyStreet={props.street} companyPostcode={props.postcode} companyPhone={props.phone} /> ;
     } else {
        return (
            <div key={props.id} className="card col-md-12 company">
                <h4>Contactgegevens</h4>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label>Bedrijfsnaam (wanneer zakelijk)</label>
                        <input name="Name" className="form-control" id={props.id} onChange={props.handleChange} value={props.name}></input>
                        {(props.errors.Name)? <div className="alert alert-danger" role="alert">{props.errors.Name}</div> : ""}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Emailadres *</label>
                        <input name="email" className="form-control" id={props.id} onChange={props.handleChange} value={props.email}></input>
                        {(props.errors.email) ? <div className='alert alert-danger'>{props.errors.email}</div>: ""}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Telefoonnummer *</label>
                        <input name="Phone" className="form-control" id={props.id} onChange={props.handleChange} value={props.phone}></input>
                        {(props.errors.Phone) ? <div className='alert alert-danger'>{props.errors.Phone}</div>: ""}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Straat + huisnummer *</label>
                        <input name="Street" className="form-control" id={props.id} onChange={props.handleChange} value={props.street}></input>
                        {(props.errors.Street) ? <div className='alert alert-danger'>{props.errors.Street}</div>: ""}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Postcode *</label>
                        <input name="Postcode" className="form-control" id={props.id} onChange={props.handleChange} value={props.postcode}></input>
                        {(props.errors.Postcode) ? <div className='alert alert-danger'>{props.errors.Postcode}</div>: ""}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Stad *</label>
                        <input name="City" className="form-control" id={props.id} onChange={props.handleChange} value={props.city}></input>
                        {(props.errors.City) ? <div className='alert alert-danger'>{props.errors.City}</div>: ""}
                    </div>
                    <div className="form-group col-md-6">
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