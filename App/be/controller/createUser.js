let fs = require('fs')
let data = require("./employees.json")

const createUser = async(req, res, next) => {
    const SUCCESS = {
    "success" : "Data is added to the employee.json File",
    "data" : req.body,
    }

    const ERROR = {
        "error" : "Unable to add file to the employees.json",
    }

    const ISTHERE = {
        "message": "Data Already Exists."
    } 

    try{
        let userdata = req.body
        let isthere = false
        data.map(item => {
            if(JSON.stringify(item) === JSON.stringify(userdata)){
                isthere = true
            }
        })
        if(isthere === false){
            data.push(userdata)
            fs.writeFileSync(__dirname+"/employees.json", JSON.stringify(data))
            res.json(SUCCESS)
        }else{
            res.json(ISTHERE)
        }
    }catch(error){
        console.log(error)
        res.json(ERROR)
    }
}

module.exports = createUser