export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cfb46e1e.js","app":"_app/immutable/entry/app.c963b31a.js","imports":["_app/immutable/entry/start.cfb46e1e.js","_app/immutable/chunks/index.81fc05cb.js","_app/immutable/chunks/singletons.cf996a46.js","_app/immutable/entry/app.c963b31a.js","_app/immutable/chunks/index.81fc05cb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/newAccount",
				pattern: /^\/newAccount\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
