import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './models/User.js';
import Task from './models/Task.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/task-app';

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB:', MONGODB_URI);

    // Create demo user if not exists
    const demoEmail = 'demo@example.com';
    let user = await User.findOne({ email: demoEmail });
    if (!user) {
      user = new User({ name: 'Demo User', email: demoEmail, password: 'password123' });
      await user.save();
      console.log('Created demo user:', demoEmail);
    } else {
      console.log('Demo user already exists:', demoEmail);
    }

    // Remove existing demo tasks and insert fresh ones
    await Task.deleteMany({ user: user._id });

    const tasks = [
      {
        title: 'Welcome to Task Manager',
        description: 'This is your first task. Edit or delete it.',
        priority: 'medium',
        status: 'todo',
        user: user._id,
      },
      {
        title: 'Explore the Dashboard',
        description: 'Try creating a task, filtering and searching.',
        priority: 'low',
        status: 'todo',
        user: user._id,
      },
      {
        title: 'Complete your onboarding',
        description: 'Mark this as completed when you finish setup.',
        priority: 'high',
        status: 'in-progress',
        user: user._id,
      },
    ];

    await Task.insertMany(tasks);
    console.log('Inserted demo tasks for user:', demoEmail);

    console.log('Seeding completed.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
