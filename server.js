const express=require('express');
const connectDB=require('./config/db');
const path=require('path');

const app=express();

//Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));



//Define Routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));

//Server static assets in production




const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`server started on port ${PORT}`));