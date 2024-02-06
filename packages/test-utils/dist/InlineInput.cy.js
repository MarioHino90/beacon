"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewModeChildren = exports.inlineInput = exports.editModeChildren = void 0;

var _cypressUtils = require("@braze/cypress-utils");

var _BodyText = require("./BodyText.cy");

var _Input = require("./Input.cy");

var _Icon = require("./Icon.cy");

var editModeChildren = (0, _cypressUtils.extractDeclaration)({
  inputContainer: {
    self: function self() {
      return cy.get(".inline-input-container");
    },
    children: {
      input: _Input.input,
      icon: _Icon.icon
    }
  },
  buttonContainer: {
    self: function self() {
      return cy.get(".inline-input-button-container");
    },
    children: {
      save: function save() {
        return cy.get(".inline-input-save-button");
      },
      cancel: function cancel() {
        return cy.get(".inline-input-cancel-button");
      }
    }
  }
});
exports.editModeChildren = editModeChildren;
var viewModeChildren = (0, _cypressUtils.extractDeclaration)({
  value: _BodyText.bodyText,
  icon: _Icon.icon
});
exports.viewModeChildren = viewModeChildren;
var inlineInput = (0, _cypressUtils.extractDeclaration)({
  editMode: {
    self: function self() {
      return cy.get(".bcl-inline-input-edit-mode");
    },
    children: editModeChildren,
    actions: {
      /**
       * Type a value into the inline input, with an optional callback
       * @param self
       * @param input
       * @param value value to type into the inline input
       * @param callback optional callback to call when typing is finished. This is passed the input
       * @example
       * // type into edit mode
       * context.editMode.actions.type(text, () => {
       *   // check that on change was called for each keystroke
       *   expect(onChangeMock.getCalls().length).equals(text.length);
       *
       *   // also check that the second argument for each onChange call was 'change'
       *   onChangeMock.getCalls().forEach((call) => {
       *     expect(call.args[1]).equals("change");
       *   });
       * });
       */
      type: function type(self, input, value, callback) {
        self.within(function () {
          (0, _cypressUtils.getActionContext)(editModeChildren, input).inputContainer["in"](function (container) {
            container.input.type(value).then(function (input) {
              callback === null || callback === void 0 ? void 0 : callback(input);
            });
          });
        });
      },

      /**
       * Click the save button of an inline input in edit mode, and pass the button into the optional callback when done
       * @example
       * // hit save button
       * context.editMode.actions.saveClick(() => {
       *   // check that the second argument for each onChange call was 'save'
       *   expect(onChangeMock.lastCall.args[1]).equals("save");
       * });
       */
      saveClick: function saveClick(self, btn, callback) {
        self.within(function () {
          (0, _cypressUtils.getActionContext)(editModeChildren, btn).buttonContainer["in"](function (buttonContainer) {
            buttonContainer.save.click().then(function ($btn) {
              callback === null || callback === void 0 ? void 0 : callback($btn);
            });
          });
        });
      },

      /**
       * Click the cancel button of an inline input in edit mode, and pass the button into the optional callback when done
       * @example
       * // hit cancel button
       * context.editMode.actions.cancelClick(() => {
       *   // check that the second argument for each onChange call was 'cancel'
       *   expect(onChangeMock.lastCall.args[1]).equals("cancel");
       * });
       */
      cancelClick: function cancelClick(self, btn, callback) {
        self.within(function () {
          (0, _cypressUtils.getActionContext)(editModeChildren, btn).buttonContainer["in"](function (buttonContainer) {
            buttonContainer.cancel.click().then(function ($btn) {
              callback === null || callback === void 0 ? void 0 : callback($btn);
            });
          });
        });
      },

      /**
       * Click the cancel button of an inline input in edit mode, and pass the button into the optional callback when done
       * @example
       * // hit clear button
       * context.editMode.actions.clearClick(() => {
       *   // check that the second argument for each onChange call was 'clear'
       *   expect(onChangeMock.lastCall.args[1]).equals("clear");
       * });
       */
      clearClick: function clearClick(self, icon, callback) {
        self.within(function () {
          (0, _cypressUtils.getActionContext)(editModeChildren, icon).inputContainer["in"](function (inputContainer) {
            inputContainer.icon.click().then(function ($icon) {
              callback === null || callback === void 0 ? void 0 : callback($icon);
            });
          });
        });
      }
    }
  },
  viewMode: {
    self: function self() {
      return cy.get(".bcl-inline-input-view-mode");
    },
    children: viewModeChildren,
    actions: {
      /**
       * click the value of an inline input in view mode, to transition it into edit mode
       * @example
       * context.viewMode.actions.clickValue();
       */
      clickValue: function clickValue(self, value) {
        self.within(function () {
          (0, _cypressUtils.getActionContext)(viewModeChildren, value).value.click();
        });
      }
    }
  }
});
exports.inlineInput = inlineInput;