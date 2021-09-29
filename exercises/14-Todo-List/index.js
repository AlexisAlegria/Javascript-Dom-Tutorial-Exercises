var form = document.getElementById('addForm');
console.log(form);
var itemList = document.getElementById('items');
console.log(itemList);
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('addToDo').value;
    var uppercaseNewItem = newItem[0].toUpperCase() + newItem.slice(1);
    var li = document.createElement('li');
    var span = document.createElement('span');
    var i = document.createElement('i');
    i.className = 'fa fa-trash';
    li.appendChild(span);
    span.appendChild(i);
    li.appendChild(document.createTextNode(uppercaseNewItem));
    itemList.appendChild(li);
}
itemList.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('trash')){
        if(confirm('Are you sure to remove the Item?')  ){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    if(e.target.classList.contains('fa')){
        if(confirm('Are you sure to remove the Item?')){
            var span = e.target.parentElement;
            var litwo = span.parentElement;
            itemList.removeChild(litwo);
        }
    }
}