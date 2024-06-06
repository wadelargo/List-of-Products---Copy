let searchQuery = window.location.search
let urlParams = new URLSearchParams(searchQuery)

let userId = urlParams.get('user')

fetch('' + userId)
.then((response) => response.json())
.then((data)=>{

    document.getElementById('username').innerText = data.username
    document.getElementById('lname').innerText = data.lastName
    document.getElementById('fname').innerText = data.firstName
    document.getElementById('mname').innerText = data =middleName
    document.getElementById('image').setAttribute('src', data.image)

})