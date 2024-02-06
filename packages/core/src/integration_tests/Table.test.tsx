/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { table, tooltip } from "@braze/beacon-test-utils";
import { cypressTranslate } from "@braze/beacon-i18n-dev";

const story = getStorybookControlsURL("Core/Content Display/Table");

type urlKeys =
  | "default"
  | "customComponent"
  | "compact"
  | "comfortable"
  | "none"
  | "fullWidth"
  | "verticalRule"
  | "withFixedColWidths"
  | "withEllipsis"
  | "withForcedWrap";

const urls: { [K in urlKeys]: string } = {
  default: story("sorting")()(),
  customComponent: story("custom component use")([])(),
  compact: story("size use")([
    {
      type: "select",
      name: "tableSize",
      value: "compact",
    },
    {
      type: "select",
      name: "cellSize",
      value: "comfortable",
    },
    {
      type: "select",
      name: "rowSize",
      value: "none",
    },
    {
      type: "select",
      name: "cellSizeApril",
      value: "none",
    },
  ])(),
  comfortable: story("size use")([
    {
      type: "select",
      name: "tableSize",
      value: "comfortable",
    },
    {
      type: "select",
      name: "cellSize",
      value: "comfortable",
    },
    {
      type: "select",
      name: "rowSize",
      value: "none",
    },
    {
      type: "select",
      name: "cellSizeApril",
      value: "none",
    },
  ])(),
  none: story("size use")([
    {
      type: "select",
      name: "tableSize",
      value: "none",
    },
    {
      type: "select",
      name: "cellSize",
      value: "comfortable",
    },
    {
      type: "select",
      name: "rowSize",
      value: "none",
    },
    {
      type: "select",
      name: "cellSizeApril",
      value: "none",
    },
  ])(),
  fullWidth: story("full width table")()(),
  verticalRule: story("vertical rule")()(),
  withFixedColWidths: story("with fixed column widths")()(),
  withEllipsis: story("with ellipsis truncation")()(),
  withForcedWrap: story("with forced wrap")()(),
};

