# Philosophy

_...or: the what, why, and how of this component library._

## Preamble

### Thesis: on product design systems

Building user interfaces is a deliberate act of design, whether or not it is guided by a series of higher principles. The absence of such a constitutional set of rules leads to less desirable outcomes: lower developer confidence in decision-making, more UI inconsistencies, high user dissatisfaction, etc. It follows that a design system will reverse such outcomes.

Our product system, [Beacon](https://confluence.braze.com/pages/viewpage.action?spaceKey=PDT&title=Product+System), is not only a work in progress, but a living set of standards for building products at Braze. Information in the product system maps either directly or indirectly onto code. Changes to the product system over time suggest changes in code - along with the dynamic nature of code and potential brittleness.

### Antithesis: React as engineering praxis

React unlocks a lot of benefits - we leave as an exercise to the reader to discover these - chief among them are a superior developer experience and ecosystem. The use of this technology as an engineering-driven choice among many alternatives for building user interfaces.

The most important developer experience levers are the _reusability_ of, and _encapsulation_ of concerns within, a React component. The use of a component instance in one place is guaranteed to be identical in behavior and presentation to a second instance with the same properties in another place. Differences between instances are captured by an easily-understood programming interface and are otherwise simple to reason about.

It is easy to create new components; this quality is both a lever and an encumberance. It is entirely possible to write _too many_ of the _wrong_ components in a _non-optimal way_. The resulting proliferation of poorly-written components represents an unfortunate consequence of the "don't-repeat-yourself" principle taken to its extreme. We incur costs if we stumble down this path without a roadmap.

### Synthesis

It follows that joining the precision and deliberation of Beacon with the reusability of React represents the best path forward for a component library, but only given a set of key design constraints. Broadly categorized, these constraints arise from these two questions: _"what components are we building?"_ and _"how are we building these components?"_. We outline coherent answers in the following sections.

Given a component library implementing a product system, the end-user does not need to consume the information of a product system, but rather `import`s components from its library and updates it continually as the library is refined.

## In more practical terms

A component library is the embodiment of a product system as a usable artifact. It follows that we build the components that are prescribed by the product system in the manner described therein. Here we describe this relationship and lay out the model of development for this library:

### Components that go in a library

The product system maintains a [list of component elements](https://confluence.braze.com/pages/viewpage.action?spaceKey=PDT&title=Component+Status). This list should be consulted before adding a new component. This list is not exhaustive. It is helpful to build utilities and abstractions that do not appear in this list but will assist in the construction of these components. We also recognize that the need for other generic components may arise in the course of product development.

By definition, components are highly reusable, context-indepedent units of user interaction. User-facing product can be seen as composition of these components to solve a specific user problem. The _use_ of a component can be highly context-specific, so we modify a component instance's properties to encode the specifics of this context.

If a candidate component does not have the properties of reuse and adaptability across contexts, then it does not belong in the library. Please consult the project maintainers if you have any doubts about your candidate component.

### When to add a component

Given some judgment of a candidate component's membership in the library, there needs to be some exigent circumstance(s) to add the component to the library. Typically, the need arises when building out some user-facing product that is composed from other candidate components. In other words, **if you need it, add it to the library** and make it available to other consumers.

### How we build components

We will provide on-going guidance through a style guide, but the construction of components should be driven by the design information from the product system. 

(TODO: elaborate more on this when the styling commit is merged, etc.)
