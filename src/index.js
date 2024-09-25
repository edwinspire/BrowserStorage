"use strict";

export default class StorageManager {
    constructor(storageType = 'localStorage') {
        if (storageType === 'localStorage') {
            this.storage = window.localStorage;
        } else if (storageType === 'sessionStorage') {
            this.storage = window.sessionStorage;
        } else {
            throw new Error('Invalid storage type, use "localStorage" or "sessionStorage"');
        }

        this.eventTarget = new EventTarget();
    }

    // Set a value in storage and trigger a change event
    setItem(key, value) {
        const jsonData = JSON.stringify(value);
        this.storage.setItem(key, jsonData);
        this._triggerChange();
    }

    // Get a value from storage
    getItem(key) {
        const data = this.storage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    // Remove a specific item
    removeItem(key) {
        this.storage.removeItem(key);
        this._triggerChange();
    }

    // Clear all storage items
    clear() {
        this.storage.clear();
        this._triggerChange();
    }

    // Event listener for changes
    on(event, callback) {
        this.eventTarget.addEventListener(event, callback);
    }

    // Trigger the 'change' event
    _triggerChange() {
        const event = new Event('change');
        this.eventTarget.dispatchEvent(event);
    }
}
