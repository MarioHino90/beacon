import React, { useEffect, useReducer, useState } from "react";
import { action } from "@storybook/addon-actions";
import { ButtonLoadingState, useLoadingButton } from "@braze/beacon-hooks";

import { Annotation } from "../Annotation";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { Icon, IconComponentName } from "../Icon";
import { UncontrolledTooltip } from "../UncontrolledTooltip";

import page from "./Button.docs.mdx";

import { Button, ButtonProps } from ".";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Core/Primitives/Button",
  component: Button,
  parameters: {
    docs: { page },
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const BasicUse = (
  args: ButtonProps & { icon: IconComponentName }
): React.ReactElement => {
  const [clicks, increment] = useReducer((clicks) => clicks + 1, 0);

  return (
    <Flex direction="column" className="buttons">
      <Flex justifyContent="space-around">
        <Button {...args} onClick={() => increment()} />
        <Button {...args} onClick={() => increment()}>
          <Icon name={args.icon} />
          {args.children}
        </Button>
      </Flex>
      <div id="clicks">Clicked {clicks} times</div>
    </Flex>
  );
};

BasicUse.args = {
  children: "Label",
  icon: "calendar-alt",
};

BasicUse.storyName = "basic use";

export const PrimaryVariant = (): React.ReactElement => (
  <Flex
    justifyContent="space-around"
    className="buttons"
    style={{ backgroundColor: "#EEE" }}
  >
    <Button
      variant="primary"
      intent="info"
      onClick={action("primary info click")}
    >
      Info
    </Button>
    <Button
      variant="primary"
      intent="success"
      onClick={action("primary success click")}
    >
      Success
    </Button>
    <Button
      variant="primary"
      intent="danger"
      onClick={action("primary danger click")}
    >
      Danger
    </Button>
    <Button
      variant="primary"
      intent="warning"
      onClick={action("primary warning click")}
    >
      Warning
    </Button>
    <Button
      variant="primary"
      intent="muted"
      onClick={action("primary warning click")}
    >
      Muted
    </Button>
  </Flex>
);

PrimaryVariant.storyName = "primary variant";

export const SecondaryVariant = (): React.ReactElement => (
  <Flex
    justifyContent="space-around"
    className="buttons"
    style={{ backgroundColor: "#EEE" }}
  >
    <Button
      variant="secondary"
      intent="info"
      onClick={action("secondary info click")}
    >
      Info
    </Button>
    <Button
      variant="secondary"
      intent="success"
      onClick={action("secondary success click")}
    >
      Success
    </Button>
    <Button
      variant="secondary"
      intent="danger"
      onClick={action("secondary danger click")}
    >
      Danger
    </Button>
    <Button
      variant="secondary"
      intent="warning"
      onClick={action("secondary warning click")}
    >
      Warning
    </Button>
    <Button
      variant="secondary"
      intent="muted"
      onClick={action("secondary warning click")}
    >
      Muted
    </Button>
  </Flex>
);

SecondaryVariant.storyName = "secondary variant";

export const TertiaryVariant = (): React.ReactElement => (
  <Flex
    justifyContent="space-around"
    className="buttons"
    style={{ backgroundColor: "#EEE" }}
  >
    <Button
      variant="tertiary"
      intent="info"
      onClick={action("tertiary info click")}
    >
      Info
    </Button>
    <Button
      variant="tertiary"
      intent="success"
      onClick={action("tertiary success click")}
    >
      Success
    </Button>
    <Button
      variant="tertiary"
      intent="danger"
      onClick={action("tertiary danger click")}
    >
      Danger
    </Button>
    <Button
      variant="tertiary"
      intent="warning"
      onClick={action("tertiary warning click")}
    >
      Warning
    </Button>
    <Button
      variant="tertiary"
      intent="muted"
      onClick={action("tertiary warning click")}
    >
      Muted
    </Button>
  </Flex>
);

TertiaryVariant.storyName = "tertiary variant";

export const QuaternaryVariant = (): React.ReactElement => (
  <Flex
    justifyContent="space-around"
    className="buttons"
    style={{ backgroundColor: "#EEE" }}
  >
    <Button
      variant="quaternary"
      intent="info"
      onClick={action("quaternary info click")}
    >
      Info
    </Button>
    <Button
      variant="quaternary"
      intent="success"
      onClick={action("quaternary success click")}
    >
      Success
    </Button>
    <Button
      variant="quaternary"
      intent="danger"
      onClick={action("quaternary danger click")}
    >
      Danger
    </Button>
    <Button
      variant="quaternary"
      intent="warning"
      onClick={action("quaternary warning click")}
    >
      Warning
    </Button>
    <Button
      variant="quaternary"
      intent="muted"
      onClick={action("quaternary warning click")}
    >
      Muted
    </Button>
  </Flex>
);

QuaternaryVariant.storyName = "quaternary variant";

export const DifferentSizes = (args: ButtonProps): React.ReactElement => (
  <Flex className="buttons" direction="column">
    <Box boxMargin={{ bottom: "md" }}>
      <Button {...args} onClick={action("lg button click")} size="lg">
        Large
      </Button>
    </Box>
    <Box boxMargin={{ bottom: "md" }}>
      <Button {...args} onClick={action("sm button click")} size="sm">
        Small
      </Button>
    </Box>
    <Box>
      <Button {...args} onClick={action("full button click")} size="full">
        Full
      </Button>
    </Box>
  </Flex>
);

DifferentSizes.storyName = "different sizes";

export const DisabledUse = (): React.ReactElement => (
  <Flex justifyContent="space-around" className="buttons">
    <Button variant="primary" disabled>
      Primary
    </Button>
    <Button variant="secondary" disabled>
      Secondary
    </Button>
    <Button variant="tertiary" disabled>
      Tertiary
    </Button>
    <Button variant="quaternary" disabled>
      Quaternary
    </Button>
    <Button intent="muted" disabled>
      Muted
    </Button>
  </Flex>
);

DisabledUse.storyName = "disabled use";

export const DisabledWithTooltip = (): React.ReactElement => (
  <Flex justifyContent="space-around" className="buttons">
    <UncontrolledTooltip label="launching is disabled for this archived campaign">
      <Button variant="primary" disabled>
        Launch Campaign
      </Button>
    </UncontrolledTooltip>
    <Annotation
      label="There was a problem deleting this current. Refresh your page and try again."
      variant="error"
    >
      <Button variant="primary" disabled>
        Delete Current
      </Button>
    </Annotation>
  </Flex>
);

DisabledWithTooltip.storyName = "disabled with tooltip";

export const LoadingStateWSuccess = (args: ButtonProps): React.ReactElement => {
  const [status, setStatus] = useState<ButtonLoadingState>("idle");

  React.useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timeout = setTimeout(() => {
      setStatus("success");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [status]);

  const [buttonProps] = useLoadingButton(status);

  return (
    <Flex justifyContent="space-around" className="buttons">
      <Button
        {...buttonProps}
        {...args}
        loadingMessage="Loading..."
        onClick={() => setStatus("loading")}
      >
        Primary
      </Button>
    </Flex>
  );
};

LoadingStateWSuccess.storyName = "loading state w/ success";

export const LoadingStateWError = (args: ButtonProps): React.ReactElement => {
  const [status, setStatus] = useState<ButtonLoadingState>("idle");

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timeout = setTimeout(() => {
      setStatus("error");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [status]);

  const [buttonProps, onReset] = useLoadingButton(status);

  const handleReset = () => {
    onReset();

    setStatus("idle");
  };

  return (
    <>
      <Flex justifyContent="space-around" className="buttons">
        <Annotation
          disabled={buttonProps.loadingState !== "error"}
          label="There was a problem deleting this current. Refresh your page and try again."
          variant="error"
        >
          <Button
            {...buttonProps}
            {...args}
            loadingMessage="Loading..."
            onClick={() => setStatus("loading")}
          >
            Primary
          </Button>
        </Annotation>
      </Flex>
      <br />
      <Flex justifyContent="space-around" className="buttons">
        <Button
          className="reset-loading-state-btn"
          variant="secondary"
          onClick={handleReset}
        >
          Reset loading state
        </Button>
      </Flex>
    </>
  );
};

LoadingStateWError.storyName = "loading state w/ error";
