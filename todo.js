let input = prompt('What would you like to do?');

const todos = ['complete java script', 'practice code'];

while (input !== 'quit' && input != 'q') {

    if (input === 'list') {

        console.log('******************');
        for (i = 0; i < todos.length; i++) {

            console.log(`${i} : ${todos[i]}`);

        }
        console.log('******************');

    } else if (input === 'new') {

        let newitem = prompt('Enter new list element.');

        todos.push(newitem);
        console.log(`${newitem} added to the list`);

    } else if (input === 'delete') {

        const index = parseInt(prompt('Ok, Enter an index to delete element.'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }
    }

    input = prompt('What would you like to do?');
}
console.log("you quit the app");