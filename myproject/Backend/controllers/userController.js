const pool = require("../config/db");

const registerUser =async (req, res) => {
    //console.log(req.body)
   try {
     const {username, email, password, full_name, phone}= req.body;
        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

     const result = await pool.query(
        `Insert into users (full_name, username, email, phone, password, )
         values ($1, $2, $3, $4, $5)
         returning *`,
         [username, email, password]
     );

     res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user: result.rows[0]
     });
   } 
   catch(error){
       console.error(error);
       res.status(500).json({
           success: false,
           message: "Server Error"
       });
    }

};

module.exports={
    registerUser
};