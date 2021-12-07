module.exports.MostFrequentItemCount = function (selection) {
    let element = {};
    let sum = 0;
    let result;
    selection.sort().forEach(item => {
      return element[item] = ( element[item] || 0 ) + 1;
    });
    for (let key in element) {
       if ( element[key] > sum ) {
         sum = element[key];
         result = key;
        }
    }
    return result;
  }
  