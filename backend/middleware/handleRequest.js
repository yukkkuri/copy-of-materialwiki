function handleRequest( res, ctx ){
    if(res.code === 0){
        ctx.send(res)
    } else {
        ctx.status(400).json("Error: " + res.msg);
    }
}

module.exports = handleRequest;