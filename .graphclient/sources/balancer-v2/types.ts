// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BalancerV2Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type AmpUpdate = {
  id: Scalars['ID']['output'];
  poolId: Pool;
  scheduledTimestamp: Scalars['Int']['output'];
  startTimestamp: Scalars['BigInt']['output'];
  endTimestamp: Scalars['BigInt']['output'];
  startAmp: Scalars['BigInt']['output'];
  endAmp: Scalars['BigInt']['output'];
};

export type AmpUpdate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startAmp?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startAmp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endAmp?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endAmp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AmpUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AmpUpdate_filter>>>;
};

export type AmpUpdate_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'scheduledTimestamp'
  | 'startTimestamp'
  | 'endTimestamp'
  | 'startAmp'
  | 'endAmp';

export type Balancer = {
  id: Scalars['ID']['output'];
  poolCount: Scalars['Int']['output'];
  pools?: Maybe<Array<Pool>>;
  snapshots?: Maybe<Array<BalancerSnapshot>>;
  totalLiquidity: Scalars['BigDecimal']['output'];
  totalSwapCount: Scalars['BigInt']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalProtocolFee?: Maybe<Scalars['BigDecimal']['output']>;
  protocolFeesCollector?: Maybe<Scalars['Bytes']['output']>;
};


export type BalancerpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};


export type BalancersnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BalancerSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerSnapshot_filter>;
};

export type BalancerSnapshot = {
  id: Scalars['ID']['output'];
  vault: Balancer;
  timestamp: Scalars['Int']['output'];
  poolCount: Scalars['Int']['output'];
  totalLiquidity: Scalars['BigDecimal']['output'];
  totalSwapCount: Scalars['BigInt']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalProtocolFee?: Maybe<Scalars['BigDecimal']['output']>;
};

export type BalancerSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Balancer_filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolCount?: InputMaybe<Scalars['Int']['input']>;
  poolCount_not?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BalancerSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BalancerSnapshot_filter>>>;
};

export type BalancerSnapshot_orderBy =
  | 'id'
  | 'vault'
  | 'vault__id'
  | 'vault__poolCount'
  | 'vault__totalLiquidity'
  | 'vault__totalSwapCount'
  | 'vault__totalSwapVolume'
  | 'vault__totalSwapFee'
  | 'vault__totalProtocolFee'
  | 'vault__protocolFeesCollector'
  | 'timestamp'
  | 'poolCount'
  | 'totalLiquidity'
  | 'totalSwapCount'
  | 'totalSwapVolume'
  | 'totalSwapFee'
  | 'totalProtocolFee';

export type Balancer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolCount?: InputMaybe<Scalars['Int']['input']>;
  poolCount_not?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pools_?: InputMaybe<Pool_filter>;
  snapshots_?: InputMaybe<BalancerSnapshot_filter>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesCollector?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_not?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_gt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_lt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_gte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_lte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  protocolFeesCollector_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  protocolFeesCollector_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Balancer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Balancer_filter>>>;
};

export type Balancer_orderBy =
  | 'id'
  | 'poolCount'
  | 'pools'
  | 'snapshots'
  | 'totalLiquidity'
  | 'totalSwapCount'
  | 'totalSwapVolume'
  | 'totalSwapFee'
  | 'totalProtocolFee'
  | 'protocolFeesCollector';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CircuitBreaker = {
  id: Scalars['ID']['output'];
  pool: Pool;
  token: PoolToken;
  bptPrice: Scalars['BigDecimal']['output'];
  lowerBoundPercentage: Scalars['BigDecimal']['output'];
  upperBoundPercentage: Scalars['BigDecimal']['output'];
};

export type CircuitBreaker_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<PoolToken_filter>;
  bptPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  bptPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lowerBoundPercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lowerBoundPercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  upperBoundPercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  upperBoundPercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CircuitBreaker_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CircuitBreaker_filter>>>;
};

export type CircuitBreaker_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'token'
  | 'token__id'
  | 'token__assetManager'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__index'
  | 'token__address'
  | 'token__oldPriceRate'
  | 'token__priceRate'
  | 'token__balance'
  | 'token__paidProtocolFees'
  | 'token__cashBalance'
  | 'token__managedBalance'
  | 'token__weight'
  | 'token__isExemptFromYieldProtocolFee'
  | 'bptPrice'
  | 'lowerBoundPercentage'
  | 'upperBoundPercentage';

export type FXOracle = {
  id: Scalars['ID']['output'];
  tokens: Array<Scalars['Bytes']['output']>;
};

export type FXOracle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FXOracle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FXOracle_filter>>>;
};

export type FXOracle_orderBy =
  | 'id'
  | 'tokens';

export type GradualWeightUpdate = {
  id: Scalars['ID']['output'];
  poolId: Pool;
  scheduledTimestamp: Scalars['Int']['output'];
  startTimestamp: Scalars['BigInt']['output'];
  endTimestamp: Scalars['BigInt']['output'];
  startWeights: Array<Scalars['BigInt']['output']>;
  endWeights: Array<Scalars['BigInt']['output']>;
};

export type GradualWeightUpdate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_filter>>>;
};

export type GradualWeightUpdate_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'scheduledTimestamp'
  | 'startTimestamp'
  | 'endTimestamp'
  | 'startWeights'
  | 'endWeights';

export type InvestType =
  | 'Join'
  | 'Exit';

export type JoinExit = {
  id: Scalars['ID']['output'];
  type: InvestType;
  sender: Scalars['Bytes']['output'];
  amounts: Array<Scalars['BigDecimal']['output']>;
  valueUSD?: Maybe<Scalars['BigDecimal']['output']>;
  pool: Pool;
  user: User;
  timestamp: Scalars['Int']['output'];
  tx: Scalars['Bytes']['output'];
  block?: Maybe<Scalars['BigInt']['output']>;
};

export type JoinExit_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<InvestType>;
  type_not?: InputMaybe<InvestType>;
  type_in?: InputMaybe<Array<InvestType>>;
  type_not_in?: InputMaybe<Array<InvestType>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amounts?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  valueUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  valueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tx?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<JoinExit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<JoinExit_filter>>>;
};

export type JoinExit_orderBy =
  | 'id'
  | 'type'
  | 'sender'
  | 'amounts'
  | 'valueUSD'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'user'
  | 'user__id'
  | 'timestamp'
  | 'tx'
  | 'block';

export type LatestPrice = {
  id: Scalars['ID']['output'];
  asset: Scalars['Bytes']['output'];
  pricingAsset: Scalars['Bytes']['output'];
  poolId: Pool;
  price: Scalars['BigDecimal']['output'];
  block: Scalars['BigInt']['output'];
};

export type LatestPrice_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  asset?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LatestPrice_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LatestPrice_filter>>>;
};

export type LatestPrice_orderBy =
  | 'id'
  | 'asset'
  | 'pricingAsset'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'price'
  | 'block';

export type ManagementOperation = {
  id: Scalars['ID']['output'];
  type: OperationType;
  cashDelta: Scalars['BigDecimal']['output'];
  managedDelta: Scalars['BigDecimal']['output'];
  poolTokenId: PoolToken;
  timestamp: Scalars['Int']['output'];
};

export type ManagementOperation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<OperationType>;
  type_not?: InputMaybe<OperationType>;
  type_in?: InputMaybe<Array<OperationType>>;
  type_not_in?: InputMaybe<Array<OperationType>>;
  cashDelta?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cashDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managedDelta?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managedDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolTokenId?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_gt?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_lt?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_gte?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_lte?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolTokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolTokenId_contains?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_?: InputMaybe<PoolToken_filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ManagementOperation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ManagementOperation_filter>>>;
};

export type ManagementOperation_orderBy =
  | 'id'
  | 'type'
  | 'cashDelta'
  | 'managedDelta'
  | 'poolTokenId'
  | 'poolTokenId__id'
  | 'poolTokenId__assetManager'
  | 'poolTokenId__symbol'
  | 'poolTokenId__name'
  | 'poolTokenId__decimals'
  | 'poolTokenId__index'
  | 'poolTokenId__address'
  | 'poolTokenId__oldPriceRate'
  | 'poolTokenId__priceRate'
  | 'poolTokenId__balance'
  | 'poolTokenId__paidProtocolFees'
  | 'poolTokenId__cashBalance'
  | 'poolTokenId__managedBalance'
  | 'poolTokenId__weight'
  | 'poolTokenId__isExemptFromYieldProtocolFee'
  | 'timestamp';

