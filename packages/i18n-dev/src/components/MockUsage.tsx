import React, { useState } from "react";
import { useI18nNamespace } from "@braze/beacon-translations";

/**
 * For storybook, demonstrate basic usage of useI18nNamespace
 */
export const MockUsage = (): React.ReactElement => {
  const [name, setName] = useState("");
  const { t, k } = useI18nNamespace("beacon-examples");

  return (
    <div id="component">
      <h1>Using useI18nNamespace in a component</h1>
      <ol>
        <li>
          translating{" "}
          <code>
            Hello {`{ place }`} number {`{num, number, ::currency/USD}`}
          </code>{" "}
          with &quot;5.234&quot;
        </li>
        <li>
          <input
            className="bare-input"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
      </ol>
      <ul>
        <li>
          Translation{" "}
          <code className="translation">
            {t(
              "hello-world",
              "Hello { place } number {num, number, ::currency/USD}",
              { place: name, num: 5.234 }
            )}
          </code>
        </li>
        <li>
          Key <code className="key">{k("hello-world")}</code>
        </li>
      </ul>
      <ul>
        <li>
          translating <code>This is a simple translation</code>
        </li>
        <li className="simple-translation">
          {t("simple", "This is a is simple translation")}
        </li>
        <li>
          Key: <code className="simple-key">{k("simple")}</code>
        </li>
      </ul>
    </div>
  );
};
