import axios from 'axios';

const baseUrl = 'https://to-do-app-with-react-and-mongodb-backend-qi5x.onrender.com';

const getAllTodo = (setToDo)=> {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setToDo(data);
    }
    )
    .catch((err) => console.log(err));
}
const addTodo = (text,setText, setToDo)=>
{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data)=> {
        console.log('data ---> ', data);
        setText('');
        getAllTodo(setToDo);
    
    })
    .catch((err)=> console.log(err))
}

const updateTodo = (toDoId, text, setToDo,setText, setIsUpdating)=>
{
    axios
    .put(`${baseUrl}/update`, {_id: toDoId, text})
    .then((data)=> {
        setText('');
        setIsUpdating(false);
        getAllTodo(setToDo);
    
    })
    .catch((err)=> console.log(err))
}

const deleteTodo = (_id, setToDo)=>
{
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data)=> {
        console.log('data ---> ', data);
        getAllTodo(setToDo);
    
    })
    .catch((err)=> console.log(err))
}

export{getAllTodo, addTodo, updateTodo, deleteTodo}
