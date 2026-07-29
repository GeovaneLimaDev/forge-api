import User from './User.js';
import Feature from './Feature.js';
import Documentation from './Documentation.js';
import Note from './Note.js';
import Project from './Project.js';
import Sessions from './Sessions.js';
import { conn } from '../config/databese.js';

//relações de User 
User.hasMany(Project, {
    onDelete: 'CASCADE'
})
User.hasMany(Feature, {
    onDelete: 'CASCADE'
})
User.hasMany(Note, {
    onDelete: 'CASCADE'
})
User.hasMany(Documentation, {
    onDelete: 'CASCADE'
})
User.hasMany(Sessions, {
    onDelete: 'CASCADE'
})

//relação do projeto
Project.belongsTo(User, {
    onDelete: 'CASCADE'
})
Project.hasMany(Note, {
    onDelete: 'CASCADE'
})
Project.hasMany(Feature, {
    onDelete: 'CASCADE'
})
Project.hasMany(Documentation, {
    onDelete: 'CASCADE'
})

//relação das feature 
Feature.belongsTo(User, {
    onDelete: 'CASCADE'
})
Feature.belongsTo(Project, {
    onDelete: 'CASCADE'
})

//relação das notas
Note.belongsTo(User, {
    onDelete: 'CASCADE'
})
Note.belongsTo(Project, {
    onDelete: 'CASCADE'
})

//relação da documentação
Documentation.belongsTo(User, {
    onDelete: 'CASCADE'
})
Documentation.belongsTo(Project, {
    onDelete: 'CASCADE'
})

//relações das sessions 
Sessions.belongsTo(User, {
    onDelete: 'CASCADE'
})
