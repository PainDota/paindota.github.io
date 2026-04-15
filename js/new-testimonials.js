function openImage(src) {
    document.getElementById("modalImage").src = src;
    new bootstrap.Modal(document.getElementById('imageModal')).show();
}