export type OperationType =
  | 'Deposit'
  | 'Withdraw'
  | 'Update';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['ID']['output'];
  address: Scalars['Bytes']['output'];
  poolType?: Maybe<Scalars['String']['output']>;
  poolTypeVersion?: Maybe<Scalars['Int']['output']>;
  factory?: Maybe<Scalars['Bytes']['output']>;
  strategyType: Scalars['Int']['output'];
  oracleEnabled: Scalars['Boolean']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** Indicates if a pool can be swapped against. Combines multiple sources, including offchain curation */
  swapEnabled: Scalars['Boolean']['output'];
  /** The native swapEnabled boolean. internal to the pool. Only applies to Gyro, LBPs and InvestmentPools */
  swapEnabledInternal?: Maybe<Scalars['Boolean']['output']>;
  /** External indication from an offchain permissioned actor */
  swapEnabledCurationSignal?: Maybe<Scalars['Boolean']['output']>;
  swapFee: Scalars['BigDecimal']['output'];
  owner?: Maybe<Scalars['Bytes']['output']>;
  isPaused?: Maybe<Scalars['Boolean']['output']>;
  totalWeight?: Maybe<Scalars['BigDecimal']['output']>;
  totalSwapVolume: Scalars['BigDecimal']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalLiquidity: Scalars['BigDecimal']['output'];
  totalLiquiditySansBPT?: Maybe<Scalars['BigDecimal']['output']>;
  totalShares: Scalars['BigDecimal']['output'];
  totalProtocolFee?: Maybe<Scalars['BigDecimal']['output']>;
  createTime: Scalars['Int']['output'];
  swapsCount: Scalars['BigInt']['output'];
  holdersCount: Scalars['BigInt']['output'];
  vaultID: Balancer;
  tx?: Maybe<Scalars['Bytes']['output']>;
  tokensList: Array<Scalars['Bytes']['output']>;
  tokens?: Maybe<Array<PoolToken>>;
  joinsExits?: Maybe<Array<JoinExit>>;
  swaps?: Maybe<Array<Swap>>;
  shares?: Maybe<Array<PoolShare>>;
  snapshots?: Maybe<Array<PoolSnapshot>>;
  historicalValues?: Maybe<Array<PoolHistoricalLiquidity>>;
  weightUpdates?: Maybe<Array<GradualWeightUpdate>>;
  amp?: Maybe<Scalars['BigInt']['output']>;
  latestAmpUpdate?: Maybe<AmpUpdate>;
  ampUpdates?: Maybe<Array<AmpUpdate>>;
  priceRateProviders?: Maybe<Array<PriceRateProvider>>;
  principalToken?: Maybe<Scalars['Bytes']['output']>;
  baseToken?: Maybe<Scalars['Bytes']['output']>;
  expiryTime?: Maybe<Scalars['BigInt']['output']>;
  unitSeconds?: Maybe<Scalars['BigInt']['output']>;
  managementFee?: Maybe<Scalars['BigDecimal']['output']>;
  joinExitEnabled?: Maybe<Scalars['Boolean']['output']>;
  mustAllowlistLPs?: Maybe<Scalars['Boolean']['output']>;
  managementAumFee?: Maybe<Scalars['BigDecimal']['output']>;
  totalAumFeeCollectedInBPT?: Maybe<Scalars['BigDecimal']['output']>;
  circuitBreakers?: Maybe<Array<CircuitBreaker>>;
  mainIndex?: Maybe<Scalars['Int']['output']>;
  wrappedIndex?: Maybe<Scalars['Int']['output']>;
  lowerTarget?: Maybe<Scalars['BigDecimal']['output']>;
  upperTarget?: Maybe<Scalars['BigDecimal']['output']>;
  sqrtAlpha?: Maybe<Scalars['BigDecimal']['output']>;
  sqrtBeta?: Maybe<Scalars['BigDecimal']['output']>;
  root3Alpha?: Maybe<Scalars['BigDecimal']['output']>;
  c?: Maybe<Scalars['BigDecimal']['output']>;
  s?: Maybe<Scalars['BigDecimal']['output']>;
  tauAlphaX?: Maybe<Scalars['BigDecimal']['output']>;
  tauAlphaY?: Maybe<Scalars['BigDecimal']['output']>;
  tauBetaX?: Maybe<Scalars['BigDecimal']['output']>;
  tauBetaY?: Maybe<Scalars['BigDecimal']['output']>;
  u?: Maybe<Scalars['BigDecimal']['output']>;
  v?: Maybe<Scalars['BigDecimal']['output']>;
  w?: Maybe<Scalars['BigDecimal']['output']>;
  z?: Maybe<Scalars['BigDecimal']['output']>;
  dSq?: Maybe<Scalars['BigDecimal']['output']>;
  alpha?: Maybe<Scalars['BigDecimal']['output']>;
  beta?: Maybe<Scalars['BigDecimal']['output']>;
  lambda?: Maybe<Scalars['BigDecimal']['output']>;
  delta?: Maybe<Scalars['BigDecimal']['output']>;
  epsilon?: Maybe<Scalars['BigDecimal']['output']>;
  isInRecoveryMode?: Maybe<Scalars['Boolean']['output']>;
  protocolSwapFeeCache?: Maybe<Scalars['BigDecimal']['output']>;
  protocolYieldFeeCache?: Maybe<Scalars['BigDecimal']['output']>;
  protocolAumFeeCache?: Maybe<Scalars['BigDecimal']['output']>;
  totalProtocolFeePaidInBPT?: Maybe<Scalars['BigDecimal']['output']>;
  lastJoinExitAmp?: Maybe<Scalars['BigInt']['output']>;
  lastPostJoinExitInvariant?: Maybe<Scalars['BigDecimal']['output']>;
  protocolId?: Maybe<Scalars['Int']['output']>;
  protocolIdData?: Maybe<ProtocolIdData>;
};


export type PooltokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolToken_filter>;
};


export type PooljoinsExitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JoinExit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JoinExit_filter>;
};


export type PoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type PoolsharesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolShare_filter>;
};


export type PoolsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolSnapshot_filter>;
};


export type PoolhistoricalValuesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHistoricalLiquidity_filter>;
};


export type PoolweightUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradualWeightUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GradualWeightUpdate_filter>;
};


export type PoolampUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AmpUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AmpUpdate_filter>;
};


export type PoolpriceRateProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceRateProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceRateProvider_filter>;
};


export type PoolcircuitBreakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CircuitBreaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CircuitBreaker_filter>;
};

export type PoolContract = {
  id: Scalars['ID']['output'];
  pool: Pool;
};

export type PoolContract_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolContract_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolContract_filter>>>;
};

export type PoolContract_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId';

export type PoolHistoricalLiquidity = {
  id: Scalars['ID']['output'];
  poolId: Pool;
  poolTotalShares: Scalars['BigDecimal']['output'];
  poolLiquidity: Scalars['BigDecimal']['output'];
  poolShareValue: Scalars['BigDecimal']['output'];
  pricingAsset: Scalars['Bytes']['output'];
  block: Scalars['BigInt']['output'];
};

export type PoolHistoricalLiquidity_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  poolTotalShares?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolTotalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolShareValue?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolShareValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pricingAsset?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_filter>>>;
};

export type PoolHistoricalLiquidity_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'poolTotalShares'
  | 'poolLiquidity'
  | 'poolShareValue'
  | 'pricingAsset'
  | 'block';

export type PoolShare = {
  id: Scalars['ID']['output'];
  userAddress: User;
  poolId: Pool;
  balance: Scalars['BigDecimal']['output'];
};

export type PoolShare_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  userAddress?: InputMaybe<Scalars['String']['input']>;
  userAddress_not?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_?: InputMaybe<User_filter>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolShare_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolShare_filter>>>;
};

export type PoolShare_orderBy =
  | 'id'
  | 'userAddress'
  | 'userAddress__id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'balance';

