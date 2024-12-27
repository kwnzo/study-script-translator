export default class Computer {
    constructor() {}

    storage() {
        return {
            TIME: {
                get value() {
                    return new Date().valueOf();
                },
                type: 'number',
            }
        };
    }

    loops() {
        return {};
    }

    is_start() {
        return {
            status: false,
        };
    }

    ignore() {
        return {
            status: false,
            deep_ignore: [],
            ignore_until: false,
        };
    }
}