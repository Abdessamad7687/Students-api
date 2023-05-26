const Student = require('../models/Student');

// Controller actions
const StudentController = {
  // Create a new instance of Student
  
  create: async (req, res) => {
    try {
      const { nom, group, passed, mention } = req.body;
      const StudentModel = new Student({
        nom,
        group,
        passed,
        mention,
      });
      const savedStudent = await StudentModel.save();
      res.json(savedStudent);
    } catch (error) {
      console.error('Error creating model:', error);
      res.status(500).json({ error: 'Failed to create model' });
    }
  },

  // Get all instances of MyModel
  getAll: async (req, res) => {
    try {
      const models = await Student.find();
      res.json(models);
    } catch (error) {
      console.error('Error retrieving models:', error);
      res.status(500).json({ error: 'Failed to retrieve models' });
    }
  },

  // Get a specific instance of MyModel by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const model = await Student.findById(id);
      if (!model) {
        return res.status(404).json({ error: 'Model not found' });
      }
      res.json(model);
    } catch (error) {
      console.error('Error retrieving model:', error);
      res.status(500).json({ error: 'Failed to retrieve model' });
    }
  },

  // Update a specific instance of MyModel by ID
  updateById: async (req, res) => {
    try {
      const { id } = req.params;
      const { nom, group, passed, mention } = req.body;
      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        {
          nom,
          group,
          passed,
          mention,
        },
        { new: true }
      );
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(updatedStudent);
    } catch (error) {
      console.error('Error updating Student:', error);
      res.status(500).json({ error: 'Failed to update Student' });
    }
  },

  // Delete a specific instance of MyModel by ID
  deleteById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedModel = await Student.findByIdAndRemove(id);
      if (!deletedModel) {
        return res.status(404).json({ error: 'Model not found' });
      }
      res.json({ message: 'Model deleted successfully' });
    } catch (error) {
      console.error('Error deleting model:', error);
      res.status(500).json({ error: 'Failed to delete model' });
    }
  },
};

module.exports = StudentController;