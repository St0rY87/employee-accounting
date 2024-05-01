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
                    promotion: true,
                    id: 1,
                },
                {
                    name: "Jozzeppe Alkopone",
                    salary: 11000,
                    increase: false,
                    promotion: false,
                    id: 2,
                },
                {
                    name: "Albert McConald",
                    salary: 2100,
                    increase: true,
                    promotion: false,
                    id: 3,
                },
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }


    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            promotion: false,
            id: this.maxId++
        };
        this.setState(({ data }) => {
            return {
                data: [...data, newItem]
            }
        })
    }


    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))

    }

    // onToggleIncrease = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase }
    //             }
    //             return item;
    //         }),

    //     }))
    // }

    // onToggleIncrease = (id) => {
    //     this.setState(({data})=> {
    //         const index = data.findIndex(elem => elem.id === id);
    //         const old = data[index];
    //         const newItem = {...old, increase: !old.increase};
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //         return {
    //             data: newArr
    //         }
    //     })
    // }


    // onToggleIncrease = (id) => {
    //     this.setState(({data})=>{
    //         const index = data.findeIndex( item => item.id === id);

    //         const oldItem = {...data[index]};
    //         const newItem = {...oldItem, increase: !oldItem.increase};
    //         const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newData
    //         }
    //     })
    // }

    // onToggleIncrease = (id) => {
    //     this.setState(({data})=>({
    //         data : data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, increse: !item.increse }
    //             }
    //             return item
    //         })
    //     }))
    // }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1 || item.name.toLowerCase().indexOf(term) > -1
        })

    }

    onUpdateSearch = term => {
        this.setState({ term: term })
    }


    filterPost = (items, filter) => {
        switch (filter) {
            case 'promotion':
                return items.filter(item => item.promotion)
            case 'moreThen3000':
                return items.filter(item => item.salary > 3000)
            default:
                return items
        }
    }

    onUpdateFilter = filter => {
        this.setState({ filter: filter })
    }



    render() {
        const { data, term, filter } = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        onUpdateFilter={this.onUpdateFilter}
                        filter={filter}
                    />
                </div>
                <EmployeesList data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
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