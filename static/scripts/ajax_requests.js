$("#btn-login-send").click(function () {
    $.post("test.py",
        {
            username: "username",
            password: "password"
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-register-send").click(function () {
    $.post("test.py",
        {
            username: "username",
            email: "email",
            password: "password"
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-contact-send").click(function () {
    $.post("test.py",
        {
            name: "name",
            email: "email",
            phone: "phone",
            message: "message"
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-profile-change_info").click(function () {
    $.post("test.py",
        {
            username: "username",
            email: "email"
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-profile-password").click(function () {
    $.post("test.py",
        {
            old_password: "old_password",
            new_password: "new_password"
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-profile-about_me").click(function () {
    $.post("test.py",
        {
            about_me: "about_me"
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-contact").click(function () {
    $.get("test.py",
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-profile").click(function () {
    $.get("test.py",
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

$("#btn-story").click(function () {
    $.get("test.py",
        {
            about_me: "about_me"
        },
        function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
});

var btn_story_search = function () {
    // $.get("test.py",
    //     {
    //         search: "search"
    //     },
    //     function (data, status) {
    //         alert("Data: " + data + "\nStatus: " + status);
    //     });
    window.alert('asdf')
};