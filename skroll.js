document.addEventListener("DOMContentLoaded", function () {
    const scrollToBottomButton = document.getElementById("scrollToBottomButton");

    scrollToBottomButton.addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth", 
        });
    });
});
