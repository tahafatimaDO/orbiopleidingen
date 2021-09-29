import React from 'react';

const Student = (props) => (
     <div className="card col-md-12 block student">
        <h4>Cursist {props.id + 1}   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id={props.id} onClick={props.delete}></button>
</h4>
        
        <div className="row">
        
            <div className="form-group col-md-6">
                <label>Voornaam</label>
                <input name="Firstname" className="form-control" id={props.id} onChange={props.handleChange} value={props.firstname} />
                {(props.errors.Firstname)? <div className="alert alert-danger" role="alert">{props.errors.Firstname}</div> : ""}
            </div>
            <div className="form-group col-md-6">
                <label>Achternaam</label>
                <input name="Lastname" className="form-control" id={props.id} onChange={props.handleChange} value={props.lastname} />
                {(props.errors.Lastname)? <div className="alert alert-danger" role="alert">{props.errors.Lastname}</div> : ""}
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-6">
                <label>Emailadres</label>
                <input name="email" className="form-control" id={props.id} onChange={props.handleChange} value={props.email} />
                {(props.errors.email)? <div className="alert alert-danger" role="alert">{props.errors.email}</div> : ""}
            </div>
            <div className="form-group col-md-6">
                <label>Geboortedatum</label>
                <input name="Birthdate" className="form-control" id={props.id} onChange={props.handleChange} value={props.birthdate} />
                {(props.errors.Birthdate)? <div className="alert alert-danger" role="alert">{props.errors.Birthdate}</div> : ""}
            </div>
        </div>
        
        <div className="row">
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