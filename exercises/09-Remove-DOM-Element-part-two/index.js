let list = document.querySelector('#parentLi');
console.log(list)
let childs = list.childNodes;
console.log(childs)
list.removeChild(childs[3]);