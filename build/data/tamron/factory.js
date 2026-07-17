var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export const tamronVariants = (model, base, variants) => variants.map((_a) => {
    var _b;
    var { mount } = _a, overrides = __rest(_a, ["mount"]);
    return (Object.assign(Object.assign(Object.assign({}, base), overrides), { mount, id: (_b = overrides.EANCode) !== null && _b !== void 0 ? _b : `tamron-${model.toLowerCase()}-${mount.toLowerCase()}` }));
});
