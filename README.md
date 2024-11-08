# Slalom Florida SE Tech Screen #

Welcome to the tech screen!

We have some starter code for you that mimics an online shopping cart. 

First, we'll have you run the code and access the localhost page in a browser.  

Then, we'll ask you to debug certain things and add certain features to see how you interact with a code base.  

### Running the starter code ###

Open up a terminal, cd into the angular-shopping-cart, and run these commands: 

npm i
npm start

The web page should show in your browser at http://localhost:4200

### Getting acquainted ###

Look through the /src folder and explore the existing code.  

In it, you'll find a few different components: shopping-cart, product-list, product-item.  

You'll also find a cart service. This cart service contains the seed data you see on the screen.  

In that data model, you can see several fields already displayed and also a few that have not been implemented. 

### Adding features ###

If you look in cart.service, each product has a "thumbnail" property. This is a url to an image of the product.  

#### Task 1 ####
Modify product-item and/or product-list to display each product's thumbnail on screen.

#### Task 2 ####
Now that your items have pictures showing, let's add them to the cart. 

There is an Add to Cart button already on the screen, but it does not work. Modify the code to fix this. 

#### Task 3 ####
Now that your items are adding to the cart, let's fix the Remove One button. 

#### Task 4 ####
Great! The cart is now functioning. 

If you go back to the data model, you'll see in the cart class that its products have a discount percentage and discounted total.  

Add two new columns to the Shopping Cart to display these attributes to the user.  

#### Task 5 ####
Now that you have discount percentage and discounted total, add + and - buttons to change the discount percentage for each item. This change should be reflected in the discounted total both at the line level and at the cart total level. 

#### Task 6 ####
You're making great progress! You'll see there's a Checkout button. Right now, all that does is log the cart to console. Let's make it POST to one of the backend services.  
