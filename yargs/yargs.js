const argv = require('yargs')
                .command('create', 'Create a task', {
                    description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Create a task'
                    }
                })
                .command('update', 'update a task', {
                    description: {
                        demand: true,
                        alias: 'd',
                        desc: 'update a task'
                    },
                    completed: {
                        default: true,
                        alias: 'c',
                        desc: 'check done/undone'
                    }
                })
                .command('delete', 'delete a task',{
                    description: {
                        demand: true,
                        alias:'d',
                        desc:'delete a task'
                    },
                })
                .help()
                .argv;

module.exports = {
    argv
}