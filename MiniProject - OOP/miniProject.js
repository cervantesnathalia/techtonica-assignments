class Ticket {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}
class Event {
    constructor(name, description, eventDate) {
        this.name = name;
        this.eventDate = eventDate;
        this.description = description;
        this.availableTickets = []
    }
    addAvailableTickets(type, price) {
        let newTicket = new Ticket(type, price);
        this.availableTickets.push(newTicket)
    }

    // Add checked for when min or max == 0; and when either is negative
    searchTickets(minPrice, maxPrice) {
        let msg = "Eligible tickets: "
        let counter = 1
        for (let i = 0; i < this.availableTickets.length; i++) {
            let price = this.availableTickets[i].price
            if (price >= minPrice && price <= maxPrice) {
                msg += `${counter}. ${this.availableTickets[i].type} `;
                counter++
            }
        }
        if (counter == 1 || minPrice < 0 || maxPrice < 0) { // price range ensure the negative cases and 0
            return "No tickets available."
        } else {
            return msg
        }
    }

    cheapestTickets() { //doesnt need a parameter because have all the informations I need to return the cheapest ticket
        if (this.availableTickets.length === 0) {
            return "No tickets available."
        }
        let currCheapestTicket = this.availableTickets[0];
        for (let i = 0; i < this.availableTickets.length; i++) {
            if (this.availableTickets[i].price < currCheapestTicket.price) {
                currCheapestTicket = this.availableTickets;
            }
        }
        return currCheapestTicket;
    }
}


// The below statement creates an object.
const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");
const event_array = new Array();
// pushing multiple objects to an array at once
event_array.push(event_obj1, event_obj2, event_obj3);
// in order to check whether the elements are pushed, use console.log
console.log(event_array);

event_obj2.addAvailableTickets("General Admission", 25)
event_obj2.addAvailableTickets("Floor Seating", 80)
event_obj2.addAvailableTickets("Orchestra", 300)
event_obj2.addAvailableTickets("Mezzanine", 200)
event_obj2.addAvailableTickets("Balcony", 100)

console.log(event_obj2.searchTickets(0, 250))

$(document).ready(function () {
    document.getElementById("eventName").innerHTML = event_obj2.name;
    document.getElementById("eventDescription").innerHTML = `Description: ${event_obj2.description}`;
});

function search() {
    let minPrice = document.getElementById("price-min").value;
    let maxPrice = document.getElementById("price-max").value;
    console.log(event_obj2)
    document.getElementById("response").innerHTML = event_obj2.searchTickets(minPrice, maxPrice);
}



$(document).ready(function () {
    let html = "";
    $.each(event_array, function (index, item) {
        html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 100)} </li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
});



