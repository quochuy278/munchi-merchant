import React from "react";
import { render, screen } from "@testing-library/react";
import { MainPage } from "../../../pages";
import { Provider } from "react-redux";
import { OrderState } from "../../../shared/interfaces/order.interface";
import configureStore from "redux-mock-store";
import OrderTitle from "../../../components/order/title";
beforeEach(() => {
  jest.clearAllMocks();
});

describe("order Title component", () => {
     const mockStore = configureStore();
     const initialState = {
       orders: [
         {
           id: 1234,
           uuid: "fsdf1343124134141",
           status: 1,
           summary: {
             total: 32,
           },
           customer: {
             id: 213121324,
             name: "Huy",
             email: "test@test.com",
           },
           products: [
             {
               id: 21366124,
               name: "Veggie burger with margarita on top of The burger double patty.",
               quantity: 1,
             },
             {
               id: 21323231524,
               name: "Nugget",
               quantity: 1,
             },
             {
               id: 213123211244,
               name: "Oninon ring",
               quantity: 1,
             },
             {
               id: 21315212312312311231224,
               name: "Somthing",
               quantity: 1,
             },
             {
               id: 2133124,
               name: "Fried Fry",
               quantity: 3,
             },
           ],
           business: {
             id: 123123,
             name: "munchi",
           },
           comment: "No potatoe please",
           deliveryType: 1,
           timeStamp: "15:43",
           prepTime: 15,
         },
         {
           id: 12434,
           uuid: "fsdf1343124134141",
           status: 0,
           summary: {
             total: 32,
           },
           customer: {
             id: 213121324,
             name: "Huy",
             email: "test@test.com",
           },
           products: [
             {
               id: 216124,
               name: "Veggie burger with margarita on top of The burger double patty.",
               quantity: 1,
             },
             {
               id: 2131524,
               name: "Nugget",
               quantity: 1,
             },
             {
               id: 2133124,
               name: "Oninon ring",
               quantity: 1,
             },
             {
               id: 2315224,
               name: "Somthing",
               quantity: 1,
             },
             {
               id: 213124,
               name: "Fried Fry",
               quantity: 3,
             },
           ],
           business: {
             id: 1223,
             name: "munchi",
           },
           comment: "No potatoe please",
           deliveryType: 1,
           timeStamp: "15:43",
           prepTime: "",
         },
       ],
       init: false,
       loading: false,
       error: null,
     } as OrderState;
     let store;

  it("containing the OrderTitle", () => {
    // Render the component with some dummy user ID
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
            
    // Expect the component to have rendered the user's name
    // expect(OrderTitle).toHaveReturned(JSX.Element);
    expect(MainPage).toContain(
      <OrderTitle
        orderTitle={"Pending"}
        orderQuantity={7}
      />
    );
  });
});
