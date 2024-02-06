/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const modalFooter: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {};
};
export declare const modalHeader: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {};
};
export declare const modalBody: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {};
};
export declare const modalContent: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        closeButton: () => Cypress.Chainable<any>;
        footer: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        header: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        body: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
    };
};
export declare const modalDialog: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        closeButton: () => Cypress.Chainable<any>;
        content: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                closeButton: () => Cypress.Chainable<any>;
                footer: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                header: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                body: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
            };
        };
        footer: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        header: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        body: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
    };
};
export declare const modalChildren: {
    closeButton: () => Cypress.Chainable<any>;
    dialog: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            closeButton: () => Cypress.Chainable<any>;
            content: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {
                    closeButton: () => Cypress.Chainable<any>;
                    footer: {
                        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        children: {};
                    };
                    header: {
                        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        children: {};
                    };
                    body: {
                        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        children: {};
                    };
                };
            };
            footer: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {};
            };
            header: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {};
            };
            body: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {};
            };
        };
    };
    content: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            closeButton: () => Cypress.Chainable<any>;
            footer: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {};
            };
            header: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {};
            };
            body: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {};
            };
        };
    };
    footer: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {};
    };
    header: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {};
    };
    body: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {};
    };
    backdrop: () => Cypress.Chainable<JQuery<HTMLElement>>;
};
export declare const modal: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        closeButton: () => Cypress.Chainable<any>;
        dialog: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                closeButton: () => Cypress.Chainable<any>;
                content: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        closeButton: () => Cypress.Chainable<any>;
                        footer: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        header: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        body: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                    };
                };
                footer: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                header: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                body: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
            };
        };
        content: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                closeButton: () => Cypress.Chainable<any>;
                footer: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                header: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                body: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
            };
        };
        footer: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        header: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        body: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        backdrop: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
