"use strict";
exports.__esModule = true;
var react_1 = require("react");
// See: https://usehooks-ts.com/react-hook/use-event-listener
var useEventListener_1 = require("../useEventListener");
function useReadLocalStorage(key) {
    // Get from local storage then
    // parse stored json or return initialValue
    var readValue = (0, react_1.useCallback)(function () {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === 'undefined') {
            return null;
        }
        try {
            var item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        }
        catch (error) {
            console.warn("Error reading localStorage key \u201C".concat(key, "\u201D:"), error);
            return null;
        }
    }, [key]);
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = (0, react_1.useState)(readValue), storedValue = _a[0], setStoredValue = _a[1];
    // Listen if localStorage changes
    (0, react_1.useEffect)(function () {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleStorageChange = (0, react_1.useCallback)(function (event) {
        if ((event === null || event === void 0 ? void 0 : event.key) && event.key !== key) {
            return;
        }
        setStoredValue(readValue());
    }, [key, readValue]);
    // this only works for other documents, not the current one
    (0, useEventListener_1.useEventListener)('storage', handleStorageChange);
    // this is a custom event, triggered in writeValueToLocalStorage
    // See: useLocalStorage()
    (0, useEventListener_1.useEventListener)('local-storage', handleStorageChange);
    return storedValue;
}
exports["default"] = useReadLocalStorage;
