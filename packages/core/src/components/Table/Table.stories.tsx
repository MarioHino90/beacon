import React, { useMemo, useState } from "react";
import styled from "styled-components";
import camelCase from "lodash/camelCase";
import {
  colorSelector,
  getIntentColor,
  getSpacing,
} from "@braze/beacon-styling";
import { ColorBaseType } from "@braze/beacon-theme";

import { TableHeader } from "../TableHeader";
import { TableBody } from "../TableBody";
import { TableHeaderCell } from "../TableHeaderCell";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";
import { TableCaption } from "../TableCaption";
import { TableFooter } from "../TableFooter";

import { Table } from "./Table";
import page from "./Table.docs.mdx";

const DecoratedHeaderDot = styled.span`
  display: inline-block;
  margin-left: ${getSpacing("sm")};
  background: ${(props: { color: ColorBaseType }) =>
    colorSelector(props, props.color, 300)};
  height: 10px;
  width: 10px;
  border-radius: 100%;
`;

const DecoratedHeader = ({ children, color }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span>{children}</span>
    <DecoratedHeaderDot color={color} />
  </div>
);

const OrangeRow = styled(TableRow)`
  background: ${getIntentColor("warning", 300)};
  :hover {
    background: ${getIntentColor("warning", 100)};
  }
`;

const ColorContent = styled.span<{ favColor: string }>`
  color: ${({ favColor }: { favColor: string }) => camelCase(favColor)};
`;

const DegreeContent = ({ children }) => (
  <React.Fragment>{children}&deg;</React.Fragment>
);

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Content Display/Table",
  component: Table,
  parameters: {
    docs: { page },
  },
};

export const BasicUse = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Favorite Color</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell width="500px">Favorite Line</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sarah</TableCell>
          <TableCell>
            <ColorContent favColor="forestGreen">Forest Green</ColorContent>
          </TableCell>
          <TableCell>32</TableCell>
          <TableCell>
            She puzzled over this for some time, but at last a bright thought
            struck her. “Why, it’s a Looking-glass book, of course! And if I
            hold it up to a glass, the words will all go the right way again.”
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jeff</TableCell>
          <TableCell>
            <ColorContent favColor="pink">Pink</ColorContent>
          </TableCell>
          <TableCell>23</TableCell>
          <TableCell>The vorpal blade went snicker-snack!</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Janice</TableCell>
          <TableCell>
            <ColorContent favColor="firebrick">Firebrick</ColorContent>
          </TableCell>
          <TableCell>19</TableCell>
          <TableCell>The Jabberwock, with eyes of flame</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>April</TableCell>
          <TableCell>
            <ColorContent favColor="cadetBlue">Cadet Blue</ColorContent>
          </TableCell>
          <TableCell>82</TableCell>
          <TableCell>All mimsy were the borogoves</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Henry</TableCell>
          <TableCell>
            <ColorContent favColor="darkGoldenrod">Dark Goldenrod</ColorContent>
          </TableCell>
          <TableCell>46</TableCell>
          <TableCell>Long time the manxome foe he sought</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

BasicUse.storyName = "basic use";

