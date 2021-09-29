import React from 'react';

const Summary = (props) => {
    return (
        <>
            <div key={props.id} className="summary columns">
                <div className="column">
                    <h5 className="title is-five">Overzicht</h5>
                    <p>Aantal Cursisten: {props.students.length}</p>
                    <strong>Cursisten</strong>
                    <ul className="">
                        <div className="cursist">
                            {props.students.map(({ Firstname, Lastname, id, options }) => {
                                return (
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
                    <small>Totaal inclusief btw: €{(props.price * 1.21).toFixed(2)} (21% btw)</small><br></br>
                    <button href="#" onClick={props.submit} className="btn btn-primary">{props.loading} Aanmelden</button>
                    <p><small>Bij het aanmelden voor de cursus gaat u akkoord met onze <a href="/page/algemene-voorwaarden">algemene voorwaarden</a>.</small></p>
                    <p><small>U hoeft niet direct te betalen. Wij sturen u een factuur toe.</small></p>
                    <div className="summary">
                    <h3 className="title is-three">Hulp nodig ?</h3>
                    <p>Wij helpen je graag met het aanmelden voor de cursus.</p>
                    </div>
                    
                </div>
            </div>
            
        </>


    )
}

export default Summary;