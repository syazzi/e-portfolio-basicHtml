const form = document.getElementById('addform');

const itemList = document.getElementById('items');

const filter = document.getElementById('search');

//form submit event

form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//search event
filter.addEventListener('keyup', filterItem);

function addItem(e){
    e.preventDefault();
    // get input value
    const newItem = document.getElementById('inputText').value;

    //create enw li element
    const li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text ode with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    // convert text to lowercase

    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    //convert items into array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';

        }
    })
}