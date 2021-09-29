import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from './components/spinner';
import Form from './components/form';
// const $ = require('jquery');

class Course extends React.Component {

    constructor() {
        super();

        this.state = {
            isLoading: true,
            events: [
                {
                   "id":4,
                   "code":"pad-202012003",
                   "name":"VCA-B Nederlands",
                   "description":"",
                   "type":"open",
                   "status":"concept",
                   "daypart_amount":1,
                   "dayparts":[
                      {
                         "id":26,
                         "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26"
                      }
                   ],
                   "users":{
                      "min":2,
                      "max":12,
                      "available":12,
                      "options":0
                   },
                   "costs":{
                      "user":189,
                      "course":0,
                      "vat":21,
                      "vat_code":2,
                      "remark":""
                   },
                   "coursetemplate":{
                      "id":2,
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/coursetemplate/2"
                   },
                   "start_guaranteed":false,
                   "moneyback_guaranteed":false,
                   "has_elearning":false,
                   "has_code95":false,
                   "has_soob":false,
                   "href":"https://orbiopleidingen.api.planaday.nl/v1/course/4",
                   "labels":[
                      
                   ],
                   "dates":{
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26",
                      "id":26,
                      "code":null,
                      "name":"Dagdeel",
                      "description":"",
                      "locations":[
                         {
                            "id":1,
                            "href":"https://orbiopleidingen.api.planaday.nl/v1/location/1"
                         }
                      ],
                      "users":{
                         "scheduled":0,
                         "options":0,
                         "waitinglist":0
                      },
                      "costs":{
                         "user":0,
                         "vat":0,
                         "vat_code":0
                      },
                      "is_elearning":0,
                      "has_code95":false,
                      "labels":[
                         
                      ],
                      "date":"zaterdag 2 januari 2021",
                      "start_time":"07:00",
                      "end_time":"16:00"
                   }
                },
                {
                    "id":4,
                    "code":"pad-202012003",
                    "name":"VCA-B Nederlands",
                    "description":"",
                    "type":"open",
                    "status":"concept",
                    "daypart_amount":1,
                    "dayparts":[
                       {
                          "id":26,
                          "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26"
                       }
                    ],
                    "users":{
                       "min":2,
                       "max":12,
                       "available":12,
                       "options":0
                    },
                    "costs":{
                       "user":189,
                       "course":0,
                       "vat":21,
                       "vat_code":2,
                       "remark":""
                    },
                    "coursetemplate":{
                       "id":2,
                       "href":"https://orbiopleidingen.api.planaday.nl/v1/coursetemplate/2"
                    },
                    "start_guaranteed":false,
                    "moneyback_guaranteed":false,
                    "has_elearning":false,
                    "has_code95":false,
                    "has_soob":false,
                    "href":"https://orbiopleidingen.api.planaday.nl/v1/course/4",
                    "labels":[
                       
                    ],
                    "dates":{
                       "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26",
                       "id":26,
                       "code":null,
                       "name":"Dagdeel",
                       "description":"",
                       "locations":[
                          {
                             "id":1,
                             "href":"https://orbiopleidingen.api.planaday.nl/v1/location/1"
                          }
                       ],
                       "users":{
                          "scheduled":0,
                          "options":0,
                          "waitinglist":0
                       },
                       "costs":{
                          "user":0,
                          "vat":0,
                          "vat_code":0
                       },
                       "is_elearning":0,
                       "has_code95":false,
                       "labels":[
                          
                       ],
                       "date":"zaterdag 2 januari 2021",
                       "start_time":"07:00",
                       "end_time":"16:00"
                    }
                 },
                 {
                    "id":4,
                    "code":"pad-202012003",
                    "name":"VCA-B Nederlands",
                    "description":"",
                    "type":"open",
                    "status":"concept",
                    "daypart_amount":1,
                    "dayparts":[
                       {
                          "id":26,
                          "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26"
                       }
                    ],
                    "users":{
                       "min":2,
                       "max":12,
                       "available":12,
                       "options":0
                    },
                    "costs":{
                       "user":189,
                       "course":0,
                       "vat":21,
                       "vat_code":2,
                       "remark":""
                    },
                    "coursetemplate":{
                       "id":2,
                       "href":"https://orbiopleidingen.api.planaday.nl/v1/coursetemplate/2"
                    },
                    "start_guaranteed":false,
                    "moneyback_guaranteed":false,
                    "has_elearning":false,
                    "has_code95":false,
                    "has_soob":false,
                    "href":"https://orbiopleidingen.api.planaday.nl/v1/course/4",
                    "labels":[
                       
                    ],
                    "dates":{
                       "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26",
                       "id":26,
                       "code":null,
                       "name":"Dagdeel",
                       "description":"",
                       "locations":[
                          {
                             "id":1,
                             "href":"https://orbiopleidingen.api.planaday.nl/v1/location/1"
                          }
                       ],
                       "users":{
                          "scheduled":0,
                          "options":0,
                          "waitinglist":0
                       },
                       "costs":{
                          "user":0,
                          "vat":0,
                          "vat_code":0
                       },
                       "is_elearning":0,
                       "has_code95":false,
                       "labels":[
                          
                       ],
                       "date":"zaterdag 2 januari 2021",
                       "start_time":"07:00",
                       "end_time":"16:00"
                    }
                 },
                 {
                   "id":4,
                   "code":"pad-202012003",
                   "name":"VCA-B Nederlands",
                   "description":"",
                   "type":"open",
                   "status":"concept",
                   "daypart_amount":1,
                   "dayparts":[
                      {
                         "id":26,
                         "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26"
                      }
                   ],
                   "users":{
                      "min":2,
                      "max":12,
                      "available":12,
                      "options":0
                   },
                   "costs":{
                      "user":189,
                      "course":0,
                      "vat":21,
                      "vat_code":2,
                      "remark":""
                   },
                   "coursetemplate":{
                      "id":2,
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/coursetemplate/2"
                   },
                   "start_guaranteed":false,
                   "moneyback_guaranteed":false,
                   "has_elearning":false,
                   "has_code95":false,
                   "has_soob":false,
                   "href":"https://orbiopleidingen.api.planaday.nl/v1/course/4",
                   "labels":[
                      
                   ],
                   "dates":{
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/26",
                      "id":26,
                      "code":null,
                      "name":"Dagdeel",
                      "description":"",
                      "locations":[
                         {
                            "id":1,
                            "href":"https://orbiopleidingen.api.planaday.nl/v1/location/1"
                         }
                      ],
                      "users":{
                         "scheduled":0,
                         "options":0,
                         "waitinglist":0
                      },
                      "costs":{
                         "user":0,
                         "vat":0,
                         "vat_code":0
                      },
                      "is_elearning":0,
                      "has_code95":false,
                      "labels":[
                         
                      ],
                      "date":"zaterdag 2 januari 2021",
                      "start_time":"07:00",
                      "end_time":"16:00"
                   }
                },
                {
                   "id":5,
                   "code":"pad-202012004",
                   "name":"VCA-B Nederlands",
                   "description":"",
                   "type":"open",
                   "status":"concept",
                   "daypart_amount":1,
                   "dayparts":[
                      {
                         "id":27,
                         "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/27"
                      }
                   ],
                   "users":{
                      "min":2,
                      "max":12,
                      "available":10,
                      "options":0
                   },
                   "costs":{
                      "user":189,
                      "course":0,
                      "vat":21,
                      "vat_code":2,
                      "remark":""
                   },
                   "coursetemplate":{
                      "id":2,
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/coursetemplate/2"
                   },
                   "start_guaranteed":false,
                   "moneyback_guaranteed":false,
                   "has_elearning":false,
                   "has_code95":false,
                   "has_soob":false,
                   "href":"https://orbiopleidingen.api.planaday.nl/v1/course/5",
                   "labels":[
                      
                   ],
                   "dates":{
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/27",
                      "id":27,
                      "code":null,
                      "name":"Dagdeel",
                      "description":"",
                      "locations":[
                         {
                            "id":1,
                            "href":"https://orbiopleidingen.api.planaday.nl/v1/location/1"
                         }
                      ],
                      "users":{
                         "scheduled":2,
                         "options":0,
                         "waitinglist":0
                      },
                      "costs":{
                         "user":0,
                         "vat":0,
                         "vat_code":0
                      },
                      "is_elearning":0,
                      "has_code95":false,
                      "labels":[
                         
                      ],
                      "date":"woensdag 6 januari 2021",
                      "start_time":"07:00",
                      "end_time":"16:00"
                   }
                },
                {
                   "id":25,
                   "code":"pad-202101009",
                   "name":"VCA-B Nederlands",
                   "description":"",
                   "type":"open",
                   "status":"concept",
                   "daypart_amount":1,
                   "dayparts":[
                      {
                         "id":83,
                         "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/83"
                      }
                   ],
                   "users":{
                      "min":2,
                      "max":12,
                      "available":12,
                      "options":0
                   },
                   "costs":{
                      "user":189,
                      "course":0,
                      "vat":21,
                      "vat_code":2,
                      "remark":""
                   },
                   "coursetemplate":{
                      "id":2,
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/coursetemplate/2"
                   },
                   "start_guaranteed":false,
                   "moneyback_guaranteed":false,
                   "has_elearning":false,
                   "has_code95":false,
                   "has_soob":false,
                   "href":"https://orbiopleidingen.api.planaday.nl/v1/course/25",
                   "labels":[
                      
                   ],
                   "dates":{
                      "href":"https://orbiopleidingen.api.planaday.nl/v1/daypart/83",
                      "id":83,
                      "code":null,
                      "name":"Dagdeel",
                      "description":"",
                      "locations":[
                         {
                            "id":1,
                            "href":"https://orbiopleidingen.api.planaday.nl/v1/location/1"
                         }
                      ],
                      "users":{
                         "scheduled":0,
                         "options":0,
                         "waitinglist":0
                      },
                      "costs":{
                         "user":0,
                         "vat":0,
                         "vat_code":0
                      },
                      "is_elearning":0,
                      "has_code95":false,
                      "labels":[
                         
                      ],
                      "date":"zaterdag 9 januari 2021",
                      "start_time":"07:30",
                      "end_time":"15:30"
                   }
                }
             ],
             student: [
                {
                   firstname: "",
                   lastname: "",
                   birthday: ""
                }
             ]
        }
    }
    
