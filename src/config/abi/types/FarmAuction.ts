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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace FarmAuction {
  export type AuctionStruct = {
    status: BigNumberish;
    startBlock: BigNumberish;
    endBlock: BigNumberish;
    initialBidAmount: BigNumberish;
    leaderboard: BigNumberish;
    leaderboardThreshold: BigNumberish;
  };

  export type AuctionStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    status: number;
    startBlock: BigNumber;
    endBlock: BigNumber;
    initialBidAmount: BigNumber;
    leaderboard: BigNumber;
    leaderboardThreshold: BigNumber;
  };

  export type BidStruct = {
    account: string;
    amount: BigNumberish;
    hasClaimed: boolean;
  };

  export type BidStructOutput = [string, BigNumber, boolean] & {
    account: string;
    amount: BigNumber;
    hasClaimed: boolean;
  };
}

export interface FarmAuctionInterface extends utils.Interface {
  functions: {
    "addWhitelist(address[])": FunctionFragment;
    "auctionBids(uint256,address)": FunctionFragment;
    "auctions(uint256)": FunctionFragment;
    "bid(uint256)": FunctionFragment;
    "cakeToken()": FunctionFragment;
    "claimAuction(uint256)": FunctionFragment;
    "claimAuctionLeaderboard(uint256,address[])": FunctionFragment;
    "claimable(uint256,address)": FunctionFragment;
    "closeAuction(uint256)": FunctionFragment;
    "currentAuctionId()": FunctionFragment;
    "maxAuctionLength()": FunctionFragment;
    "operatorAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "recoverToken(address,uint256)": FunctionFragment;
    "removeWhitelist(address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMaxAuctionLength(uint256)": FunctionFragment;
    "setOperatorAddress(address)": FunctionFragment;
    "startAuction(uint256,uint256,uint256,uint256)": FunctionFragment;
    "totalCollected()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "viewAuctions(uint256,uint256)": FunctionFragment;
    "viewBidderAuctions(address,uint256,uint256)": FunctionFragment;
    "viewBidders(uint256,uint256)": FunctionFragment;
    "viewBidsPerAuction(uint256,uint256,uint256)": FunctionFragment;
    "whitelisted(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addWhitelist"
      | "auctionBids"
      | "auctions"
      | "bid"
      | "cakeToken"
      | "claimAuction"
      | "claimAuctionLeaderboard"
      | "claimable"
      | "closeAuction"
      | "currentAuctionId"
      | "maxAuctionLength"
      | "operatorAddress"
      | "owner"
      | "recoverToken"
      | "removeWhitelist"
      | "renounceOwnership"
      | "setMaxAuctionLength"
      | "setOperatorAddress"
      | "startAuction"
      | "totalCollected"
      | "transferOwnership"
      | "viewAuctions"
      | "viewBidderAuctions"
      | "viewBidders"
      | "viewBidsPerAuction"
      | "whitelisted"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "auctionBids",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "bid", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "cakeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAuctionLeaderboard",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "closeAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentAuctionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxAuctionLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "operatorAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxAuctionLength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOperatorAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalCollected",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "viewAuctions",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewBidderAuctions",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewBidders",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewBidsPerAuction",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "whitelisted", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "addWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionBids",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cakeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAuctionLeaderboard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentAuctionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxAuctionLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxAuctionLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalCollected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewBidderAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewBidders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewBidsPerAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelisted",
    data: BytesLike
  ): Result;

