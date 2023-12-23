const cors = require("cors");
const express = require('express')
const mongoos = require('mongoose')
const Product = require('./models/productModel')
const Login = require('./models/LoginModel')
const Register = require('./models/RegisterModel')
const Check = require('./models/CheckModel.js')
const app = express()
app.use(express.json())
app.use(cors());
//routes
//const Login = mongoose.model('Login', loginchema);
app.get('/',(req,res)=>{
    res.send('Hello NODE api')
})
app.get('/test',(req,res)=>{
    res.send('Hello Testing')
})
app.get('/product',async(req,res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
app.post('/product',async(req,res)=>
{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }

})

app.get('/login', async (req, res) => {
    try {
      const login = await Login.find({});
      res.status(200).json(login);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Express route for handling login collection post
app.post('/login', async (req, res) => {
  try {
    const login = await Login.create(req.body);
    res.status(201).json(login);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

  
  
  
app.get('/register', async (req, res) => {
  try {
    const register = await Register.find({});
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const register = await Register.create(req.body);
    res.status(201).json(register);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
})
 , 
  
/*app.get('/check', async (req, res) => {
  try {
    const check = await Check.find({});
    res.status(200).json(check);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

/*app.post('/check', async (req, res) => {
  try {
    const { UserName, Email, Password } = req.body;
    // Assume you have a function to check if the user exists in the registration collection
    const userExists = await checkUserInRegistration(UserName, Email, Password);

    if (userExists) {
      res.status(200).json({ message: 'User exists' });
    } else {
      res.status(404).json({ message: 'User does not exist' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
);*/
app.post('/check', async (req, res) => {
  try {
      const { UserName, Email, Password } = req.body;
      // Assume you have a function to check if the user exists in the registration collection
      const userExists = await checkUserInRegistration(UserName, Email, Password);

      if (userExists) {
          res.status(200).json({ message: 'User exists' });
      } else {
          res.status(404).json({ message: 'User does not exist' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});




  
mongoos.connect('mongodb+srv://abhisheksumod10:appunandumax10@cluster0.2zuvjss.mongodb.net/menu?retryWrites=true&w=majority')
.then(() =>{ 
    app.listen(3000, ()=> {
        console.log('Noode ApI app is running on port 3000')
    })
    console.log('connected to the db')
}).catch((error)=>{
    console.log(error)
})
