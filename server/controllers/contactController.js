const Contact = require('../models/Contact');

// Get all contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a contact (form submission)
exports.createContact = async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
