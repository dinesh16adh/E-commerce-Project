const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
function purchase(itemId) {
  const itemName = document.getElementById(itemId).getElementsByClassName("name")[0].innerText;
  const itemPrice = document.getElementById(itemId).getElementsByClassName("price")[0].innerText;

  // You can customize the purchase logic, e.g., show a confirmation message or redirect to a payment page.
  alert(`You have purchased ${itemName} for ${itemPrice}.`);
}

function addToCart(itemId) {
  const itemName = document.getElementById(itemId).getElementsByClassName("name")[0].innerText;

  // You can customize the cart logic, e.g., add the item to a cart array.
  alert(`${itemName} added to the cart.`);

}


// Array to store cart items
let cartItems = [];

// Function to open the cart window
function openCartWindow() {
    // Open a new window
    const newWindow = window.open("", "CartWindow", "width=400,height=400");

    // Write the cart window content
    newWindow.document.write(`
        <html>
        <head>
            <title>Your Cart</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h2>Your Cart</h2>
            <div id="cartItems"></div>
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" value="1" min="1">
            <button onclick="addToCart()">Add to Cart</button>
            <button onclick="saveForLater()">Save for Later</button>
            <div id="thankYouMsg"></div>

            <script>
                // Function to add items to the cart
                function addToCart() {
                    const selectedQuantity = parseInt(document.getElementById("quantity").value);

                    // Add your logic to add the item to the cart array

                    // Display a thank you message
                    const thankYouMsg = \`Thank you for adding \${selectedQuantity} item(s) to your cart!\`;
                    document.getElementById("thankYouMsg").textContent = thankYouMsg;
                }

                // Function to save for later
                function saveForLater() {
                    // Add your logic to save the item for later

                    // Display a thank you message
                    const thankYouMsg = "Your information has been saved for later!";
                    document.getElementById("thankYouMsg").textContent = thankYouMsg;
                }
            </script>
        </body>
        </html>
    `);
}



function showAR(item) {
  const modelUrls = {
    'item1': 'https://cdn.glitch.global/2ac1ccb0-74ae-46ea-8259-7bd63b98cc26/gucci_shoes.glb?v=1708888228908',
    'item2': 'https://cdn.glitch.global/2ac1ccb0-74ae-46ea-8259-7bd63b98cc26/t_shirt.glb?v=1708917417754',
    'item3': 'https://cdn.glitch.global/2ac1ccb0-74ae-46ea-8259-7bd63b98cc26/casio_edifice_watch.glb?v=1708927928244',
    'item4': ' https://cdn.glitch.global/2ac1ccb0-74ae-46ea-8259-7bd63b98cc26/phone.glb?v=1708928101862',
    'item5': ' https://cdn.glitch.global/2ac1ccb0-74ae-46ea-8259-7bd63b98cc26/phone.glb?v=1708928101862',
    // Add more items as needed
  };

  const modelUrl = modelUrls[item];

  if (modelUrl) {
    const arViewHtml = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
                    <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js"></script>
                    <title>AR View</title>
                </head>
                <body>
                    <a-scene embedded arjs>
                        <a-assets>
                            <a-asset-item id="model" response-type="arraybuffer" src="${modelUrl}"></a-asset-item>
                        </a-assets>
                        <a-marker preset="hiro">
                            <a-entity gltf-model="#model" position="0 0 0" scale="0.8 0.8 0.8" rotation="0 0 0"></a-entity>
                        </a-marker>
                        <a-entity camera></a-entity>
                    </a-scene>
                </body>
            </html>
        `;

    const arWindow = window.open();
    arWindow.document.write(arViewHtml);
    arWindow.document.close();
  } else {
    alert('AR model link not available for this product.');
  }
}

// Your existing JavaScript functions (if any) can be added here
function purchase(item) {
  const isLoggedIn = checkIfLoggedIn();
  console.log()
  if (!isLoggedIn) {
    window.location.replace('http://localhost:5500/simple-e-commerce-website/dist/login/login-sign-up-form-validation/src/index.html')
  }
}

function checkIfLoggedIn() {
  return false;
}
function addToCart(item) {
  // Implement the add to cart logic
}

function login() {
  const apiUrl = 'http://127.0.0.1:3000/product/1';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Data not found');
        } else if (response.status === 500) {
          throw new Error('Server error');
        } else {
          throw new Error('Network response was not ok');
        }
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
