
export function Todos({todos}) {

    return <div>
        Todos are - 

        {todos.map(t => <div>
            {t} <button>Delete</button>
        </div>)}
    </div>    
}

