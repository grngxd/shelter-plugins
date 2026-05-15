(function(exports) {

"use strict";

//#region plugins/timestamper/index.tsx
let unsub;
async function onLoad() {
	await shelter.http.ready;
	unsub = shelter.http.intercept("post", /\/channels\/\d+\/messages/, (req, send) => {
		if (!req.body || typeof req.body.content !== "string") return send(req);
		let message = req.body.content;
		const code = [];
		message = message.replace(/(```[\s\S]*?```|`[^`]*`)/g, (match) => {
			code.push(match);
			return `__CODE_BLOCK_${code.length - 1}__`;
		});
		const checkBackslash = (pattern, replacement) => {
			if (typeof message !== "string") return message;
			const escapedRegex = new RegExp("\\\\(?=" + pattern.source + ")", pattern.flags);
			if (escapedRegex.test(message)) return message.replace(escapedRegex, "");
			return message.replace(pattern, replacement);
		};
		message = checkBackslash(/([a-zA-Z]+), (\d{1,2}) ([a-zA-Z]+) (\d{4}) (\d{1,2}):(\d{1,2})/g, (match, _, day, month, year, hour, minute) => {
			const unix = Math.floor(new Date(`${month} ${day}, ${year} ${hour}:${minute}`).getTime() / 1e3).toString();
			return `<t:${unix}:F>`;
		});
		message = checkBackslash(/(\d{1,2}) ([a-zA-Z]+) (\d{4}) (\d{1,2}):(\d{1,2})/g, (match, day, month, year, hour, minute) => {
			const unix = Math.floor(new Date(`${month} ${day}, ${year} ${hour}:${minute}`).getTime() / 1e3).toString();
			return `<t:${unix}:f>`;
		});
		message = checkBackslash(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, (match, day, month, year) => {
			const unix = Math.floor(new Date(`${month}/${day}/${year}`).getTime() / 1e3).toString();
			return `<t:${unix}:d>`;
		});
		message = checkBackslash(/(\d{1,2}) ([a-zA-Z]+) (\d{4})/g, (match, day, month, year) => {
			const unix = Math.floor(new Date(`${month} ${day}, ${year}`).getTime() / 1e3).toString();
			return `<t:${unix}:D>`;
		});
		message = checkBackslash(/(\d{1,2}):(\d{1,2}):(\d{1,2})/g, (match, hour, minute, second) => {
			const unix = Math.floor(new Date().setHours(parseInt(hour), parseInt(minute), parseInt(second), 0) / 1e3).toString();
			return `<t:${unix}:T>`;
		});
		message = checkBackslash(/(\d{1,2}):(\d{1,2})/g, (match, hour, minute) => {
			const unix = Math.floor(new Date().setHours(parseInt(hour), parseInt(minute), 0, 0) / 1e3).toString();
			return `<t:${unix}:t>`;
		});
		message = checkBackslash(/(\d+) (second|minute|hour|day|week|month|year)s? ago/g, (match, time, unit) => {
			const unix = Math.floor(Date.now() / 1e3) - time * {
				second: 1,
				minute: 60,
				hour: 3600,
				day: 86400,
				week: 604800,
				month: 2628e3,
				year: 31536e3
			}[unit];
			return `<t:${unix}:R>`;
		});
		message = checkBackslash(/an? (second|minute|hour|day|week|month|year) ago/g, (match, unit) => {
			const unix = Math.floor(Date.now() / 1e3) - {
				second: 1,
				minute: 60,
				hour: 3600,
				day: 86400,
				week: 604800,
				month: 2628e3,
				year: 31536e3
			}[unit];
			return `<t:${unix}:R>`;
		});
		message = checkBackslash(/yesterday/g, `<t:${Math.floor(Date.now() / 1e3) - 86400}:R>`);
		message = checkBackslash(/in (\d+) (second|minute|hour|day|week|month|year)s?/g, (match, time, unit) => {
			const unix = Math.floor(Date.now() / 1e3) + time * {
				second: 1,
				minute: 60,
				hour: 3600,
				day: 86400,
				week: 604800,
				month: 2628e3,
				year: 31536e3
			}[unit];
			return `<t:${unix}:R>`;
		});
		message = checkBackslash(/tomorrow/g, `<t:${Math.floor(Date.now() / 1e3) + 86400}:R>`);
		message = message.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => code[parseInt(index)]);
		req.body.content = message;
		return send(req);
	});
}
function onUnload() {
	unsub();
}

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});