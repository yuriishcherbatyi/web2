$(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
            console.log(typeof data)
            createTable('#table', data)
        })
    }
    getUsers()
})

function createTable(container,mas){
    let table = document.querySelector(container)
    let row = document.createRange().createContextualFragment("<div class='row table-header'>" +
        "<div class='col-3'>ID</div>" +
        "<div class='col-3'>Username</div>" +
        "<div class='col-3'>Password</div>" +
        "<div class='col-3'>Age</div>" +
        "</div>")
    table.appendChild(row)
    mas.map((item, i) => {
        row = document.createRange().createContextualFragment("<div class='row'>" +
            "<div class='col-3'>" + parseInt(i + 1) + "</div>" +
            "<div class='col-3'>" + item.username + "</div>" +
            "<div class='col-3'>" + item.password + "</div>" +
            "<div class='col-3'>" + item.age + "</div>" +
            "</div>")
        table.appendChild(row)
    })
}