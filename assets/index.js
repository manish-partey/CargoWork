import _ from 'lodash';

export default {
  data() {
    return {
      jsonInput1: '', // Input for first JSON
      jsonInput2: '', // Input for second JSON
      comparisonMessage: null, // Message to display comparison result
    };
  },
  methods: {
    compareJsons() {
      try {
        const json1 = JSON.parse(this.jsonInput1); // Parse first JSON
        const json2 = JSON.parse(this.jsonInput2); // Parse second JSON

        const isEqual = _.isEqual(json1, json2); // Compare using lodash
        this.comparisonMessage = isEqual ? "JSON objects are identical" : "JSON objects differ"; // Set message
      } catch (error) {
        alert('Invalid JSON input. Please check your JSON format.');
        this.comparisonMessage = null;
      }
    }
  }
};