    componentDidMount() {
        this.setState({ isLoading: true });
        // this.getEvent();
        this.setState({ isLoading: false });

    }

    getEvent() {
        const that = this;
        
        fetch('https://localhost:8000/event')
        .then(response => response.json())
        .then(function(res){
            console.log(res);
            that.setState({events: res.data, isLoading: false})
        })
    }

    parseDate (input) {
        console.log(input);
        let parts = input[0].split('');
        let year = parts[0]+parts[1]+parts[2]+parts[3]
        let month = parts[4]+parts[5]
        let day = parts[6]+parts[7]
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(year, month, day); // Note: months are 0-based
    }

    addStudent() {
      var students = [...this.state.student];
      students.push({"firstname": "", "lastname": "", "birthday": ""})
      console.log(students);
      this.setState({student: students});
      
    }

    selectEvent (event) {
        this.setState({event: event});
    }

    render() {
        const isLoggedIn = this.state.isLoading;
        if(isLoggedIn === true){
            return(
                <div className="flex">
                    <div className="w-2/4 bg-green-500">
                        <Spinner />
                    </div>
                    <div className="w-2/4">
                        {this.state.event ? (
                            <Form event={this.state.event}/>
                        ) : (
                            <div className="form bg-white p-2 relative"><p>Selecteer eerste een datum</p></div>
                        )}
                    </div>
                </div>
            )
        }
        if(isLoggedIn === false){
            return(
                <div className="flex">
                    <div className="w-2/4">
                        <div className="grid gap-4 grid-cols-3">
                            {this.state.events.map( (event, key) => 
                                <div className={`bg-white border border-green-500 p-3`} key={key} onClick={() => this.selectEvent(event)}>
                                    <p className="text-sm">{event.name}</p>
                                    {/* <p>{event.dates.map(date => <p>{this.parseDate(date.date)}</p>)}</p> */}
                                    <p className="text-sm">{event.dates.date}</p>
                                    <small>{event.users.available > 10 ? ("Beschikbaar") : ("Laatste plekken")}</small>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-2/4">
                        {this.state.event ? (
                            <Form addstudent={this.addStudent} students={this.state.student} event={this.state.event}/>
                        ) : (
                            <div className="form bg-white mx-2 p-6 relative"><p>Selecteer eerste een datum</p></div>
                        )}
                    </div>
                </div>
            )
        }
        if (this.state.success) {
            return (
                <div class="alert alert-success" role="alert">
                    <h1>Aanmelding succesvol!</h1>
                    <p>U heeft via de mail een bevestiging ontvangen. Wanneer u vragen heeft kunt u uiteraard altijd met ons contact opnemen.</p>
                    <a class="btn btn-light" href="/page/klantenservice">Klantenservice</a>
                </div>
            );
        }
        return (<div className="row"><p>Cursusmomenten worden geladen</p> <Spinner /></div>);
    }
}


ReactDOM.render(<Course />, document.getElementById('root'));