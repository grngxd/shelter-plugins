const {
    util: { log },
    flux: {
        dispatcher,
        intercept,
        storesFlat: {
            UserStore,
        }
    }
} = shelter;
let unsub;
export function onLoad() {
    // you can safely run onLoad actions at the top level!
    log("Hello, World from shelter!")
    unsub = intercept((dispatch) => {
        if (dispatch.type !== "MESSAGE_CREATE") return;
        if (dispatch.message.author.id !== UserStore.getCurrentUser().id) return;
        let message: string = dispatch.message.content as string;

        // extract code blocks
        const codeBlocks = [];
        message = message.replace(/(```[\s\S]*?```|`[^`]*`)/g, (match) => {
            codeBlocks.push(match);
            return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
        });

        // escape backslashes
        const checkBackslash = (pattern, replacement) => {
            const regex = new RegExp(`\\\\${pattern.source}`, pattern.flags);
            if (regex.test(message)) {
                return message.slice(1);
            }
            return message.replace(pattern, replacement);
        };

        // ordered from most destructive to least destructive
        // (that basically means that for example XX:XX:XX will get parsed before XX:XX,
        // because it's more specific and could accidentally be caught by XX:XX)

        // day, xx month xxxx xx:xx
        message = checkBackslash(/([a-zA-Z]+), (\d{1,2}) ([a-zA-Z]+) (\d{4}) (\d{1,2}):(\d{1,2})/g, (match, _, day, month, year, hour, minute) => {
            const unix = Math.floor(new Date(`${month} ${day}, ${year} ${hour}:${minute}`).getTime() / 1000).toString();
            return `<t:${unix}:F>`;
        });

        // Parse xx month xxxx xx:xx
        message = checkBackslash(/(\d{1,2}) ([a-zA-Z]+) (\d{4}) (\d{1,2}):(\d{1,2})/g, (match, day, month, year, hour, minute) => {
            const unix = Math.floor(new Date(`${month} ${day}, ${year} ${hour}:${minute}`).getTime() / 1000).toString();
            return `<t:${unix}:f>`;
        });
    
        // xx/xx/xxxx
        message = checkBackslash(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, (match, day, month, year) => {
            const unix = Math.floor(new Date(`${month}/${day}/${year}`).getTime() / 1000).toString();
            return `<t:${unix}:d>`;
        });

        // xx month xxxx
        message = checkBackslash(/(\d{1,2}) ([a-zA-Z]+) (\d{4})/g, (match, day, month, year) => {
            const unix = Math.floor(new Date(`${month} ${day}, ${year}`).getTime() / 1000).toString();
            return `<t:${unix}:D>`;
        });

        // xx:xx:xx
        message = checkBackslash(/(\d{1,2}):(\d{1,2}):(\d{1,2})/g, (match, hour, minute, second) => {
            const unix = Math.floor(new Date().setHours(parseInt(hour), parseInt(minute), parseInt(second), 0) / 1000).toString();
            return `<t:${unix}:T>`;
        });

        // xx:xx
        message = checkBackslash(/(\d{1,2}):(\d{1,2})/g, (match, hour, minute) => {
            const unix = Math.floor(new Date().setHours(parseInt(hour), parseInt(minute), 0, 0) / 1000).toString();
            return `<t:${unix}:t>`;
        });

        // xx time ago
        message = checkBackslash(/(\d+) (second|minute|hour|day|week|month|year)s? ago/g, (match, time, unit) => {
            const unix = Math.floor(Date.now() / 1000) - (time * {
                second: 1,
                minute: 60,
                hour: 3600,
                day: 86400,
                week: 604800,
                month: 2628000,
                year: 31536000
            }[unit]);
            return `<t:${unix}:R>`;
        });

        // a[n] time ago
        message = checkBackslash(/an? (second|minute|hour|day|week|month|year) ago/g, (match, unit) => {
            const unix = Math.floor(Date.now() / 1000) - {
                second: 1,
                minute: 60,
                hour: 3600,
                day: 86400,
                week: 604800,
                month: 2628000,
                year: 31536000
            }[unit];
            return `<t:${unix}:R>`;
        });

        // yesterday
        message = checkBackslash(/yesterday/g, `<t:${Math.floor(Date.now() / 1000) - 86400}:R>`);

        // in xx time
        message = checkBackslash(/in (\d+) (second|minute|hour|day|week|month|year)s?/g, (match, time, unit) => {
            const unix = Math.floor(Date.now() / 1000) + (time * {
                second: 1,
                minute: 60,
                hour: 3600,
                day: 86400,
                week: 604800,
                month: 2628000,
                year: 31536000
            }[unit]);
            return `<t:${unix}:R>`;
        });

        // "tomorrow"
        message = checkBackslash(/tomorrow/g, `<t:${Math.floor(Date.now() / 1000) + 86400}:R>`);

        // Reinsert code blocks
        message = message.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => codeBlocks[parseInt(index)]);

        dispatch.message.content = message;
    });
}

export function onUnload() {
    log("Goodbye, World from shelter!")
    unsub();
}