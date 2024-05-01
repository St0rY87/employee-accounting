
import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'promotion', label: 'На повышение' },
        { name: 'moreThen3000', label: 'З/П больше 3000$' },
    ]

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onUpdateFilter(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}

            {/* <button type="button"
                className="btn btn-light"
                onClick={() => props.onUpdateFilter('')}
            >
                Все сотрудники
            </button>
            <button type="button"
                className="btn btn-outline-light"
                onClick={() => { props.onUpdateFilter('promotion') }}
            >
                На повышение
            </button>
            <button type="button"
                className="btn btn-outline-light"
                onClick={() => props.onUpdateFilter('moreThen3000')}
            >
                З/П больше 3000$
            </button> */}
        </div>
    )

}

export default AppFilter;