/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const bannerAlertIcon: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        icon: {
            self: () => Cypress.Chainable<any>;
            children: {
                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
    };
};
export declare const bannerAlertLink: () => Cypress.Chainable;
export declare const bannerAlertAccordion: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        header: () => Cypress.Chainable<JQuery<HTMLElement>>;
        body: () => Cypress.Chainable<JQuery<HTMLElement>>;
        footer: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                action: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
    };
};
export declare const bannerAlertBodyChildren: {
    icon: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            bannerAlertIcon: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {
                    icon: {
                        self: () => Cypress.Chainable<any>;
                        children: {
                            fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        };
                    };
                };
            };
        };
    };
    content: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            title: () => Cypress.Chainable<JQuery<HTMLElement>>;
            description: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {
                    text: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    link: () => Cypress.Chainable;
                };
            };
            link: () => Cypress.Chainable;
            accordion: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {
                    header: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    body: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    footer: {
                        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        children: {
                            action: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        };
                    };
                };
            };
        };
    };
};
export declare const bannerAlertBody: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        innerBody: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                icon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        bannerAlertIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: {
                                    self: () => Cypress.Chainable<any>;
                                    children: {
                                        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
                content: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        title: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        description: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                text: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                link: () => Cypress.Chainable;
                            };
                        };
                        link: () => Cypress.Chainable;
                        accordion: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                header: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                body: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                footer: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        action: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        close: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                icon: {
                    self: () => Cypress.Chainable<any>;
                    children: {
                        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
        icon: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                bannerAlertIcon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: {
                            self: () => Cypress.Chainable<any>;
                            children: {
                                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        content: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                title: () => Cypress.Chainable<JQuery<HTMLElement>>;
                description: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        text: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        link: () => Cypress.Chainable;
                    };
                };
                link: () => Cypress.Chainable;
                accordion: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        header: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        body: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        footer: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                action: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const bannerAlert: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        body: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                innerBody: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                bannerAlertIcon: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        icon: {
                                            self: () => Cypress.Chainable<any>;
                                            children: {
                                                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        content: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                title: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                description: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        text: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                        link: () => Cypress.Chainable;
                                    };
                                };
                                link: () => Cypress.Chainable;
                                accordion: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        header: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                        body: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                        footer: {
                                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                            children: {
                                                action: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                close: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: {
                            self: () => Cypress.Chainable<any>;
                            children: {
                                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
                icon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        bannerAlertIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: {
                                    self: () => Cypress.Chainable<any>;
                                    children: {
                                        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
                content: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        title: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        description: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                text: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                link: () => Cypress.Chainable;
                            };
                        };
                        link: () => Cypress.Chainable;
                        accordion: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                header: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                body: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                footer: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        action: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const untransitionedBannerAlert: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        body: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                innerBody: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                bannerAlertIcon: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        icon: {
                                            self: () => Cypress.Chainable<any>;
                                            children: {
                                                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        content: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                title: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                description: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        text: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                        link: () => Cypress.Chainable;
                                    };
                                };
                                link: () => Cypress.Chainable;
                                accordion: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        header: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                        body: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                        footer: {
                                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                            children: {
                                                action: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                close: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: {
                            self: () => Cypress.Chainable<any>;
                            children: {
                                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
                icon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        bannerAlertIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: {
                                    self: () => Cypress.Chainable<any>;
                                    children: {
                                        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
                content: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        title: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        description: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                text: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                link: () => Cypress.Chainable;
                            };
                        };
                        link: () => Cypress.Chainable;
                        accordion: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                header: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                body: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                footer: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        action: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
