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