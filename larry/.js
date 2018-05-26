$(document).ready(function() {
    $('#sumbit').click(function() {
        $('#contactform').attr('action',
                       'mailto:Lhudson322@gmail.com?subject=LarryHudson Chambliss Digital Portfolio' +
                       $('#name').val() + '&body=' + $('#email').val() + '&body=' + $('#comments').val() + '&body=');
        $('#contactform').submit();
    });
});
