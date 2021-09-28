//you code here
document.body.innerHTML = "<h1>Hello World</h1>";

const add_image = () =>{
    let image = document.createElement('img');  
    image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document.body.appendChild(image);
}
add_image();

