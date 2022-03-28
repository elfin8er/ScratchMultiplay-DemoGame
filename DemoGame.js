const Game = require('./ScratchMultiplay/Game.js');
const RequestHandler = require('./ScratchMultiplay/RequestHandlers/RequestHandler.js');

module.exports = class DemoGame extends Game {
    constructor(username, password, projectId) {
        super(username, password, projectId);
        this.registerRequestHandler(12, RH_getBalance);
        this.registerServerInfoHandler(ServerInfoHandler);
    }
}

class RH_getBalance extends RequestHandler {
    constructor(game, request) {
        super(game, request)
    }

    process() {
        console.log("Processing custom request!!!");
    }
}

class ServerInfoHandler extends Game.ServerInfoHandler {
    constructor(infos) { super(infos); }
    process() {
        
        this.infos.forEach((info, i) => {
            this.infos[i] = Game.formatTimestamp(Game.serverTime());
        });
        return super.process();
    }
}