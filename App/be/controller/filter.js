let data = require("./employees.json")

const filter = async(req, res, next)=> {
    const SUCCESS = {
        "message" : "Data Retrived"
    }
    const ERROR = {
        "error":"Retry again after sometime"
    }
    const INFO = {
        "message": "No Data found"
    }

    let filter = req.body
    try{
        let _filterdata = []
        if(filter.hasOwnProperty("operator")){
            if(filter.operator === 'gt'){
            data.map(item => {
                if(item.salary > filter.salary){
                    _filterdata.push(item)
                }
            })
            }else{
                data.map(item => {
                    if(item.salary < filter.salary){
                        _filterdata.push(item)
                    }
                })
            }
        }
        else{
        data.map(item => {
            if(JSON.stringify(item).includes(JSON.stringify(filter).replace("{","").replace("}","")))
                _filterdata.push(item)
        })
        }
        if(_filterdata.length !== 0){
            SUCCESS["count"] = _filterdata.length
            SUCCESS["data"] = _filterdata
            res.json(SUCCESS)
        }else{
            res.json(INFO)
        }
    }catch(error){
        console.log(error)
        res.json(ERROR)
    }


}

module.exports = filter