const path = require('path')

const express = require('express')
const app = express()
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const loginRoutes = require('./routes/login')

const MongoStore = require('connect-mongo')

const PORT = process.env.PORT || 5173

const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env'})

// Passport config -uncomment when ready
//require('./config/passport')(passport)

connectDB()


// Body parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Handlebars
//! Add the word .engine after exphbs
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  extname: '.hbs'
  })
)

app.set('view engine', '.hbs')

// Sessions middleware -uncomment when ready
/* app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI
    })
})) */

// Passport middleware -uncomment when ready
//app.use(passport.initialize())
//app.use(passport.session())

// Static Folder
app.use(express.static(path.join(__dirname, 
  'public')))

// Routes
app.use('/', loginRoutes)

  app.listen(
    PORT, 
    console.log(`Server running on port ${PORT}`)
  )