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

export namespace contracts {
	
	export class deliver {
	    tradeSymbol: string;
	    destinationSymbol: string;
	    unitsRequired: number;
	    unitsFulfilled: number;
	
	    static createFrom(source: any = {}) {
	        return new deliver(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.tradeSymbol = source["tradeSymbol"];
	        this.destinationSymbol = source["destinationSymbol"];
	        this.unitsRequired = source["unitsRequired"];
	        this.unitsFulfilled = source["unitsFulfilled"];
	    }
	}
	export class payment {
	    onAccepted: number;
	    onFulfilled: number;
	
	    static createFrom(source: any = {}) {
	        return new payment(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.onAccepted = source["onAccepted"];
	        this.onFulfilled = source["onFulfilled"];
	    }
	}
	export class terms {
	    deadline: string;
	    payment: payment;
	    deliver: deliver[];
	
	    static createFrom(source: any = {}) {
	        return new terms(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.deadline = source["deadline"];
	        this.payment = this.convertValues(source["payment"], payment);
	        this.deliver = this.convertValues(source["deliver"], deliver);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Contract {
	    id: string;
	    factionSymbol: string;
	    type: string;
	    terms: terms;
	    accepted: boolean;
	    fulfilled: boolean;
	    expiration: string;
	    deadlineToAccept: string;
	
	    static createFrom(source: any = {}) {
	        return new Contract(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.factionSymbol = source["factionSymbol"];
	        this.type = source["type"];
	        this.terms = this.convertValues(source["terms"], terms);
	        this.accepted = source["accepted"];
	        this.fulfilled = source["fulfilled"];
	        this.expiration = source["expiration"];
	        this.deadlineToAccept = source["deadlineToAccept"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
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

