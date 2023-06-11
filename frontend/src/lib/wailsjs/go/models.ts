export namespace main {
	
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

