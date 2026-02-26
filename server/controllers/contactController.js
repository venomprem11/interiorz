const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

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
    try {
        const { name, email, phone, message } = req.body;

        // 1️⃣ Save to MongoDB
        const contact = new Contact({
            name,
            email,
            phone,
            message,
        });

        const savedContact = await contact.save();

        // 2️⃣ Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Interior Contact Form Submission",
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
            `,
        });

        res.status(201).json({ message: "Contact saved & email sent successfully" });

    } catch (error) {
        console.error("Contact Error:", error);
        res.status(500).json({ message: error.message });
    }
};