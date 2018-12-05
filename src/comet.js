const $ = require('jquery');

let _time = 0;
let _timeout;

/**
 * [_refresh: a method to refresh to run another ajax]
 * @param comet
 * @private
 */
const _refresh = comet => {
    _timeout = setTimeout(() => {
        comet.run();
    }, comet.sleep);
};

/**
 * [comet: the class of comet]
 * @type {Object}
 */
class Comet {
	/**
	 * @param url
	 * @param sleep
	 * @param times
	 */
	constructor(url, sleep = 2000, times = 20) {
		this.url = url;
		this.sleep = sleep;
		this.times = times;
		return this;
    }

	/**
	 * [subscribe: a method to storing post data and callback function]
	 * @param data
	 * @param validate
	 * @param callback
	 * @returns {Comet}
	 */
    subscribe(data, validate = () => false, callback = () => {}) {
        this.data = data;
        this.validate = validate;
		this.callback = callback;
        return this;
    }

	/**
	 * [run: run the ajax]
	 */
	run() {
		_time++;
		if ($.isNumeric(this.times) && this.times > 0 && _time > this.times) return;

		$.getJSON(this.url, this.data, data => this.validate(data) ? _refresh(this) : this.callback(data));
    }
}

export default Comet;
