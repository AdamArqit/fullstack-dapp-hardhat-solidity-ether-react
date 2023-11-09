/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace ProductApi {
  export type ProductStruct = {
    id: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    price: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
  };

  export type ProductStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ] & { id: BigNumber; name: string; price: BigNumber; quantity: BigNumber };
}

export interface ProductApiInterface extends utils.Interface {
  functions: {
    "deleteProduct(uint256)": FunctionFragment;
    "getAllProducts()": FunctionFragment;
    "getProduct(uint256)": FunctionFragment;
    "productArray(uint256)": FunctionFragment;
    "products(uint256)": FunctionFragment;
    "removeMe()": FunctionFragment;
    "setProduct(uint256,string,uint256,uint256)": FunctionFragment;
    "updateProduct(uint256,string,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deleteProduct"
      | "getAllProducts"
      | "getProduct"
      | "productArray"
      | "products"
      | "removeMe"
      | "setProduct"
      | "updateProduct"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deleteProduct",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllProducts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProduct",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "productArray",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "products",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "removeMe", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setProduct",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProduct",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "deleteProduct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "productArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeMe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateProduct",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ProductApi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProductApiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deleteProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllProducts(
      overrides?: CallOverrides
    ): Promise<[ProductApi.ProductStructOutput[]]>;

    getProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber]>;

    productArray(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        quantity: BigNumber;
      }
    >;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        quantity: BigNumber;
      }
    >;

    removeMe(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        quantity: BigNumber;
      }
    >;

    setProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deleteProduct(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllProducts(
    overrides?: CallOverrides
  ): Promise<ProductApi.ProductStructOutput[]>;

  getProduct(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, BigNumber]>;

  productArray(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber] & {
      id: BigNumber;
      name: string;
      price: BigNumber;
      quantity: BigNumber;
    }
  >;

  products(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber] & {
      id: BigNumber;
      name: string;
      price: BigNumber;
      quantity: BigNumber;
    }
  >;

  removeMe(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber, BigNumber] & {
      id: BigNumber;
      name: string;
      price: BigNumber;
      quantity: BigNumber;
    }
  >;

  setProduct(
    _id: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateProduct(
    _id: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deleteProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllProducts(
      overrides?: CallOverrides
    ): Promise<ProductApi.ProductStructOutput[]>;

    getProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber]>;

    productArray(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        quantity: BigNumber;
      }
    >;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        quantity: BigNumber;
      }
    >;

    removeMe(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        price: BigNumber;
        quantity: BigNumber;
      }
    >;

    setProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deleteProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllProducts(overrides?: CallOverrides): Promise<BigNumber>;

    getProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    productArray(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeMe(overrides?: CallOverrides): Promise<BigNumber>;

    setProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deleteProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllProducts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProduct(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    productArray(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeMe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateProduct(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
