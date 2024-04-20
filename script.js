document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("colorForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        var color = document.getElementById("colorInput").value;

        var header = document.getElementById("header");

        if (header) {
            header.style.color = color;
        }
    });
});
