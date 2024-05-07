class RationalNumber {
    constructor(numerator, denominator) {
        const gcd = this.gcd(numerator, denominator);
        this._numerator = numerator / gcd;
        this._denominator = denominator / gcd;
    }

    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }

    toJSON() {
        return { numerator: this._numerator, denominator: this._denominator };
    }
}

module.exports = RationalNumber;