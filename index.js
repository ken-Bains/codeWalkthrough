$(document).ready(function () {
    $('.scrollspy').scrollSpy();
    $('.sidenav').sidenav();
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'right' });
});
