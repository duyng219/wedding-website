document.querySelector('a[href="#fh5co-event"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#fh5co-event').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.btn.btn-default.btn-sm').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#fh5co-event').scrollIntoView({
        behavior: 'smooth'
    });
});