import { extractDeclaration, getActionContext } from "@braze/cypress-utils";

import { bodyText } from "./BodyText.cy";
import { input } from "./Input.cy";
import { icon } from "./Icon.cy";

export const editModeChildren = extractDeclaration({
  inputContainer: {
    self: () => cy.get(".inline-input-container"),
    children: {
      input,
      icon,
    },
  },
  buttonContainer: {
    self: () => cy.get(".inline-input-button-container"),
    children: {
      save: () => cy.get(".inline-input-save-button"),
      cancel: () => cy.get(".inline-input-cancel-button"),
    },
  },
});

export const viewModeChildren = extractDeclaration({
  value: bodyText,
  icon,
});

export type ActionCallback = (element: JQuery<HTMLElement>) => void;

export const inlineInput = extractDeclaration({
  editMode: {
    self: () => cy.get(".bcl-inline-input-edit-mode"),
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
      type: (self, input, value: string, callback?: ActionCallback) => {
        self.within(() => {
          getActionContext(editModeChildren, input).inputContainer.in(
            (container) => {
              container.input.type(value).then((input: JQuery<HTMLElement>) => {
                callback?.(input);
              });
            }
          );
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
      saveClick: (self, btn, callback?: ActionCallback) => {
        self.within(() => {
          getActionContext(editModeChildren, btn).buttonContainer.in(
            (buttonContainer) => {
              buttonContainer.save.click().then(($btn) => {
                callback?.($btn);
              });
            }
          );
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
      cancelClick: (self, btn, callback?: ActionCallback) => {
        self.within(() => {
          getActionContext(editModeChildren, btn).buttonContainer.in(
            (buttonContainer) => {
              buttonContainer.cancel.click().then(($btn) => {
                callback?.($btn);
              });
            }
          );
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
      clearClick: (self, icon, callback?: ActionCallback) => {
        self.within(() => {
          getActionContext(editModeChildren, icon).inputContainer.in(
            (inputContainer) => {
              inputContainer.icon.click().then(($icon) => {
                callback?.($icon);
              });
            }
          );
        });
      },
    },
  },
  viewMode: {
    self: () => cy.get(".bcl-inline-input-view-mode"),
    children: viewModeChildren,
    actions: {
      /**
       * click the value of an inline input in view mode, to transition it into edit mode
       * @example
       * context.viewMode.actions.clickValue();
       */
      clickValue: (self, value) => {
        self.within(() => {
          getActionContext(viewModeChildren, value).value.click();
        });
      },
    },
  },
});
