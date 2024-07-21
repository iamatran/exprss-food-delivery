function addToCart() {
    alert("Added the item to your cart!");
}

function contactAlert() {
    alert("Your request has been submitted. You will receive a response within 2-3 business days.");
}


$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        user: {
            Id: "1",
            UserName: "candykid",
            Name: "Peter Tran",
            BillingAddress: "1",
            HomeAddress: "2"
            
        },

        billingaddress: {
            Id: 1,
            Address1: "123 Fake Street Boulevard",
            Address2: "St. Louis, MO, 01234"
        },

        deliveryaddress: {
            Id: 1,
            Address1: "456 Fake Street Avenue",
            Address2: "St. Louis, MO, 56789"
        },

        orderhistory: [
            {
                ordernumber: "1001",
                date: "11/02/2018",
                price: "10.99"
            },
            {
                ordernumber: "1002",
                date: "11/07/2018",
                price: "12.99"
            },
            {
                ordernumber: "1003",
                date: "11/09/2018",
                price: "13.99"
            },
            {
                ordernumber: "1004",
                date: "11/15/2018",
                price: "9.99"
            },
            {
                ordernumber: "1005",
                date: "11/19/2018",
                price: "4.00"
            },
            {
                ordernumber: "1006",
                date: "12/02/2018",
                price: "32.34"
            },
            {
                ordernumber: "1007",
                date: "12/03/2018",
                price: "26.53"
            },
            {
                ordernumber: "1008",
                date: "12/07/2018",
                price: "21.23"
            },
            {
                ordernumber: "1009",
                date: "12/10/2018",
                price: "6.67"
            },
            {
                ordernumber: "1010",
                date: "12/11/2018",
                price: "8.42"
            }
        ],

        food: [
            {
                item: "1/3 lb. Classic Burger",
                description: "Lettuce, tomato, onions and pickles. USDA choice chuck. Choice of toasted white or wheat bun.",
                price: "6.29",
                image: "burger.jpg"
            },
            {
                item: "1/3 lb. Mushroom Swiss Burger",
                description: "Melted Swiss cheese and sauteed mushrooms. USDA choice chuck. Choice of toasted white or wheat bun.",
                price: "7.29",
                image: "mushroom.jpg"
            },
            {
                item: "Southwest Chicken Salad",
                description: "Grilled chicken breast on romaine, tomato, cucumber, onions, croutons and shredded cheddar, served with choice of dressing.",
                price: "7.99",
                image: "salad.jpg"
            },
            {
                item: "1/3 lb. The Works Burger",
                description: "Bacon, grilled onions, grilled mushrooms. Choice of toasted white or wheat bun.",
                price: "7.79",
                image: "works.jpg"
            },
            {
                item: "1/3 lb. Bacon BBQ Burger",
                description: "Bacon, cheddar, onion strings and BBQ sauce.",
                price: "7.79",
                image: "bacon.jpg"
            },
            
            {
                item: "Original Chicken Sandwich",
                description: "Hand battered chicken breast on a toasted white bun.",
                price: "6.29",
                image: "chickensand.jpg"
            },
            {
                item: "Chicken Strips",
                description: "Hand battered chicken tenderloins.",
                price: "6.29",
                image: "chicken.jpg"
            },
            {
                item: "Freshly Cut Fries",
                description: "Lightly Salted",
                price: "3.29",
                image: "fries.jpg"
            },
            {
                item: "Classic Shake",
                description: "Choice of Vanilla, Chocolate, or Strawberry.",
                price: "4.29",
                image: "shake.jpg"
            }

        ],
        
        cart: [
            {
                quantity: "1",
                item: "1/3 lb. Classic Burger",
                description: "Add mayo, No pickles",
                price: "6.29",
            },
            {
                quantity: "1",
                item: "Chicken Strips",
                description: "Extra Crispy",
                price: "6.29",
            },
            {
                quantity: "2",
                item: "Freshly Cut Fries",
                description: "Extra Salt",
                price: "6.58",
            },
            {
                quantity: "1",
                item: "Classic Shake",
                description: "Chocolate",
                price: "4.29",
            }

        ]
        





    })
    $("#target").html(rendered);
});






/*
$(function() {
    $.getJSON('data.json', function(data) {
        var template = $('#meowtemplate').html();
        var html = Mustache.to_html(template, data);
        $('#target').html(html);
    });
});
*/