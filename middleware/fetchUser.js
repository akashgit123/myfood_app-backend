const fetchUser = async(req,res,next) =>{
    try{
        console.log("paassed middleware");
        next();
    }
    catch(e){
        console.log("middle ware error");
    }
}

module.exports = {fetchUser};