  events: {
    "AuctionBid(uint256,address,uint256)": EventFragment;
    "AuctionClaim(uint256,address,uint256,bool)": EventFragment;
    "AuctionClose(uint256,uint256,uint256)": EventFragment;
    "AuctionStart(uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "NewMaxAuctionLength(uint256)": EventFragment;
    "NewOperatorAddress(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenRecovery(address,uint256)": EventFragment;
    "WhitelistAdd(address)": EventFragment;
    "WhitelistRemove(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionClaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionClose"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionStart"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewMaxAuctionLength"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOperatorAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRecovery"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistAdd"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistRemove"): EventFragment;
}

export interface AuctionBidEventObject {
  auctionId: BigNumber;
  account: string;
  amount: BigNumber;
}
export type AuctionBidEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  AuctionBidEventObject
>;

export type AuctionBidEventFilter = TypedEventFilter<AuctionBidEvent>;

export interface AuctionClaimEventObject {
  auctionId: BigNumber;
  account: string;
  amount: BigNumber;
  isAdmin: boolean;
}
export type AuctionClaimEvent = TypedEvent<
  [BigNumber, string, BigNumber, boolean],
  AuctionClaimEventObject
>;

export type AuctionClaimEventFilter = TypedEventFilter<AuctionClaimEvent>;

export interface AuctionCloseEventObject {
  auctionId: BigNumber;
  participationLimit: BigNumber;
  numberParticipants: BigNumber;
}
export type AuctionCloseEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AuctionCloseEventObject
>;

export type AuctionCloseEventFilter = TypedEventFilter<AuctionCloseEvent>;

export interface AuctionStartEventObject {
  auctionId: BigNumber;
  startBlock: BigNumber;
  endBlock: BigNumber;
  initialBidAmount: BigNumber;
  leaderboard: BigNumber;
}
export type AuctionStartEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  AuctionStartEventObject
>;

export type AuctionStartEventFilter = TypedEventFilter<AuctionStartEvent>;

export interface NewMaxAuctionLengthEventObject {
  maxAuctionLength: BigNumber;
}
export type NewMaxAuctionLengthEvent = TypedEvent<
  [BigNumber],
  NewMaxAuctionLengthEventObject
>;

export type NewMaxAuctionLengthEventFilter =
  TypedEventFilter<NewMaxAuctionLengthEvent>;

export interface NewOperatorAddressEventObject {
  account: string;
}
export type NewOperatorAddressEvent = TypedEvent<
  [string],
  NewOperatorAddressEventObject
>;

export type NewOperatorAddressEventFilter =
  TypedEventFilter<NewOperatorAddressEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenRecoveryEventObject {
  token: string;
  amount: BigNumber;
}
export type TokenRecoveryEvent = TypedEvent<
  [string, BigNumber],
  TokenRecoveryEventObject
>;

export type TokenRecoveryEventFilter = TypedEventFilter<TokenRecoveryEvent>;

export interface WhitelistAddEventObject {
  account: string;
}
export type WhitelistAddEvent = TypedEvent<[string], WhitelistAddEventObject>;

export type WhitelistAddEventFilter = TypedEventFilter<WhitelistAddEvent>;

export interface WhitelistRemoveEventObject {
  account: string;
}
export type WhitelistRemoveEvent = TypedEvent<
  [string],
  WhitelistRemoveEventObject
>;

export type WhitelistRemoveEventFilter = TypedEventFilter<WhitelistRemoveEvent>;

export interface FarmAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FarmAuctionInterface;

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
    addWhitelist(
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    auctionBids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { totalAmount: BigNumber; hasClaimed: boolean }
    >;

    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        status: number;
        startBlock: BigNumber;
        endBlock: BigNumber;
        initialBidAmount: BigNumber;
        leaderboard: BigNumber;
        leaderboardThreshold: BigNumber;
      }
    >;

