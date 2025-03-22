const pages = document.querySelectorAll('.container');
let currentPage = 0;

// Fix first page not showing by ensuring display is set correctly
pages.forEach((page, index) => {
    if (index === 0) {
        page.style.display = "flex"; 
    } else {
        page.style.display = "none";
    }
});

function showNextPage() {
    pages[currentPage].classList.remove('active');
    pages[currentPage].style.display = "none"; // Hide current page

    currentPage = (currentPage + 1) % pages.length;

    pages[currentPage].style.display = "flex"; // Show next page
    setTimeout(() => {
        pages[currentPage].classList.add('active');
    }, 50);

    document.body.style.background = getGradient(currentPage);
}

function getGradient(page) {
    const gradients = [
        "linear-gradient(45deg, #ff758c, #ff7eb3)", // Page 1
        "linear-gradient(45deg, #ff9a9e, #fad0c4)", // Page 2
        "linear-gradient(45deg, #a18cd1, #fbc2eb)", // Page 3
        "linear-gradient(45deg, #ff7eb3, #ff758c)", // Page 4
        "linear-gradient(45deg, #ffb199, #ff0844)"  // Page 5
    ];
    return gradients[page] || gradients[0];
}

setInterval(showNextPage, 5000); // Extended time to 15 seconds per page
