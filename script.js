let input = prompt('What would you like to Do ? Choose an Option from the List Below :');
let trimmedInput = input.trim();
const todos = [];

while (trimmedInput !== 'quit' && trimmedInput !== 'q') {

    if (trimmedInput === 'list') {
        console.log('**********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');
    }
    else if (trimmedInput === 'new') {
        const newTodo = prompt('Okay, What is the new todo ?');
        let trimmedNewTodo = newTodo.trim();
        todos.push(trimmedNewTodo);
        console.log(`'${trimmedNewTodo}' is added to the list.`);
    }
    else if (trimmedInput === 'delete') {
        const index = parseInt(prompt('Ok, Enter an Index to Delete !'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, You deleted : '${deleted[0]}'.`);
        }
        else {
            console.log('Unknown Index, Try a Valid Index !');
        }
    }
    input = prompt('What would you like to Do ? Choose an Option from the List Below :');
    trimmedInput = input.trim();
}
console.log('Okay, You quit the App !');