    bid(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    cakeToken(overrides?: CallOverrides): Promise<[string]>;

    claimAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimAuctionLeaderboard(
      _auctionId: BigNumberish,
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimable(
      auctionId: BigNumberish,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    closeAuction(
      _bidLimit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    currentAuctionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxAuctionLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    operatorAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recoverToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeWhitelist(
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setMaxAuctionLength(
      _maxAuctionLength: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setOperatorAddress(
      _operatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    startAuction(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _initialBidAmount: BigNumberish,
      _leaderboard: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    totalCollected(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    viewAuctions(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[FarmAuction.AuctionStructOutput[], BigNumber]>;

    viewBidderAuctions(
      bidder: string,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], boolean[], BigNumber]>;

    viewBidders(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;

    viewBidsPerAuction(
      auctionId: BigNumberish,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[FarmAuction.BidStructOutput[], BigNumber]>;

    whitelisted(bidder: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  addWhitelist(
    _bidders: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  auctionBids(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean] & { totalAmount: BigNumber; hasClaimed: boolean }
  >;

  auctions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      status: number;
      startBlock: BigNumber;
      endBlock: BigNumber;
      initialBidAmount: BigNumber;
      leaderboard: BigNumber;
      leaderboardThreshold: BigNumber;
    }
  >;

  bid(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  cakeToken(overrides?: CallOverrides): Promise<string>;

  claimAuction(
    _auctionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimAuctionLeaderboard(
    _auctionId: BigNumberish,
    _bidders: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimable(
    auctionId: BigNumberish,
    bidder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  closeAuction(
    _bidLimit: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  currentAuctionId(overrides?: CallOverrides): Promise<BigNumber>;

  maxAuctionLength(overrides?: CallOverrides): Promise<BigNumber>;

  operatorAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  recoverToken(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeWhitelist(
    _bidders: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setMaxAuctionLength(
    _maxAuctionLength: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setOperatorAddress(
    _operatorAddress: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  startAuction(
    _startBlock: BigNumberish,
    _endBlock: BigNumberish,
    _initialBidAmount: BigNumberish,
    _leaderboard: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  totalCollected(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  viewAuctions(
    cursor: BigNumberish,
    size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[FarmAuction.AuctionStructOutput[], BigNumber]>;

  viewBidderAuctions(
    bidder: string,
    cursor: BigNumberish,
    size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[], boolean[], BigNumber]>;

  viewBidders(
    cursor: BigNumberish,
    size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber]>;

  viewBidsPerAuction(
    auctionId: BigNumberish,
    cursor: BigNumberish,
    size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[FarmAuction.BidStructOutput[], BigNumber]>;

  whitelisted(bidder: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    addWhitelist(_bidders: string[], overrides?: CallOverrides): Promise<void>;

    auctionBids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { totalAmount: BigNumber; hasClaimed: boolean }
    >;

    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        status: number;
        startBlock: BigNumber;
        endBlock: BigNumber;
        initialBidAmount: BigNumber;
        leaderboard: BigNumber;
        leaderboardThreshold: BigNumber;
      }
    >;

    bid(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    cakeToken(overrides?: CallOverrides): Promise<string>;

    claimAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimAuctionLeaderboard(
      _auctionId: BigNumberish,
      _bidders: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimable(
      auctionId: BigNumberish,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    closeAuction(
      _bidLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    currentAuctionId(overrides?: CallOverrides): Promise<BigNumber>;

    maxAuctionLength(overrides?: CallOverrides): Promise<BigNumber>;

    operatorAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    recoverToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeWhitelist(
      _bidders: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMaxAuctionLength(
      _maxAuctionLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOperatorAddress(
      _operatorAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    startAuction(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _initialBidAmount: BigNumberish,
      _leaderboard: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalCollected(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    viewAuctions(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[FarmAuction.AuctionStructOutput[], BigNumber]>;

    viewBidderAuctions(
      bidder: string,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[], boolean[], BigNumber]>;

    viewBidders(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber]>;

    viewBidsPerAuction(
      auctionId: BigNumberish,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[FarmAuction.BidStructOutput[], BigNumber]>;

    whitelisted(bidder: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "AuctionBid(uint256,address,uint256)"(
      auctionId?: BigNumberish | null,
      account?: string | null,
      amount?: null
    ): AuctionBidEventFilter;
    AuctionBid(
      auctionId?: BigNumberish | null,
      account?: string | null,
      amount?: null
    ): AuctionBidEventFilter;

    "AuctionClaim(uint256,address,uint256,bool)"(
      auctionId?: BigNumberish | null,
      account?: string | null,
      amount?: null,
      isAdmin?: null
    ): AuctionClaimEventFilter;
    AuctionClaim(
      auctionId?: BigNumberish | null,
      account?: string | null,
      amount?: null,
      isAdmin?: null
    ): AuctionClaimEventFilter;

    "AuctionClose(uint256,uint256,uint256)"(
      auctionId?: BigNumberish | null,
      participationLimit?: null,
      numberParticipants?: null
    ): AuctionCloseEventFilter;
    AuctionClose(
      auctionId?: BigNumberish | null,
      participationLimit?: null,
      numberParticipants?: null
    ): AuctionCloseEventFilter;

    "AuctionStart(uint256,uint256,uint256,uint256,uint256)"(
      auctionId?: BigNumberish | null,
      startBlock?: null,
      endBlock?: null,
      initialBidAmount?: null,
      leaderboard?: null
    ): AuctionStartEventFilter;
    AuctionStart(
      auctionId?: BigNumberish | null,
      startBlock?: null,
      endBlock?: null,
      initialBidAmount?: null,
      leaderboard?: null
    ): AuctionStartEventFilter;

    "NewMaxAuctionLength(uint256)"(
      maxAuctionLength?: null
    ): NewMaxAuctionLengthEventFilter;
    NewMaxAuctionLength(
      maxAuctionLength?: null
    ): NewMaxAuctionLengthEventFilter;

    "NewOperatorAddress(address)"(
      account?: string | null
    ): NewOperatorAddressEventFilter;
    NewOperatorAddress(account?: string | null): NewOperatorAddressEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TokenRecovery(address,uint256)"(
      token?: string | null,
      amount?: null
    ): TokenRecoveryEventFilter;
    TokenRecovery(
      token?: string | null,
      amount?: null
    ): TokenRecoveryEventFilter;

    "WhitelistAdd(address)"(account?: string | null): WhitelistAddEventFilter;
    WhitelistAdd(account?: string | null): WhitelistAddEventFilter;

    "WhitelistRemove(address)"(
      account?: string | null
    ): WhitelistRemoveEventFilter;
    WhitelistRemove(account?: string | null): WhitelistRemoveEventFilter;
  };

  estimateGas: {
    addWhitelist(
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    auctionBids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    auctions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    bid(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    cakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    claimAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimAuctionLeaderboard(
      _auctionId: BigNumberish,
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimable(
      auctionId: BigNumberish,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeAuction(
      _bidLimit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    currentAuctionId(overrides?: CallOverrides): Promise<BigNumber>;

    maxAuctionLength(overrides?: CallOverrides): Promise<BigNumber>;

    operatorAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recoverToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeWhitelist(
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setMaxAuctionLength(
      _maxAuctionLength: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setOperatorAddress(
      _operatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    startAuction(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _initialBidAmount: BigNumberish,
      _leaderboard: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    totalCollected(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    viewAuctions(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewBidderAuctions(
      bidder: string,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewBidders(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewBidsPerAuction(
      auctionId: BigNumberish,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelisted(bidder: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addWhitelist(
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    auctionBids(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bid(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    cakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimAuction(
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimAuctionLeaderboard(
      _auctionId: BigNumberish,
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimable(
      auctionId: BigNumberish,
      bidder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeAuction(
      _bidLimit: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    currentAuctionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxAuctionLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverToken(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeWhitelist(
      _bidders: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setMaxAuctionLength(
      _maxAuctionLength: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setOperatorAddress(
      _operatorAddress: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    startAuction(
      _startBlock: BigNumberish,
      _endBlock: BigNumberish,
      _initialBidAmount: BigNumberish,
      _leaderboard: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    totalCollected(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    viewAuctions(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewBidderAuctions(
      bidder: string,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewBidders(
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewBidsPerAuction(
      auctionId: BigNumberish,
      cursor: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelisted(
      bidder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
