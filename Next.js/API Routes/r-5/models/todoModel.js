import mongoose from 'mongoose';

const TodoModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.TodoModel || mongoose.model('TodoModel', TodoModel);

// This is checking if a model named TodoModel already exists in the mongoose.models object. This object is a cache of all models created in the application
