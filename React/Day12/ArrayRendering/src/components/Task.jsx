import React, { useState } from 'react';

function Task() {

    const [tasks, setTasks] = useState([]);

    const [taskName, setTaskName] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const [editingId, setEditingId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (taskName.trim() === '' || date === '' || status === '') {
            alert('Please fill all the fields');
            return;
        }

        if (editingId) {

            const updatedTasks = tasks.map((task) =>
                task.id === editingId
                    ? { ...task, name: taskName.trim(), date, status }
                    : task
            );

            setTasks(updatedTasks);
            setEditingId(null);

        } else {

            
            const newTask = {
                id: crypto.randomUUID(),
                name: taskName.trim(),
                date: date,
                status: status
            };

            setTasks([...tasks, newTask]);
        }

        setTaskName('');
        setDate('');
        setStatus('');
    };

    const handleEdit = (task) => {
        setTaskName(task.name);
        setDate(task.date);
        setStatus(task.status);
        setEditingId(task.id);
    };

    
    const handleCancel = () => {
        setTaskName('');
        setDate('');
        setStatus('');
        setEditingId(null);
    };

    
    const handleDelete = (id) => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

                <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    Todo Task Manager
                </h1>

             

                <form onSubmit={handleSubmit} className="space-y-4">

                   

                    <div>
                        <label className="block font-semibold mb-2">
                            Task Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter task name"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                   

                    <div>
                        <label className="block font-semibold mb-2">
                            Date
                        </label>

                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

             

                    <div>
                        <label className="block font-semibold mb-2">
                            Status
                        </label>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
                        >
                            <option value="">Select Status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                

                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
                        >
                            {editingId ? 'Update Task' : 'Add Task'}
                        </button>

                        {editingId && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        )}

                    </div>

                </form>


                <div className="mt-8">

                    <h2 className="text-2xl font-bold mb-4">
                        Task List
                    </h2>

                    {tasks.length === 0 ? (

                        <p className="text-gray-500 text-center">
                            No tasks available
                        </p>

                    ) : (

                        tasks.map((task) => (

                            <div
                                key={task.id}
                                className="border p-4 rounded-lg mb-3 flex justify-between items-center"
                            >

                                <div>
                                    <h3 className="font-bold text-lg">
                                        {task.name}
                                    </h3>

                                    <p className="text-gray-600">
                                        Date: {task.date}
                                    </p>

                                    <p className="text-purple-600 font-semibold">
                                        Status: {task.status}
                                    </p>
                                </div>

                                <div className="flex gap-2">

                                    <button
                                        onClick={() => handleEdit(task)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(task.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>
    );
}

export default Task;