export const Sorting = () => {
  const data = useMemo(
    () => [
      {
        id: "1",
        name: "Sarah",
        favoriteColor: "Forest Green",
        birthYear: 1989,
        favoriteLine:
          "She puzzled over this for some time, but at last a bright thought struck her. “Why, it’s a Looking-glass book, of course! And if I hold it up to a glass, the words will all go the right way again.”",
      },
      {
        id: "2",
        name: "Jeff",
        favoriteColor: "Pink",
        birthYear: 1998,
        favoriteLine: "The vorpal blade went snicker-snack!",
      },
      {
        id: "3",
        name: "Hubert Blaine Wolfesch...",
        favoriteColor: "Firebrick",
        birthYear: 2002,
        favoriteLine: "The Jabberwock, with eyes of flame",
      },
      {
        id: "4",
        name: "April",
        favoriteColor: "Cadet Blue",
        birthYear: 1939,
        favoriteLine: "All mimsy were the borogoves",
      },
      {
        id: "5",
        name: "Henry",
        favoriteColor: "Dark Goldenrod",
        birthYear: 1975,
        favoriteLine: "Long time the manxome foe he sought",
      },
    ],
    []
  );
  const [sortDirection, setSortDirection] = useState<{
    col: string | undefined;
    dir: "asc" | "desc" | undefined | false;
  }>({
    col: undefined,
    dir: undefined,
  });
  const sorted = useMemo(() => {
    const { col, dir } = sortDirection;

    if (!col || !dir) {
      return data;
    }

    return [...data].sort((a, b) => {
      if (dir === "asc") {
        if (a[col] > b[col]) {
          return 1;
        }

        if (a[col] < b[col]) {
          return -1;
        }
      } else if (dir === "desc") {
        if (a[col] > b[col]) {
          return -1;
        }

        if (a[col] < b[col]) {
          return 1;
        }
      }

      return 0;
    });
  }, [data, sortDirection]);

  const handleClick =
    (col: string, firstSortDirection: typeof sortDirection["dir"] = "desc") =>
    () => {
      if (col === sortDirection.col) {
        if (sortDirection.dir === "asc") {
          setSortDirection({ col, dir: "desc" });
        }

        if (sortDirection.dir === "desc") {
          setSortDirection({ col, dir: "asc" });
        }
      } else {
        setSortDirection({ col, dir: firstSortDirection });
      }
    };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell
            sortDirection={sortDirection.col === "name" && sortDirection.dir}
            onClick={handleClick("name")}
            textAlign="left"
          >
            Name
          </TableHeaderCell>
          <TableHeaderCell
            sortDirection={
              sortDirection.col === "favoriteColor" && sortDirection.dir
            }
            onClick={handleClick("favoriteColor")}
            sortMessages={{
              asc: "Sorting by Hue, in ascending intensity",
              desc: "Sorting by Hue, in descending intensity",
              none: "Select to sort Color by Hue in descending intensity",
            }}
            textAlign="center"
          >
            Favorite Color
          </TableHeaderCell>
          <TableHeaderCell
            sortDirection={
              sortDirection.col === "birthYear" && sortDirection.dir
            }
            onClick={handleClick("birthYear", "asc")}
            sortMessages={{
              asc: "Sorting by Birth Year, in ascending awesomeness",
              desc: "Sorting by Birth Year, in descending awesomeness",
              none: "Select to sort Birth Year in ascending awesomeness",
            }}
            firstSortDirection="asc"
            textAlign="right"
            width="80px"
          >
            Birth Year
          </TableHeaderCell>
          <TableHeaderCell
            sortDirection={
              sortDirection.col === "birthYear" && sortDirection.dir === "asc"
                ? "desc"
                : "asc"
            }
            sortTooltipPlacement="right"
            firstSortDirection="asc"
            textAlign="right"
          >
            Age
          </TableHeaderCell>
          <TableHeaderCell textAlign="left" width="400px">
            Favorite Line
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sorted.map((row) => (
          <TableRow key={row.id}>
            <TableCell textAlign="left">{row.name}</TableCell>
            <TableCell textAlign="center">
              <ColorContent favColor={row.favoriteColor}>
                {row.favoriteColor}
              </ColorContent>
            </TableCell>
            <TableCell textAlign="right">{row.birthYear}</TableCell>
            <TableCell textAlign="right">
              {new Date().getFullYear() - row.birthYear}
            </TableCell>
            <TableCell textAlign="left">{row.favoriteLine}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

Sorting.storyName = "sorting";

export const CustomComponentUse = () => {
  return (
    <Table>
      <TableCaption>
        Description of temperatures in different scales
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>&nbsp;</TableHeaderCell>
          <TableHeaderCell size="none">
            <DecoratedHeader color="primary">Celcius</DecoratedHeader>
          </TableHeaderCell>
          <TableHeaderCell size="none">
            <DecoratedHeader color="danger">Farenheit</DecoratedHeader>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell>Freezing</TableHeaderCell>
          <TableCell>
            <DegreeContent>0</DegreeContent>
          </TableCell>
          <TableCell width="300px">
            <DegreeContent>32</DegreeContent>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>
            <span role="img" aria-label="Smiling Face with Sunglasses">
              😎
            </span>
          </TableHeaderCell>
          <TableCell>
            <DegreeContent>24</DegreeContent>
          </TableCell>
          <TableCell>
            <DegreeContent>75</DegreeContent>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Boiling</TableHeaderCell>
          <TableCell>
            <DegreeContent>100</DegreeContent>
          </TableCell>
          <TableCell>
            <DegreeContent>212</DegreeContent>
          </TableCell>
        </TableRow>
        <OrangeRow>
          <TableHeaderCell>Paper auto-ignition</TableHeaderCell>
          <TableCell>
            <DegreeContent>233</DegreeContent>
          </TableCell>
          <TableCell>
            <DegreeContent>451</DegreeContent>
          </TableCell>
        </OrangeRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            For more information about temperature, visit{" "}
            <a
              href="https://en.wikipedia.org/wiki/Scale_of_temperature"
              target="blank"
            >
              this page
            </a>
            .
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

CustomComponentUse.storyName = "custom component use";

export const SizeUse = ({
  tableSize,
  rowSize,
  cellSize,
  cellSizeApril,
}: {
  tableSize: "default" | "none" | "compact" | "comfortable";
  rowSize: "default" | "none" | "compact" | "comfortable";
  cellSize: "default" | "none" | "compact" | "comfortable";
  cellSizeApril: "default" | "none" | "compact" | "comfortable";
}) => {
  const sizeOrDefault = (
    size: "default" | "none" | "compact" | "comfortable"
  ) => (size === "default" ? undefined : size);

  return (
    <Table size={sizeOrDefault(tableSize)}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell size="none">
            <DecoratedHeader color="primary">Name</DecoratedHeader>
          </TableHeaderCell>
          <TableHeaderCell>Favorite Color</TableHeaderCell>
          <TableHeaderCell width="100px">Age</TableHeaderCell>
          <TableHeaderCell width="300px">Favorite Line</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sarah</TableCell>
          <TableCell>
            <ColorContent favColor="forestGreen">Forest Green</ColorContent>
          </TableCell>
          <TableCell>32</TableCell>
          <TableCell>
            She puzzled over this for some time, but at last a bright thought
            struck her. “Why, it’s a Looking-glass book, of course! And if I
            hold it up to a glass, the words will all go the right way again.”
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jeff</TableCell>
          <TableCell>
            <ColorContent favColor="pink">Pink</ColorContent>
          </TableCell>
          <TableCell
            size={sizeOrDefault(cellSize)}
            style={{ background: "cadetBlue" }}
          >
            <div
              style={{
                background: "pink",
                width: "100%",
                height: "100%",
              }}
            >
              23
            </div>
          </TableCell>
          <TableCell>The vorpal blade went snicker-snack!</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Janice</TableCell>
          <TableCell>
            <ColorContent favColor="firebrick">Firebrick</ColorContent>
          </TableCell>
          <TableCell>19</TableCell>
          <TableCell>The Jabberwock, with eyes of flame</TableCell>
        </TableRow>
        <TableRow size={sizeOrDefault(rowSize)}>
          <TableCell>April</TableCell>
          <TableCell>
            <ColorContent favColor="cadetBlue">Cadet Blue</ColorContent>
          </TableCell>
          <TableCell
            size={sizeOrDefault(cellSizeApril)}
            style={{ background: "cadetBlue" }}
          >
            <div
              style={{
                background: "pink",
                width: "100%",
                height: "100%",
              }}
            >
              82
            </div>
          </TableCell>
          <TableCell>All mimsy were the borogoves</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Henry</TableCell>
          <TableCell>
            <ColorContent favColor="darkGoldenrod">Dark Goldenrod</ColorContent>
          </TableCell>
          <TableCell>46</TableCell>
          <TableCell>Long time the manxome foe he sought</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

SizeUse.storyName = "size use";

SizeUse.argTypes = {
  tableSize: {
    control: "radio",
    name: "Table Size",
    options: ["default", "none", "compact", "comfortable"],
    labels: {
      default: "default size",
      none: "no size adjustment",
      compact: "compact",
      comfortable: "comfortable",
    },
  },
  rowSize: {
    control: "radio",
    name: "Row Size (April)",
    options: ["default", "none", "compact", "comfortable"],
    labels: {
      default: "default size",
      none: "no size adjustment",
      compact: "compact",
      comfortable: "comfortable",
    },
  },
  cellSize: {
    control: "radio",
    name: "Cell Size (Jeff, Age Cell)",
    options: ["default", "none", "compact", "comfortable"],
    labels: {
      default: "default size",
      none: "no size adjustment",
      compact: "compact",
      comfortable: "comfortable",
    },
  },
  cellSizeApril: {
    control: "radio",
    name: "Cell Size (April, Age Cell)",
    options: ["default", "none", "compact", "comfortable"],
    labels: {
      default: "default size",
      none: "no size adjustment",
      compact: "compact",
      comfortable: "comfortable",
    },
  },
};

SizeUse.args = {
  tableSize: "default",
  cellSize: "comfortable",
  rowSize: "none",
  cellSizeApril: "none",
};

export const VerticalRule = () => {
  return (
    <Table verticalRule>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Favorite Color</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell width="40%">Favorite Line</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sarah</TableCell>
          <TableCell>
            <ColorContent favColor="forestGreen">Forest Green</ColorContent>
          </TableCell>
          <TableCell>32</TableCell>
          <TableCell>
            She puzzled over this for some time, but at last a bright thought
            struck her. “Why, it’s a Looking-glass book, of course! And if I
            hold it up to a glass, the words will all go the right way again.”
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jeff</TableCell>
          <TableCell>
            <ColorContent favColor="pink">Pink</ColorContent>
          </TableCell>
          <TableCell>23</TableCell>
          <TableCell>The vorpal blade went snicker-snack!</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Janice</TableCell>
          <TableCell>
            <ColorContent favColor="firebrick">Firebrick</ColorContent>
          </TableCell>
          <TableCell>19</TableCell>
          <TableCell>The Jabberwock, with eyes of flame</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>April</TableCell>
          <TableCell>
            <ColorContent favColor="cadetBlue">Cadet Blue</ColorContent>
          </TableCell>
          <TableCell>82</TableCell>
          <TableCell>All mimsy were the borogoves</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Henry</TableCell>
          <TableCell>
            <ColorContent favColor="darkGoldenrod">Dark Goldenrod</ColorContent>
          </TableCell>
          <TableCell>46</TableCell>
          <TableCell>Long time the manxome foe he sought</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

VerticalRule.storyName = "vertical rule";

export const TextAlignment = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell />
          <TableHeaderCell width="25%" textAlign="left">
            Left
          </TableHeaderCell>
          <TableHeaderCell width="25%" textAlign="center">
            Center
          </TableHeaderCell>
          <TableHeaderCell width="25%" textAlign="right">
            Right
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell>
            prop <code>textAlign</code>
          </TableHeaderCell>
          <TableCell textAlign="left">
            <code>left</code>
          </TableCell>
          <TableCell textAlign="center">
            <code>center</code>
          </TableCell>
          <TableCell textAlign="right">
            <code>right</code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>en Français</TableHeaderCell>
          <TableCell textAlign="left">Gauche</TableCell>
          <TableCell textAlign="center">Centre</TableCell>
          <TableCell textAlign="right">Droit</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

TextAlignment.storyName = "text alignment";

export const ColumnSpan = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell />
          <TableHeaderCell colSpan={2}>Headers can span too!</TableHeaderCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>1</TableHeaderCell>
          <TableHeaderCell>2</TableHeaderCell>
          <TableHeaderCell>3</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>no</TableCell>
          <TableCell>
            <code>colSpan</code>
          </TableCell>
          <TableCell>specified</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={2}>
            <code>colSpan={"{2}"}</code>
          </TableCell>
          <TableCell>3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={3}>
            <code>colSpan={"{3}"}</code>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

ColumnSpan.storyName = "column span";

export const RowSpan = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell rowSpan={2} />
          <TableHeaderCell />
          <TableHeaderCell />
          <TableHeaderCell />
        </TableRow>
        <TableRow>
          <TableHeaderCell />
          <TableHeaderCell />
          <TableHeaderCell />
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell>1</TableHeaderCell>
          <TableCell rowSpan={3}>
            <code>
              rowSpan={"{"}3{"}"}
            </code>
          </TableCell>
          <TableCell rowSpan={2}>
            <code>
              rowSpan={"{"}2{"}"}
            </code>
          </TableCell>
          <TableCell>no</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>2</TableHeaderCell>
          <TableCell>
            <code>rowSpan</code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>3</TableHeaderCell>
          <TableCell />
          <TableCell>specified</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

RowSpan.storyName = "row span";

export const FullWidthTable = () => {
  return (
    <Table fullWidth>
      <TableHeader>
        <TableRow>
          <TableHeaderCell />
          {Array(20)
            .fill(null)
            .map((_, idx) => (
              <TableHeaderCell key={idx}>{idx + 1}</TableHeaderCell>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(20)
          .fill(null)
          .map((_, idx) => (
            <TableRow key={idx}>
              <TableHeaderCell>{idx + 1}</TableHeaderCell>
              {Array(20)
                .fill(null)
                .map((_, jdx) => (
                  <TableCell key={jdx}>{(idx + 1) * (jdx + 1)}</TableCell>
                ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

FullWidthTable.storyName = "full width table";

export const NonInteractiveUse = () => {
  return (
    <Table interactive={false}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Favorite Color</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell width="500px">Favorite Line</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sarah</TableCell>
          <TableCell>
            <ColorContent favColor="forestGreen">Forest Green</ColorContent>
          </TableCell>
          <TableCell>32</TableCell>
          <TableCell>
            She puzzled over this for some time, but at last a bright thought
            struck her. “Why, it’s a Looking-glass book, of course! And if I
            hold it up to a glass, the words will all go the right way again.”
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jeff</TableCell>
          <TableCell>
            <ColorContent favColor="pink">Pink</ColorContent>
          </TableCell>
          <TableCell>23</TableCell>
          <TableCell>The vorpal blade went snicker-snack!</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Janice</TableCell>
          <TableCell>
            <ColorContent favColor="firebrick">Firebrick</ColorContent>
          </TableCell>
          <TableCell>19</TableCell>
          <TableCell>The Jabberwock, with eyes of flame</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>April</TableCell>
          <TableCell>
            <ColorContent favColor="cadetBlue">Cadet Blue</ColorContent>
          </TableCell>
          <TableCell>82</TableCell>
          <TableCell>All mimsy were the borogoves</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Henry</TableCell>
          <TableCell>
            <ColorContent favColor="darkGoldenrod">Dark Goldenrod</ColorContent>
          </TableCell>
          <TableCell>46</TableCell>
          <TableCell>Long time the manxome foe he sought</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

NonInteractiveUse.storyName = "non-interactive use";

export const WithFixedWidths = () => {
  return (
    <Table interactive={false} fullWidth fixed>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Favorite Color</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell>Favorite Line</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sarah</TableCell>
          <TableCell>
            <ColorContent favColor="forestGreen">Forest Green</ColorContent>
          </TableCell>
          <TableCell>32</TableCell>
          <TableCell truncation="ellipsis">
            She puzzled over this for some time, but at last a bright thought
            struck her. “Why, it’s a Looking-glass book, of course! And if I
            hold it up to a glass, the words will all go the right way again.”
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jeff</TableCell>
          <TableCell>
            <ColorContent favColor="pink">Pink</ColorContent>
          </TableCell>
          <TableCell>23</TableCell>
          <TableCell truncation="ellipsis">
            The vorpal blade went snicker-snack!
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Janice</TableCell>
          <TableCell>
            <ColorContent favColor="firebrick">Firebrick</ColorContent>
          </TableCell>
          <TableCell>19</TableCell>
          <TableCell truncation="ellipsis">
            The Jabberwock, with eyes of flame
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>April</TableCell>
          <TableCell>
            <ColorContent favColor="cadetBlue">Cadet Blue</ColorContent>
          </TableCell>
          <TableCell>82</TableCell>
          <TableCell truncation="ellipsis">
            All mimsy were the borogoves
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Henry</TableCell>
          <TableCell>
            <ColorContent favColor="darkGoldenrod">Dark Goldenrod</ColorContent>
          </TableCell>
          <TableCell>46</TableCell>
          <TableCell truncation="ellipsis">
            Long time the manxome foe he sought
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

WithFixedWidths.storyName = "with fixed widths";

export const WithEllipsisTruncation = () => {
  return (
    <Table interactive={false} fullWidth>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Favorite Color</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell width="500px">Favorite Line</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sarah</TableCell>
          <TableCell>
            <ColorContent favColor="forestGreen">Forest Green</ColorContent>
          </TableCell>
          <TableCell>32</TableCell>
          <TableCell truncation="ellipsis" maxWidth={500}>
            She puzzled over this for some time, but at last a bright thought
            struck her. “Why, it’s a Looking-glass book, of course! And if I
            hold it up to a glass, the words will all go the right way again.”
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jeff</TableCell>
          <TableCell>
            <ColorContent favColor="pink">Pink</ColorContent>
          </TableCell>
          <TableCell>23</TableCell>
          <TableCell truncation="ellipsis">
            The vorpal blade went snicker-snack!
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Janice</TableCell>
          <TableCell>
            <ColorContent favColor="firebrick">Firebrick</ColorContent>
          </TableCell>
          <TableCell>19</TableCell>
          <TableCell truncation="ellipsis">
            The Jabberwock, with eyes of flame
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>April</TableCell>
          <TableCell>
            <ColorContent favColor="cadetBlue">Cadet Blue</ColorContent>
          </TableCell>
          <TableCell>82</TableCell>
          <TableCell truncation="ellipsis">
            All mimsy were the borogoves
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Henry</TableCell>
          <TableCell>
            <ColorContent favColor="darkGoldenrod">Dark Goldenrod</ColorContent>
          </TableCell>
          <TableCell>46</TableCell>
          <TableCell truncation="ellipsis">
            Long time the manxome foe he sought
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

WithEllipsisTruncation.storyName = "with ellipsis truncation";

export const WithForcedWrap = () => {
  return (
    <Table interactive={false} fullWidth>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Favorite Color</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell width="500px">Favorite Line</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Sarah</TableCell>
          <TableCell>
            <ColorContent favColor="forestGreen">Forest Green</ColorContent>
          </TableCell>
          <TableCell>32</TableCell>
          <TableCell truncation="force-wrap" maxWidth={500}>
            She puzzled over this for some time, but at last a bright thought
            struck her. “Why, it’s a Looking-glass book, of course! And if I
            hold it up to a glass, the words will all go the right way again.”
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jeff</TableCell>
          <TableCell>
            <ColorContent favColor="pink">Pink</ColorContent>
          </TableCell>
          <TableCell>23</TableCell>
          <TableCell truncation="force-wrap">
            The vorpal blade went snicker-snack!
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Janice</TableCell>
          <TableCell>
            <ColorContent favColor="firebrick">Firebrick</ColorContent>
          </TableCell>
          <TableCell>19</TableCell>
          <TableCell truncation="force-wrap">
            The Jabberwock, with eyes of flame
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>April</TableCell>
          <TableCell>
            <ColorContent favColor="cadetBlue">Cadet Blue</ColorContent>
          </TableCell>
          <TableCell>82</TableCell>
          <TableCell truncation="force-wrap">
            All mimsy were the borogoves
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Henry</TableCell>
          <TableCell>
            <ColorContent favColor="darkGoldenrod">Dark Goldenrod</ColorContent>
          </TableCell>
          <TableCell>46</TableCell>
          <TableCell truncation="force-wrap">
            Long time the manxome foe he sought
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

WithForcedWrap.storyName = "with forced wrap";
