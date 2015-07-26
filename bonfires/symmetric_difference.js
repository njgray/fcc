function sym(args) {

    var compare = function(cval, idx) {
        var exists = false;
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] === cval) {
                exists = true;
            }
        }
        return !exists;
    };

    var uniq = function (agg, cval, idx, arr) {
        if (idx === arr.lastIndexOf(cval)) {
            agg.push(cval);
        }

        return agg;
    };

    var argset = Array.prototype.slice.call(arguments);
    var res = argset.reduce(function(sdiff, arg) {
        return sdiff.filter(compare, arg)
            .concat(arg.filter(compare, sdiff));
    }, []);

    return res.reduce(uniq, []);
}
