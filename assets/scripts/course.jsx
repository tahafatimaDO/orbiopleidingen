import React from 'react';
import ReactDOM from 'react-dom';

import Student from './components/student';
import Sumary from './components/summary';
import Company from './components/company';
import Spinner from './components/spinner';
import TagManager from 'react-gtm-module';
import ReactPixel from 'react-facebook-pixel';
import GetEvents from './getEvents';

const tagManagerArgs = {
    gtmId: 'GTM-NJJRBDD'
}

const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: true, // enable logs
};

ReactPixel.init('1066495357175165', {}, options);
TagManager.initialize(tagManagerArgs)

TagManager.dataLayer
class Course extends React.Component {
    constructor() {
        super();

        this.state = {
            totalPrice: 0,
            options: 0,
            companyId: 0,
            success: false,
            isLoading: true,
            companyState: false,
            event: "",
            errors: [],
            current: "",
            additions: [

            ],
            company: {
                Name: "",
                Street: "",
                Postcode: "",
                City: "",
                Phone: "",
                User: {
                    email: ""
                }
            },
            students: [
                {
                    id: 0,
                    Firstname: "",
                    Lastname: "",
                    User: {
                        email: "",
                    },
                    Birthdate: "",
                    options: [],
                    errors: []
                }
            ]
        };
        this.getEvent = this.getEvent.bind(this);
        this.addStudent = this.addStudent.bind(this);

    }



    componentDidMount() {
        this.setState({ isLoading: true });
        this.getEvent();
        this.setState({ isLoading: false });
    }

    addStudent() {
        const newList = this.state.students.slice();
        const lastItem = newList.length;

        newList[newList[lastItem - 1].id + 1] = ({ id: newList[lastItem - 1].id + 1, Firstname: "", Lastname: "", User: { email: "" }, Birthdate: "", options: [], errors: [] });
        this.setState({ students: newList });
        console.log(newList);
        this.totalPrice();
    };

    studentOptions = () => {
        var totaloptions = 0;

        this.state.students.forEach(student => {
            student.options.forEach(option => totaloptions = totaloptions + option.Price)
        })

        this.setState({ options: totaloptions });
        return totaloptions;
    }

    totalPrice = () => {
        var options = this.studentOptions();

        const students = this.state.students.length;

        const price = this.state.event.Price;

        const total = (students * price) + options;
        console.log("total " + total);

        this.setState({ totalPrice: total });
    }

    deleteStudent = event => {
        console.log(event);
        const studentsLength = this.state.students.length;

        if (studentsLength > 1) {
            this.setState({
                students: this.state.students.filter(function (student) {
                    // console.log(student, event.target.id);
                    return student.id != event
                })
            }, () => {
                this.totalPrice()
            });
        }
        // this.totalPrice();
    }

    changeHandler = event => {

        const id = event.target.id;
        const name = event.target.name;
        const value = event.target.value;

        // console.log(id, name, value);

        if (event.target.name == 'email') {

            var students = [...this.state.students];

            var commentIndex = students.findIndex(function (student) {
                return student.id == id;
            });

            students[commentIndex]['User'][name] = value;
            students.forEach(function (item) {
                return item['id'] == id ? students[commentIndex] : item;
            })

            this.setState({ students });

        } else {

            var students = [...this.state.students];

            var commentIndex = students.findIndex(function (student) {
                return student.id == id;
            });

            students[commentIndex][name] = value;
            students.forEach(function (item) {
                return item['id'] == id ? students[commentIndex] : item;
            })

            this.setState({ students });
        }

        this.totalPrice();

    }

    handleOption = event => {

        const target = event.target;
        const id = event.target.id;
        const name = event.target.name;
        const option = event.target.value;

        const students = this.state.students;
        // const student = {...students[name]};

        console.log("students" + JSON.stringify(students));

        const student = students.filter(item => item['id'] == name);

        var studentlist = students.map(function (student) {
            student['id'] != name
        });

        // console.log(student, studentlist);


        // const studentform = JSON.stringify(student);
        console.log("student" + student);

        const value = target.type === 'checkbox' ? target.checked : target.value;

        const selectedoption = this.state.additions.filter(item => item.id == option);

        if (value) {
            student[0]['options'].push(selectedoption[0])
        } else {
            console.log("asdfasdf");
            student[0]['options'] = student[0]['options'].filter(item => item.id != option);
        }
        console.log("student after " + student[0]['options']);

        studentlist.push(student[0]);

        this.setState({
            students
        }, () => {
            this.totalPrice()
        });

        this.totalPrice();
    }

    setCompany = event => {

        if (event.target.name == 'email') {
            const user = this.state.company.User
            user['email'] = event.target.value
            this.setState({ user })
        } else {
            // const id = event.target.id;
            const name = event.target.name;
            const value = event.target.value;
            // console.log(event.target.name);
            const company = this.state.company;
            company[name] = value;

            this.setState({ company })
        }


    }

    getEvent(id) {
        console.log(id)
        const that = this;
        const eventID = id//document.getElementById('eventID').innerHTML;
        fetch("https://vcadeal.nl/api/event/" + eventID)
            .then(response => response.json())
            .then(function (res) {
                console.log(res);

                that.setState({ event: res[0], additions: res[1], totalPrice: res[0].Price })
                const args = {
                    dataLayer: {
                        event: "load_event"
                    },
                    dataLayerName: "PageDataLayer"
                };
                TagManager.dataLayer(args)
                ReactPixel.trackCustom('Event Loaded')
            })
            .catch(function (res) {
                console.log(res)
            })
    }

