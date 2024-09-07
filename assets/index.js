import _ from 'lodash';

export default {
  data() {
    return {
      name: '',
      age: '',
      city: '',
      comparisonResult: null,
    };
  },
  methods: {
    compareObjects() {
      const json1 = {
        name: this.name,
        age: Number(this.age),  // Convert age to a number
        address: {
          city: this.city,
          zip: "10001",  // Hardcoded ZIP as in json2
        }
      };

      const json2 = {
        name: "a",
        age: 31,
        address: {
          city: "New York",
          zip: "10001",
        }
      };

      this.comparisonResult = this.objectEquals(json1, json2);
    },
    objectEquals(x, y) {
      if (x instanceof Function) {
        if (y instanceof Function) {
          return x.toString() === y.toString();
        }
        return false;
      }
      if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
      if (x === y || x.valueOf() === y.valueOf()) { return true; }

      if (x instanceof Date || y instanceof Date) { return false; }
      if (!(x instanceof Object)) { return false; }
      if (!(y instanceof Object)) { return false; }

      const keysX = Object.keys(x);
      return Object.keys(y).every(key => keysX.includes(key)) && keysX.every(key => this.objectEquals(x[key], y[key]));
    }
  }
};
