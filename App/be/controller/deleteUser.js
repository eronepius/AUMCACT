let data = require("./employees.json")
const fs = require("fs")

const deleteUser = async(req, res, next) => {
    const SUCCESS = {
        "message":"Delete User Successfully"
    }

    const ERROR = {
        "error": "Unable to Delete User"
    }

    const INFO = {
        "meesage": "User not found"
    }

    try{
        newData = []
        let todelete = req.body
        data.map(item => {
            if(JSON.stringify(item) !== JSON.stringify(todelete))
                newData.push(item)
        })
        fs.writeFileSync(__dirname+ "/employees.json", JSON.stringify(newData))
        res.json(SUCCESS)
    }catch(error){
        console.log(error)
        res.json(ERROR)
    }
}

module.exports = deleteUser