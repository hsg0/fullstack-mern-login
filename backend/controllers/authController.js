import bcrypt from 'bcrypt';
import User from '../models/User.js';
import UserProfile from '../models/profile.js'; // Assuming you have a profile model
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, email, password: hashedPassword });
    const savedUser = await newUser.save();

    console.log('✅ User created:', savedUser);

    // Create profile using user's _id
    const newProfile = new UserProfile({
      userId: savedUser._id,
      email: savedUser.email,
      bio: '',  // optional default fields
      age: null,
      healthGoals: ''
    });

    const newDocProfile = await newProfile.save();
    console.log(newDocProfile, savedUser.email);


    res.status(201).json({ message: 'User and profile created successfully',
      user: {
        fullName: savedUser.fullName,
        email: savedUser.email,
        profileId: newDocProfile._id
      }
     });

  } catch (error) {
    console.error('❌ Signup error:', error);

    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    res.status(500).json({ error: 'Server error' });
  }
}

//--------------------------------------------------------------    
// Login function


export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Missing email or password' });

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: 'Invalid credentials' });

    // ✅ Create JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // ✅ Send token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true in production
      sameSite: 'None',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // ✅ Respond with user data (not password)
    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

//--------------------------------------------------------------


