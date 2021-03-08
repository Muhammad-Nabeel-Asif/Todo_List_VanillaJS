let input = prompt('WHAT WOULD YOU LIKE TO DO !');
const todos = [];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    }
    else if (input === 'new') {
        const newTodo = prompt('Okay, What is the new todo ?');
        todos.push(newTodo);
        console.log(`'${newTodo}' added to the list`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, Enter an Index to Delete !'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, You deleted '${deleted[0]}' !`);
        } else {
            console.log('Unknown Index !');
        }
    }
    input = prompt('WHAT WOULD YOU LIKE TO DO !');
}
console.log('Okay ! Quit the App');
