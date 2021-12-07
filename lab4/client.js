$(document).ready(function () {
    function getUsers() {
        $.get('/getusers', function (data) {
            createTable('#table', data)
        })
    }
    getUsers()

    function createTable(element, mas) {
        $(element).empty();
        console.log(mas);
        $('<table>')
            .addClass("table table-bordered table-primary col-6")
            .appendTo(element);
        for (var i = 0; i < mas.length; i++) {
            $('<tr>').addClass('tr').appendTo('.table');
            for (var key in mas[i]) {
                $('<td>').addClass('td')
                    .appendTo('.tr:last').text(mas[i][key]);
            }
            $('.tr:last .td:first').hide();
            $('<td>').appendTo('.tr:last').addClass('d-flex justify-content-center');
            $('<button>').text('Delete').addClass('btn btn-danger')
                .appendTo('td:last').click(function () {
                    let id = $(this).parent().parent().find('td:first').text();
                    console.log(id);
                    deleteUser(id);
                });
            $('<button>').text('Update').addClass('ml-3 btn btn-warning update-btn')
                .appendTo('td:last').click(function () {
                    let id = $(this).parent().parent().find('td:first').text();
                    console.log(id);
                    $(".update").removeClass("hidden").attr("id", id)
                    $(".add").addClass("hidden")
                });
        }
    }

    function addUser(name, age) {
        if (!name || !age) return;
        let obj = {
            username: name,
            userage: age
        }
        $.post('/adduser', obj, function (data) {
            console.log(data);
            getUsers();
        })
    }

    function deleteUser(id) {
        let obj = { id: id };
        $.post('/deleteuser', obj, function (data) {
            console.log(data);
            getUsers();
        })
    }

    function updateUser(id, name, age) {
        let obj = {
            id: id,
            username: name,
            userage: age
        }
        $.post('/updateuser', obj, function (data) {
            console.log(data);
            getUsers();
        })
    }

    $('.add').on('click', this, function () {
        let name = $('.name').val();
        let age = $('.age').val();
        $('.name').val("");
        $('.age').val("");
        addUser(name, age);
    })

    $('.update').on('click', this, function () {
        let id = $(this).attr("id").valueOf()
        let name = $('.name').val();
        let age = $('.age').val();
        $('.name').val("");
        $('.age').val("");
        updateUser(id, name, age);
        $(".update").addClass("hidden").removeAttr("id")
        $(".add").removeClass("hidden")
    })
})
