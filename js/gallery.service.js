'use strict'

const KEY = 'projects'
var gProjects = _creatProjects();

// { "id": "sokoban", 
// "name": "Sokoban", 
// "title": "Better push those boxes", 
// "desc": "lorem ipsum lorem ipsum lorem ipsum", 
// "url": "projs/sokoban", 
// "publishedAt": 1448693940000, 
// "labels": ["Matrixes", "keyboard events"], }

function getProgects() {
    return gProjects;
}

function _creatProjects() {
    var projects = loadFromStorage(KEY);
    if (!projects || !projects.length) {
        var projectList = [
            ['chess', 'Get smarter', 'https://irisri.github.io/chess/', ['Matrixes', 'Game']],
            ['book-shop', 'look at all the books!', 'https://irisri.github.io/book-shop/', ['Inventory', 'MVC']],
            ['in-picture', 'Cute animals!', 'https://irisri.github.io/in-picture/', ['Q&A', 'Cute']],
            ['mine-sweeper', 'This is a mine sweeper game', 'https://irisri.github.io/mine-sweeper/', ['Matrixes', 'Game']],
            ['todo', 'I need to enter some tasks!', 'https://irisri.github.io/todo/', ['Array', 'ToDo']],
            ['ball board', 'Collect thouse balls!', 'https://irisri.github.io/ball-board/', ['Game', 'Matrixes']],
            ['touch-nums', 'What\'s next?!', 'https://irisri.github.io/touch-nums/', ['Game', 'Matrixes']]
        ];
        projects = projectList.map(project => _creatProject(project[0], project[1], project[2], project[3]));
        saveToStorage(KEY, projects);
    }
    return projects;
}

function _creatProject(id, title, url, labels) {
    return {
        id: id,
        name: id.charAt(0).toUpperCase() + id.slice(1),
        title: title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: url,
        publishedAt: Date.now(),
        labels: labels
    }
}