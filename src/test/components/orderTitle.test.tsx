import React from "react";
import { render } from "@testing-library/react";
import { jest } from "@jest/globals";
import OrderTitle from "../../components/order/title";
import { create } from "react-test-renderer";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("order Title component", () => {
  it("displays the OrderTitle", () => {
    // Render the component with some dummy user ID
    const component = create(
      <OrderTitle orderTitle="Pending" orderQuantity={7} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    // Expect the component to have rendered the user's name
    // expect(OrderTitle).toHaveReturned(JSX.Element);
    expect(<OrderTitle orderTitle="Pending" orderQuantity={7} />)
      .toHaveBeenCalled;
  });
});
