import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';


import './app.css';




class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: "Jhon Week",
                    salary: 9000,
                    increase: false,
                    id: 1,
                },
                {
                    name: "Jozzeppe Alkopone",
                    salary: 11000,
                    increase: false,
                    id: 2,
                },
                {
                    name: "Albert McConald",
                    salary: 8100,
                    increase: true,
                    id: 3,
                },
            ]
        }
        this.maxId = 4;
    }


    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }


}




















// import { Component } from 'react';

// class WhoAmI extends Component {

//     // eslint-disable-next-line no-useless-constructor
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 27,
//             position: '',
//         }
//     }

//     nextYear = () => {
//         this.setState(state => ({
//             years: state.years + 1
//         }))
//     }



//     commitInputChanges = (e, color) => {
//         console.log(color)
//         this.setState({
//             position: e.target.value
//         })
//     }

//     render() {
//         const { name, surname, link } = this.props;
//         const { position, years } = this.state;
//         console.log(this)
//         return (
//             <div>
//                 <button onClick={this.nextYear}>{this.state.text}</button>
//                 <h1>My name is {name},
//                     surname - {surname},
//                     age - {years},
//                     position - {position}</h1>
//                 <a href={link}>My profile</a>
//                 <form>
//                     <span>Введите должность</span>

//                     <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
//                 </form>
//             </div>
//         )
//     }
// }


// function App() {
//     return (
//         <div className="App">
//             <WhoAmI name='John' surname="Smith" link="facebook.com" />
//             <WhoAmI name='Alex' surname="Savin" link="vk.com" />
//         </div>
//     )
// }

export default App;