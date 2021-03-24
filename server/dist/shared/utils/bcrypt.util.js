"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptUtil = void 0;
const bcrypt = require('bcryptjs');
class BcryptUtil {
    static hash(text) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                if (err)
                    return reject(err);
                bcrypt.hash(text, salt, (err, hash) => {
                    if (err)
                        return reject(err);
                    resolve(hash);
                });
            });
        });
    }
    static compare(text, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(text, hash, (err, res) => {
                if (err)
                    return reject(err);
                resolve(res);
            });
        });
    }
}
exports.BcryptUtil = BcryptUtil;
//# sourceMappingURL=bcrypt.util.js.map