describe("Table", () => {
  setupVisualTesting("Table");

  function visit(page: urlKeys = "default") {
    cy.viewport("macbook-15");

    cy.visit(urls[page]);
  }

  const context = makeContext("table", { table, tooltip });

  it("should render correctly", () => {
    visit();

    context.table.in((table) => {
      table.rows.should("have.length", 6);

      table.cells.should("have.length", 30);

      table.headerCells.should("have.length", 5);

      table.heading.in((heading) => {
        heading.rows.should("have.length", 1);

        heading.cells.should("have.length", 5);
      });

      table.body.in((body) => {
        body.rows.should("have.length", 5);

        body.cells.should("have.length", 25);

        [...Array(5).keys()].forEach((idx) => {
          body.row(idx + 1).in((row) => {
            row.cells.should("have.length", 5);
          });
        });

        body.row(2).in((row) => {
          row.cell(2).children().should("have.css", "color");

          row.cell(2).children().should("contain", "Pink");
        });
      });

      visualTest();
    });
  });

  it("should render correctly when full width", () => {
    visit("fullWidth");

    context.table.should("be.visible");

    visualTest();
  });

  it("should render correctly when it has a vertical rule", () => {
    visit("verticalRule");

    context.table.should("be.visible");

    visualTest();
  });

  it("should render correctly when it has size 'comfortable'", () => {
    visit("comfortable");

    context.table.should("be.visible");

    visualTest();
  });

  it("should render correctly when it has size 'compact'", () => {
    visit("compact");

    context.table.should("be.visible");

    visualTest();
  });

  it("should render correctly when it has size 'none'", () => {
    visit("none");

    context.table.should("be.visible");

    visualTest();
  });

  it("should handle sort UI with mouse interaction", () => {
    visit();

    context.table.in((table) => {
      table.headerCell(1).in((headerCell) => {
        headerCell.sortIcon.should("be.visible");

        headerCell.sortIcon.should("not.have.attr", "data-sort");
      });

      visualTest();

      table.headerCell(1).should("not.have.attr", "aria-sort");

      table.headerCell(2).in((headerCell) => {
        headerCell.sortIcon.should("be.visible");

        headerCell.sortIcon.should("not.have.attr", "data-sort");
      });

      table.headerCell(2).should("not.have.attr", "aria-sort");

      table.headerCell(3).in((headerCell) => {
        headerCell.sortIcon.should("be.visible");

        headerCell.sortIcon.should("not.have.attr", "data-sort");
      });

      table.headerCell(3).should("not.have.attr", "aria-sort");

      table.headerCell(4).in((headerCell) => {
        headerCell.sortIcon.should("not.exist");
      });

      table.headerCell(4).should("not.have.attr", "aria-sort");

      table.headerCell(5).in((headerCell) => {
        headerCell.sortIcon.should("not.exist");
      });

      table.headerCell(5).should("not.have.attr", "aria-sort");

      table.headerCell(5).click();

      table.headerCell(5).in((headerCell) => {
        headerCell.sortIcon.should("not.exist");
      });

      for (let header = 1; header < 4; header++) {
        table.headerCell(header).click();

        table.headerCell(header).in((headerCell) => {
          headerCell.sortIcon.should("be.visible");

          headerCell.sortIcon.should(
            "have.attr",
            "data-sort",
            [3, 4].includes(header) ? "asc" : "desc"
          );
        });

        table
          .headerCell(header)
          .should(
            "have.attr",
            "aria-sort",
            [3, 4].includes(header) ? "ascending" : "descending"
          );

        // visualTest(`header ${header} click 1`);

        table.headerCell(header).click();

        table.headerCell(header).in((headerCell) => {
          // verify that focus does not persist, so the styling of the header cell does not persist when the mouse is no longer hovering
          headerCell.button.should("not.have.focus");
        });

        table.headerCell(header).in((headerCell) => {
          headerCell.sortIcon.should("be.visible");

          headerCell.sortIcon.should(
            "have.attr",
            "data-sort",
            [3, 4].includes(header) ? "desc" : "asc"
          );
        });

        table
          .headerCell(header)
          .should(
            "have.attr",
            "aria-sort",
            [3, 4].includes(header) ? "descending" : "ascending"
          );

        // visualTest(`header ${header} click 2`);

        table.headerCell(header).click();

        table.headerCell(header).in((headerCell) => {
          headerCell.sortIcon.should("be.visible");

          headerCell.sortIcon.should(
            "have.attr",
            "data-sort",
            [3, 4].includes(header) ? "asc" : "desc"
          );
        });

        table
          .headerCell(header)
          .should(
            "have.attr",
            "aria-sort",
            [3, 4].includes(header) ? "ascending" : "descending"
          );

        // visualTest(`header ${header} click 3`);
      }
    });
  });

  it("should render tooltips", () => {
    visit();

    cy.window().focus();

    // note: when running this test locally, the window must have focus for the hover event to trigger
    context.table.in((table) => {
      table.headerCell(1).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          cypressTranslate("beacon-table", "sort-aria-label-desc", {
            columnName: "Name",
          })
        );
      });

      table.headerCell(1).in((headerCell) => {
        headerCell.sortIcon.in((sortIcon) => {
          sortIcon.icon.should("have.attr", "data-icon", "sort");
        });
      });

      table.headerCell(1).realHover();

      table.headerCell(1).in((headerCell) => {
        headerCell.sortIcon.in((sortIcon) => {
          sortIcon.icon.should("have.attr", "data-icon", "sort-down");
        });
      });
    });

    context.tooltip.should("be.visible");

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sort-tooltip-desc")
    );

    context.table.in((table) => {
      table.headerCell(1).in((headerCell) => {
        // verify that a click on a child does not retain focus on the button
        headerCell.sortIcon.click();
      });

      table.headerCell(1).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          cypressTranslate("beacon-table", "sorted-aria-label-desc", {
            columnName: "Name",
            nextSortDirection: "asc",
          })
        );
      });

      table.headerCell(1).in((headerCell) => {
        headerCell.sortIcon.in((sortIcon) => {
          sortIcon.icon.should("have.attr", "data-icon", "sort-down");
        });
      });
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sorted-tooltip-desc")
    );

    context.table.in((table) => {
      table.headerCell(1).click();

      table.headerCell(1).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          cypressTranslate("beacon-table", "sorted-aria-label-asc", {
            columnName: "Name",
            nextSortDirection: "desc",
          })
        );
      });

      table.headerCell(1).in((headerCell) => {
        headerCell.sortIcon.in((sortIcon) => {
          sortIcon.icon.should("have.attr", "data-icon", "sort-up");
        });
      });
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sorted-tooltip-asc")
    );

    context.table.in((table) => {
      table.headerCell(1).click();
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sorted-tooltip-desc")
    );

    // test custom tooltip
    context.table.in((table) => {
      table.headerCell(2).realHover();
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sort-tooltip-desc")
    );

    context.table.in((table) => {
      table.headerCell(2).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          "Select to sort Color by Hue in descending intensity"
        );
      });
    });

    context.table.in((table) => {
      table.headerCell(2).click();
    });

    context.table.in((table) => {
      table.headerCell(2).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          "Sorting by Hue, in descending intensity"
        );
      });
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sorted-tooltip-desc")
    );

    context.table.in((table) => {
      table.headerCell(2).click();
    });

    context.table.in((table) => {
      table.headerCell(2).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          "Sorting by Hue, in ascending intensity"
        );
      });
    });

    // test custom tooltip, default direction ascending
    context.table.in((table) => {
      table.headerCell(3).realHover();
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sort-tooltip-asc")
    );

    context.table.in((table) => {
      table.headerCell(3).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          "Select to sort Birth Year in ascending awesomeness"
        );
      });
    });

    context.table.in((table) => {
      table.headerCell(3).click();
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sorted-tooltip-asc")
    );

    context.table.in((table) => {
      table.headerCell(3).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          "Sorting by Birth Year, in ascending awesomeness"
        );
      });
    });

    context.table.in((table) => {
      table.headerCell(3).click();
    });

    context.tooltip.should(
      "have.text",
      cypressTranslate("beacon-table", "sorted-tooltip-desc")
    );

    context.table.in((table) => {
      table.headerCell(3).in((headerCell) => {
        headerCell.button.should(
          "have.attr",
          "aria-label",
          "Sorting by Birth Year, in descending awesomeness"
        );
      });
    });
  });

  it("should handle sort UI with keyboard interaction", () => {
    visit();

    // this is required to enable focusing via tab
    cy.window().focus();

    context.table.in((table) => {
      for (let header = 1; header <= 3; header++) {
        cy.realPress("Tab");

        table.headerCell(header).in((headerCell) => {
          headerCell.button.should("have.focus");
        });

        cy.realPress("Enter");

        // verify that engaging the button does not remove focus from the button
        table.headerCell(header).in((headerCell) => {
          headerCell.button.should("have.focus");
        });

        table.headerCell(header).in((headerCell) => {
          headerCell.sortIcon.should("be.visible");

          headerCell.sortIcon.should(
            "have.attr",
            "data-sort",
            header === 3 ? "asc" : "desc"
          );
        });

        table
          .headerCell(header)
          .should(
            "have.attr",
            "aria-sort",
            header === 3 ? "ascending" : "descending"
          );

        cy.realPress("Enter");

        table.headerCell(header).in((headerCell) => {
          headerCell.button.should("have.focus");
        });

        table.headerCell(header).in((headerCell) => {
          headerCell.sortIcon.should("be.visible");

          headerCell.sortIcon.should(
            "have.attr",
            "data-sort",
            header === 3 ? "desc" : "asc"
          );
        });

        table
          .headerCell(header)
          .should(
            "have.attr",
            "aria-sort",
            header === 3 ? "descending" : "ascending"
          );

        cy.realPress(" ");

        table.headerCell(header).in((headerCell) => {
          headerCell.button.should("have.focus");
        });

        table.headerCell(header).in((headerCell) => {
          headerCell.sortIcon.should("be.visible");

          headerCell.sortIcon.should(
            "have.attr",
            "data-sort",
            header === 3 ? "asc" : "desc"
          );
        });

        table
          .headerCell(header)
          .should(
            "have.attr",
            "aria-sort",
            header === 3 ? "ascending" : "descending"
          );
      }
    });
  });

  it("should display fixed table correctly", () => {
    visit("withFixedColWidths");

    visualTest();
  });

  it("should truncate correctly with ellipsis", () => {
    visit("withEllipsis");

    visualTest();
  });

  it("should truncate correctly with forced wrap", () => {
    visit("withForcedWrap");

    visualTest();
  });
});
