'use strict';

let request = require('superagent');

const PUBLIC_OPEN_DATA = 'http://public.opendatasoft.com/api/records/1.0/search/?dataset=correspondance-code-insee-code-postal&facet=nom_dept&facet=nom_region&facet=statut';

/**
 * Get insee code from body response
 * @param  {Object} body
 * @return {String}
 */
let code = function code (body) {
  let records = body.records;

  if (records.length === 0) {
    return null;
  }

  if ('fields' in records[0] && 'insee_com' in records[0].fields) {
    return records[0].fields.insee_com;
  }

  return null;
};

/**
 * Get the insee code from French address
 *
 * @param  {String} zipcode
 * @param  {String} city
 * @param  {Function} callback
 */
module.exports = function insee (zipcode, city, callback) {
  request
  .get(PUBLIC_OPEN_DATA)
  .query({'q': `${zipcode} ${city}`})
  .end((err, res) => {
    callback && callback(err, code(res && res.body));
  });
};
