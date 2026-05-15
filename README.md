# Address Book & Places You've Been 📒

A two-part JavaScript application built with constructors and prototypes.
Address Book lets users manage contacts. Places You've Been lets users track destinations they have visited.

🔗 **Live Site:** [myminiwrldsht.github.io/address_book](https://myminiwrldsht.github.io/address_book/)

---

## What It Does

Two apps, one project. Address Book stores contacts with full details and lets you find or delete them by name. Places You've Been stores destinations with properties like landmarks, time of year, and notes, and lets you click a place to see its full details.

---

## Pages

- `index.html` — Address Book UI
- `places.html` — Places You've Been UI

---

## Features

- Contacts stored as objects using constructors
- Address book and places list managed via prototype methods
- Find and delete functionality on both apps
- Test-driven development — all business logic tested before UI
- Responsive, clean UI matching project theme

---

## Technologies

HTML5, CSS3, Vanilla JavaScript

---

## JavaScript Concepts Used

- Constructors — `Contact()`, `AddressBook()`, `Place()`, `PlacesList()`
- Prototypes — shared methods on all instances
- `Array.prototype.push` — adding objects to lists
- `Array.prototype.splice` — removing objects from lists
- `for` loops — searching through object arrays

---

## Tests

### Address Book

**Test 1: Create a Contact**
```
Describe: Contact()
Test: It should create a contact object with firstName, lastName, address, phone and email properties.
Input: Contact("Jane", "Doe", "123 Main St", "555-1234", "jane@email.com")
Output: { firstName: "Jane", lastName: "Doe", address: "123 Main St", phone: "555-1234", email: "jane@email.com" }
```

**Test 2: Get Full Name**
```
Describe: Contact.prototype.fullName()
Test: It should return the contact's first and last name as a string.
Input: contact.fullName()
Output: "Jane Doe"
```

**Test 3: Add Contact to Address Book**
```
Describe: AddressBook.prototype.addContact()
Test: It should add a contact object to the contacts array.
Input: addressBook.addContact(contact)
Output: addressBook.contacts = [contact]
```

**Test 4: Find a Contact**
```
Describe: AddressBook.prototype.findContact()
Test: It should return a contact object when searched by full name.
Input: addressBook.findContact("Jane Doe")
Output: { firstName: "Jane", lastName: "Doe", ... }
```

**Test 5: Find a Contact That Doesn't Exist**
```
Describe: AddressBook.prototype.findContact()
Test: It should return false if the contact is not found.
Input: addressBook.findContact("John Smith")
Output: false
```

**Test 6: Delete a Contact**
```
Describe: AddressBook.prototype.deleteContact()
Test: It should remove a contact from the contacts array and return true.
Input: addressBook.deleteContact("Jane Doe")
Output: true, addressBook.contacts = []
```

**Test 7: Delete a Contact That Doesn't Exist**
```
Describe: AddressBook.prototype.deleteContact()
Test: It should return false if the contact to delete is not found.
Input: addressBook.deleteContact("John Smith")
Output: false
```

---

### Places You've Been

**Test 1: Create a Place**
```
Describe: Place()
Test: It should create a place object with location, landmarks, timeOfYear and notes properties.
Input: Place("Paris", "Eiffel Tower", "Summer", "Amazing food")
Output: { location: "Paris", landmarks: "Eiffel Tower", timeOfYear: "Summer", notes: "Amazing food" }
```

**Test 2: Add Place to Places List**
```
Describe: PlacesList.prototype.addPlace()
Test: It should add a place object to the places array.
Input: placesList.addPlace(place)
Output: placesList.places = [place]
```

**Test 3: Find a Place**
```
Describe: PlacesList.prototype.findPlace()
Test: It should return a place object when searched by location name.
Input: placesList.findPlace("Paris")
Output: { location: "Paris", landmarks: "Eiffel Tower", ... }
```

**Test 4: Find a Place That Doesn't Exist**
```
Describe: PlacesList.prototype.findPlace()
Test: It should return false if the place is not found.
Input: placesList.findPlace("Tokyo")
Output: false
```

**Test 5: Delete a Place**
```
Describe: PlacesList.prototype.deletePlace()
Test: It should remove a place from the places array and return true.
Input: placesList.deletePlace("Paris")
Output: true, placesList.places = []
```

---

## Known Bugs

- No known bugs at this time

---

## Project Structure

```
address-book/
├── index.html
├── places.html
├── script.js
├── style.css
└── README.md
```

---

## Author

**Lakeisha Maya** — [@Myminiwrldsht](https://github.com/Myminiwrldsht)

---

## License

 Apache-2.0 License.
 This project is strictly for educational purposes