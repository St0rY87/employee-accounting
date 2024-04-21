import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';


function App() {

    const data = [
        {
            name: "Jhon Week",
            salary: 9000,
            increase: true,
        },
        {
            name: "Jozzeppe Alkopone",
            salary: 11000,
            increase: false,
        },
        {
            name: "Albert McConald",
            salary: 8100,
            increase: false,
        },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;









// function WhoAmI({ name, surname, link }) {
//     return (
//         <div>
//             <h1>My name is {name.firstName}, surname - {surname} </h1>
//             <a href={link}>My profile</a>
//         </div>
//     )
// }


// function App() {
//     return (
//         <div className="App">
//             <WhoAmI name={{ firstName: 'John' }} surname="Smith" link="facebook.com" />
//             <WhoAmI name={{ firstName: 'Alex' }} surname="Savin" link="vk.com" />
//         </div>
//     )
// }
