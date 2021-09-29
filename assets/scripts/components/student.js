import React from 'react';

const Student = (props) => (
     <div className="card column student">
        <h4 className="title is-four">Cursist {props.id + 1} <span className="close" data-dismiss="alert" aria-label="Close" id={props.id} onClick={props.delete} name="delete">    <button class="delete is-large">Verwijder</button></span></h4>
        
        <div className="columns is-multiline">
        
            <div className="field column is-half">
                <label className="label">Voornaam</label>
                <input name="Firstname" className="input" id={props.id} onChange={props.handleChange} value={props.firstname} />
                {(props.errors.Firstname)? <div className="alert alert-danger" role="alert">{props.errors.Firstname}</div> : ""}
            </div>
            <div className="field column is-half">
                <label className="label">Achternaam</label>
                <input name="Lastname" className="input" id={props.id} onChange={props.handleChange} value={props.lastname} />
                {(props.errors.Lastname)? <div className="alert alert-danger" role="alert">{props.errors.Lastname}</div> : ""}
            </div>
        </div>
        <div className="columns">
            <div className="field column is-half">
                <label className="label">Emailadres</label>
                <input name="email" className="input" id={props.id} onChange={props.handleChange} value={props.email} />
                {(props.errors.email)? <div className="alert alert-danger" role="alert">{props.errors.email}</div> : ""}
            </div>
            <div className="field column is-half">
                <label className="label">Geboortedatum</label>
                <input name="Birthdate" className="input" id={props.id} onChange={props.handleChange} value={props.birthdate} />
                {(props.errors.Birthdate)? <div className="alert alert-danger" role="alert">{props.errors.Birthdate}</div> : ""}
            </div>
        </div>
        
        <div className="columns">
            <div className="col-md-12">
            {props.additions != '' ? <b>Opties  </b> : ""}
                {props.additions.map(({id, Name, Price}) => {
                    return(
                        <div key={Name} className="form-check form-check-inline addition-box">
                            <input className="form-check-input" id={props.id + "-" + id} type="checkbox" name={props.id} onChange={props.handleOption} value={id} />
                            <label className="form-check-label" htmlFor={props.id + "-" + id}>{Name} ({Price} euro)</label>
                        </div>
                    )
                })}
            </div>
        </div>
     </div>
 );
 
 export default Student;