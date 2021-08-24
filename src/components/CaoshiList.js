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
import { observer } from "mobx-react-lite";
import { Layout, Menu, Button } from "antd";
import CaoshiStore from "../store/Store";
function CaoshiList(_a) {
    var _b = _a.store, store = _b === void 0 ? new CaoshiStore() : _b;
    var Content = Layout.Content, Sider = Layout.Sider;
    var deleteCaoshi = function (id) {
        store.deleteCaoshi(id);
    };
    return (_jsxs(Layout, { children: [_jsx(Sider, __assign({ breakpoint: "lg", collapsedWidth: "0", onBreakpoint: function (broken) {
                    console.log(broken);
                }, onCollapse: function (collapsed, type) {
                    console.log(collapsed, type);
                } }, { children: _jsxs(Menu, __assign({ theme: "dark", mode: "inline", defaultSelectedKeys: ["4"] }, { children: [_jsx(Menu.Item, { children: "nav 1" }, "1"), _jsx(Menu.Item, { children: "nav 2" }, "2"), _jsx(Menu.Item, { children: "nav 3" }, "3"), _jsx(Menu.Item, { children: "nav 4" }, "4")] }), void 0) }), void 0), _jsxs(Content, __assign({ style: { margin: "2rem" } }, { children: [_jsxs("h2", { children: ["\u4F59", store.totalCaoshis, "\u7BC7"] }, void 0), store.caoshis.map(function (caoshi) {
                        return (_jsxs("div", { children: [_jsx("h2", { children: caoshi.title }, void 0), _jsx("p", { children: caoshi.paragraphs }, void 0), _jsx(Button, __assign({ type: "link", onClick: function () { return deleteCaoshi(caoshi.id); } }, { children: "\u5DF2\u8BFB" }), void 0)] }, caoshi.id));
                    })] }), void 0)] }, void 0));
}
export default observer(CaoshiList);
