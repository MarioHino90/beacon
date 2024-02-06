"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _beaconStyling = require("@braze/beacon-styling");

var _StyledTableHeaderCell = require("../TableHeaderCell/StyledTableHeaderCell");

var _StyledTableRow = require("../TableRow/StyledTableRow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledTableHeader = _styledComponents["default"].thead.withConfig({
  displayName: "StyledTableHeader",
  componentId: "sc-fc2bbl-0"
})(["", "{padding-top:", ";}", ",.bcl-tr{border-top:none;:hover{background:none;}}"], _StyledTableHeaderCell.StyledTableHeaderCell, (0, _beaconStyling.getSpacing)("xl"), _StyledTableRow.StyledTableRow);

exports.StyledTableHeader = StyledTableHeader;