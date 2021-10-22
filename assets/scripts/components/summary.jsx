import React from 'react';

 const Summary = (props) => {
    return (
        <div key={props.id} className="summary">
            <h5>Overzicht</h5>
            <p>Aantal Cursisten: {props.students.length}</p>
            <strong>Cursisten</strong>
            <ul className="list-group list-group-flush">
                <div className="cursist">
                    {props.students.map(({Firstname, Lastname, id, options}) => {
                        return(
                            <li key={id}>
                                <div className="card">
                                    <span>Cursist: {Firstname} {Lastname}</span>
                                    <span>Opties:</span>
                                    <ul>
                                        {options.map((item, key) => {
                                            return <li key={key}>{item.Name} (€{item.Price},-)</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </div>
            </ul>
            <p>Totaal: €{props.price},- euro</p>
            <small>Totaal inclusief btw: €{(props.price*1.21).toFixed(2)} (21% btw)</small><br></br>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Ik ga akkoord met algemene voorwaarden
                </label>
            </div>
            <button href="#" onClick={props.submit} className="btn btn-primary">{props.loading} Aanmelding versturen</button>
        </div>
    )
 }

 export default Summary;