import React, { useRef, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Box } from "../Box";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { FieldLabel } from "../FieldLabel";
import { Input } from "../Input";
import { Link } from "../Link";

import page from "./Toaster.docs.mdx";

import { ToasterProps, Toaster, makeToast, dismissToast } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Alerts/Toaster",
  component: Toaster,
  parameters: {
    docs: { page },
  },
} as ComponentMeta<typeof Toaster>;

const options = [
  { id: "1", label: "danger" as const },
  { id: "2", label: "success" as const },
  { id: "3", label: "info" as const },
  { id: "4", label: "warning" as const },
];

export const BasicUse = (args: ToasterProps): React.ReactElement => {
  const [content, setContent] = useState(
    "This is meant to be some sort of helpful message."
  );
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSelect = (event) => {
    setSelectedOption(
      options.find(({ id }) => event.target.value === id) as any
    );
  };

  return (
    <>
      <Toaster {...args} />
      <Box boxMargin={{ bottom: "md" }}>
        <FieldLabel htmlFor="basic-use-input" label="Toast content">
          <Input id="basic-use-input" value={content} onChange={handleChange} />
        </FieldLabel>
        <FieldLabel label="Toast type">
          <select
            className="toast-type-select"
            onBlur={handleSelect}
            style={{ maxWidth: 300 }}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </FieldLabel>
      </Box>
      <Button
        className="make-toast"
        onClick={() =>
          makeToast(selectedOption.label, content, {
            containerId: "toaster-1",
          })
        }
      >
        Make toast
      </Button>
    </>
  );
};

BasicUse.args = { id: "toaster-1", limit: 3, autoClose: 5000 };

export const NoAutoClose = (): React.ReactElement => {
  const [content, setContent] = useState(
    "This is meant to be some sort of helpful message."
  );
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSelect = (event) => {
    setSelectedOption(
      options.find(({ id }) => event.target.value === id) as any
    );
  };

  return (
    <>
      <Toaster id="toaster-1" autoClose={false} />
      <Box boxMargin={{ bottom: "md" }}>
        <FieldLabel htmlFor="basic-use-input" label="Toast content">
          <Input id="basic-use-input" value={content} onChange={handleChange} />
        </FieldLabel>
        <FieldLabel label="Toast type">
          <select
            className="toast-type-select"
            onBlur={handleSelect}
            style={{ maxWidth: 300 }}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </FieldLabel>
      </Box>
      <Button
        className="make-toast"
        onClick={() =>
          makeToast(selectedOption.label, content, {
            containerId: "toaster-1",
          })
        }
      >
        Make toast
      </Button>
    </>
  );
};

export const WithOnClick = (): React.ReactElement => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (event) => {
    setSelectedOption(
      options.find(({ id }) => event.target.value === id) as any
    );
  };

  return (
    <>
      <Toaster id="toaster-2" />
      <Box boxMargin={{ bottom: "md" }}>
        <FieldLabel label="Toast type">
          <select onBlur={handleSelect} style={{ maxWidth: 300 }}>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </FieldLabel>
      </Box>
      <Button
        className="make-toast"
        onClick={() =>
          makeToast(
            selectedOption.label,
            <div>
              <span>Some informative message. </span>
              <Link href="#">Your link here</Link>
            </div>,
            { onClick: action("Toast clicked"), containerId: "toaster-2" }
          )
        }
      >
        Make toast
      </Button>
    </>
  );
};

WithOnClick.storyName = "With onClick";

export const WithLink = (): React.ReactElement => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (event) => {
    setSelectedOption(
      options.find(({ id }) => event.target.value === id) as any
    );
  };

  return (
    <>
      <Toaster id="toaster-3" />
      <Box boxMargin={{ bottom: "md" }}>
        <FieldLabel label="Toast type">
          <select
            className="toast-type-select"
            onBlur={handleSelect}
            style={{ maxWidth: 300 }}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </FieldLabel>
      </Box>
      <Button
        className="make-toast"
        onClick={() =>
          makeToast(
            selectedOption.label,
            <div>
              <span>Some informative message. </span>
              <Link href="#">Your link here</Link>
            </div>,
            {
              containerId: "toaster-3",
            }
          )
        }
      >
        Make toast
      </Button>
    </>
  );
};

export const WithQuaternaryButton = (): React.ReactElement => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (event) => {
    setSelectedOption(
      options.find(({ id }) => event.target.value === id) as any
    );
  };

  return (
    <>
      <Toaster id="toaster-4" />
      <Box boxMargin={{ bottom: "md" }}>
        <FieldLabel label="Toast type">
          <select
            className="toast-type-select"
            onBlur={handleSelect}
            style={{ maxWidth: 300 }}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </FieldLabel>
      </Box>
      <Button
        className="make-toast"
        onClick={() =>
          makeToast(
            selectedOption.label,
            <div>
              <span>Some informative message. </span>
              <Button variant="quaternary">Your link here</Button>
            </div>,
            {
              containerId: "toaster-4",
            }
          )
        }
      >
        Make toast
      </Button>
    </>
  );
};

export const WithProgrammaticDismissal = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toastId = useRef<string | number | null>(null);

  const handleSelect = (event) => {
    setSelectedOption(
      options.find(({ id }) => event.target.value === id) as any
    );
  };

  return (
    <>
      <Toaster id="toaster-4" />
      <Box boxMargin={{ bottom: "md" }}>
        <FieldLabel label="Toast type">
          <select
            className="toast-type-select"
            onBlur={handleSelect}
            style={{ maxWidth: 300 }}
          >
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </FieldLabel>
      </Box>
      <ButtonGroup>
        <Button
          className="make-toast"
          onClick={() => {
            toastId.current = makeToast(
              selectedOption.label,
              <div>Loading...</div>,
              {
                containerId: "toaster-4",
                autoClose: false,
              }
            );
          }}
        >
          Make toast
        </Button>
        <Button
          variant="secondary"
          className="dismiss-toast"
          onClick={() => {
            if (toastId.current) {
              dismissToast(toastId.current);

              toastId.current = null;
            }
          }}
        >
          Dismiss most recent toast
        </Button>
        <Button
          variant="secondary"
          className="dismiss-all-toasts"
          onClick={() => dismissToast()}
        >
          Dismiss all toasts
        </Button>
      </ButtonGroup>
    </>
  );
};
