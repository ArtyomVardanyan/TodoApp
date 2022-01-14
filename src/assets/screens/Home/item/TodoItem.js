import React from 'react';
import cn from 'classnames'
import { BsCheck } from 'react-icons/bs';
import {HiTrash} from 'react-icons/hi'
const TodoItem = ({ item, priKlike, isCompleted, priDell }) => {
    return (
        <div className="bg-gray-800 mt-3 py-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center">
                <button
                    onClick={() => priKlike(item._id)}
                    className={cn(
                        'cursor-pointer w-5 h-5 border-2 ml-3 rounded-lg border-pink-400 flex justify-center items-center',
                        {
                            'bg-pink-400': isCompleted,
                        }
                    )}
                >
                    {isCompleted && (
                        <BsCheck className="outline-none text-gray-800" />
                    )}
                </button>
                <div
                    className={cn('ml-3', {
                        'line-through': isCompleted,
                    })}
                >
                    {item.title}
                </div>
            </div>
            <button onClick={() => priDell(item._id)}>
                <HiTrash className="mr-3" />
            </button>
        </div>
    );
};

export default TodoItem;
