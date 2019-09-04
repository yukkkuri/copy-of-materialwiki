class BaseController {
    async handleRequest(res, ctx) {
        if (res.code === 0) {
            ctx.send(res);
        } else {
            ctx.status(400).json("Error: " + res.msg);
        }
    };

    async handleException( msg, ctx ){
        ctx.status(400).json("Error: " + msg);
    }
}

module.exports = BaseController;