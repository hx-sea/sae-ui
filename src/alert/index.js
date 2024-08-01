"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prefixCls = "happy-alert";
const kinds = {
    info: "#5352ED",
    positive: "#2ED573",
    negative: "#FF4757",
    warning: "#FFA502",
};
const Alert = ({ children, kind = "info", ...rest }) => (react_1.default.createElement("div", { className: prefixCls, style: {
        background: kinds[kind],
    }, ...rest }, children));
exports.default = Alert;
