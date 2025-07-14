import mongoose from 'mongoose'



const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String, default: '' },
    age: { type: Number },
    healthNumber: { type: Number },
    createdAt: { type: Date, default: () => new Date() },
    updatedAt: { type: Date, default: () => new Date() }
});

profileSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const UserProfile = mongoose.model('UserProfile', profileSchema);
export default UserProfile;