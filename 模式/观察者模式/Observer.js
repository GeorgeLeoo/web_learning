let Observer = (function () {
    let handles = {};

    function checkParams(eventType, cb) {
        if (arguments.length !== 2) {
            console.error('function register must needs two params, but now just has ' + arguments.length + 'params.');
            return;
        }
        if (typeof eventType !== 'string') {
            console.error('eventType needs a string');
            return;
        }
        if (typeof cb !== "function") {
            console.error('cb needs a function');
        }
    }

    return function observer() {
        this.register = function (eventType, cb) {
            checkParams(eventType, cb);
            if (!handles.hasOwnProperty(eventType)) {
                handles[eventType] = [];
            }
            handles[eventType].push(cb);
        };

        this.unRegister = function (eventType, cb) {
            checkParams(eventType, cb);
            if (handles.hasOwnProperty(eventType)) {
                let eventTypes = handles[eventType];
                let index = eventTypes.indexOf(cb);
                eventTypes.splice(index, 1);
                if (eventTypes.length === 0) {
                    delete handles[eventType];
                }
                // cb();
            } else {
                console.log(eventType + '事件未注册');
            }
        };

        this.commit = function (eventType, ...args) {
            if (typeof eventType !== 'string') {
                console.error('eventType needs a string');
            }
            if (handles.hasOwnProperty(eventType)) {
                handles[eventType].forEach((item) => {
                    item.apply(null, args);
                })
            } else {
                throw new Error(`"${ eventType }"事件未注册`);
            }
        };

        this.toggle = function (eventType, cb, ...args) {
            this.register(eventType, cb);
            this.commit(eventType, ...args);
            this.unRegister(eventType,cb);
        }
    }
})();

let observer = new Observer();

function a(...args) {
    // console.log(this);
    console.log('a reg click ' + args);
}

function b(...args) {
    // console.log(this);
    console.log('b reg click ' + args);
}

observer.register('click', a);

observer.commit('click', '1', '2', '3');
observer.commit('click', 'a', 'v', 's');

observer.unRegister('click', a);

// observer.commit('click', '11', '22', '33');
// observer.toggle('click',b,'a','s','d');
