"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtil = void 0;
class StringUtil {
    static countWords(text) {
        return this.splitWords(text).length;
    }
    static splitWords(text) {
        return text
            .trim()
            .replace(/s+/g, ' ')
            .split(this.SEPARATOR)
            .filter((w) => !!w);
    }
    static makePhrases(words, len) {
        let tmp = [];
        let phrases = [];
        for (const word of words) {
            tmp.push(word);
            if (tmp.length === len) {
                phrases.push(tmp.join(' '));
                tmp.length = 0;
            }
        }
        if (tmp.length > 0) {
            if (phrases.length > 0) {
                phrases[phrases.length - 1] += ' ' + tmp.join(' ');
            }
            else {
                phrases.push(tmp.join(' '));
            }
        }
        return phrases;
    }
    static clean(text) {
        if (!text || typeof text !== 'string') {
            return '';
        }
        return text.trim().replace(/\s+/g, ' ');
    }
}
exports.StringUtil = StringUtil;
StringUtil.SEPARATOR = /[!@#$%^&*()+={}:;"',.<>/\?~`|]+|\[+|\]+|\s+/;
//# sourceMappingURL=string.util.js.map