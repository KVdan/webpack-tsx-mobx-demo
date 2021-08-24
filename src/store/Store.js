import { makeObservable, computed, action, runInAction, observable, } from "mobx";
import axios from "axios";
var CaoshisStore = /** @class */ (function () {
    function CaoshisStore() {
        var _this = this;
        this.caoshis = [];
        this.prefetchData = function () {
            axios
                .get("https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/caocaoshiji/caocao.json")
                .then(function (res) {
                console.log(res.data);
                res.data.forEach(function (item, index) {
                    _this.createCaoshi({
                        id: index,
                        title: item.title,
                        paragraphs: item.paragraphs,
                    });
                });
            });
        };
        makeObservable(this, {
            caoshis: observable,
            totalCaoshis: computed,
            createCaoshi: action,
            deleteCaoshi: action,
            // getcaoshisByTitle: action
        });
        runInAction(this.prefetchData);
    }
    CaoshisStore.prototype.createCaoshi = function (caoshi) {
        if (caoshi === void 0) { caoshi = { id: 0, title: "", paragraphs: [] }; }
        this.caoshis.push(caoshi);
    };
    CaoshisStore.prototype.deleteCaoshi = function (id) {
        this.caoshis = this.caoshis.filter(function (caoshi) { return caoshi.id !== id; });
    };
    Object.defineProperty(CaoshisStore.prototype, "totalCaoshis", {
        // total number of caoshis
        get: function () {
            return this.caoshis.length;
        },
        enumerable: false,
        configurable: true
    });
    return CaoshisStore;
}());
export default CaoshisStore;
