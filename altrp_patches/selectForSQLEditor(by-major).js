"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailQueryValues = exports.replaceIsNull = exports.replaceIfAndRequest = exports.convertShortcodes = void 0;
const after_1 = __importDefault(require("./string/after"));
const before_1 = __importDefault(require("./string/before"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const lodash_1 = __importDefault(require("lodash"));
async function selectForSQLEditor(sql, bindings, request) {
    let _sql_order_by = '';
    let _sql_and_filters = '';
    let _sql_filters = '';
    let _sql_detail_filters = '';
    let _sql_detail_and_filters = '';
    const qs = request.qs();
    if (qs.filters) {
        let _filters = JSON.parse(qs.filters);
        if (sql.indexOf('ALTRP_FILTERS') !== -1) {
            _sql_filters = 'WHERE';
            for (let key in _filters) {
                if (_filters.hasOwnProperty(key)) {
                    const value = _filters[key];
                    _sql_filters += ' AND `' + key + '` LIKE "%' + value + '%" ';
                }
            }
        }
        if (sql.indexOf('ALTRP_AND_FILTERS') !== -1) {
            _sql_and_filters = '';
            for (let key in _filters) {
                if (_filters.hasOwnProperty(key)) {
                    const value = _filters[key];
                    _sql_filters += ' AND `' + key + '` LIKE "%' + value + '%" ';
                }
            }
        }
        if (sql.indexOf('ALTRP_DETAIL_FILTERS') !== -1) {
            let _detail_filter_params = getDetailQueryValues(sql, 'ALTRP_DETAIL_FILTERS');
            let _detail_filter_conditionals = [];
            for (let key in _filters) {
                if (_filters.hasOwnProperty(key)) {
                    let value = _filters[key];
                    if (_detail_filter_params[key]) {
                        _detail_filter_params[key] = _detail_filter_params[key].replace(/\./g, "`.`");
                        _detail_filter_conditionals.push(' `' + _detail_filter_params[key] + '` LIKE "%' + value + '%" ');
                    }
                }
            }
            if (_detail_filter_conditionals.length > 0) {
                _sql_detail_filters = " WHERE ";
            }
            _sql_detail_filters += _detail_filter_conditionals.join(' AND ');
        }
        if (sql.indexOf('ALTRP_DETAIL_AND_FILTERS') !== -1) {
            let _detail_and_filter_params = getDetailQueryValues(sql, 'ALTRP_DETAIL_AND_FILTERS');
            let _detail_and_filter_conditionals = [];
            for (let key in _filters) {
                if (_filters.hasOwnProperty(key)) {
                    let value = _filters[key];
                    if (_detail_and_filter_params[key]) {
                        _detail_and_filter_params[key] = _detail_and_filter_params[key].replace(/\./g, "`.`");
                        _detail_and_filter_conditionals.push(' `' + _detail_and_filter_params[key] + '` LIKE "%' + value + '%" ');
                    }
                }
            }
            if (_detail_and_filter_conditionals.length > 0) {
                _sql_detail_and_filters = " AND ";
            }
            _sql_detail_and_filters += _detail_and_filter_conditionals.join(' AND ');
        }
    }
    if (qs.order && qs.order_by) {
        _sql_order_by = ' ORDER BY `' + qs.order_by + '`' + (qs.order === 'DESC' ? ' DESC' : ' ');
        if (sql.indexOf('ALTRP_DETAIL_FILTERS') !== -1) {
            let _detail_filter_params = getDetailQueryValues(sql, 'ALTRP_DETAIL_FILTERS');
            if (_detail_filter_params[qs.order_by]) {
                _sql_order_by = ' ORDER BY ' + _detail_filter_params[qs.order_by] + '' + (qs.order === 'DESC' ? ' DESC' : ' ');
            }
        }
        else if (sql.indexOf('ALTRP_DETAIL_AND_FILTERS') !== -1) {
            let _detail_and_filter_params = getDetailQueryValues(sql, 'ALTRP_DETAIL_AND_FILTERS');
            if (_detail_and_filter_params[qs.order_by]) {
                _sql_order_by = ' ORDER BY ' + _detail_and_filter_params[qs.order_by] + '' + (qs.order === 'DESC' ? ' DESC' : ' ');
            }
        }
        sql += _sql_order_by;
    }
    sql = sql.replace(/ALTRP_FILTERS/g, _sql_filters);
    sql = sql.replace(/ALTRP_AND_FILTERS/g, _sql_and_filters);
    sql = sql.replace(/'?(ALTRP_DETAIL_FILTERS)(:[a-z0-9_,.:]+)?'?/g, _sql_detail_filters);
    sql = sql.replace(/'?(ALTRP_DETAIL_AND_FILTERS)(:[a-z0-9_,.:]+)?'?/g, _sql_detail_and_filters);
    let _result = await Database_1.default.rawQuery(convertShortcodes(sql, qs), bindings);
    if (lodash_1.default.isArray(lodash_1.default.get(_result, '0'))) {
        _result = lodash_1.default.get(_result, '0');
    }
    let result = _result.hasOwnProperty('rows') ? _result.rows : _result;
    return bindings.hasOwnProperty('is_object') && bindings.is_object === 'true' ? result[0] : result;
}
exports.default = selectForSQLEditor;
function convertShortcodes(sql, qs) {
    let pos1 = 0;
    let pos2 = 0;
    let _sql = sql;
    while (true) {
        let openPos = sql.indexOf('{{', pos1);
        if (openPos == -1)
            break;
        let closePos = sql.indexOf('}}', pos2);
        if (closePos == -1)
            break;
        let shortCode = sql.slice(openPos, closePos + 2);
        let code = sql.slice(openPos + 2, closePos);
        if (code.indexOf('IF_AND_REQUEST') !== -1) {
            _sql = _sql.replace(shortCode, replaceIfAndRequest(code, qs, 'AND'));
        }
        if (code.indexOf('IF_OR_REQUEST') !== -1) {
            _sql = _sql.replace(shortCode, replaceIfAndRequest(code, qs, 'OR'));
        }
        if (code.indexOf('IS_NULL') !== -1) {
            _sql = _sql.replace(shortCode, replaceIsNull(code, qs));
        }
        pos1 = openPos + 1;
        pos2 = closePos + 1;
    }
    return _sql;
}
exports.convertShortcodes = convertShortcodes;
function replaceIfAndRequest(code, qs, oper) { //MAJOR добавил поддержку AND или OR
    let query = ``;
    let args = code.split(':');
    let arg1 = args[1].trim();
    let arg2 = args[2].trim();
    let arg3 = args[3] ? args[3].trim() : '=';
    if (qs[arg2] && typeof qs[arg2] !== 'undefined') {
        let searchable = qs[arg2];
        switch (arg3) {
            case 'IN':
            case 'NOT IN':
            case 'NOT_IN':
                if (typeof qs[arg2] === 'string') {
                    searchable = qs[arg2].replace(/\[|\]/g, '');
                }
                if (Array.isArray(qs[arg2])) {
                    searchable = qs[arg2].toString();
                }
                query = ' ' + oper + ` ${arg1} ${arg3 == 'IN' ? arg3 : 'NOT IN'} (${searchable}) `;
                break;
            case 'LIKE':
            case 'ILIKE':
                searchable = `'%${qs[arg2]}%'`;
                query = ' ' + oper + ` ${arg1} ${arg3} ${searchable} `;
                break;
            case 'START_ILIKE':
            case 'START_LIKE':
                searchable = `'%${qs[arg2]}'`;
                query = ' ' + oper + ` ${arg1} ${arg3} ${searchable} `;
                break;
            case 'END_ILIKE':
            case 'END_LIKE':
                searchable = `'${qs[arg2]}%'`;
                query = ' ' + oper + ` ${arg1} ${arg3} ${searchable} `;
                break;
            default:
                query = ' ' + oper + ` ${arg1} ${arg3} '${qs[arg2]}' `;
        }
    }
    return query;
}
exports.replaceIfAndRequest = replaceIfAndRequest;
function replaceIsNull(code, qs) {
    let args = code.split(':');
    let arg1 = args[1].trim();
    return typeof qs[arg1] !== 'undefined' ? ` false ` : ` true `;
}
exports.replaceIsNull = replaceIsNull;
function getDetailQueryValues(query, filter) {
    filter += ":";
    let _detail_filter = (0, after_1.default)(query, filter);
    _detail_filter = (0, before_1.default)(_detail_filter, ' ');
    let _detail_filter_array = _detail_filter.split(':');
    let _detail_filter_params = {};
    for (let param of _detail_filter_array) {
        let line = param.split(',');
        _detail_filter_params[line[0]] = line[1];
    }
    return _detail_filter_params;
}
exports.getDetailQueryValues = getDetailQueryValues;