export type PoolSnapshot = {
  id: Scalars['ID']['output'];
  pool: Pool;
  amounts: Array<Scalars['BigDecimal']['output']>;
  totalShares: Scalars['BigDecimal']['output'];
  swapVolume: Scalars['BigDecimal']['output'];
  protocolFee?: Maybe<Scalars['BigDecimal']['output']>;
  swapFees: Scalars['BigDecimal']['output'];
  liquidity: Scalars['BigDecimal']['output'];
  swapsCount: Scalars['BigInt']['output'];
  holdersCount: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
};

export type PoolSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  amounts?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapFees?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapFees_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapsCount?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdersCount?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolSnapshot_filter>>>;
};

export type PoolSnapshot_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'amounts'
  | 'totalShares'
  | 'swapVolume'
  | 'protocolFee'
  | 'swapFees'
  | 'liquidity'
  | 'swapsCount'
  | 'holdersCount'
  | 'timestamp';

export type PoolToken = {
  id: Scalars['ID']['output'];
  poolId?: Maybe<Pool>;
  token: Token;
  assetManager: Scalars['Bytes']['output'];
  symbol: Scalars['String']['output'];
  name: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  address: Scalars['String']['output'];
  oldPriceRate?: Maybe<Scalars['BigDecimal']['output']>;
  priceRate: Scalars['BigDecimal']['output'];
  balance: Scalars['BigDecimal']['output'];
  paidProtocolFees?: Maybe<Scalars['BigDecimal']['output']>;
  cashBalance: Scalars['BigDecimal']['output'];
  managedBalance: Scalars['BigDecimal']['output'];
  managements?: Maybe<Array<ManagementOperation>>;
  weight?: Maybe<Scalars['BigDecimal']['output']>;
  isExemptFromYieldProtocolFee?: Maybe<Scalars['Boolean']['output']>;
  circuitBreaker?: Maybe<CircuitBreaker>;
};


export type PoolTokenmanagementsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ManagementOperation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ManagementOperation_filter>;
};

export type PoolToken_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  assetManager?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_not?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetManager_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetManager_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  index?: InputMaybe<Scalars['Int']['input']>;
  index_not?: InputMaybe<Scalars['Int']['input']>;
  index_gt?: InputMaybe<Scalars['Int']['input']>;
  index_lt?: InputMaybe<Scalars['Int']['input']>;
  index_gte?: InputMaybe<Scalars['Int']['input']>;
  index_lte?: InputMaybe<Scalars['Int']['input']>;
  index_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldPriceRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oldPriceRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  paidProtocolFees?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  paidProtocolFees_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cashBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cashBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managedBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managedBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managements_?: InputMaybe<ManagementOperation_filter>;
  weight?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  isExemptFromYieldProtocolFee?: InputMaybe<Scalars['Boolean']['input']>;
  isExemptFromYieldProtocolFee_not?: InputMaybe<Scalars['Boolean']['input']>;
  isExemptFromYieldProtocolFee_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isExemptFromYieldProtocolFee_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  circuitBreaker?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_gt?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_lt?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_gte?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_lte?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  circuitBreaker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  circuitBreaker_contains?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_contains?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_starts_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_ends_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_?: InputMaybe<CircuitBreaker_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolToken_filter>>>;
};

