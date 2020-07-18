const fs = require('fs');

let toDoList = [];

const save = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error ('Error al grabar', err);
    })
}

const upload = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
} 

const create = (description) => {

    upload();

    let todo = {
        description,
        completed: false
    };

    toDoList.push(todo);

    save(); 

    return todo;
}

const getList = () => {
    upload();
    return toDoList;
}

const update = (description, completed = true) => {
    upload();
    let index = toDoList.findIndex( taks => taks.description === description );

    if(index >= 0) {
        toDoList[index].completed = completed;
        save()
        return true;
    } else {
        return false;
    }
}

const toDelete = (description) => {
    upload();
    let newtoDoList = toDoList.filter( task => task.description !== description);

    if ( toDoList.length === newtoDoList.length){
        return false
    } else {
        toDoList = newtoDoList;
        save();
        return true
    }
}

module.exports = {
    create,
    getList,
    update,
    toDelete
}