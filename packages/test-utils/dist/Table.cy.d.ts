/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const tableHeaderCells: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {};
};
export declare const tableHeaderCell: {
    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {
        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
        sortIcon: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
    };
};
export declare const tableCells: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {};
};
export declare const tableCell: {
    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {};
};
export declare const tableRows: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        cells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        cell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {};
        };
        headerCells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        headerCell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                sortIcon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
    };
};
export declare const tableRow: {
    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {
        cells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        cell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {};
        };
        headerCells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        headerCell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                sortIcon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
    };
};
export declare const tableHeader: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        rows: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                headerCells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                headerCell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                        sortIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        row: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                headerCells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                headerCell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                        sortIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        cells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        cell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                sortIcon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
    };
};
export declare const tableBody: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        rows: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                headerCells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                headerCell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                        sortIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        row: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                headerCells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                headerCell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                        sortIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        cells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        cell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {};
        };
    };
};
export declare const table: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        heading: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                rows: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        cells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        cell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {};
                        };
                        headerCells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        headerCell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {
                                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                                sortIcon: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
                row: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        cells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        cell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {};
                        };
                        headerCells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        headerCell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {
                                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                                sortIcon: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                        sortIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        body: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                rows: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        cells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        cell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {};
                        };
                        headerCells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        headerCell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {
                                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                                sortIcon: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
                row: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        cells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        cell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {};
                        };
                        headerCells: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {};
                        };
                        headerCell: {
                            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                            needsParams: true;
                            children: {
                                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                                sortIcon: {
                                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    children: {
                                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                                    };
                                };
                            };
                        };
                    };
                };
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
            };
        };
        rows: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                headerCells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                headerCell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                        sortIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        row: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                cells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                cell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                headerCells: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                headerCell: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                        sortIcon: {
                            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            children: {
                                icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                            };
                        };
                    };
                };
            };
        };
        cells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        cell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {};
        };
        headerCells: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {};
        };
        headerCell: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                button: () => Cypress.Chainable<JQuery<HTMLButtonElement>>;
                sortIcon: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
    };
};
