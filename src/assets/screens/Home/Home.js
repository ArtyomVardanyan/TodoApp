import React from 'react';
import CreateTodo from './createTodo/CreateTodo';
import TodoItem from './item/TodoItem';

const Home = () => {
    const data = [
        {
            _id: 'someId',
            title: 'Example task',
            isCompleted: false,
        },
    ];

    const [todos, setTodos] = React.useState(data);

    const func = id => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    };

    const funcc = id => {
        setTodos([...todos].filter(t => t._id !== id));
    };

    const addTodo = title => {
        setTodos([
            {
                _id: new Date(),
                title,
                isCompleted: false,
            },
            ...todos,
        ]);
    };

    window.addTodo = addTodo;

    return (
        <div>
            <h1 className="font-bold text-3xl mt-20">Todo App</h1>
            <CreateTodo addTodo={addTodo} />
            <h3 className="text-lg">Todos - {todos.length}</h3>
            {todos.map(item => (
                <TodoItem
                    priKlike={func}
                    key={item._id}
                    item={item}
                    priDell={funcc}
                    isCompleted={item.isCompleted}
                />
            ))}
        </div>
    );
};

export default Home;