export type PoolToken_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__address'
  | 'token__totalBalanceUSD'
  | 'token__totalBalanceNotional'
  | 'token__totalVolumeUSD'
  | 'token__totalVolumeNotional'
  | 'token__totalSwapCount'
  | 'token__latestUSDPrice'
  | 'token__latestUSDPriceTimestamp'
  | 'token__latestFXPrice'
  | 'token__fxOracleDecimals'
  | 'assetManager'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'index'
  | 'address'
  | 'oldPriceRate'
  | 'priceRate'
  | 'balance'
  | 'paidProtocolFees'
  | 'cashBalance'
  | 'managedBalance'
  | 'managements'
  | 'weight'
  | 'isExemptFromYieldProtocolFee'
  | 'circuitBreaker'
  | 'circuitBreaker__id'
  | 'circuitBreaker__bptPrice'
  | 'circuitBreaker__lowerBoundPercentage'
  | 'circuitBreaker__upperBoundPercentage';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  poolType?: InputMaybe<Scalars['String']['input']>;
  poolType_not?: InputMaybe<Scalars['String']['input']>;
  poolType_gt?: InputMaybe<Scalars['String']['input']>;
  poolType_lt?: InputMaybe<Scalars['String']['input']>;
  poolType_gte?: InputMaybe<Scalars['String']['input']>;
  poolType_lte?: InputMaybe<Scalars['String']['input']>;
  poolType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolType_contains?: InputMaybe<Scalars['String']['input']>;
  poolType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTypeVersion?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_not?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_gt?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_lt?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_gte?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_lte?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolTypeVersion_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  factory?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_lt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_lte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  factory_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  factory_contains?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  strategyType?: InputMaybe<Scalars['Int']['input']>;
  strategyType_not?: InputMaybe<Scalars['Int']['input']>;
  strategyType_gt?: InputMaybe<Scalars['Int']['input']>;
  strategyType_lt?: InputMaybe<Scalars['Int']['input']>;
  strategyType_gte?: InputMaybe<Scalars['Int']['input']>;
  strategyType_lte?: InputMaybe<Scalars['Int']['input']>;
  strategyType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  strategyType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  oracleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  oracleEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  oracleEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  oracleEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  swapEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapEnabledInternal?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabledInternal_not?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabledInternal_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapEnabledInternal_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapEnabledCurationSignal?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabledCurationSignal_not?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabledCurationSignal_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapEnabledCurationSignal_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
  isPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquiditySansBPT?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquiditySansBPT_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquiditySansBPT_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquiditySansBPT_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquiditySansBPT_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquiditySansBPT_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquiditySansBPT_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquiditySansBPT_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  createTime?: InputMaybe<Scalars['Int']['input']>;
  createTime_not?: InputMaybe<Scalars['Int']['input']>;
  createTime_gt?: InputMaybe<Scalars['Int']['input']>;
  createTime_lt?: InputMaybe<Scalars['Int']['input']>;
  createTime_gte?: InputMaybe<Scalars['Int']['input']>;
  createTime_lte?: InputMaybe<Scalars['Int']['input']>;
  createTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  swapsCount?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdersCount?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vaultID?: InputMaybe<Scalars['String']['input']>;
  vaultID_not?: InputMaybe<Scalars['String']['input']>;
  vaultID_gt?: InputMaybe<Scalars['String']['input']>;
  vaultID_lt?: InputMaybe<Scalars['String']['input']>;
  vaultID_gte?: InputMaybe<Scalars['String']['input']>;
  vaultID_lte?: InputMaybe<Scalars['String']['input']>;
  vaultID_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vaultID_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vaultID_contains?: InputMaybe<Scalars['String']['input']>;
  vaultID_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_contains?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_starts_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_ends_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_?: InputMaybe<Balancer_filter>;
  tx?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokensList?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_?: InputMaybe<PoolToken_filter>;
  joinsExits_?: InputMaybe<JoinExit_filter>;
  swaps_?: InputMaybe<Swap_filter>;
  shares_?: InputMaybe<PoolShare_filter>;
  snapshots_?: InputMaybe<PoolSnapshot_filter>;
  historicalValues_?: InputMaybe<PoolHistoricalLiquidity_filter>;
  weightUpdates_?: InputMaybe<GradualWeightUpdate_filter>;
  amp?: InputMaybe<Scalars['BigInt']['input']>;
  amp_not?: InputMaybe<Scalars['BigInt']['input']>;
  amp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestAmpUpdate?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_not?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_gt?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_lt?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_gte?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_lte?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestAmpUpdate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestAmpUpdate_contains?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_not_contains?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestAmpUpdate_?: InputMaybe<AmpUpdate_filter>;
  ampUpdates_?: InputMaybe<AmpUpdate_filter>;
  priceRateProviders_?: InputMaybe<PriceRateProvider_filter>;
  principalToken?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  principalToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  principalToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  expiryTime?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expiryTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unitSeconds?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_not?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unitSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  managementFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managementFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  joinExitEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  joinExitEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  joinExitEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  joinExitEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  mustAllowlistLPs?: InputMaybe<Scalars['Boolean']['input']>;
  mustAllowlistLPs_not?: InputMaybe<Scalars['Boolean']['input']>;
  mustAllowlistLPs_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  mustAllowlistLPs_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  managementAumFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managementAumFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalAumFeeCollectedInBPT?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalAumFeeCollectedInBPT_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  circuitBreakers_?: InputMaybe<CircuitBreaker_filter>;
  mainIndex?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_not?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  mainIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  wrappedIndex?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_not?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  wrappedIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lowerTarget?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lowerTarget_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  upperTarget?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  upperTarget_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtAlpha?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtAlpha_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtBeta?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtBeta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  root3Alpha?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  root3Alpha_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  c?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  c_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  s?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  s_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauAlphaX?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauAlphaX_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauAlphaY?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauAlphaY_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaX?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaX_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaY?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaY_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  u?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  u_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  v?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  v_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  w?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  w_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  z?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  z_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dSq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dSq_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  alpha?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  alpha_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  beta?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  beta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lambda?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lambda_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delta?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  epsilon?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  epsilon_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  isInRecoveryMode?: InputMaybe<Scalars['Boolean']['input']>;
  isInRecoveryMode_not?: InputMaybe<Scalars['Boolean']['input']>;
  isInRecoveryMode_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isInRecoveryMode_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  protocolSwapFeeCache?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolSwapFeeCache_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolYieldFeeCache?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolYieldFeeCache_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolAumFeeCache?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolAumFeeCache_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFeePaidInBPT?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFeePaidInBPT_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastJoinExitAmp?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastJoinExitAmp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPostJoinExitInvariant?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastPostJoinExitInvariant_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolId?: InputMaybe<Scalars['Int']['input']>;
  protocolId_not?: InputMaybe<Scalars['Int']['input']>;
  protocolId_gt?: InputMaybe<Scalars['Int']['input']>;
  protocolId_lt?: InputMaybe<Scalars['Int']['input']>;
  protocolId_gte?: InputMaybe<Scalars['Int']['input']>;
  protocolId_lte?: InputMaybe<Scalars['Int']['input']>;
  protocolId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolIdData?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_gt?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_lt?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_gte?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_lte?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocolIdData_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocolIdData_contains?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_?: InputMaybe<ProtocolIdData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'address'
  | 'poolType'
  | 'poolTypeVersion'
  | 'factory'
  | 'strategyType'
  | 'oracleEnabled'
  | 'symbol'
  | 'name'
  | 'swapEnabled'
  | 'swapEnabledInternal'
  | 'swapEnabledCurationSignal'
  | 'swapFee'
  | 'owner'
  | 'isPaused'
  | 'totalWeight'
  | 'totalSwapVolume'
  | 'totalSwapFee'
  | 'totalLiquidity'
  | 'totalLiquiditySansBPT'
  | 'totalShares'
  | 'totalProtocolFee'
  | 'createTime'
  | 'swapsCount'
  | 'holdersCount'
  | 'vaultID'
  | 'vaultID__id'
  | 'vaultID__poolCount'
  | 'vaultID__totalLiquidity'
  | 'vaultID__totalSwapCount'
  | 'vaultID__totalSwapVolume'
  | 'vaultID__totalSwapFee'
  | 'vaultID__totalProtocolFee'
  | 'vaultID__protocolFeesCollector'
  | 'tx'
  | 'tokensList'
  | 'tokens'
  | 'joinsExits'
  | 'swaps'
  | 'shares'
  | 'snapshots'
  | 'historicalValues'
  | 'weightUpdates'
  | 'amp'
  | 'latestAmpUpdate'
  | 'latestAmpUpdate__id'
  | 'latestAmpUpdate__scheduledTimestamp'
  | 'latestAmpUpdate__startTimestamp'
  | 'latestAmpUpdate__endTimestamp'
  | 'latestAmpUpdate__startAmp'
  | 'latestAmpUpdate__endAmp'
  | 'ampUpdates'
  | 'priceRateProviders'
  | 'principalToken'
  | 'baseToken'
  | 'expiryTime'
  | 'unitSeconds'
  | 'managementFee'
  | 'joinExitEnabled'
  | 'mustAllowlistLPs'
  | 'managementAumFee'
  | 'totalAumFeeCollectedInBPT'
  | 'circuitBreakers'
  | 'mainIndex'
  | 'wrappedIndex'
  | 'lowerTarget'
  | 'upperTarget'
  | 'sqrtAlpha'
  | 'sqrtBeta'
  | 'root3Alpha'
  | 'c'
  | 's'
  | 'tauAlphaX'
  | 'tauAlphaY'
  | 'tauBetaX'
  | 'tauBetaY'
  | 'u'
  | 'v'
  | 'w'
  | 'z'
  | 'dSq'
  | 'alpha'
  | 'beta'
  | 'lambda'
  | 'delta'
  | 'epsilon'
  | 'isInRecoveryMode'
  | 'protocolSwapFeeCache'
  | 'protocolYieldFeeCache'
  | 'protocolAumFeeCache'
  | 'totalProtocolFeePaidInBPT'
  | 'lastJoinExitAmp'
  | 'lastPostJoinExitInvariant'
  | 'protocolId'
  | 'protocolIdData'
  | 'protocolIdData__id'
  | 'protocolIdData__name';

export type PriceRateProvider = {
  id: Scalars['ID']['output'];
  poolId: Pool;
  token: PoolToken;
  address: Scalars['Bytes']['output'];
  rate?: Maybe<Scalars['BigDecimal']['output']>;
  lastCached?: Maybe<Scalars['Int']['output']>;
  cacheDuration?: Maybe<Scalars['Int']['output']>;
  cacheExpiry?: Maybe<Scalars['Int']['output']>;
};

export type PriceRateProvider_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<PoolToken_filter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  rate?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  rate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastCached?: InputMaybe<Scalars['Int']['input']>;
  lastCached_not?: InputMaybe<Scalars['Int']['input']>;
  lastCached_gt?: InputMaybe<Scalars['Int']['input']>;
  lastCached_lt?: InputMaybe<Scalars['Int']['input']>;
  lastCached_gte?: InputMaybe<Scalars['Int']['input']>;
  lastCached_lte?: InputMaybe<Scalars['Int']['input']>;
  lastCached_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastCached_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cacheDuration?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_not?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_gt?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_lt?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_gte?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_lte?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cacheDuration_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cacheExpiry?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_not?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_gt?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_lt?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_gte?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_lte?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cacheExpiry_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PriceRateProvider_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PriceRateProvider_filter>>>;
};

export type PriceRateProvider_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'token'
  | 'token__id'
  | 'token__assetManager'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__index'
  | 'token__address'
  | 'token__oldPriceRate'
  | 'token__priceRate'
  | 'token__balance'
  | 'token__paidProtocolFees'
  | 'token__cashBalance'
  | 'token__managedBalance'
  | 'token__weight'
  | 'token__isExemptFromYieldProtocolFee'
  | 'address'
  | 'rate'
  | 'lastCached'
  | 'cacheDuration'
  | 'cacheExpiry';

export type ProtocolIdData = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProtocolIdData_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolIdData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProtocolIdData_filter>>>;
};

export type ProtocolIdData_orderBy =
  | 'id'
  | 'name';

