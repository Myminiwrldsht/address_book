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

