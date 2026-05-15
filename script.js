// CONSTRUCTOR
function Contact(firstName, lastName, address, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
}

// PROTOTYPE METHODS
Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

// ADDRESS BOOK CONSTRUCTOR
function AddressBook() {
    this.contacts = [];
}

// PROTOTYPE METHODS
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
};

AddressBook.prototype.findContact = function (fullName) {
    for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].fullName() === fullName) {
            return this.contacts[i];
        }
    }
    return false;
};

AddressBook.prototype.deleteContact = function (fullName) {
    for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].fullName() === fullName) {
            this.contacts.splice(i, 1);
            return true;
        }
    }
    return false;
};


//PLACES I'VE BEEN
// PLACE CONSTRUCTOR
function Place(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

// PLACES LIST CONSTRUCTOR
function PlacesList() {
    this.places = [];
}

// PROTOTYPE METHODS
PlacesList.prototype.addPlace = function (place) {
    this.places.push(place);
};

PlacesList.prototype.findPlace = function (location) {
    for (let i = 0; i < this.places.length; i++) {
        if (this.places[i].location === location) {
            return this.places[i];
        }
    }
    return false;
};

PlacesList.prototype.deletePlace = function (location) {
    for (let i = 0; i < this.places.length; i++) {
        if (this.places[i].location === location) {
            this.places.splice(i, 1);
            return true;
        }
    }
    return false;
};


// ADDRESS BOOK UI

let addressBook = new AddressBook();

// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Grab values from form
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let address = document.getElementById("address").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();

  // Create new contact object
  let newContact = new Contact(firstName, lastName, address, phone, email);

  // Add to address book
  addressBook.addContact(newContact);

  // Refresh the contact list on screen
  displayContacts();

  // Clear the form on submission
  document.getElementById("contactForm").reset();
});

// Display all contacts as clickable names
function displayContacts() {
  let contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  addressBook.contacts.forEach(function(contact) {
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-card");
    contactDiv.innerText = contact.fullName();

    // Click to view details
    contactDiv.addEventListener("click", function() {
      showContactDetail(contact.fullName());
    });

    contactList.appendChild(contactDiv);
  });
}

// Show full details of a selected contact
function showContactDetail(fullName) {
  let contact = addressBook.findContact(fullName);

  document.getElementById("detailContent").innerHTML = `
    <p><strong>Name:</strong> ${contact.fullName()}</p>
    <p><strong>Address:</strong> ${contact.address}</p>
    <p><strong>Phone:</strong> ${contact.phone}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
  `;

  // Show detail section, hide list
  document.getElementById("contactDetail").style.display = "block";
  document.querySelector(".list-section").style.display = "none";

  // Delete button
  document.getElementById("deleteContact").onclick = function() {
    addressBook.deleteContact(fullName);
    document.getElementById("contactDetail").style.display = "none";
    document.querySelector(".list-section").style.display = "block";
    displayContacts();
  };

  // Back button
  document.getElementById("backButton").onclick = function() {
    document.getElementById("contactDetail").style.display = "none";
    document.querySelector(".list-section").style.display = "block";
  };
}


// PLACES I'VE BEEN UI

let placesList = new PlacesList();

// Listen for form submission
if (document.getElementById("placeForm")) {
  document.getElementById("placeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Grab values from form
    let location = document.getElementById("location").value.trim();
    let landmarks = document.getElementById("landmarks").value.trim();
    let timeOfYear = document.getElementById("timeOfYear").value.trim();
    let notes = document.getElementById("notes").value.trim();

    // Create new place object
    let newPlace = new Place(location, landmarks, timeOfYear, notes);

    // Add to places list
    placesList.addPlace(newPlace);

    // Refresh the places list on screen
    displayPlaces();

    // Clear the form
    document.getElementById("placeForm").reset();
  });
}

// Display all places as clickable names
function displayPlaces() {
  let placesDiv = document.getElementById("placesList");
  placesDiv.innerHTML = "";

  placesList.places.forEach(function(place) {
    let placeDiv = document.createElement("div");
    placeDiv.classList.add("contact-card");
    placeDiv.innerText = place.location;

    // Click to view details
    placeDiv.addEventListener("click", function() {
      showPlaceDetail(place.location);
    });

    placesDiv.appendChild(placeDiv);
  });
}

// Show full details of a selected place
function showPlaceDetail(location) {
  let place = placesList.findPlace(location);

  document.getElementById("placeDetailContent").innerHTML = `
    <p><strong>Location:</strong> ${place.location}</p>
    <p><strong>Landmarks:</strong> ${place.landmarks}</p>
    <p><strong>Time of Year:</strong> ${place.timeOfYear}</p>
    <p><strong>Notes:</strong> ${place.notes}</p>
  `;

  // Show detail section, hide list
  document.getElementById("placeDetail").style.display = "block";
  document.querySelector(".list-section").style.display = "none";

  // Delete button
  document.getElementById("deletePlace").onclick = function() {
    placesList.deletePlace(location);
    document.getElementById("placeDetail").style.display = "none";
    document.querySelector(".list-section").style.display = "block";
    displayPlaces();
  };

  // Back button
  document.getElementById("backButton").onclick = function() {
    document.getElementById("placeDetail").style.display = "none";
    document.querySelector(".list-section").style.display = "block";
  };
}