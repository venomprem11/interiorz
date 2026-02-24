const Project = require('../models/Project');

// Get all projects
exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a project
exports.createProject = async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        category: req.body.category,
        link: req.body.link,
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
