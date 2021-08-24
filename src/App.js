var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
import "antd/dist/antd.css";
import CaoshiStore from "./store/Store";
import CaoshiList from "./components/CaoshiList";
var caoshiStore = new CaoshiStore();
export default function App() {
    return (_jsxs("div", __assign({ className: "App" }, { children: [_jsx("h1", { children: "\u66F9\u64CD\u8BD7\u96C6 " }, void 0), _jsx(CaoshiList, { store: caoshiStore }, void 0)] }), void 0));
}
