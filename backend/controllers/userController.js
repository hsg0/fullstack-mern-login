// controllers/userController.js
import UserProfile from '../models/profile.js'; // Assuming you have a profile model
import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
  const userId = req.params.userId;
  console.log("Fetching profile for userId:", userId);  

  try {
    const profile = await UserProfile.findOne({ userId }).populate('userId', 'fullName email');
    if (!profile) return res.status(404).json({ error: 'Profile not found' });

    res.json(profile);
  } catch (error) {
    console.error('❌ Profile fetch error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// search users by email or fullName
export const searchUsers = async (req, res) => {
    const query = req.query.query;
    if (!query) return res.status(400).json({ error: 'Missing search query' });
  
    try {
      const users = await UserProfile.find({
        $or: [
          { fullName: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } }
        ]
      }, { password: 0 }); // exclude passwords
  
      res.json(users);
    } catch (err) {
      console.error('❌ Search error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };