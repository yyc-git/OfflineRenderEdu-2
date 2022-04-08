"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const refactormeta3d_work_plugin_protocol_1 = require("refactormeta3d-work-plugin-protocol");
function getState(states) {
    return states[refactormeta3d_work_plugin_protocol_1.workPluginName];
}
exports.getState = getState;
function setState(states, state) {
    return Object.assign({}, states, {
        [refactormeta3d_work_plugin_protocol_1.workPluginName]: state
    });
}
exports.setState = setState;
//# sourceMappingURL=Utils.js.map