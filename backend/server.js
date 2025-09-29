// server.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const mongoose = require('mongoose'); // 
const cloudinary = require('cloudinary').v2; // 
const contactRoutes = require('./routes/contactRoutes'); // 
const paymentRoutes = require('./routes/paymentRoutes');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err.message));

// Routes

app.use('/api', contactRoutes);
app.use("/api/payment", paymentRoutes);

// Basic route

const frontendDist = path.join(__dirname, '../frontend/dist'); // <-- point to built frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(frontendDist));
}


app.get('*', (req, res) => {
-    res.sendFile(path.join(frontendDist, 'index.html'));
+    // Serve frontend index.html for any non-API route
+    res.sendFile(path.join(frontendDist, 'index.html'));
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Something went wrong!' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
