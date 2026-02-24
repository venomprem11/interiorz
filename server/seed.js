const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const projects = [
    {
        title: 'Golden Sands Villa',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
        description: 'A luxury beachfront villa with open concept living and premium materials.',
        link: '#'
    },
    {
        title: 'Nexus Tech Office',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        description: 'A futuristic workspace designed for collaboration and high productivity.',
        link: '#'
    },
    {
        title: 'Azure Penthouse',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
        description: 'Sky-high elegance with panoramic city views and minimalist interior.',
        link: '#'
    },
    {
        title: 'The Minimalist Loft',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1616486341351-791bb44bcc4f?auto=format&fit=crop&w=800&q=80',
        description: 'A converted industrial loft turned into a sanctuary of clean lines.',
        link: '#'
    },
    {
        title: 'Velvet Lounge',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
        description: 'A boutique lounge experience featuring dark tones and plush textures.',
        link: '#'
    },
    {
        title: 'Eco Glass House',
        category: 'Architecture',
        image: 'https://images.unsplash.com/photo-1449156003053-c3017e6c07b0?auto=format&fit=crop&w=800&q=80',
        description: 'Merging architecture with nature using full-glass walls and sustainable wood.',
        link: '#'
    }
];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/interior_design')
    .then(async () => {
        console.log('MongoDB Connected for seeding...');
        await Project.deleteMany();
        await Project.insertMany(projects);
        console.log('Database seeded successfully!');
        process.exit();
    })
    .catch(err => {
        console.error('Seeding error:', err);
        process.exit(1);
    });
