import React from 'react';
import { HiPlus } from 'react-icons/hi';

const CreateTodo = ({ addTodo }) => {
    const [title, setTitle] = React.useState('');
    return (
        <div className="border-2 border-gray-800 mt-3 mb-6 py-2 rounded-xl flex items-center">
            <button className="bg-pink-400 cursor-pointer w-5 h-5 border-2 ml-3 rounded-lg border-pink-400 flex  justify-center items-center">
                <HiPlus className="text-sm text-gray-800" />
            </button>
            <input
                onChange={e => setTitle(e.target.value)}
                className="w-full outline-none bg-transparent ml-3 pr-3"
                placeholder="Add a task"
                type="text"
                maxLength={150}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
            />
        </div>
    );
};

export default CreateTodo;
