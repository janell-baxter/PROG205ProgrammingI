//========================================Event Listener========================================//
// Add an event listener that will trigger once the HTMl document has finished loading.
// Once the page has fully loaded, the page elements are available for our JavaScript to use.
document.addEventListener("DOMContentLoaded", () => {

  //========================================Page Array========================================//
  // Create a collection (an array) of the pages that will appear in the navigation menu.
  // Each page is an object containing:
  // 1) name: The text that visitors will see in the menu.
  // 2) file: The HTML file that the link will open.
  // 3) id: A unique identifier used to recognize which page is currently active.
  const pages = [
    { name: "Home", file: "index.html", id: "home" },
    { name: "About", file: "about.html", id: "about" },
    { name: "Portfolio", file: "portfolio.html", id: "portfolio" }
  ];

  //=====================================Create Nav Element=====================================//
  // Create a new HTML <nav> element; a <nav> element is used to hold navigation links.
  // We'll use this nav element to hold the links for each of the pages in our site. 
  const nav = document.createElement("nav");

  //===================================Build Navigation Menu===================================//
  // Build the navigation menu using the information in our pages array.

  // .map() goes through each page in the array.
  // We'll use map to create a link to each page.
  // Each link contains:
  // 1) href: The file that the link will open when clicked.
  // 2) The page name: The text displayed to the visitor such as 'Home' or 'Portfolio'.
  // 3) pageID: A custom attribute that stores the page's ID such as 'home' or 'portfolio'.

  // .join("") combines all the generated links into one string of HTML.
  nav.innerHTML = pages
    .map(page => `<a href="${page.file}" pageID="${page.id}">${page.name}</a>`)
    .join("");

  //==============================Add Navigation Menu to Document==============================//
  // Insert navigation menu into webpage.
  // document.body represents everything inside the HTML <body> element.
  // firstChild means the very first element or node inside the body.
  // This places the navigation menu at the top of the body.
  document.body.insertBefore(nav, document.body.firstChild);

  //==================================Determing Current Page==================================//
  // Find out which page the visitor is currently viewing.
  // window.location.pathname gets the page's URL path.
  // .split("/") separates the path wherever there is a slash.
  // .pop() gets the last part of that path (usually the filename).
  // .split(".")[0] removes the file extension.

  // Example:
  // "about.htm" becomes "about".

  const currentPage = window.location.pathname.split("/").pop().split(".")[0];

  //===============================Create Collection of Links===============================//
  // Find all the links inside our navigation menu.
  // querySelectorAll("a") selects every HTML <a> (link) element.
  const links = nav.querySelectorAll("a");

  //===============================Loop Through Link Collection===============================//
  // Go through each navigation link one at a time.
  links.forEach(link => {

    //=======================Compare Link in Collection to Current Page=======================//
    // Compare the link's pageID value with the name of the current page.
    // If they match, we know this link represents the page being viewed.
    if (link.dataset.page === currentPage) {

      //================Add the Active Class to the Link Matching Current Page================//
      // Add the CSS class "active" to the matching link.
      // CSS can use this class to visually highlight the current page.
      link.classList.add("active");
    }

  });

});
