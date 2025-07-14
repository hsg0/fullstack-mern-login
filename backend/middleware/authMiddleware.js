// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ error: 'No token. Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store user data for later use
    next();
  } catch (err) {
    console.error('Invalid token:', err);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default verifyToken;