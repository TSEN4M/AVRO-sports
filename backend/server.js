const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());

// Route to create a new user
app.post('/users', 
    [
        body('name').isString().notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('phoneNumber').isMobilePhone().withMessage('Valid phone number is required')
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, phoneNumber } = req.body;
console.log(req.body)
        try {
            // Check if the email already exists
            // const existingUser = await prisma.user.findUnique({ where: { email } });
            // if (existingUser) {
            //     return res.status(400).json({ error: 'Email already in use' });
            // }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    phoneNumber,
                },
            });
            res.status(201).json(user);
        } catch (error) {
            console.error('Error creating user:', error); // Log the error to the console
            res.status(500).json({ error: 'An error occurred while creating the user', details: error.message });
        }
    }
);
// Location creation endpoint
app.post('/locations', 
  [
      body('name').isString().notEmpty().withMessage('Name is required'),
      body('address').isString().notEmpty().withMessage('Address is required'),
      body('city').isString().notEmpty().withMessage('City is required'),
      body('state').isString().notEmpty().withMessage('State is required'),
      body('zipcode').isString().notEmpty().withMessage('Zipcode is required')
  ], 
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      const { name, address, city, state, zipcode } = req.body;

      try {
          const location = await prisma.location.create({
              data: {
                  name,
                  address,
                  city,
                  state,
                  zipcode
              }
          });
          res.status(201).json(location);
      } catch (error) {
          console.error('Error creating location:', error);
          res.status(500).json({ error: 'An error occurred while creating the location', details: error.message });
      }
  }
);

// Sport creation endpoint
app.post('/sports', 
  [
      body('name').isString().notEmpty().withMessage('Name is required'),
      body('description').optional().isString().withMessage('Description must be a string')
  ], 
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      const { name, description } = req.body;

      try {
          const sport = await prisma.sport.create({
              data: {
                  name,
                  description
              }
          });
          res.status(201).json(sport);
      } catch (error) {
          console.error('Error creating sport:', error);
          res.status(500).json({ error: 'An error occurred while creating the sport', details: error.message });
      }
  }
);

// Booking creation endpoint
app.post('/bookings', 
  [
      body('user_id').isString().notEmpty().withMessage('User ID is required'),
      body('session_id').isString().notEmpty().withMessage('Session ID is required'),
      body('status').isString().isIn(['confirmed', 'pending', 'cancelled']).withMessage('Status must be one of confirmed, pending, or cancelled')
  ], 
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      const { user_id, session_id, status } = req.body;

      try {
          const booking = await prisma.booking.create({
              data: {
                  user_id,
                  session_id,
                  status
              }
          });
          res.status(201).json(booking);
      } catch (error) {
          console.error('Error creating booking:', error);
          res.status(500).json({ error: 'An error occurred while creating the booking', details: error.message });
      }
  }
);

// Session creation endpoint
app.post('/sessions', 
  [
      body('sportscenter_id').isString().notEmpty().withMessage('Sports Center ID is required'),
      body('sport_id').isString().notEmpty().withMessage('Sport ID is required'),
      body('start_time').isISO8601().withMessage('Valid start time is required'),
      body('end_time').isISO8601().withMessage('Valid end time is required'),
      body('max_participants').isInt({ min: 1 }).withMessage('Max participants must be a positive integer')
  ], 
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }

      const { sportscenter_id, sport_id, start_time, end_time, max_participants } = req.body;

      try {
          const session = await prisma.session.create({
              data: {
                  sportscenter_id,
                  sport_id,
                  start_time: new Date(start_time),
                  end_time: new Date(end_time),
                  max_participants
              }
          });
          res.status(201).json(session);
      } catch (error) {
          console.error('Error creating session:', error);
          res.status(500).json({ error: 'An error occurred while creating the session', details: error.message });
      }
  }
);








// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});
