export namespace accounts {
	
	export class Account {
	    callsign: string;
	    faction: string;
	    token: string;
	
	    static createFrom(source: any = {}) {
	        return new Account(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.callsign = source["callsign"];
	        this.faction = source["faction"];
	        this.token = source["token"];
	    }
	}

}

export namespace factions {
	
	export class Faction {
	    symbol: string;
	    name: string;
	    description: string;
	    headquarters: string;
	    isRecruiting: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Faction(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.symbol = source["symbol"];
	        this.name = source["name"];
	        this.description = source["description"];
	        this.headquarters = source["headquarters"];
	        this.isRecruiting = source["isRecruiting"];
	    }
	}

}

