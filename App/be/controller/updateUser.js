let data = require("./employees.json")
const fs = require("fs")

const updateUser = async(req, res, next) => {
    const SUCCESS = {
        "message": "Data Updated"
    }

    const INFO = {
        "message" : "No Data is Updated"
    }

    const ERROR = {
        "error" : "Unable to update data, try again later"
    }

    try{
        let _data =  req.body
        let filteredArray = data.filter(e => !JSON.stringify(e).includes(JSON.stringify(_data.where).replace("{", "").replace("}","")))
        filteredArray.push(_data.update)
        fs.writeFileSync(__dirname + "/employees.json", JSON.stringify(filteredArray))
        res.json(SUCCESS)
    }catch(error){
        console.log(error)
        res.json(ERROR)
    }
}

module.exports = updateUser