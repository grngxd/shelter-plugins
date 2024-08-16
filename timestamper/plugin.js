(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/timestamper/index.tsx
  var timestamper_exports = {};
  __export(timestamper_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });
  var {
    util: {
      log
    },
    flux: {
      dispatcher,
      intercept,
      storesFlat: {
        UserStore
      }
    }
  } = shelter;
  var unsub;
  function onLoad() {
    log("Hello, World from shelter!");
    unsub = intercept((dispatch) => {
      if (dispatch.type !== "MESSAGE_CREATE")
        return;
      if (dispatch.message.author.id !== UserStore.getCurrentUser().id)
        return;
      let message = dispatch.message.content;
      const codeBlocks = [];
      message = message.replace(/(```[\s\S]*?```|`[^`]*`)/g, (match) => {
        codeBlocks.push(match);
        return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
      });
      const checkBackslash = (pattern, replacement) => {
        const regex = new RegExp(`\\\\${pattern.source}`, pattern.flags);
        if (regex.test(message)) {
          return message.slice(1);
        }
        return message.replace(pattern, replacement);
      };
      message = checkBackslash(/([a-zA-Z]+), (\d{1,2}) ([a-zA-Z]+) (\d{4}) (\d{1,2}):(\d{1,2})/g, (match, _, day, month, year, hour, minute) => {
        const unix = Math.floor((/* @__PURE__ */ new Date(`${month} ${day}, ${year} ${hour}:${minute}`)).getTime() / 1e3).toString();
        return `<t:${unix}:F>`;
      });
      message = checkBackslash(/(\d{1,2}) ([a-zA-Z]+) (\d{4}) (\d{1,2}):(\d{1,2})/g, (match, day, month, year, hour, minute) => {
        const unix = Math.floor((/* @__PURE__ */ new Date(`${month} ${day}, ${year} ${hour}:${minute}`)).getTime() / 1e3).toString();
        return `<t:${unix}:f>`;
      });
      message = checkBackslash(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, (match, day, month, year) => {
        const unix = Math.floor((/* @__PURE__ */ new Date(`${month}/${day}/${year}`)).getTime() / 1e3).toString();
        return `<t:${unix}:d>`;
      });
      message = checkBackslash(/(\d{1,2}) ([a-zA-Z]+) (\d{4})/g, (match, day, month, year) => {
        const unix = Math.floor((/* @__PURE__ */ new Date(`${month} ${day}, ${year}`)).getTime() / 1e3).toString();
        return `<t:${unix}:D>`;
      });
      message = checkBackslash(/(\d{1,2}):(\d{1,2}):(\d{1,2})/g, (match, hour, minute, second) => {
        const unix = Math.floor((/* @__PURE__ */ new Date()).setHours(parseInt(hour), parseInt(minute), parseInt(second), 0) / 1e3).toString();
        return `<t:${unix}:T>`;
      });
      message = checkBackslash(/(\d{1,2}):(\d{1,2})/g, (match, hour, minute) => {
        const unix = Math.floor((/* @__PURE__ */ new Date()).setHours(parseInt(hour), parseInt(minute), 0, 0) / 1e3).toString();
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
      message = message.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => codeBlocks[parseInt(index)]);
      dispatch.message.content = message;
    });
  }
  function onUnload() {
    log("Goodbye, World from shelter!");
    unsub();
  }
  return __toCommonJS(timestamper_exports);
})();