export type Query = {
  balancer?: Maybe<Balancer>;
  balancers: Array<Balancer>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolContract?: Maybe<PoolContract>;
  poolContracts: Array<PoolContract>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  circuitBreaker?: Maybe<CircuitBreaker>;
  circuitBreakers: Array<CircuitBreaker>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  user?: Maybe<User>;
  users: Array<User>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  ampUpdate?: Maybe<AmpUpdate>;
  ampUpdates: Array<AmpUpdate>;
  swapFeeUpdate?: Maybe<SwapFeeUpdate>;
  swapFeeUpdates: Array<SwapFeeUpdate>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  managementOperation?: Maybe<ManagementOperation>;
  managementOperations: Array<ManagementOperation>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenSnapshot?: Maybe<TokenSnapshot>;
  tokenSnapshots: Array<TokenSnapshot>;
  tradePair?: Maybe<TradePair>;
  tradePairs: Array<TradePair>;
  tradePairSnapshot?: Maybe<TradePairSnapshot>;
  tradePairSnapshots: Array<TradePairSnapshot>;
  balancerSnapshot?: Maybe<BalancerSnapshot>;
  balancerSnapshots: Array<BalancerSnapshot>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolIdDatas: Array<ProtocolIdData>;
  fxoracle?: Maybe<FXOracle>;
  fxoracles: Array<FXOracle>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerybalancerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybalancersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balancer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balancer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolContractArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolContractsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceRateProviderArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceRateProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceRateProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceRateProvider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycircuitBreakerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycircuitBreakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CircuitBreaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CircuitBreaker_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolShareArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolSharesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolShare_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserInternalBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserInternalBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserInternalBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserInternalBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygradualWeightUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygradualWeightUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradualWeightUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GradualWeightUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryampUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryampUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AmpUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AmpUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapFeeUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapFeeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapFeeUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapFeeUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryjoinExitArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryjoinExitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JoinExit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JoinExit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylatestPriceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylatestPricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LatestPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LatestPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHistoricalLiquidityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHistoricalLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHistoricalLiquidity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPriceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymanagementOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymanagementOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ManagementOperation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ManagementOperation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradePairArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradePairsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradePair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradePairSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradePairSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePairSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradePairSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybalancerSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybalancerSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BalancerSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolIdDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolIdDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolIdData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolIdData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfxoracleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfxoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FXOracle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FXOracle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  balancer?: Maybe<Balancer>;
  balancers: Array<Balancer>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolContract?: Maybe<PoolContract>;
  poolContracts: Array<PoolContract>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  circuitBreaker?: Maybe<CircuitBreaker>;
  circuitBreakers: Array<CircuitBreaker>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  user?: Maybe<User>;
  users: Array<User>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  ampUpdate?: Maybe<AmpUpdate>;
  ampUpdates: Array<AmpUpdate>;
  swapFeeUpdate?: Maybe<SwapFeeUpdate>;
  swapFeeUpdates: Array<SwapFeeUpdate>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  managementOperation?: Maybe<ManagementOperation>;
  managementOperations: Array<ManagementOperation>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  tokenSnapshot?: Maybe<TokenSnapshot>;
  tokenSnapshots: Array<TokenSnapshot>;
  tradePair?: Maybe<TradePair>;
  tradePairs: Array<TradePair>;
  tradePairSnapshot?: Maybe<TradePairSnapshot>;
  tradePairSnapshots: Array<TradePairSnapshot>;
  balancerSnapshot?: Maybe<BalancerSnapshot>;
  balancerSnapshots: Array<BalancerSnapshot>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolIdDatas: Array<ProtocolIdData>;
  fxoracle?: Maybe<FXOracle>;
  fxoracles: Array<FXOracle>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionbalancerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbalancersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balancer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balancer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolContractArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolContractsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolContract_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolContract_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceRateProviderArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceRateProvidersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceRateProvider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PriceRateProvider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncircuitBreakerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncircuitBreakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CircuitBreaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CircuitBreaker_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolShareArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolSharesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolShare_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserInternalBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserInternalBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserInternalBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserInternalBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongradualWeightUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongradualWeightUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradualWeightUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GradualWeightUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionampUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionampUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AmpUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AmpUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapFeeUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapFeeUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapFeeUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapFeeUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionjoinExitArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionjoinExitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JoinExit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<JoinExit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlatestPriceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlatestPricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LatestPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LatestPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHistoricalLiquidityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHistoricalLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHistoricalLiquidity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPriceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmanagementOperationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmanagementOperationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ManagementOperation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ManagementOperation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradePairArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradePairsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradePair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradePairSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradePairSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePairSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradePairSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbalancerSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbalancerSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BalancerSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BalancerSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolIdDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolIdDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolIdData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProtocolIdData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfxoracleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfxoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FXOracle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FXOracle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = {
  id: Scalars['ID']['output'];
  caller: Scalars['Bytes']['output'];
  tokenIn: Scalars['Bytes']['output'];
  tokenInSym: Scalars['String']['output'];
  tokenOut: Scalars['Bytes']['output'];
  tokenOutSym: Scalars['String']['output'];
  tokenAmountIn: Scalars['BigDecimal']['output'];
  tokenAmountOut: Scalars['BigDecimal']['output'];
  valueUSD: Scalars['BigDecimal']['output'];
  poolId: Pool;
  userAddress: User;
  timestamp: Scalars['Int']['output'];
  block?: Maybe<Scalars['BigInt']['output']>;
  tx: Scalars['Bytes']['output'];
};

export type SwapFeeUpdate = {
  id: Scalars['ID']['output'];
  pool: Pool;
  scheduledTimestamp: Scalars['Int']['output'];
  startTimestamp: Scalars['BigInt']['output'];
  endTimestamp: Scalars['BigInt']['output'];
  startSwapFeePercentage: Scalars['BigDecimal']['output'];
  endSwapFeePercentage: Scalars['BigDecimal']['output'];
};

export type SwapFeeUpdate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startSwapFeePercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  startSwapFeePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  endSwapFeePercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  endSwapFeePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_filter>>>;
};

export type SwapFeeUpdate_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'scheduledTimestamp'
  | 'startTimestamp'
  | 'endTimestamp'
  | 'startSwapFeePercentage'
  | 'endSwapFeePercentage';

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenIn_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenInSym?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_gt?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_lt?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_gte?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_lte?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInSym_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInSym_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenOut_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOutSym?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_gt?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_lt?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_gte?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_lte?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenOutSym_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenOutSym_contains?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenAmountIn?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenAmountIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenAmountOut?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenAmountOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  valueUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  valueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  userAddress?: InputMaybe<Scalars['String']['input']>;
  userAddress_not?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tx?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
};

export type Swap_orderBy =
  | 'id'
  | 'caller'
  | 'tokenIn'
  | 'tokenInSym'
  | 'tokenOut'
  | 'tokenOutSym'
  | 'tokenAmountIn'
  | 'tokenAmountOut'
  | 'valueUSD'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'userAddress'
  | 'userAddress__id'
  | 'timestamp'
  | 'block'
  | 'tx';

export type Token = {
  id: Scalars['ID']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  decimals: Scalars['Int']['output'];
  address: Scalars['String']['output'];
  totalBalanceUSD: Scalars['BigDecimal']['output'];
  totalBalanceNotional: Scalars['BigDecimal']['output'];
  totalVolumeUSD: Scalars['BigDecimal']['output'];
  totalVolumeNotional: Scalars['BigDecimal']['output'];
  totalSwapCount: Scalars['BigInt']['output'];
  latestPrice?: Maybe<LatestPrice>;
  latestUSDPrice?: Maybe<Scalars['BigDecimal']['output']>;
  latestUSDPriceTimestamp?: Maybe<Scalars['BigInt']['output']>;
  latestFXPrice?: Maybe<Scalars['BigDecimal']['output']>;
  pool?: Maybe<Pool>;
  fxOracleDecimals?: Maybe<Scalars['Int']['output']>;
};

export type TokenPrice = {
  id: Scalars['ID']['output'];
  poolId: Pool;
  asset: Scalars['Bytes']['output'];
  amount: Scalars['BigDecimal']['output'];
  pricingAsset: Scalars['Bytes']['output'];
  price: Scalars['BigDecimal']['output'];
  block: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
};

export type TokenPrice_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_filter>;
  asset?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pricingAsset?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenPrice_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenPrice_filter>>>;
};

