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