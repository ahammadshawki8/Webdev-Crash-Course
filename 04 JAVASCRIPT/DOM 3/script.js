// Write your code here
var request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
request.send();
request.onreadystatechange = function handleRequest() {   
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
        var data = JSON.parse(request.responseText);
        console.log(data);
    }
}

// var request = new XMLHttpRequest();
// console.log(request.readyState);
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// console.log(request.readyState);
// request.send();
// request.onreadystatechange = function handleRequest(){
//    console.log(request.readyState);
// }


var loadPosts = document.getElementById('btn-click-me');
var box = document.getElementById('box');
var uList = document.createElement('ul');

loadPosts.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    request.send();
    request.onreadystatechange = function handleRequest() {
        if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            data.forEach(function(singleData) {
                var list = document.createElement('li');
                list.textContent = singleData.title;
                uList.appendChild(list);
            })
            box.insertAdjacentElement("beforeend", uList);
        }
    }
});