export type TokenPrice_orderBy =
  | 'id'
  | 'poolId'
  | 'poolId__id'
  | 'poolId__address'
  | 'poolId__poolType'
  | 'poolId__poolTypeVersion'
  | 'poolId__factory'
  | 'poolId__strategyType'
  | 'poolId__oracleEnabled'
  | 'poolId__symbol'
  | 'poolId__name'
  | 'poolId__swapEnabled'
  | 'poolId__swapEnabledInternal'
  | 'poolId__swapEnabledCurationSignal'
  | 'poolId__swapFee'
  | 'poolId__owner'
  | 'poolId__isPaused'
  | 'poolId__totalWeight'
  | 'poolId__totalSwapVolume'
  | 'poolId__totalSwapFee'
  | 'poolId__totalLiquidity'
  | 'poolId__totalLiquiditySansBPT'
  | 'poolId__totalShares'
  | 'poolId__totalProtocolFee'
  | 'poolId__createTime'
  | 'poolId__swapsCount'
  | 'poolId__holdersCount'
  | 'poolId__tx'
  | 'poolId__amp'
  | 'poolId__principalToken'
  | 'poolId__baseToken'
  | 'poolId__expiryTime'
  | 'poolId__unitSeconds'
  | 'poolId__managementFee'
  | 'poolId__joinExitEnabled'
  | 'poolId__mustAllowlistLPs'
  | 'poolId__managementAumFee'
  | 'poolId__totalAumFeeCollectedInBPT'
  | 'poolId__mainIndex'
  | 'poolId__wrappedIndex'
  | 'poolId__lowerTarget'
  | 'poolId__upperTarget'
  | 'poolId__sqrtAlpha'
  | 'poolId__sqrtBeta'
  | 'poolId__root3Alpha'
  | 'poolId__c'
  | 'poolId__s'
  | 'poolId__tauAlphaX'
  | 'poolId__tauAlphaY'
  | 'poolId__tauBetaX'
  | 'poolId__tauBetaY'
  | 'poolId__u'
  | 'poolId__v'
  | 'poolId__w'
  | 'poolId__z'
  | 'poolId__dSq'
  | 'poolId__alpha'
  | 'poolId__beta'
  | 'poolId__lambda'
  | 'poolId__delta'
  | 'poolId__epsilon'
  | 'poolId__isInRecoveryMode'
  | 'poolId__protocolSwapFeeCache'
  | 'poolId__protocolYieldFeeCache'
  | 'poolId__protocolAumFeeCache'
  | 'poolId__totalProtocolFeePaidInBPT'
  | 'poolId__lastJoinExitAmp'
  | 'poolId__lastPostJoinExitInvariant'
  | 'poolId__protocolId'
  | 'asset'
  | 'amount'
  | 'pricingAsset'
  | 'price'
  | 'block'
  | 'timestamp';

export type TokenSnapshot = {
  id: Scalars['ID']['output'];
  token: Token;
  timestamp: Scalars['Int']['output'];
  totalBalanceUSD: Scalars['BigDecimal']['output'];
  totalBalanceNotional: Scalars['BigDecimal']['output'];
  totalVolumeUSD: Scalars['BigDecimal']['output'];
  totalVolumeNotional: Scalars['BigDecimal']['output'];
  totalSwapCount: Scalars['BigInt']['output'];
};

export type TokenSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalBalanceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenSnapshot_filter>>>;
};

export type TokenSnapshot_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__symbol'
  | 'token__name'
  | 'token__decimals'
  | 'token__address'
  | 'token__totalBalanceUSD'
  | 'token__totalBalanceNotional'
  | 'token__totalVolumeUSD'
  | 'token__totalVolumeNotional'
  | 'token__totalSwapCount'
  | 'token__latestUSDPrice'
  | 'token__latestUSDPriceTimestamp'
  | 'token__latestFXPrice'
  | 'token__fxOracleDecimals'
  | 'timestamp'
  | 'totalBalanceUSD'
  | 'totalBalanceNotional'
  | 'totalVolumeUSD'
  | 'totalVolumeNotional'
  | 'totalSwapCount';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalBalanceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestPrice?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not?: InputMaybe<Scalars['String']['input']>;
  latestPrice_gt?: InputMaybe<Scalars['String']['input']>;
  latestPrice_lt?: InputMaybe<Scalars['String']['input']>;
  latestPrice_gte?: InputMaybe<Scalars['String']['input']>;
  latestPrice_lte?: InputMaybe<Scalars['String']['input']>;
  latestPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestPrice_contains?: InputMaybe<Scalars['String']['input']>;
  latestPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_?: InputMaybe<LatestPrice_filter>;
  latestUSDPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestUSDPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestUSDPriceTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestUSDPriceTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestFXPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestFXPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  fxOracleDecimals?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fxOracleDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'address'
  | 'totalBalanceUSD'
  | 'totalBalanceNotional'
  | 'totalVolumeUSD'
  | 'totalVolumeNotional'
  | 'totalSwapCount'
  | 'latestPrice'
  | 'latestPrice__id'
  | 'latestPrice__asset'
  | 'latestPrice__pricingAsset'
  | 'latestPrice__price'
  | 'latestPrice__block'
  | 'latestUSDPrice'
  | 'latestUSDPriceTimestamp'
  | 'latestFXPrice'
  | 'pool'
  | 'pool__id'
  | 'pool__address'
  | 'pool__poolType'
  | 'pool__poolTypeVersion'
  | 'pool__factory'
  | 'pool__strategyType'
  | 'pool__oracleEnabled'
  | 'pool__symbol'
  | 'pool__name'
  | 'pool__swapEnabled'
  | 'pool__swapEnabledInternal'
  | 'pool__swapEnabledCurationSignal'
  | 'pool__swapFee'
  | 'pool__owner'
  | 'pool__isPaused'
  | 'pool__totalWeight'
  | 'pool__totalSwapVolume'
  | 'pool__totalSwapFee'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquiditySansBPT'
  | 'pool__totalShares'
  | 'pool__totalProtocolFee'
  | 'pool__createTime'
  | 'pool__swapsCount'
  | 'pool__holdersCount'
  | 'pool__tx'
  | 'pool__amp'
  | 'pool__principalToken'
  | 'pool__baseToken'
  | 'pool__expiryTime'
  | 'pool__unitSeconds'
  | 'pool__managementFee'
  | 'pool__joinExitEnabled'
  | 'pool__mustAllowlistLPs'
  | 'pool__managementAumFee'
  | 'pool__totalAumFeeCollectedInBPT'
  | 'pool__mainIndex'
  | 'pool__wrappedIndex'
  | 'pool__lowerTarget'
  | 'pool__upperTarget'
  | 'pool__sqrtAlpha'
  | 'pool__sqrtBeta'
  | 'pool__root3Alpha'
  | 'pool__c'
  | 'pool__s'
  | 'pool__tauAlphaX'
  | 'pool__tauAlphaY'
  | 'pool__tauBetaX'
  | 'pool__tauBetaY'
  | 'pool__u'
  | 'pool__v'
  | 'pool__w'
  | 'pool__z'
  | 'pool__dSq'
  | 'pool__alpha'
  | 'pool__beta'
  | 'pool__lambda'
  | 'pool__delta'
  | 'pool__epsilon'
  | 'pool__isInRecoveryMode'
  | 'pool__protocolSwapFeeCache'
  | 'pool__protocolYieldFeeCache'
  | 'pool__protocolAumFeeCache'
  | 'pool__totalProtocolFeePaidInBPT'
  | 'pool__lastJoinExitAmp'
  | 'pool__lastPostJoinExitInvariant'
  | 'pool__protocolId'
  | 'fxOracleDecimals';

export type TradePair = {
  /** Token Address - Token Address */
  id: Scalars['ID']['output'];
  token0: Token;
  token1: Token;
  totalSwapVolume: Scalars['BigDecimal']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
};

export type TradePairSnapshot = {
  id: Scalars['ID']['output'];
  pair: TradePair;
  timestamp: Scalars['Int']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
};

export type TradePairSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<TradePair_filter>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradePairSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TradePairSnapshot_filter>>>;
};

export type TradePairSnapshot_orderBy =
  | 'id'
  | 'pair'
  | 'pair__id'
  | 'pair__totalSwapVolume'
  | 'pair__totalSwapFee'
  | 'timestamp'
  | 'totalSwapVolume'
  | 'totalSwapFee';

export type TradePair_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_filter>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradePair_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TradePair_filter>>>;
};

export type TradePair_orderBy =
  | 'id'
  | 'token0'
  | 'token0__id'
  | 'token0__symbol'
  | 'token0__name'
  | 'token0__decimals'
  | 'token0__address'
  | 'token0__totalBalanceUSD'
  | 'token0__totalBalanceNotional'
  | 'token0__totalVolumeUSD'
  | 'token0__totalVolumeNotional'
  | 'token0__totalSwapCount'
  | 'token0__latestUSDPrice'
  | 'token0__latestUSDPriceTimestamp'
  | 'token0__latestFXPrice'
  | 'token0__fxOracleDecimals'
  | 'token1'
  | 'token1__id'
  | 'token1__symbol'
  | 'token1__name'
  | 'token1__decimals'
  | 'token1__address'
  | 'token1__totalBalanceUSD'
  | 'token1__totalBalanceNotional'
  | 'token1__totalVolumeUSD'
  | 'token1__totalVolumeNotional'
  | 'token1__totalSwapCount'
  | 'token1__latestUSDPrice'
  | 'token1__latestUSDPriceTimestamp'
  | 'token1__latestFXPrice'
  | 'token1__fxOracleDecimals'
  | 'totalSwapVolume'
  | 'totalSwapFee';

export type User = {
  id: Scalars['ID']['output'];
  sharesOwned?: Maybe<Array<PoolShare>>;
  swaps?: Maybe<Array<Swap>>;
  userInternalBalances?: Maybe<Array<UserInternalBalance>>;
};


export type UsersharesOwnedArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolShare_filter>;
};


export type UserswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type UseruserInternalBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserInternalBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserInternalBalance_filter>;
};

export type UserInternalBalance = {
  id: Scalars['ID']['output'];
  userAddress?: Maybe<User>;
  token: Scalars['Bytes']['output'];
  tokenInfo?: Maybe<Token>;
  balance: Scalars['BigDecimal']['output'];
};

export type UserInternalBalance_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  userAddress?: InputMaybe<Scalars['String']['input']>;
  userAddress_not?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_?: InputMaybe<User_filter>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenInfo?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_gt?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_lt?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_gte?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_lte?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInfo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInfo_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_?: InputMaybe<Token_filter>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserInternalBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserInternalBalance_filter>>>;
};

export type UserInternalBalance_orderBy =
  | 'id'
  | 'userAddress'
  | 'userAddress__id'
  | 'token'
  | 'tokenInfo'
  | 'tokenInfo__id'
  | 'tokenInfo__symbol'
  | 'tokenInfo__name'
  | 'tokenInfo__decimals'
  | 'tokenInfo__address'
  | 'tokenInfo__totalBalanceUSD'
  | 'tokenInfo__totalBalanceNotional'
  | 'tokenInfo__totalVolumeUSD'
  | 'tokenInfo__totalVolumeNotional'
  | 'tokenInfo__totalSwapCount'
  | 'tokenInfo__latestUSDPrice'
  | 'tokenInfo__latestUSDPriceTimestamp'
  | 'tokenInfo__latestFXPrice'
  | 'tokenInfo__fxOracleDecimals'
  | 'balance';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  sharesOwned_?: InputMaybe<PoolShare_filter>;
  swaps_?: InputMaybe<Swap_filter>;
  userInternalBalances_?: InputMaybe<UserInternalBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'sharesOwned'
  | 'swaps'
  | 'userInternalBalances';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  balancer: InContextSdkMethod<Query['balancer'], QuerybalancerArgs, MeshContext>,
  /** null **/
  balancers: InContextSdkMethod<Query['balancers'], QuerybalancersArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Query['pool'], QuerypoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Query['pools'], QuerypoolsArgs, MeshContext>,
  /** null **/
  poolContract: InContextSdkMethod<Query['poolContract'], QuerypoolContractArgs, MeshContext>,
  /** null **/
  poolContracts: InContextSdkMethod<Query['poolContracts'], QuerypoolContractsArgs, MeshContext>,
  /** null **/
  poolToken: InContextSdkMethod<Query['poolToken'], QuerypoolTokenArgs, MeshContext>,
  /** null **/
  poolTokens: InContextSdkMethod<Query['poolTokens'], QuerypoolTokensArgs, MeshContext>,
  /** null **/
  priceRateProvider: InContextSdkMethod<Query['priceRateProvider'], QuerypriceRateProviderArgs, MeshContext>,
  /** null **/
  priceRateProviders: InContextSdkMethod<Query['priceRateProviders'], QuerypriceRateProvidersArgs, MeshContext>,
  /** null **/
  circuitBreaker: InContextSdkMethod<Query['circuitBreaker'], QuerycircuitBreakerArgs, MeshContext>,
  /** null **/
  circuitBreakers: InContextSdkMethod<Query['circuitBreakers'], QuerycircuitBreakersArgs, MeshContext>,
  /** null **/
  poolShare: InContextSdkMethod<Query['poolShare'], QuerypoolShareArgs, MeshContext>,
  /** null **/
  poolShares: InContextSdkMethod<Query['poolShares'], QuerypoolSharesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  userInternalBalance: InContextSdkMethod<Query['userInternalBalance'], QueryuserInternalBalanceArgs, MeshContext>,
  /** null **/
  userInternalBalances: InContextSdkMethod<Query['userInternalBalances'], QueryuserInternalBalancesArgs, MeshContext>,
  /** null **/
  gradualWeightUpdate: InContextSdkMethod<Query['gradualWeightUpdate'], QuerygradualWeightUpdateArgs, MeshContext>,
  /** null **/
  gradualWeightUpdates: InContextSdkMethod<Query['gradualWeightUpdates'], QuerygradualWeightUpdatesArgs, MeshContext>,
  /** null **/
  ampUpdate: InContextSdkMethod<Query['ampUpdate'], QueryampUpdateArgs, MeshContext>,
  /** null **/
  ampUpdates: InContextSdkMethod<Query['ampUpdates'], QueryampUpdatesArgs, MeshContext>,
  /** null **/
  swapFeeUpdate: InContextSdkMethod<Query['swapFeeUpdate'], QueryswapFeeUpdateArgs, MeshContext>,
  /** null **/
  swapFeeUpdates: InContextSdkMethod<Query['swapFeeUpdates'], QueryswapFeeUpdatesArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>,
  /** null **/
  joinExit: InContextSdkMethod<Query['joinExit'], QueryjoinExitArgs, MeshContext>,
  /** null **/
  joinExits: InContextSdkMethod<Query['joinExits'], QueryjoinExitsArgs, MeshContext>,
  /** null **/
  latestPrice: InContextSdkMethod<Query['latestPrice'], QuerylatestPriceArgs, MeshContext>,
  /** null **/
  latestPrices: InContextSdkMethod<Query['latestPrices'], QuerylatestPricesArgs, MeshContext>,
  /** null **/
  poolHistoricalLiquidity: InContextSdkMethod<Query['poolHistoricalLiquidity'], QuerypoolHistoricalLiquidityArgs, MeshContext>,
  /** null **/
  poolHistoricalLiquidities: InContextSdkMethod<Query['poolHistoricalLiquidities'], QuerypoolHistoricalLiquiditiesArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<Query['tokenPrice'], QuerytokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<Query['tokenPrices'], QuerytokenPricesArgs, MeshContext>,
  /** null **/
  managementOperation: InContextSdkMethod<Query['managementOperation'], QuerymanagementOperationArgs, MeshContext>,
  /** null **/
  managementOperations: InContextSdkMethod<Query['managementOperations'], QuerymanagementOperationsArgs, MeshContext>,
  /** null **/
  poolSnapshot: InContextSdkMethod<Query['poolSnapshot'], QuerypoolSnapshotArgs, MeshContext>,
  /** null **/
  poolSnapshots: InContextSdkMethod<Query['poolSnapshots'], QuerypoolSnapshotsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  tokenSnapshot: InContextSdkMethod<Query['tokenSnapshot'], QuerytokenSnapshotArgs, MeshContext>,
  /** null **/
  tokenSnapshots: InContextSdkMethod<Query['tokenSnapshots'], QuerytokenSnapshotsArgs, MeshContext>,
  /** null **/
  tradePair: InContextSdkMethod<Query['tradePair'], QuerytradePairArgs, MeshContext>,
  /** null **/
  tradePairs: InContextSdkMethod<Query['tradePairs'], QuerytradePairsArgs, MeshContext>,
  /** null **/
  tradePairSnapshot: InContextSdkMethod<Query['tradePairSnapshot'], QuerytradePairSnapshotArgs, MeshContext>,
  /** null **/
  tradePairSnapshots: InContextSdkMethod<Query['tradePairSnapshots'], QuerytradePairSnapshotsArgs, MeshContext>,
  /** null **/
  balancerSnapshot: InContextSdkMethod<Query['balancerSnapshot'], QuerybalancerSnapshotArgs, MeshContext>,
  /** null **/
  balancerSnapshots: InContextSdkMethod<Query['balancerSnapshots'], QuerybalancerSnapshotsArgs, MeshContext>,
  /** null **/
  protocolIdData: InContextSdkMethod<Query['protocolIdData'], QueryprotocolIdDataArgs, MeshContext>,
  /** null **/
  protocolIdDatas: InContextSdkMethod<Query['protocolIdDatas'], QueryprotocolIdDatasArgs, MeshContext>,
  /** null **/
  fxoracle: InContextSdkMethod<Query['fxoracle'], QueryfxoracleArgs, MeshContext>,
  /** null **/
  fxoracles: InContextSdkMethod<Query['fxoracles'], QueryfxoraclesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  balancer: InContextSdkMethod<Subscription['balancer'], SubscriptionbalancerArgs, MeshContext>,
  /** null **/
  balancers: InContextSdkMethod<Subscription['balancers'], SubscriptionbalancersArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Subscription['pool'], SubscriptionpoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Subscription['pools'], SubscriptionpoolsArgs, MeshContext>,
  /** null **/
  poolContract: InContextSdkMethod<Subscription['poolContract'], SubscriptionpoolContractArgs, MeshContext>,
  /** null **/
  poolContracts: InContextSdkMethod<Subscription['poolContracts'], SubscriptionpoolContractsArgs, MeshContext>,
  /** null **/
  poolToken: InContextSdkMethod<Subscription['poolToken'], SubscriptionpoolTokenArgs, MeshContext>,
  /** null **/
  poolTokens: InContextSdkMethod<Subscription['poolTokens'], SubscriptionpoolTokensArgs, MeshContext>,
  /** null **/
  priceRateProvider: InContextSdkMethod<Subscription['priceRateProvider'], SubscriptionpriceRateProviderArgs, MeshContext>,
  /** null **/
  priceRateProviders: InContextSdkMethod<Subscription['priceRateProviders'], SubscriptionpriceRateProvidersArgs, MeshContext>,
  /** null **/
  circuitBreaker: InContextSdkMethod<Subscription['circuitBreaker'], SubscriptioncircuitBreakerArgs, MeshContext>,
  /** null **/
  circuitBreakers: InContextSdkMethod<Subscription['circuitBreakers'], SubscriptioncircuitBreakersArgs, MeshContext>,
  /** null **/
  poolShare: InContextSdkMethod<Subscription['poolShare'], SubscriptionpoolShareArgs, MeshContext>,
  /** null **/
  poolShares: InContextSdkMethod<Subscription['poolShares'], SubscriptionpoolSharesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  userInternalBalance: InContextSdkMethod<Subscription['userInternalBalance'], SubscriptionuserInternalBalanceArgs, MeshContext>,
  /** null **/
  userInternalBalances: InContextSdkMethod<Subscription['userInternalBalances'], SubscriptionuserInternalBalancesArgs, MeshContext>,
  /** null **/
  gradualWeightUpdate: InContextSdkMethod<Subscription['gradualWeightUpdate'], SubscriptiongradualWeightUpdateArgs, MeshContext>,
  /** null **/
  gradualWeightUpdates: InContextSdkMethod<Subscription['gradualWeightUpdates'], SubscriptiongradualWeightUpdatesArgs, MeshContext>,
  /** null **/
  ampUpdate: InContextSdkMethod<Subscription['ampUpdate'], SubscriptionampUpdateArgs, MeshContext>,
  /** null **/
  ampUpdates: InContextSdkMethod<Subscription['ampUpdates'], SubscriptionampUpdatesArgs, MeshContext>,
  /** null **/
  swapFeeUpdate: InContextSdkMethod<Subscription['swapFeeUpdate'], SubscriptionswapFeeUpdateArgs, MeshContext>,
  /** null **/
  swapFeeUpdates: InContextSdkMethod<Subscription['swapFeeUpdates'], SubscriptionswapFeeUpdatesArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>,
  /** null **/
  joinExit: InContextSdkMethod<Subscription['joinExit'], SubscriptionjoinExitArgs, MeshContext>,
  /** null **/
  joinExits: InContextSdkMethod<Subscription['joinExits'], SubscriptionjoinExitsArgs, MeshContext>,
  /** null **/
  latestPrice: InContextSdkMethod<Subscription['latestPrice'], SubscriptionlatestPriceArgs, MeshContext>,
  /** null **/
  latestPrices: InContextSdkMethod<Subscription['latestPrices'], SubscriptionlatestPricesArgs, MeshContext>,
  /** null **/
  poolHistoricalLiquidity: InContextSdkMethod<Subscription['poolHistoricalLiquidity'], SubscriptionpoolHistoricalLiquidityArgs, MeshContext>,
  /** null **/
  poolHistoricalLiquidities: InContextSdkMethod<Subscription['poolHistoricalLiquidities'], SubscriptionpoolHistoricalLiquiditiesArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<Subscription['tokenPrice'], SubscriptiontokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<Subscription['tokenPrices'], SubscriptiontokenPricesArgs, MeshContext>,
  /** null **/
  managementOperation: InContextSdkMethod<Subscription['managementOperation'], SubscriptionmanagementOperationArgs, MeshContext>,
  /** null **/
  managementOperations: InContextSdkMethod<Subscription['managementOperations'], SubscriptionmanagementOperationsArgs, MeshContext>,
  /** null **/
  poolSnapshot: InContextSdkMethod<Subscription['poolSnapshot'], SubscriptionpoolSnapshotArgs, MeshContext>,
  /** null **/
  poolSnapshots: InContextSdkMethod<Subscription['poolSnapshots'], SubscriptionpoolSnapshotsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  tokenSnapshot: InContextSdkMethod<Subscription['tokenSnapshot'], SubscriptiontokenSnapshotArgs, MeshContext>,
  /** null **/
  tokenSnapshots: InContextSdkMethod<Subscription['tokenSnapshots'], SubscriptiontokenSnapshotsArgs, MeshContext>,
  /** null **/
  tradePair: InContextSdkMethod<Subscription['tradePair'], SubscriptiontradePairArgs, MeshContext>,
  /** null **/
  tradePairs: InContextSdkMethod<Subscription['tradePairs'], SubscriptiontradePairsArgs, MeshContext>,
  /** null **/
  tradePairSnapshot: InContextSdkMethod<Subscription['tradePairSnapshot'], SubscriptiontradePairSnapshotArgs, MeshContext>,
  /** null **/
  tradePairSnapshots: InContextSdkMethod<Subscription['tradePairSnapshots'], SubscriptiontradePairSnapshotsArgs, MeshContext>,
  /** null **/
  balancerSnapshot: InContextSdkMethod<Subscription['balancerSnapshot'], SubscriptionbalancerSnapshotArgs, MeshContext>,
  /** null **/
  balancerSnapshots: InContextSdkMethod<Subscription['balancerSnapshots'], SubscriptionbalancerSnapshotsArgs, MeshContext>,
  /** null **/
  protocolIdData: InContextSdkMethod<Subscription['protocolIdData'], SubscriptionprotocolIdDataArgs, MeshContext>,
  /** null **/
  protocolIdDatas: InContextSdkMethod<Subscription['protocolIdDatas'], SubscriptionprotocolIdDatasArgs, MeshContext>,
  /** null **/
  fxoracle: InContextSdkMethod<Subscription['fxoracle'], SubscriptionfxoracleArgs, MeshContext>,
  /** null **/
  fxoracles: InContextSdkMethod<Subscription['fxoracles'], SubscriptionfxoraclesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["balancer-v2"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
