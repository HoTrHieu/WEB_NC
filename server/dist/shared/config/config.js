"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootConfiguration = void 0;
const fs = require("fs");
const COMMON_CONFIG = './config.common.json';
const ENV_CONFIG = `./config.${process.env.NODE_ENV || 'dev'}.json`;
function readConfig(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
function rootConfiguration() {
    const config = Object.assign(Object.assign({}, readConfig(COMMON_CONFIG)), readConfig(ENV_CONFIG));
    return config;
}
exports.rootConfiguration = rootConfiguration;
//# sourceMappingURL=config.js.map