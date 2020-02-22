function change_page_animation(next_page) {
    $(document).ready(function () {
        if (active_page == next_page)
        {
            return;
        }

        var parent = views['parent'];
        var view = views[next_page].clone();
        const class_name = 'fade-out-1';



        if (active_page == null) {
            parent.append(view);
            active_page = next_page;
        } else {
            $('#' + active_page).addClass(class_name);

            $('#' + active_page).one("animationend webkitAnimationEnd", function () {
                $('#' + active_page).remove();
                parent.append(view);
                active_page = next_page;
            });
        }
    });
}