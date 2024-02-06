## Merge readiness checks

**Before you merge, please verify the following:**

- [ ] This PR conforms to the [contributing guidelines](https://beacon-storybook.braze.com/?path=/story/welcome-contributing-overview--page)
- [ ] This PR conforms to the [style guides](https://beacon-storybook.braze.com/?path=/story/welcome-contributing-component-styling--page)
- [ ] I ran `yarn sync` at the root of the repo to make sure all the internal dependencies are up-to-date

## `BREAKING CHANGE` checks

**Please use the following checklist to determine whether your change(s) qualify as a `BREAKING CHANGE`(s):**

### 1) Non-breaking changes

- [ ] New components
- [ ] New props added to existing components
- [ ] Extension of existing component behavior without affecting existing behavior
- [ ] Extension of existing props (e.g. new variants, intents, etc.) without affecting existing behavior
- [ ] Making a previously required prop optional

All items in list 1 are safe-- meaning you do NOT have a breaking change if your changes are constrained to items in this list.

### 2) Potentially breaking changes

- [ ] Any styling modification to an existing component that might impact layout of parent/sibling/child components/elements
- [ ] Any styling modification to an existing component that might impact appearance of dependent components (e.g. a visual change to Popper might cause one to Menu on Popper upgrade)
- [ ] Modification of component appearance that a reasonable person might consider to be substantially different from the previous implementation
- [ ] Substantial modification to the behavior of an existing component despite lack of changes to component API
- [ ] Changes to HTML element tags rendered by existing components (e.g. span instead of div)

If you have checked any items in list 2, you MAY have a breaking change, please consult with designers, engineers, and PMs in product teams to determine whether this change should be considered breaking.

### 3) Breaking changes

- [ ] Any changes to default prop values
- [ ] Adding a required prop to an existing component
- [ ] Making a previously optional prop required
- [ ] Modification(s) to or removal of statically defined class name(s)
- [ ] Any removal of components
- [ ] Any removal of existing props
- [ ] If your component allows arbitrary children, global styling overrides of any other beacon component (see https://github.com/braze-inc/beacon/pull/159 for an example of what this can cause)

If you have checked ANY items in list 3, then your styling change is breaking and your commit messages should reflect this.

- [ ] I have read the options above and none of them apply to my pull request