    onSubmit = (e) => {
        this.setState({ isLoading: true });
        e.preventDefault();
        const company = this.state.company;
        var self = this;
        if (company.id) {
            return self.createStudents(company.id);
        }
        var self = this;
        fetch('https://vcadeal.nl/api/company/new', {
            method: "POST",
            body: JSON.stringify({ company })
        })
            .then((response) => {
                this.setState({ isLoading: false });
                return response.json();
            })
            .then(function (res) {
                if (res['errors']) {
                    self.setState({ errors: res['errors'] });
                    console.log("tadam iiii")

                    self._renderItems()
                } else {
                    self.setCompanyComplete()
                    var company = self.state.company;
                    company['id'] = res;
                    self.setState({ company });
                    console.log("adsfasdfasdf")
                    const args = {
                        dataLayer: {
                            event: "company_created"
                        },
                        dataLayerName: "PageDataLayer"
                    };
                    TagManager.dataLayer(args)

                    ReactPixel.trackCustom('Company created')

                    self.createStudents(res);

                }
            })
            .catch(function (res) {
                console.log('error melding: ')
                console.log(res)
            })
    }



    setCompanyComplete = () => {
        this.setState({ companyState: true });
        return null;
    }

    createStudents = (res) => {
        this.setState({ isLoading: true });

        var self = this;
        this.setState({ companyId: res });

        const students = this.state.students;
        console.log("adfadfs " + res);

        for (let index = 0; index < students.length; index++) {
            // students[index]['Company'] = res;
            students[index]['Status'] = 'tead';
        }

        fetch('https://vcadeal.nl/student/new', {
            method: "POST",
            body: JSON.stringify({ students })
        })
            .then(response => response.json())
            .then(function (res) {
                self.setState({ isLoading: false });

                console.log(res);
                if (res['errors']) {
                    // self.setState({errors: res['errors']});
                    const students = self.state.students;
                    for (let index = 0; index < students.length; index++) {
                        students[index]['errors'] = res['errors'][index]
                    }

                    self.setState({ students });
                    console.log("tadam iiii")

                    return null;
                }

                console.log(res);

                console.log("tadam");
                const students = self.state.students;
                // students.for(student => {
                //     student.id = res[id];
                // });
                for (let index = 0; index < students.length; index++) {
                    students[index].id = res[index];
                }

                self.setState({ students })

                self.createSale(res);
            })
            .catch(function (res) {
                console.log(res)
            })
    }

    applicationSuccess = () => {
        this.setState({ success: true });
    }

    createSale = (res) => {
        this.setState({ isLoading: true });

        const event = this.state.event;
        const company = this.state.companyId;
        const price = this.state.totalPrice;
        const students = this.state.students;
        var self = this;

        fetch('https://vcadeal.nl/api/sale/new', {
            method: "POST",
            body: JSON.stringify({ event, students, company, price })
        })
            .then(response => response.json())
            .then(function (res) {
                self.setState({ isLoading: false });

                console.log("sale created")

                self.applicationSuccess();
                console.log(res);

                ReactPixel.track('Purchase', { currency: "EUR", value: 200.00 })

                // window.gtag('event', 'conversion', {
                //     'send_to': 'AW-619425424/i1eLCLP-2tUBEJDdrqcC',
                //     'value': '10',
                //     'currency': 'EUR'
                // });

                console.log('tadam')
            })
            .catch(function (res) {
                console.log(res)
            })
    }

    _renderItems() {
        const errors = this.state.errors;
        for (var key in errors) {
            if (errors.hasOwnProperty(key)) {
                <li>{key} {errors[key]}</li>
            }
        }
    }

    render() {
        const isLoggedIn = this.state.isLoading;
        let loading;
        if (isLoggedIn) {
            loading = <Spinner />;
        }

        if (this.state.success) {
            return (
                <div className="alert alert-success" role="alert">
                    <h1>Aanmelding succesvol!</h1>
                    <p>U heeft via de mail een bevestiging ontvangen. Wanneer u vragen heeft kunt u uiteraard altijd met ons contact opnemen.</p>
                    <a className="btn btn-light" href="/page/klantenservice">Klantenservice</a>
                </div>
            );
        }

        return (
            <div className="container ">
                <div className="columns apply application_form">
                    <div className="column is-one-third">
                        <GetEvents event={this.getEvent}></GetEvents>
                    </div>
                </div>
                {this.state.event != [] &&
                    <div className="row application_form">
                        <div className="col-md-8">
                            <h1>Aanmelden</h1>
                            <Company handleChange={this.setCompany} errors={this.state.errors} name={this.state.company.Name} email={this.state.company.User.email} phone={this.state.company.Phone} city={this.state.company.City} street={this.state.company.Street} postcode={this.state.company.Postcode} companystate={this.state.companyState} />
                            {this.state.students.map(({ id, firstname, lastname, email, birthdate, errors }) =>
                                <Student key={id} handleChange={this.changeHandler} handleOption={this.handleOption} delete={() => this.deleteStudent(id)} id={id} firstname={firstname} errors={errors} lastname={lastname} email={email} birthdate={birthdate} additions={this.state.additions} />
                            )}
                            <p className="btn btn-primary" onClick={this.addStudent}><i className="fas fa-user-plus"></i> Extra student </p>
                        </div>
                        <div className="col-md-4">
                            <Sumary students={this.state.students} price={this.state.totalPrice} loading={loading} event={this.state.event} submit={this.onSubmit} />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

ReactDOM.render(<Course />, document.getElementById('root'));