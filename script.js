let input = prompt('What would you like to Do ? Choose an Option from the List Below :');
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
        console.log(`'${newTodo}' is added to the list.`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, Enter an Index to Delete !'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, You deleted : '${deleted[0]}'.`);
        } else {
            console.log('Unknown Index, Try a Valid Index !');
        }
    }
    input = prompt('What would you like to Do ? Choose an Option from the List Below :');
}
console.log('Okay, You quit the App !');
