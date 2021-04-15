import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  float8: any;
  numeric: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "addresses" */
export type Addresses = {
  __typename?: 'addresses';
  address_type?: Maybe<Scalars['String']>;
  addressable_id?: Maybe<Scalars['Int']>;
  addressable_type?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  district?: Maybe<Districts>;
  district_id?: Maybe<Scalars['Int']>;
  flat?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  __typename?: 'addresses_aggregate';
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  __typename?: 'addresses_aggregate_fields';
  avg?: Maybe<Addresses_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
  stddev?: Maybe<Addresses_Stddev_Fields>;
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Fields>;
  sum?: Maybe<Addresses_Sum_Fields>;
  var_pop?: Maybe<Addresses_Var_Pop_Fields>;
  var_samp?: Maybe<Addresses_Var_Samp_Fields>;
  variance?: Maybe<Addresses_Variance_Fields>;
};


/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Addresses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "addresses" */
export type Addresses_Aggregate_Order_By = {
  avg?: Maybe<Addresses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Addresses_Max_Order_By>;
  min?: Maybe<Addresses_Min_Order_By>;
  stddev?: Maybe<Addresses_Stddev_Order_By>;
  stddev_pop?: Maybe<Addresses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Addresses_Stddev_Samp_Order_By>;
  sum?: Maybe<Addresses_Sum_Order_By>;
  var_pop?: Maybe<Addresses_Var_Pop_Order_By>;
  var_samp?: Maybe<Addresses_Var_Samp_Order_By>;
  variance?: Maybe<Addresses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "addresses" */
export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

/** aggregate avg on columns */
export type Addresses_Avg_Fields = {
  __typename?: 'addresses_avg_fields';
  addressable_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "addresses" */
export type Addresses_Avg_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>;
  _not?: Maybe<Addresses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>;
  address_type?: Maybe<String_Comparison_Exp>;
  addressable_id?: Maybe<Int_Comparison_Exp>;
  addressable_type?: Maybe<String_Comparison_Exp>;
  building?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  district?: Maybe<Districts_Bool_Exp>;
  district_id?: Maybe<Int_Comparison_Exp>;
  flat?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export enum Addresses_Constraint {
  /** unique or primary key constraint */
  AddressesPkey = 'addresses_pkey'
}

/** input type for incrementing integer column in table "addresses" */
export type Addresses_Inc_Input = {
  addressable_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  address_type?: Maybe<Scalars['String']>;
  addressable_id?: Maybe<Scalars['Int']>;
  addressable_type?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  district?: Maybe<Districts_Obj_Rel_Insert_Input>;
  district_id?: Maybe<Scalars['Int']>;
  flat?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  __typename?: 'addresses_max_fields';
  address_type?: Maybe<Scalars['String']>;
  addressable_id?: Maybe<Scalars['Int']>;
  addressable_type?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  district_id?: Maybe<Scalars['Int']>;
  flat?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "addresses" */
export type Addresses_Max_Order_By = {
  address_type?: Maybe<Order_By>;
  addressable_id?: Maybe<Order_By>;
  addressable_type?: Maybe<Order_By>;
  building?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  flat?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  __typename?: 'addresses_min_fields';
  address_type?: Maybe<Scalars['String']>;
  addressable_id?: Maybe<Scalars['Int']>;
  addressable_type?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  district_id?: Maybe<Scalars['Int']>;
  flat?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "addresses" */
export type Addresses_Min_Order_By = {
  address_type?: Maybe<Order_By>;
  addressable_id?: Maybe<Order_By>;
  addressable_type?: Maybe<Order_By>;
  building?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  flat?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  __typename?: 'addresses_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Addresses>;
};

/** input type for inserting object relation for remote table "addresses" */
export type Addresses_Obj_Rel_Insert_Input = {
  data: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

/** on conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns: Array<Addresses_Update_Column>;
  where?: Maybe<Addresses_Bool_Exp>;
};

/** ordering options when selecting data from "addresses" */
export type Addresses_Order_By = {
  address_type?: Maybe<Order_By>;
  addressable_id?: Maybe<Order_By>;
  addressable_type?: Maybe<Order_By>;
  building?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  district?: Maybe<Districts_Order_By>;
  district_id?: Maybe<Order_By>;
  flat?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "addresses" */
export type Addresses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "addresses" */
export enum Addresses_Select_Column {
  /** column name */
  AddressType = 'address_type',
  /** column name */
  AddressableId = 'addressable_id',
  /** column name */
  AddressableType = 'addressable_type',
  /** column name */
  Building = 'building',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Flat = 'flat',
  /** column name */
  Id = 'id',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  address_type?: Maybe<Scalars['String']>;
  addressable_id?: Maybe<Scalars['Int']>;
  addressable_type?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  district_id?: Maybe<Scalars['Int']>;
  flat?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Addresses_Stddev_Fields = {
  __typename?: 'addresses_stddev_fields';
  addressable_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "addresses" */
export type Addresses_Stddev_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Addresses_Stddev_Pop_Fields = {
  __typename?: 'addresses_stddev_pop_fields';
  addressable_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "addresses" */
export type Addresses_Stddev_Pop_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Addresses_Stddev_Samp_Fields = {
  __typename?: 'addresses_stddev_samp_fields';
  addressable_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "addresses" */
export type Addresses_Stddev_Samp_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Addresses_Sum_Fields = {
  __typename?: 'addresses_sum_fields';
  addressable_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "addresses" */
export type Addresses_Sum_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "addresses" */
export enum Addresses_Update_Column {
  /** column name */
  AddressType = 'address_type',
  /** column name */
  AddressableId = 'addressable_id',
  /** column name */
  AddressableType = 'addressable_type',
  /** column name */
  Building = 'building',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Flat = 'flat',
  /** column name */
  Id = 'id',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Addresses_Var_Pop_Fields = {
  __typename?: 'addresses_var_pop_fields';
  addressable_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "addresses" */
export type Addresses_Var_Pop_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Addresses_Var_Samp_Fields = {
  __typename?: 'addresses_var_samp_fields';
  addressable_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "addresses" */
export type Addresses_Var_Samp_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Addresses_Variance_Fields = {
  __typename?: 'addresses_variance_fields';
  addressable_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "addresses" */
export type Addresses_Variance_Order_By = {
  addressable_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "cancellation_reasons" */
export type Cancellation_Reasons = {
  __typename?: 'cancellation_reasons';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  visible_to_offer?: Maybe<Scalars['Boolean']>;
  visible_to_order?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "cancellation_reasons" */
export type Cancellation_Reasons_Aggregate = {
  __typename?: 'cancellation_reasons_aggregate';
  aggregate?: Maybe<Cancellation_Reasons_Aggregate_Fields>;
  nodes: Array<Cancellation_Reasons>;
};

/** aggregate fields of "cancellation_reasons" */
export type Cancellation_Reasons_Aggregate_Fields = {
  __typename?: 'cancellation_reasons_aggregate_fields';
  avg?: Maybe<Cancellation_Reasons_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Cancellation_Reasons_Max_Fields>;
  min?: Maybe<Cancellation_Reasons_Min_Fields>;
  stddev?: Maybe<Cancellation_Reasons_Stddev_Fields>;
  stddev_pop?: Maybe<Cancellation_Reasons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cancellation_Reasons_Stddev_Samp_Fields>;
  sum?: Maybe<Cancellation_Reasons_Sum_Fields>;
  var_pop?: Maybe<Cancellation_Reasons_Var_Pop_Fields>;
  var_samp?: Maybe<Cancellation_Reasons_Var_Samp_Fields>;
  variance?: Maybe<Cancellation_Reasons_Variance_Fields>;
};


/** aggregate fields of "cancellation_reasons" */
export type Cancellation_Reasons_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cancellation_Reasons_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cancellation_reasons" */
export type Cancellation_Reasons_Aggregate_Order_By = {
  avg?: Maybe<Cancellation_Reasons_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Cancellation_Reasons_Max_Order_By>;
  min?: Maybe<Cancellation_Reasons_Min_Order_By>;
  stddev?: Maybe<Cancellation_Reasons_Stddev_Order_By>;
  stddev_pop?: Maybe<Cancellation_Reasons_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Cancellation_Reasons_Stddev_Samp_Order_By>;
  sum?: Maybe<Cancellation_Reasons_Sum_Order_By>;
  var_pop?: Maybe<Cancellation_Reasons_Var_Pop_Order_By>;
  var_samp?: Maybe<Cancellation_Reasons_Var_Samp_Order_By>;
  variance?: Maybe<Cancellation_Reasons_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cancellation_reasons" */
export type Cancellation_Reasons_Arr_Rel_Insert_Input = {
  data: Array<Cancellation_Reasons_Insert_Input>;
  on_conflict?: Maybe<Cancellation_Reasons_On_Conflict>;
};

/** aggregate avg on columns */
export type Cancellation_Reasons_Avg_Fields = {
  __typename?: 'cancellation_reasons_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cancellation_reasons". All fields are combined with a logical 'AND'. */
export type Cancellation_Reasons_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cancellation_Reasons_Bool_Exp>>>;
  _not?: Maybe<Cancellation_Reasons_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cancellation_Reasons_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  visible_to_offer?: Maybe<Boolean_Comparison_Exp>;
  visible_to_order?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "cancellation_reasons" */
export enum Cancellation_Reasons_Constraint {
  /** unique or primary key constraint */
  CancellationReasonsPkey = 'cancellation_reasons_pkey'
}

/** input type for incrementing integer column in table "cancellation_reasons" */
export type Cancellation_Reasons_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "cancellation_reasons" */
export type Cancellation_Reasons_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  visible_to_offer?: Maybe<Scalars['Boolean']>;
  visible_to_order?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Cancellation_Reasons_Max_Fields = {
  __typename?: 'cancellation_reasons_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Cancellation_Reasons_Min_Fields = {
  __typename?: 'cancellation_reasons_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "cancellation_reasons" */
export type Cancellation_Reasons_Mutation_Response = {
  __typename?: 'cancellation_reasons_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Cancellation_Reasons>;
};

/** input type for inserting object relation for remote table "cancellation_reasons" */
export type Cancellation_Reasons_Obj_Rel_Insert_Input = {
  data: Cancellation_Reasons_Insert_Input;
  on_conflict?: Maybe<Cancellation_Reasons_On_Conflict>;
};

/** on conflict condition type for table "cancellation_reasons" */
export type Cancellation_Reasons_On_Conflict = {
  constraint: Cancellation_Reasons_Constraint;
  update_columns: Array<Cancellation_Reasons_Update_Column>;
  where?: Maybe<Cancellation_Reasons_Bool_Exp>;
};

/** ordering options when selecting data from "cancellation_reasons" */
export type Cancellation_Reasons_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  visible_to_offer?: Maybe<Order_By>;
  visible_to_order?: Maybe<Order_By>;
};

/** primary key columns input for table: "cancellation_reasons" */
export type Cancellation_Reasons_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cancellation_reasons" */
export enum Cancellation_Reasons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisibleToOffer = 'visible_to_offer',
  /** column name */
  VisibleToOrder = 'visible_to_order'
}

/** input type for updating data in table "cancellation_reasons" */
export type Cancellation_Reasons_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  visible_to_offer?: Maybe<Scalars['Boolean']>;
  visible_to_order?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Cancellation_Reasons_Stddev_Fields = {
  __typename?: 'cancellation_reasons_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cancellation_Reasons_Stddev_Pop_Fields = {
  __typename?: 'cancellation_reasons_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cancellation_Reasons_Stddev_Samp_Fields = {
  __typename?: 'cancellation_reasons_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Cancellation_Reasons_Sum_Fields = {
  __typename?: 'cancellation_reasons_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "cancellation_reasons" */
export enum Cancellation_Reasons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisibleToOffer = 'visible_to_offer',
  /** column name */
  VisibleToOrder = 'visible_to_order'
}

/** aggregate var_pop on columns */
export type Cancellation_Reasons_Var_Pop_Fields = {
  __typename?: 'cancellation_reasons_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cancellation_Reasons_Var_Samp_Fields = {
  __typename?: 'cancellation_reasons_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Cancellation_Reasons_Variance_Fields = {
  __typename?: 'cancellation_reasons_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cancellation_reasons" */
export type Cancellation_Reasons_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "companies" */
export type Companies = {
  __typename?: 'companies';
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  crm_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  updated_by_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "companies" */
export type Companies_Aggregate = {
  __typename?: 'companies_aggregate';
  aggregate?: Maybe<Companies_Aggregate_Fields>;
  nodes: Array<Companies>;
};

/** aggregate fields of "companies" */
export type Companies_Aggregate_Fields = {
  __typename?: 'companies_aggregate_fields';
  avg?: Maybe<Companies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Companies_Max_Fields>;
  min?: Maybe<Companies_Min_Fields>;
  stddev?: Maybe<Companies_Stddev_Fields>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Fields>;
  sum?: Maybe<Companies_Sum_Fields>;
  var_pop?: Maybe<Companies_Var_Pop_Fields>;
  var_samp?: Maybe<Companies_Var_Samp_Fields>;
  variance?: Maybe<Companies_Variance_Fields>;
};


/** aggregate fields of "companies" */
export type Companies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Companies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "companies" */
export type Companies_Aggregate_Order_By = {
  avg?: Maybe<Companies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Companies_Max_Order_By>;
  min?: Maybe<Companies_Min_Order_By>;
  stddev?: Maybe<Companies_Stddev_Order_By>;
  stddev_pop?: Maybe<Companies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Companies_Stddev_Samp_Order_By>;
  sum?: Maybe<Companies_Sum_Order_By>;
  var_pop?: Maybe<Companies_Var_Pop_Order_By>;
  var_samp?: Maybe<Companies_Var_Samp_Order_By>;
  variance?: Maybe<Companies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "companies" */
export type Companies_Arr_Rel_Insert_Input = {
  data: Array<Companies_Insert_Input>;
  on_conflict?: Maybe<Companies_On_Conflict>;
};

/** aggregate avg on columns */
export type Companies_Avg_Fields = {
  __typename?: 'companies_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  crm_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "companies" */
export type Companies_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export type Companies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Companies_Bool_Exp>>>;
  _not?: Maybe<Companies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Companies_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  crm_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_by_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "companies" */
export enum Companies_Constraint {
  /** unique or primary key constraint */
  CompaniesPkey = 'companies_pkey'
}

/** input type for incrementing integer column in table "companies" */
export type Companies_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  crm_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "companies" */
export type Companies_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crm_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Companies_Max_Fields = {
  __typename?: 'companies_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crm_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "companies" */
export type Companies_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Companies_Min_Fields = {
  __typename?: 'companies_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crm_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "companies" */
export type Companies_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "companies" */
export type Companies_Mutation_Response = {
  __typename?: 'companies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Companies>;
};

/** input type for inserting object relation for remote table "companies" */
export type Companies_Obj_Rel_Insert_Input = {
  data: Companies_Insert_Input;
  on_conflict?: Maybe<Companies_On_Conflict>;
};

/** on conflict condition type for table "companies" */
export type Companies_On_Conflict = {
  constraint: Companies_Constraint;
  update_columns: Array<Companies_Update_Column>;
  where?: Maybe<Companies_Bool_Exp>;
};

/** ordering options when selecting data from "companies" */
export type Companies_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "companies" */
export type Companies_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "companies" */
export enum Companies_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  CrmId = 'crm_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedById = 'updated_by_id'
}

/** input type for updating data in table "companies" */
export type Companies_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crm_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Companies_Stddev_Fields = {
  __typename?: 'companies_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  crm_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "companies" */
export type Companies_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Companies_Stddev_Pop_Fields = {
  __typename?: 'companies_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  crm_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "companies" */
export type Companies_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Companies_Stddev_Samp_Fields = {
  __typename?: 'companies_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  crm_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "companies" */
export type Companies_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Companies_Sum_Fields = {
  __typename?: 'companies_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  crm_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "companies" */
export type Companies_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** update columns of table "companies" */
export enum Companies_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  CrmId = 'crm_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedById = 'updated_by_id'
}

/** aggregate var_pop on columns */
export type Companies_Var_Pop_Fields = {
  __typename?: 'companies_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  crm_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "companies" */
export type Companies_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Companies_Var_Samp_Fields = {
  __typename?: 'companies_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  crm_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "companies" */
export type Companies_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Companies_Variance_Fields = {
  __typename?: 'companies_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  crm_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "companies" */
export type Companies_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
  crm_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "contacts" */
export type Contacts = {
  __typename?: 'contacts';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "contacts" */
export type Contacts_Aggregate = {
  __typename?: 'contacts_aggregate';
  aggregate?: Maybe<Contacts_Aggregate_Fields>;
  nodes: Array<Contacts>;
};

/** aggregate fields of "contacts" */
export type Contacts_Aggregate_Fields = {
  __typename?: 'contacts_aggregate_fields';
  avg?: Maybe<Contacts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contacts_Max_Fields>;
  min?: Maybe<Contacts_Min_Fields>;
  stddev?: Maybe<Contacts_Stddev_Fields>;
  stddev_pop?: Maybe<Contacts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contacts_Stddev_Samp_Fields>;
  sum?: Maybe<Contacts_Sum_Fields>;
  var_pop?: Maybe<Contacts_Var_Pop_Fields>;
  var_samp?: Maybe<Contacts_Var_Samp_Fields>;
  variance?: Maybe<Contacts_Variance_Fields>;
};


/** aggregate fields of "contacts" */
export type Contacts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contacts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contacts" */
export type Contacts_Aggregate_Order_By = {
  avg?: Maybe<Contacts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contacts_Max_Order_By>;
  min?: Maybe<Contacts_Min_Order_By>;
  stddev?: Maybe<Contacts_Stddev_Order_By>;
  stddev_pop?: Maybe<Contacts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contacts_Stddev_Samp_Order_By>;
  sum?: Maybe<Contacts_Sum_Order_By>;
  var_pop?: Maybe<Contacts_Var_Pop_Order_By>;
  var_samp?: Maybe<Contacts_Var_Samp_Order_By>;
  variance?: Maybe<Contacts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contacts" */
export type Contacts_Arr_Rel_Insert_Input = {
  data: Array<Contacts_Insert_Input>;
  on_conflict?: Maybe<Contacts_On_Conflict>;
};

/** aggregate avg on columns */
export type Contacts_Avg_Fields = {
  __typename?: 'contacts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "contacts" */
export type Contacts_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contacts". All fields are combined with a logical 'AND'. */
export type Contacts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contacts_Bool_Exp>>>;
  _not?: Maybe<Contacts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contacts_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mobile?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contacts" */
export enum Contacts_Constraint {
  /** unique or primary key constraint */
  ContactsPkey = 'contacts_pkey'
}

/** input type for incrementing integer column in table "contacts" */
export type Contacts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "contacts" */
export type Contacts_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Contacts_Max_Fields = {
  __typename?: 'contacts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "contacts" */
export type Contacts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contacts_Min_Fields = {
  __typename?: 'contacts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "contacts" */
export type Contacts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "contacts" */
export type Contacts_Mutation_Response = {
  __typename?: 'contacts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contacts>;
};

/** input type for inserting object relation for remote table "contacts" */
export type Contacts_Obj_Rel_Insert_Input = {
  data: Contacts_Insert_Input;
  on_conflict?: Maybe<Contacts_On_Conflict>;
};

/** on conflict condition type for table "contacts" */
export type Contacts_On_Conflict = {
  constraint: Contacts_Constraint;
  update_columns: Array<Contacts_Update_Column>;
  where?: Maybe<Contacts_Bool_Exp>;
};

/** ordering options when selecting data from "contacts" */
export type Contacts_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "contacts" */
export type Contacts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "contacts" */
export enum Contacts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contacts" */
export type Contacts_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Contacts_Stddev_Fields = {
  __typename?: 'contacts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "contacts" */
export type Contacts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contacts_Stddev_Pop_Fields = {
  __typename?: 'contacts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "contacts" */
export type Contacts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contacts_Stddev_Samp_Fields = {
  __typename?: 'contacts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "contacts" */
export type Contacts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Contacts_Sum_Fields = {
  __typename?: 'contacts_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "contacts" */
export type Contacts_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "contacts" */
export enum Contacts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Contacts_Var_Pop_Fields = {
  __typename?: 'contacts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "contacts" */
export type Contacts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contacts_Var_Samp_Fields = {
  __typename?: 'contacts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "contacts" */
export type Contacts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Contacts_Variance_Fields = {
  __typename?: 'contacts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "contacts" */
export type Contacts_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "countries" */
export type Countries = {
  __typename?: 'countries';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
  __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
  __typename?: 'countries_aggregate_fields';
  avg?: Maybe<Countries_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
  stddev?: Maybe<Countries_Stddev_Fields>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Fields>;
  sum?: Maybe<Countries_Sum_Fields>;
  var_pop?: Maybe<Countries_Var_Pop_Fields>;
  var_samp?: Maybe<Countries_Var_Samp_Fields>;
  variance?: Maybe<Countries_Variance_Fields>;
};


/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries" */
export type Countries_Aggregate_Order_By = {
  avg?: Maybe<Countries_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Countries_Max_Order_By>;
  min?: Maybe<Countries_Min_Order_By>;
  stddev?: Maybe<Countries_Stddev_Order_By>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Order_By>;
  sum?: Maybe<Countries_Sum_Order_By>;
  var_pop?: Maybe<Countries_Var_Pop_Order_By>;
  var_samp?: Maybe<Countries_Var_Samp_Order_By>;
  variance?: Maybe<Countries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "countries" */
export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** aggregate avg on columns */
export type Countries_Avg_Fields = {
  __typename?: 'countries_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "countries" */
export type Countries_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  _not?: Maybe<Countries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint */
  CountriesPkey = 'countries_pkey'
}

/** input type for incrementing integer column in table "countries" */
export type Countries_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
  __typename?: 'countries_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "countries" */
export type Countries_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
  __typename?: 'countries_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "countries" */
export type Countries_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
  __typename?: 'countries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Countries>;
};

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

/** on conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns: Array<Countries_Update_Column>;
  where?: Maybe<Countries_Bool_Exp>;
};

/** ordering options when selecting data from "countries" */
export type Countries_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "countries" */
export type Countries_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Countries_Stddev_Fields = {
  __typename?: 'countries_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "countries" */
export type Countries_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Countries_Stddev_Pop_Fields = {
  __typename?: 'countries_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "countries" */
export type Countries_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Countries_Stddev_Samp_Fields = {
  __typename?: 'countries_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "countries" */
export type Countries_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Countries_Sum_Fields = {
  __typename?: 'countries_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "countries" */
export type Countries_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Countries_Var_Pop_Fields = {
  __typename?: 'countries_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "countries" */
export type Countries_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Countries_Var_Samp_Fields = {
  __typename?: 'countries_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "countries" */
export type Countries_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Countries_Variance_Fields = {
  __typename?: 'countries_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "countries" */
export type Countries_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "crossroads_transports" */
export type Crossroads_Transports = {
  __typename?: 'crossroads_transports';
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  is_van_allowed?: Maybe<Scalars['Boolean']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  truck_size?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "crossroads_transports" */
export type Crossroads_Transports_Aggregate = {
  __typename?: 'crossroads_transports_aggregate';
  aggregate?: Maybe<Crossroads_Transports_Aggregate_Fields>;
  nodes: Array<Crossroads_Transports>;
};

/** aggregate fields of "crossroads_transports" */
export type Crossroads_Transports_Aggregate_Fields = {
  __typename?: 'crossroads_transports_aggregate_fields';
  avg?: Maybe<Crossroads_Transports_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Crossroads_Transports_Max_Fields>;
  min?: Maybe<Crossroads_Transports_Min_Fields>;
  stddev?: Maybe<Crossroads_Transports_Stddev_Fields>;
  stddev_pop?: Maybe<Crossroads_Transports_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Crossroads_Transports_Stddev_Samp_Fields>;
  sum?: Maybe<Crossroads_Transports_Sum_Fields>;
  var_pop?: Maybe<Crossroads_Transports_Var_Pop_Fields>;
  var_samp?: Maybe<Crossroads_Transports_Var_Samp_Fields>;
  variance?: Maybe<Crossroads_Transports_Variance_Fields>;
};


/** aggregate fields of "crossroads_transports" */
export type Crossroads_Transports_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Crossroads_Transports_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "crossroads_transports" */
export type Crossroads_Transports_Aggregate_Order_By = {
  avg?: Maybe<Crossroads_Transports_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Crossroads_Transports_Max_Order_By>;
  min?: Maybe<Crossroads_Transports_Min_Order_By>;
  stddev?: Maybe<Crossroads_Transports_Stddev_Order_By>;
  stddev_pop?: Maybe<Crossroads_Transports_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Crossroads_Transports_Stddev_Samp_Order_By>;
  sum?: Maybe<Crossroads_Transports_Sum_Order_By>;
  var_pop?: Maybe<Crossroads_Transports_Var_Pop_Order_By>;
  var_samp?: Maybe<Crossroads_Transports_Var_Samp_Order_By>;
  variance?: Maybe<Crossroads_Transports_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "crossroads_transports" */
export type Crossroads_Transports_Arr_Rel_Insert_Input = {
  data: Array<Crossroads_Transports_Insert_Input>;
  on_conflict?: Maybe<Crossroads_Transports_On_Conflict>;
};

/** aggregate avg on columns */
export type Crossroads_Transports_Avg_Fields = {
  __typename?: 'crossroads_transports_avg_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  truck_size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Avg_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "crossroads_transports". All fields are combined with a logical 'AND'. */
export type Crossroads_Transports_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Crossroads_Transports_Bool_Exp>>>;
  _not?: Maybe<Crossroads_Transports_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Crossroads_Transports_Bool_Exp>>>;
  cost?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_van_allowed?: Maybe<Boolean_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  truck_size?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "crossroads_transports" */
export enum Crossroads_Transports_Constraint {
  /** unique or primary key constraint */
  CrossroadsTransportsPkey = 'crossroads_transports_pkey'
}

/** input type for incrementing integer column in table "crossroads_transports" */
export type Crossroads_Transports_Inc_Input = {
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  truck_size?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "crossroads_transports" */
export type Crossroads_Transports_Insert_Input = {
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_van_allowed?: Maybe<Scalars['Boolean']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  truck_size?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Crossroads_Transports_Max_Fields = {
  __typename?: 'crossroads_transports_max_fields';
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  truck_size?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Max_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Crossroads_Transports_Min_Fields = {
  __typename?: 'crossroads_transports_min_fields';
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  truck_size?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Min_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "crossroads_transports" */
export type Crossroads_Transports_Mutation_Response = {
  __typename?: 'crossroads_transports_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Crossroads_Transports>;
};

/** input type for inserting object relation for remote table "crossroads_transports" */
export type Crossroads_Transports_Obj_Rel_Insert_Input = {
  data: Crossroads_Transports_Insert_Input;
  on_conflict?: Maybe<Crossroads_Transports_On_Conflict>;
};

/** on conflict condition type for table "crossroads_transports" */
export type Crossroads_Transports_On_Conflict = {
  constraint: Crossroads_Transports_Constraint;
  update_columns: Array<Crossroads_Transports_Update_Column>;
  where?: Maybe<Crossroads_Transports_Bool_Exp>;
};

/** ordering options when selecting data from "crossroads_transports" */
export type Crossroads_Transports_Order_By = {
  cost?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_van_allowed?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "crossroads_transports" */
export type Crossroads_Transports_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "crossroads_transports" */
export enum Crossroads_Transports_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsVanAllowed = 'is_van_allowed',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  TruckSize = 'truck_size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "crossroads_transports" */
export type Crossroads_Transports_Set_Input = {
  cost?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  is_van_allowed?: Maybe<Scalars['Boolean']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  truck_size?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Crossroads_Transports_Stddev_Fields = {
  __typename?: 'crossroads_transports_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  truck_size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Crossroads_Transports_Stddev_Pop_Fields = {
  __typename?: 'crossroads_transports_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  truck_size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Crossroads_Transports_Stddev_Samp_Fields = {
  __typename?: 'crossroads_transports_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  truck_size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Crossroads_Transports_Sum_Fields = {
  __typename?: 'crossroads_transports_sum_fields';
  cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  truck_size?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Sum_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};

/** update columns of table "crossroads_transports" */
export enum Crossroads_Transports_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsVanAllowed = 'is_van_allowed',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  TruckSize = 'truck_size',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Crossroads_Transports_Var_Pop_Fields = {
  __typename?: 'crossroads_transports_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  truck_size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Crossroads_Transports_Var_Samp_Fields = {
  __typename?: 'crossroads_transports_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  truck_size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Crossroads_Transports_Variance_Fields = {
  __typename?: 'crossroads_transports_variance_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  truck_size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "crossroads_transports" */
export type Crossroads_Transports_Variance_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  truck_size?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "deliveries" */
export type Deliveries = {
  __typename?: 'deliveries';
  /** An object relationship */
  contact?: Maybe<Contacts>;
  contact_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivery_type?: Maybe<Scalars['String']>;
  finish?: Maybe<Scalars['timestamptz']>;
  gogovan_order_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  offer?: Maybe<Offers>;
  offer_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  schedule?: Maybe<Schedules>;
  schedule_id?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "deliveries" */
export type Deliveries_Aggregate = {
  __typename?: 'deliveries_aggregate';
  aggregate?: Maybe<Deliveries_Aggregate_Fields>;
  nodes: Array<Deliveries>;
};

/** aggregate fields of "deliveries" */
export type Deliveries_Aggregate_Fields = {
  __typename?: 'deliveries_aggregate_fields';
  avg?: Maybe<Deliveries_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Deliveries_Max_Fields>;
  min?: Maybe<Deliveries_Min_Fields>;
  stddev?: Maybe<Deliveries_Stddev_Fields>;
  stddev_pop?: Maybe<Deliveries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deliveries_Stddev_Samp_Fields>;
  sum?: Maybe<Deliveries_Sum_Fields>;
  var_pop?: Maybe<Deliveries_Var_Pop_Fields>;
  var_samp?: Maybe<Deliveries_Var_Samp_Fields>;
  variance?: Maybe<Deliveries_Variance_Fields>;
};


/** aggregate fields of "deliveries" */
export type Deliveries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Deliveries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deliveries" */
export type Deliveries_Aggregate_Order_By = {
  avg?: Maybe<Deliveries_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Deliveries_Max_Order_By>;
  min?: Maybe<Deliveries_Min_Order_By>;
  stddev?: Maybe<Deliveries_Stddev_Order_By>;
  stddev_pop?: Maybe<Deliveries_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Deliveries_Stddev_Samp_Order_By>;
  sum?: Maybe<Deliveries_Sum_Order_By>;
  var_pop?: Maybe<Deliveries_Var_Pop_Order_By>;
  var_samp?: Maybe<Deliveries_Var_Samp_Order_By>;
  variance?: Maybe<Deliveries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "deliveries" */
export type Deliveries_Arr_Rel_Insert_Input = {
  data: Array<Deliveries_Insert_Input>;
  on_conflict?: Maybe<Deliveries_On_Conflict>;
};

/** aggregate avg on columns */
export type Deliveries_Avg_Fields = {
  __typename?: 'deliveries_avg_fields';
  contact_id?: Maybe<Scalars['Float']>;
  gogovan_order_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "deliveries" */
export type Deliveries_Avg_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deliveries". All fields are combined with a logical 'AND'. */
export type Deliveries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Deliveries_Bool_Exp>>>;
  _not?: Maybe<Deliveries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Deliveries_Bool_Exp>>>;
  contact?: Maybe<Contacts_Bool_Exp>;
  contact_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  delivery_type?: Maybe<String_Comparison_Exp>;
  finish?: Maybe<Timestamptz_Comparison_Exp>;
  gogovan_order_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  offer?: Maybe<Offers_Bool_Exp>;
  offer_id?: Maybe<Int_Comparison_Exp>;
  schedule?: Maybe<Schedules_Bool_Exp>;
  schedule_id?: Maybe<Int_Comparison_Exp>;
  start?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "deliveries" */
export enum Deliveries_Constraint {
  /** unique or primary key constraint */
  DeliveriesPkey = 'deliveries_pkey'
}

/** input type for incrementing integer column in table "deliveries" */
export type Deliveries_Inc_Input = {
  contact_id?: Maybe<Scalars['Int']>;
  gogovan_order_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "deliveries" */
export type Deliveries_Insert_Input = {
  contact?: Maybe<Contacts_Obj_Rel_Insert_Input>;
  contact_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivery_type?: Maybe<Scalars['String']>;
  finish?: Maybe<Scalars['timestamptz']>;
  gogovan_order_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer?: Maybe<Offers_Obj_Rel_Insert_Input>;
  offer_id?: Maybe<Scalars['Int']>;
  schedule?: Maybe<Schedules_Obj_Rel_Insert_Input>;
  schedule_id?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Deliveries_Max_Fields = {
  __typename?: 'deliveries_max_fields';
  contact_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivery_type?: Maybe<Scalars['String']>;
  finish?: Maybe<Scalars['timestamptz']>;
  gogovan_order_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "deliveries" */
export type Deliveries_Max_Order_By = {
  contact_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  delivery_type?: Maybe<Order_By>;
  finish?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Deliveries_Min_Fields = {
  __typename?: 'deliveries_min_fields';
  contact_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivery_type?: Maybe<Scalars['String']>;
  finish?: Maybe<Scalars['timestamptz']>;
  gogovan_order_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "deliveries" */
export type Deliveries_Min_Order_By = {
  contact_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  delivery_type?: Maybe<Order_By>;
  finish?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "deliveries" */
export type Deliveries_Mutation_Response = {
  __typename?: 'deliveries_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Deliveries>;
};

/** input type for inserting object relation for remote table "deliveries" */
export type Deliveries_Obj_Rel_Insert_Input = {
  data: Deliveries_Insert_Input;
  on_conflict?: Maybe<Deliveries_On_Conflict>;
};

/** on conflict condition type for table "deliveries" */
export type Deliveries_On_Conflict = {
  constraint: Deliveries_Constraint;
  update_columns: Array<Deliveries_Update_Column>;
  where?: Maybe<Deliveries_Bool_Exp>;
};

/** ordering options when selecting data from "deliveries" */
export type Deliveries_Order_By = {
  contact?: Maybe<Contacts_Order_By>;
  contact_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  delivery_type?: Maybe<Order_By>;
  finish?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer?: Maybe<Offers_Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule?: Maybe<Schedules_Order_By>;
  schedule_id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "deliveries" */
export type Deliveries_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "deliveries" */
export enum Deliveries_Select_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeliveryType = 'delivery_type',
  /** column name */
  Finish = 'finish',
  /** column name */
  GogovanOrderId = 'gogovan_order_id',
  /** column name */
  Id = 'id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  ScheduleId = 'schedule_id',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "deliveries" */
export type Deliveries_Set_Input = {
  contact_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivery_type?: Maybe<Scalars['String']>;
  finish?: Maybe<Scalars['timestamptz']>;
  gogovan_order_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Deliveries_Stddev_Fields = {
  __typename?: 'deliveries_stddev_fields';
  contact_id?: Maybe<Scalars['Float']>;
  gogovan_order_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "deliveries" */
export type Deliveries_Stddev_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deliveries_Stddev_Pop_Fields = {
  __typename?: 'deliveries_stddev_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  gogovan_order_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "deliveries" */
export type Deliveries_Stddev_Pop_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deliveries_Stddev_Samp_Fields = {
  __typename?: 'deliveries_stddev_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  gogovan_order_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "deliveries" */
export type Deliveries_Stddev_Samp_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Deliveries_Sum_Fields = {
  __typename?: 'deliveries_sum_fields';
  contact_id?: Maybe<Scalars['Int']>;
  gogovan_order_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  schedule_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "deliveries" */
export type Deliveries_Sum_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** update columns of table "deliveries" */
export enum Deliveries_Update_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeliveryType = 'delivery_type',
  /** column name */
  Finish = 'finish',
  /** column name */
  GogovanOrderId = 'gogovan_order_id',
  /** column name */
  Id = 'id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  ScheduleId = 'schedule_id',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Deliveries_Var_Pop_Fields = {
  __typename?: 'deliveries_var_pop_fields';
  contact_id?: Maybe<Scalars['Float']>;
  gogovan_order_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "deliveries" */
export type Deliveries_Var_Pop_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deliveries_Var_Samp_Fields = {
  __typename?: 'deliveries_var_samp_fields';
  contact_id?: Maybe<Scalars['Float']>;
  gogovan_order_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "deliveries" */
export type Deliveries_Var_Samp_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Deliveries_Variance_Fields = {
  __typename?: 'deliveries_variance_fields';
  contact_id?: Maybe<Scalars['Float']>;
  gogovan_order_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  schedule_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "deliveries" */
export type Deliveries_Variance_Order_By = {
  contact_id?: Maybe<Order_By>;
  gogovan_order_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  schedule_id?: Maybe<Order_By>;
};

/** columns and relationships of "districts" */
export type Districts = {
  __typename?: 'districts';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  /** An object relationship */
  territory?: Maybe<Territories>;
  territory_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "districts" */
export type Districts_Aggregate = {
  __typename?: 'districts_aggregate';
  aggregate?: Maybe<Districts_Aggregate_Fields>;
  nodes: Array<Districts>;
};

/** aggregate fields of "districts" */
export type Districts_Aggregate_Fields = {
  __typename?: 'districts_aggregate_fields';
  avg?: Maybe<Districts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Districts_Max_Fields>;
  min?: Maybe<Districts_Min_Fields>;
  stddev?: Maybe<Districts_Stddev_Fields>;
  stddev_pop?: Maybe<Districts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Districts_Stddev_Samp_Fields>;
  sum?: Maybe<Districts_Sum_Fields>;
  var_pop?: Maybe<Districts_Var_Pop_Fields>;
  var_samp?: Maybe<Districts_Var_Samp_Fields>;
  variance?: Maybe<Districts_Variance_Fields>;
};


/** aggregate fields of "districts" */
export type Districts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Districts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "districts" */
export type Districts_Aggregate_Order_By = {
  avg?: Maybe<Districts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Districts_Max_Order_By>;
  min?: Maybe<Districts_Min_Order_By>;
  stddev?: Maybe<Districts_Stddev_Order_By>;
  stddev_pop?: Maybe<Districts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Districts_Stddev_Samp_Order_By>;
  sum?: Maybe<Districts_Sum_Order_By>;
  var_pop?: Maybe<Districts_Var_Pop_Order_By>;
  var_samp?: Maybe<Districts_Var_Samp_Order_By>;
  variance?: Maybe<Districts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "districts" */
export type Districts_Arr_Rel_Insert_Input = {
  data: Array<Districts_Insert_Input>;
  on_conflict?: Maybe<Districts_On_Conflict>;
};

/** aggregate avg on columns */
export type Districts_Avg_Fields = {
  __typename?: 'districts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  territory_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "districts" */
export type Districts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "districts". All fields are combined with a logical 'AND'. */
export type Districts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Districts_Bool_Exp>>>;
  _not?: Maybe<Districts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Districts_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  latitude?: Maybe<Float8_Comparison_Exp>;
  longitude?: Maybe<Float8_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  territory?: Maybe<Territories_Bool_Exp>;
  territory_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "districts" */
export enum Districts_Constraint {
  /** unique or primary key constraint */
  DistrictsPkey = 'districts_pkey'
}

/** input type for incrementing integer column in table "districts" */
export type Districts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  territory_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "districts" */
export type Districts_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  territory?: Maybe<Territories_Obj_Rel_Insert_Input>;
  territory_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Districts_Max_Fields = {
  __typename?: 'districts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  territory_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "districts" */
export type Districts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Districts_Min_Fields = {
  __typename?: 'districts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  territory_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "districts" */
export type Districts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "districts" */
export type Districts_Mutation_Response = {
  __typename?: 'districts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Districts>;
};

/** input type for inserting object relation for remote table "districts" */
export type Districts_Obj_Rel_Insert_Input = {
  data: Districts_Insert_Input;
  on_conflict?: Maybe<Districts_On_Conflict>;
};

/** on conflict condition type for table "districts" */
export type Districts_On_Conflict = {
  constraint: Districts_Constraint;
  update_columns: Array<Districts_Update_Column>;
  where?: Maybe<Districts_Bool_Exp>;
};

/** ordering options when selecting data from "districts" */
export type Districts_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  territory?: Maybe<Territories_Order_By>;
  territory_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "districts" */
export type Districts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "districts" */
export enum Districts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  TerritoryId = 'territory_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "districts" */
export type Districts_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  territory_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Districts_Stddev_Fields = {
  __typename?: 'districts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  territory_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "districts" */
export type Districts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Districts_Stddev_Pop_Fields = {
  __typename?: 'districts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  territory_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "districts" */
export type Districts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Districts_Stddev_Samp_Fields = {
  __typename?: 'districts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  territory_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "districts" */
export type Districts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Districts_Sum_Fields = {
  __typename?: 'districts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['float8']>;
  longitude?: Maybe<Scalars['float8']>;
  territory_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "districts" */
export type Districts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** update columns of table "districts" */
export enum Districts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  TerritoryId = 'territory_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Districts_Var_Pop_Fields = {
  __typename?: 'districts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  territory_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "districts" */
export type Districts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Districts_Var_Samp_Fields = {
  __typename?: 'districts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  territory_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "districts" */
export type Districts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Districts_Variance_Fields = {
  __typename?: 'districts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  territory_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "districts" */
export type Districts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  latitude?: Maybe<Order_By>;
  longitude?: Maybe<Order_By>;
  territory_id?: Maybe<Order_By>;
};

/** columns and relationships of "donor_conditions" */
export type Donor_Conditions = {
  __typename?: 'donor_conditions';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  visible_to_donor: Scalars['Boolean'];
};

/** aggregated selection of "donor_conditions" */
export type Donor_Conditions_Aggregate = {
  __typename?: 'donor_conditions_aggregate';
  aggregate?: Maybe<Donor_Conditions_Aggregate_Fields>;
  nodes: Array<Donor_Conditions>;
};

/** aggregate fields of "donor_conditions" */
export type Donor_Conditions_Aggregate_Fields = {
  __typename?: 'donor_conditions_aggregate_fields';
  avg?: Maybe<Donor_Conditions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Donor_Conditions_Max_Fields>;
  min?: Maybe<Donor_Conditions_Min_Fields>;
  stddev?: Maybe<Donor_Conditions_Stddev_Fields>;
  stddev_pop?: Maybe<Donor_Conditions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Donor_Conditions_Stddev_Samp_Fields>;
  sum?: Maybe<Donor_Conditions_Sum_Fields>;
  var_pop?: Maybe<Donor_Conditions_Var_Pop_Fields>;
  var_samp?: Maybe<Donor_Conditions_Var_Samp_Fields>;
  variance?: Maybe<Donor_Conditions_Variance_Fields>;
};


/** aggregate fields of "donor_conditions" */
export type Donor_Conditions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Donor_Conditions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "donor_conditions" */
export type Donor_Conditions_Aggregate_Order_By = {
  avg?: Maybe<Donor_Conditions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Donor_Conditions_Max_Order_By>;
  min?: Maybe<Donor_Conditions_Min_Order_By>;
  stddev?: Maybe<Donor_Conditions_Stddev_Order_By>;
  stddev_pop?: Maybe<Donor_Conditions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Donor_Conditions_Stddev_Samp_Order_By>;
  sum?: Maybe<Donor_Conditions_Sum_Order_By>;
  var_pop?: Maybe<Donor_Conditions_Var_Pop_Order_By>;
  var_samp?: Maybe<Donor_Conditions_Var_Samp_Order_By>;
  variance?: Maybe<Donor_Conditions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "donor_conditions" */
export type Donor_Conditions_Arr_Rel_Insert_Input = {
  data: Array<Donor_Conditions_Insert_Input>;
  on_conflict?: Maybe<Donor_Conditions_On_Conflict>;
};

/** aggregate avg on columns */
export type Donor_Conditions_Avg_Fields = {
  __typename?: 'donor_conditions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "donor_conditions" */
export type Donor_Conditions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "donor_conditions". All fields are combined with a logical 'AND'. */
export type Donor_Conditions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Donor_Conditions_Bool_Exp>>>;
  _not?: Maybe<Donor_Conditions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Donor_Conditions_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  visible_to_donor?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "donor_conditions" */
export enum Donor_Conditions_Constraint {
  /** unique or primary key constraint */
  DonorConditionsPkey = 'donor_conditions_pkey'
}

/** input type for incrementing integer column in table "donor_conditions" */
export type Donor_Conditions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "donor_conditions" */
export type Donor_Conditions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  visible_to_donor?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Donor_Conditions_Max_Fields = {
  __typename?: 'donor_conditions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "donor_conditions" */
export type Donor_Conditions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Donor_Conditions_Min_Fields = {
  __typename?: 'donor_conditions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "donor_conditions" */
export type Donor_Conditions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "donor_conditions" */
export type Donor_Conditions_Mutation_Response = {
  __typename?: 'donor_conditions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Donor_Conditions>;
};

/** input type for inserting object relation for remote table "donor_conditions" */
export type Donor_Conditions_Obj_Rel_Insert_Input = {
  data: Donor_Conditions_Insert_Input;
  on_conflict?: Maybe<Donor_Conditions_On_Conflict>;
};

/** on conflict condition type for table "donor_conditions" */
export type Donor_Conditions_On_Conflict = {
  constraint: Donor_Conditions_Constraint;
  update_columns: Array<Donor_Conditions_Update_Column>;
  where?: Maybe<Donor_Conditions_Bool_Exp>;
};

/** ordering options when selecting data from "donor_conditions" */
export type Donor_Conditions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  visible_to_donor?: Maybe<Order_By>;
};

/** primary key columns input for table: "donor_conditions" */
export type Donor_Conditions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "donor_conditions" */
export enum Donor_Conditions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisibleToDonor = 'visible_to_donor'
}

/** input type for updating data in table "donor_conditions" */
export type Donor_Conditions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  visible_to_donor?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Donor_Conditions_Stddev_Fields = {
  __typename?: 'donor_conditions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "donor_conditions" */
export type Donor_Conditions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Donor_Conditions_Stddev_Pop_Fields = {
  __typename?: 'donor_conditions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "donor_conditions" */
export type Donor_Conditions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Donor_Conditions_Stddev_Samp_Fields = {
  __typename?: 'donor_conditions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "donor_conditions" */
export type Donor_Conditions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Donor_Conditions_Sum_Fields = {
  __typename?: 'donor_conditions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "donor_conditions" */
export type Donor_Conditions_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "donor_conditions" */
export enum Donor_Conditions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisibleToDonor = 'visible_to_donor'
}

/** aggregate var_pop on columns */
export type Donor_Conditions_Var_Pop_Fields = {
  __typename?: 'donor_conditions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "donor_conditions" */
export type Donor_Conditions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Donor_Conditions_Var_Samp_Fields = {
  __typename?: 'donor_conditions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "donor_conditions" */
export type Donor_Conditions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Donor_Conditions_Variance_Fields = {
  __typename?: 'donor_conditions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "donor_conditions" */
export type Donor_Conditions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "gogovan_transports" */
export type Gogovan_Transports = {
  __typename?: 'gogovan_transports';
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "gogovan_transports" */
export type Gogovan_Transports_Aggregate = {
  __typename?: 'gogovan_transports_aggregate';
  aggregate?: Maybe<Gogovan_Transports_Aggregate_Fields>;
  nodes: Array<Gogovan_Transports>;
};

/** aggregate fields of "gogovan_transports" */
export type Gogovan_Transports_Aggregate_Fields = {
  __typename?: 'gogovan_transports_aggregate_fields';
  avg?: Maybe<Gogovan_Transports_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Gogovan_Transports_Max_Fields>;
  min?: Maybe<Gogovan_Transports_Min_Fields>;
  stddev?: Maybe<Gogovan_Transports_Stddev_Fields>;
  stddev_pop?: Maybe<Gogovan_Transports_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gogovan_Transports_Stddev_Samp_Fields>;
  sum?: Maybe<Gogovan_Transports_Sum_Fields>;
  var_pop?: Maybe<Gogovan_Transports_Var_Pop_Fields>;
  var_samp?: Maybe<Gogovan_Transports_Var_Samp_Fields>;
  variance?: Maybe<Gogovan_Transports_Variance_Fields>;
};


/** aggregate fields of "gogovan_transports" */
export type Gogovan_Transports_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gogovan_Transports_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "gogovan_transports" */
export type Gogovan_Transports_Aggregate_Order_By = {
  avg?: Maybe<Gogovan_Transports_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Gogovan_Transports_Max_Order_By>;
  min?: Maybe<Gogovan_Transports_Min_Order_By>;
  stddev?: Maybe<Gogovan_Transports_Stddev_Order_By>;
  stddev_pop?: Maybe<Gogovan_Transports_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Gogovan_Transports_Stddev_Samp_Order_By>;
  sum?: Maybe<Gogovan_Transports_Sum_Order_By>;
  var_pop?: Maybe<Gogovan_Transports_Var_Pop_Order_By>;
  var_samp?: Maybe<Gogovan_Transports_Var_Samp_Order_By>;
  variance?: Maybe<Gogovan_Transports_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gogovan_transports" */
export type Gogovan_Transports_Arr_Rel_Insert_Input = {
  data: Array<Gogovan_Transports_Insert_Input>;
  on_conflict?: Maybe<Gogovan_Transports_On_Conflict>;
};

/** aggregate avg on columns */
export type Gogovan_Transports_Avg_Fields = {
  __typename?: 'gogovan_transports_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gogovan_transports". All fields are combined with a logical 'AND'. */
export type Gogovan_Transports_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Gogovan_Transports_Bool_Exp>>>;
  _not?: Maybe<Gogovan_Transports_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Gogovan_Transports_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  disabled?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "gogovan_transports" */
export enum Gogovan_Transports_Constraint {
  /** unique or primary key constraint */
  GogovanTransportsPkey = 'gogovan_transports_pkey'
}

/** input type for incrementing integer column in table "gogovan_transports" */
export type Gogovan_Transports_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "gogovan_transports" */
export type Gogovan_Transports_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Gogovan_Transports_Max_Fields = {
  __typename?: 'gogovan_transports_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Gogovan_Transports_Min_Fields = {
  __typename?: 'gogovan_transports_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "gogovan_transports" */
export type Gogovan_Transports_Mutation_Response = {
  __typename?: 'gogovan_transports_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Gogovan_Transports>;
};

/** input type for inserting object relation for remote table "gogovan_transports" */
export type Gogovan_Transports_Obj_Rel_Insert_Input = {
  data: Gogovan_Transports_Insert_Input;
  on_conflict?: Maybe<Gogovan_Transports_On_Conflict>;
};

/** on conflict condition type for table "gogovan_transports" */
export type Gogovan_Transports_On_Conflict = {
  constraint: Gogovan_Transports_Constraint;
  update_columns: Array<Gogovan_Transports_Update_Column>;
  where?: Maybe<Gogovan_Transports_Bool_Exp>;
};

/** ordering options when selecting data from "gogovan_transports" */
export type Gogovan_Transports_Order_By = {
  created_at?: Maybe<Order_By>;
  disabled?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "gogovan_transports" */
export type Gogovan_Transports_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "gogovan_transports" */
export enum Gogovan_Transports_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "gogovan_transports" */
export type Gogovan_Transports_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Gogovan_Transports_Stddev_Fields = {
  __typename?: 'gogovan_transports_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gogovan_Transports_Stddev_Pop_Fields = {
  __typename?: 'gogovan_transports_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gogovan_Transports_Stddev_Samp_Fields = {
  __typename?: 'gogovan_transports_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Gogovan_Transports_Sum_Fields = {
  __typename?: 'gogovan_transports_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "gogovan_transports" */
export enum Gogovan_Transports_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Gogovan_Transports_Var_Pop_Fields = {
  __typename?: 'gogovan_transports_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gogovan_Transports_Var_Samp_Fields = {
  __typename?: 'gogovan_transports_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Gogovan_Transports_Variance_Fields = {
  __typename?: 'gogovan_transports_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "gogovan_transports" */
export type Gogovan_Transports_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "goodcity_settings" */
export type Goodcity_Settings = {
  __typename?: 'goodcity_settings';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "goodcity_settings" */
export type Goodcity_Settings_Aggregate = {
  __typename?: 'goodcity_settings_aggregate';
  aggregate?: Maybe<Goodcity_Settings_Aggregate_Fields>;
  nodes: Array<Goodcity_Settings>;
};

/** aggregate fields of "goodcity_settings" */
export type Goodcity_Settings_Aggregate_Fields = {
  __typename?: 'goodcity_settings_aggregate_fields';
  avg?: Maybe<Goodcity_Settings_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Goodcity_Settings_Max_Fields>;
  min?: Maybe<Goodcity_Settings_Min_Fields>;
  stddev?: Maybe<Goodcity_Settings_Stddev_Fields>;
  stddev_pop?: Maybe<Goodcity_Settings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Goodcity_Settings_Stddev_Samp_Fields>;
  sum?: Maybe<Goodcity_Settings_Sum_Fields>;
  var_pop?: Maybe<Goodcity_Settings_Var_Pop_Fields>;
  var_samp?: Maybe<Goodcity_Settings_Var_Samp_Fields>;
  variance?: Maybe<Goodcity_Settings_Variance_Fields>;
};


/** aggregate fields of "goodcity_settings" */
export type Goodcity_Settings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Goodcity_Settings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "goodcity_settings" */
export type Goodcity_Settings_Aggregate_Order_By = {
  avg?: Maybe<Goodcity_Settings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Goodcity_Settings_Max_Order_By>;
  min?: Maybe<Goodcity_Settings_Min_Order_By>;
  stddev?: Maybe<Goodcity_Settings_Stddev_Order_By>;
  stddev_pop?: Maybe<Goodcity_Settings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Goodcity_Settings_Stddev_Samp_Order_By>;
  sum?: Maybe<Goodcity_Settings_Sum_Order_By>;
  var_pop?: Maybe<Goodcity_Settings_Var_Pop_Order_By>;
  var_samp?: Maybe<Goodcity_Settings_Var_Samp_Order_By>;
  variance?: Maybe<Goodcity_Settings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "goodcity_settings" */
export type Goodcity_Settings_Arr_Rel_Insert_Input = {
  data: Array<Goodcity_Settings_Insert_Input>;
  on_conflict?: Maybe<Goodcity_Settings_On_Conflict>;
};

/** aggregate avg on columns */
export type Goodcity_Settings_Avg_Fields = {
  __typename?: 'goodcity_settings_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "goodcity_settings". All fields are combined with a logical 'AND'. */
export type Goodcity_Settings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Goodcity_Settings_Bool_Exp>>>;
  _not?: Maybe<Goodcity_Settings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Goodcity_Settings_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "goodcity_settings" */
export enum Goodcity_Settings_Constraint {
  /** unique or primary key constraint */
  GoodcitySettingsPkey = 'goodcity_settings_pkey'
}

/** input type for incrementing integer column in table "goodcity_settings" */
export type Goodcity_Settings_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "goodcity_settings" */
export type Goodcity_Settings_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Goodcity_Settings_Max_Fields = {
  __typename?: 'goodcity_settings_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Max_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Goodcity_Settings_Min_Fields = {
  __typename?: 'goodcity_settings_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Min_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "goodcity_settings" */
export type Goodcity_Settings_Mutation_Response = {
  __typename?: 'goodcity_settings_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Goodcity_Settings>;
};

/** input type for inserting object relation for remote table "goodcity_settings" */
export type Goodcity_Settings_Obj_Rel_Insert_Input = {
  data: Goodcity_Settings_Insert_Input;
  on_conflict?: Maybe<Goodcity_Settings_On_Conflict>;
};

/** on conflict condition type for table "goodcity_settings" */
export type Goodcity_Settings_On_Conflict = {
  constraint: Goodcity_Settings_Constraint;
  update_columns: Array<Goodcity_Settings_Update_Column>;
  where?: Maybe<Goodcity_Settings_Bool_Exp>;
};

/** ordering options when selecting data from "goodcity_settings" */
export type Goodcity_Settings_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "goodcity_settings" */
export type Goodcity_Settings_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "goodcity_settings" */
export enum Goodcity_Settings_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "goodcity_settings" */
export type Goodcity_Settings_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Goodcity_Settings_Stddev_Fields = {
  __typename?: 'goodcity_settings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Goodcity_Settings_Stddev_Pop_Fields = {
  __typename?: 'goodcity_settings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Goodcity_Settings_Stddev_Samp_Fields = {
  __typename?: 'goodcity_settings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Goodcity_Settings_Sum_Fields = {
  __typename?: 'goodcity_settings_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "goodcity_settings" */
export enum Goodcity_Settings_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Goodcity_Settings_Var_Pop_Fields = {
  __typename?: 'goodcity_settings_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Goodcity_Settings_Var_Samp_Fields = {
  __typename?: 'goodcity_settings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Goodcity_Settings_Variance_Fields = {
  __typename?: 'goodcity_settings_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "goodcity_settings" */
export type Goodcity_Settings_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "holidays" */
export type Holidays = {
  __typename?: 'holidays';
  created_at?: Maybe<Scalars['timestamptz']>;
  holiday?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "holidays" */
export type Holidays_Aggregate = {
  __typename?: 'holidays_aggregate';
  aggregate?: Maybe<Holidays_Aggregate_Fields>;
  nodes: Array<Holidays>;
};

/** aggregate fields of "holidays" */
export type Holidays_Aggregate_Fields = {
  __typename?: 'holidays_aggregate_fields';
  avg?: Maybe<Holidays_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Holidays_Max_Fields>;
  min?: Maybe<Holidays_Min_Fields>;
  stddev?: Maybe<Holidays_Stddev_Fields>;
  stddev_pop?: Maybe<Holidays_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Holidays_Stddev_Samp_Fields>;
  sum?: Maybe<Holidays_Sum_Fields>;
  var_pop?: Maybe<Holidays_Var_Pop_Fields>;
  var_samp?: Maybe<Holidays_Var_Samp_Fields>;
  variance?: Maybe<Holidays_Variance_Fields>;
};


/** aggregate fields of "holidays" */
export type Holidays_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Holidays_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "holidays" */
export type Holidays_Aggregate_Order_By = {
  avg?: Maybe<Holidays_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Holidays_Max_Order_By>;
  min?: Maybe<Holidays_Min_Order_By>;
  stddev?: Maybe<Holidays_Stddev_Order_By>;
  stddev_pop?: Maybe<Holidays_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Holidays_Stddev_Samp_Order_By>;
  sum?: Maybe<Holidays_Sum_Order_By>;
  var_pop?: Maybe<Holidays_Var_Pop_Order_By>;
  var_samp?: Maybe<Holidays_Var_Samp_Order_By>;
  variance?: Maybe<Holidays_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "holidays" */
export type Holidays_Arr_Rel_Insert_Input = {
  data: Array<Holidays_Insert_Input>;
  on_conflict?: Maybe<Holidays_On_Conflict>;
};

/** aggregate avg on columns */
export type Holidays_Avg_Fields = {
  __typename?: 'holidays_avg_fields';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "holidays" */
export type Holidays_Avg_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "holidays". All fields are combined with a logical 'AND'. */
export type Holidays_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Holidays_Bool_Exp>>>;
  _not?: Maybe<Holidays_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Holidays_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  holiday?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  year?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "holidays" */
export enum Holidays_Constraint {
  /** unique or primary key constraint */
  HolidaysPkey = 'holidays_pkey'
}

/** input type for incrementing integer column in table "holidays" */
export type Holidays_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "holidays" */
export type Holidays_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  holiday?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Holidays_Max_Fields = {
  __typename?: 'holidays_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  holiday?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "holidays" */
export type Holidays_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  holiday?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Holidays_Min_Fields = {
  __typename?: 'holidays_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  holiday?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "holidays" */
export type Holidays_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  holiday?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** response of any mutation on the table "holidays" */
export type Holidays_Mutation_Response = {
  __typename?: 'holidays_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Holidays>;
};

/** input type for inserting object relation for remote table "holidays" */
export type Holidays_Obj_Rel_Insert_Input = {
  data: Holidays_Insert_Input;
  on_conflict?: Maybe<Holidays_On_Conflict>;
};

/** on conflict condition type for table "holidays" */
export type Holidays_On_Conflict = {
  constraint: Holidays_Constraint;
  update_columns: Array<Holidays_Update_Column>;
  where?: Maybe<Holidays_Bool_Exp>;
};

/** ordering options when selecting data from "holidays" */
export type Holidays_Order_By = {
  created_at?: Maybe<Order_By>;
  holiday?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: "holidays" */
export type Holidays_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "holidays" */
export enum Holidays_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Holiday = 'holiday',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "holidays" */
export type Holidays_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  holiday?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  year?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Holidays_Stddev_Fields = {
  __typename?: 'holidays_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "holidays" */
export type Holidays_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Holidays_Stddev_Pop_Fields = {
  __typename?: 'holidays_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "holidays" */
export type Holidays_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Holidays_Stddev_Samp_Fields = {
  __typename?: 'holidays_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "holidays" */
export type Holidays_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Holidays_Sum_Fields = {
  __typename?: 'holidays_sum_fields';
  id?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "holidays" */
export type Holidays_Sum_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** update columns of table "holidays" */
export enum Holidays_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Holiday = 'holiday',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** aggregate var_pop on columns */
export type Holidays_Var_Pop_Fields = {
  __typename?: 'holidays_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "holidays" */
export type Holidays_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Holidays_Var_Samp_Fields = {
  __typename?: 'holidays_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "holidays" */
export type Holidays_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Holidays_Variance_Fields = {
  __typename?: 'holidays_variance_fields';
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "holidays" */
export type Holidays_Variance_Order_By = {
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** columns and relationships of "images" */
export type Images = {
  __typename?: 'images';
  angle?: Maybe<Scalars['Int']>;
  cloudinary_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  favourite?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  imageable_id?: Maybe<Scalars['Int']>;
  imageable_type?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregated array relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "images" */
export type ImagesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "images" */
export type ImagesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "images" */
export type Images_Aggregate = {
  __typename?: 'images_aggregate';
  aggregate?: Maybe<Images_Aggregate_Fields>;
  nodes: Array<Images>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_Fields = {
  __typename?: 'images_aggregate_fields';
  avg?: Maybe<Images_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Images_Max_Fields>;
  min?: Maybe<Images_Min_Fields>;
  stddev?: Maybe<Images_Stddev_Fields>;
  stddev_pop?: Maybe<Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Images_Stddev_Samp_Fields>;
  sum?: Maybe<Images_Sum_Fields>;
  var_pop?: Maybe<Images_Var_Pop_Fields>;
  var_samp?: Maybe<Images_Var_Samp_Fields>;
  variance?: Maybe<Images_Variance_Fields>;
};


/** aggregate fields of "images" */
export type Images_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Images_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "images" */
export type Images_Aggregate_Order_By = {
  avg?: Maybe<Images_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Images_Max_Order_By>;
  min?: Maybe<Images_Min_Order_By>;
  stddev?: Maybe<Images_Stddev_Order_By>;
  stddev_pop?: Maybe<Images_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Images_Stddev_Samp_Order_By>;
  sum?: Maybe<Images_Sum_Order_By>;
  var_pop?: Maybe<Images_Var_Pop_Order_By>;
  var_samp?: Maybe<Images_Var_Samp_Order_By>;
  variance?: Maybe<Images_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "images" */
export type Images_Arr_Rel_Insert_Input = {
  data: Array<Images_Insert_Input>;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** aggregate avg on columns */
export type Images_Avg_Fields = {
  __typename?: 'images_avg_fields';
  angle?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageable_id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "images" */
export type Images_Avg_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Images_Bool_Exp>>>;
  _not?: Maybe<Images_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Images_Bool_Exp>>>;
  angle?: Maybe<Int_Comparison_Exp>;
  cloudinary_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  favourite?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  imageable_id?: Maybe<Int_Comparison_Exp>;
  imageable_type?: Maybe<String_Comparison_Exp>;
  item_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "images" */
export enum Images_Constraint {
  /** unique or primary key constraint */
  ImagesPkey = 'images_pkey'
}

/** input type for incrementing integer column in table "images" */
export type Images_Inc_Input = {
  angle?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageable_id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "images" */
export type Images_Insert_Input = {
  angle?: Maybe<Scalars['Int']>;
  cloudinary_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  favourite?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  imageable_id?: Maybe<Scalars['Int']>;
  imageable_type?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Images_Max_Fields = {
  __typename?: 'images_max_fields';
  angle?: Maybe<Scalars['Int']>;
  cloudinary_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  imageable_id?: Maybe<Scalars['Int']>;
  imageable_type?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "images" */
export type Images_Max_Order_By = {
  angle?: Maybe<Order_By>;
  cloudinary_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  imageable_type?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Images_Min_Fields = {
  __typename?: 'images_min_fields';
  angle?: Maybe<Scalars['Int']>;
  cloudinary_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  imageable_id?: Maybe<Scalars['Int']>;
  imageable_type?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "images" */
export type Images_Min_Order_By = {
  angle?: Maybe<Order_By>;
  cloudinary_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  imageable_type?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "images" */
export type Images_Mutation_Response = {
  __typename?: 'images_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type Images_Obj_Rel_Insert_Input = {
  data: Images_Insert_Input;
  on_conflict?: Maybe<Images_On_Conflict>;
};

/** on conflict condition type for table "images" */
export type Images_On_Conflict = {
  constraint: Images_Constraint;
  update_columns: Array<Images_Update_Column>;
  where?: Maybe<Images_Bool_Exp>;
};

/** ordering options when selecting data from "images" */
export type Images_Order_By = {
  angle?: Maybe<Order_By>;
  cloudinary_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  favourite?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  imageable_type?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: "images" */
export type Images_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  Angle = 'angle',
  /** column name */
  CloudinaryId = 'cloudinary_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  ImageableId = 'imageable_id',
  /** column name */
  ImageableType = 'imageable_type',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "images" */
export type Images_Set_Input = {
  angle?: Maybe<Scalars['Int']>;
  cloudinary_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  favourite?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  imageable_id?: Maybe<Scalars['Int']>;
  imageable_type?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Images_Stddev_Fields = {
  __typename?: 'images_stddev_fields';
  angle?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageable_id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "images" */
export type Images_Stddev_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Images_Stddev_Pop_Fields = {
  __typename?: 'images_stddev_pop_fields';
  angle?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageable_id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "images" */
export type Images_Stddev_Pop_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Images_Stddev_Samp_Fields = {
  __typename?: 'images_stddev_samp_fields';
  angle?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageable_id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "images" */
export type Images_Stddev_Samp_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Images_Sum_Fields = {
  __typename?: 'images_sum_fields';
  angle?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageable_id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "images" */
export type Images_Sum_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** update columns of table "images" */
export enum Images_Update_Column {
  /** column name */
  Angle = 'angle',
  /** column name */
  CloudinaryId = 'cloudinary_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Favourite = 'favourite',
  /** column name */
  Id = 'id',
  /** column name */
  ImageableId = 'imageable_id',
  /** column name */
  ImageableType = 'imageable_type',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Images_Var_Pop_Fields = {
  __typename?: 'images_var_pop_fields';
  angle?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageable_id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "images" */
export type Images_Var_Pop_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Images_Var_Samp_Fields = {
  __typename?: 'images_var_samp_fields';
  angle?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageable_id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "images" */
export type Images_Var_Samp_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Images_Variance_Fields = {
  __typename?: 'images_variance_fields';
  angle?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageable_id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "images" */
export type Images_Variance_Order_By = {
  angle?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  imageable_id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
};

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  donor_condition?: Maybe<Donor_Conditions>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  donor_description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** A computed field, executes function "item_images" */
  images?: Maybe<Array<Images>>;
  /** An object relationship */
  offer: Offers;
  offer_id: Scalars['Int'];
  /** An object relationship */
  package_type?: Maybe<Package_Types>;
  package_type_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  packages: Array<Packages>;
  /** An aggregated array relationship */
  packages_aggregate: Packages_Aggregate;
  reject_reason?: Maybe<Scalars['String']>;
  rejection_comments?: Maybe<Scalars['String']>;
  rejection_reason_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "items" */
export type ItemsImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


/** columns and relationships of "items" */
export type ItemsPackagesArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};


/** columns and relationships of "items" */
export type ItemsPackages_AggregateArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  avg?: Maybe<Items_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
  stddev?: Maybe<Items_Stddev_Fields>;
  stddev_pop?: Maybe<Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Items_Stddev_Samp_Fields>;
  sum?: Maybe<Items_Sum_Fields>;
  var_pop?: Maybe<Items_Var_Pop_Fields>;
  var_samp?: Maybe<Items_Var_Samp_Fields>;
  variance?: Maybe<Items_Variance_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type Items_Aggregate_Order_By = {
  avg?: Maybe<Items_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Items_Max_Order_By>;
  min?: Maybe<Items_Min_Order_By>;
  stddev?: Maybe<Items_Stddev_Order_By>;
  stddev_pop?: Maybe<Items_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Items_Stddev_Samp_Order_By>;
  sum?: Maybe<Items_Sum_Order_By>;
  var_pop?: Maybe<Items_Var_Pop_Order_By>;
  var_samp?: Maybe<Items_Var_Samp_Order_By>;
  variance?: Maybe<Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Items_Avg_Fields = {
  __typename?: 'items_avg_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  rejection_reason_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "items" */
export type Items_Avg_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  _not?: Maybe<Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  donor_condition?: Maybe<Donor_Conditions_Bool_Exp>;
  donor_condition_id?: Maybe<Int_Comparison_Exp>;
  donor_description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  offer?: Maybe<Offers_Bool_Exp>;
  offer_id?: Maybe<Int_Comparison_Exp>;
  package_type?: Maybe<Package_Types_Bool_Exp>;
  package_type_id?: Maybe<Int_Comparison_Exp>;
  packages?: Maybe<Packages_Bool_Exp>;
  reject_reason?: Maybe<String_Comparison_Exp>;
  rejection_comments?: Maybe<String_Comparison_Exp>;
  rejection_reason_id?: Maybe<Int_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey'
}

/** input type for incrementing integer column in table "items" */
export type Items_Inc_Input = {
  donor_condition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  rejection_reason_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  donor_condition?: Maybe<Donor_Conditions_Obj_Rel_Insert_Input>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  donor_description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  offer?: Maybe<Offers_Obj_Rel_Insert_Input>;
  offer_id?: Maybe<Scalars['Int']>;
  package_type?: Maybe<Package_Types_Obj_Rel_Insert_Input>;
  package_type_id?: Maybe<Scalars['Int']>;
  packages?: Maybe<Packages_Arr_Rel_Insert_Input>;
  reject_reason?: Maybe<Scalars['String']>;
  rejection_comments?: Maybe<Scalars['String']>;
  rejection_reason_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  donor_description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  reject_reason?: Maybe<Scalars['String']>;
  rejection_comments?: Maybe<Scalars['String']>;
  rejection_reason_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "items" */
export type Items_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  donor_description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  reject_reason?: Maybe<Order_By>;
  rejection_comments?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  donor_description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  reject_reason?: Maybe<Scalars['String']>;
  rejection_comments?: Maybe<Scalars['String']>;
  rejection_reason_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "items" */
export type Items_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  donor_description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  reject_reason?: Maybe<Order_By>;
  rejection_comments?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** on conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns: Array<Items_Update_Column>;
  where?: Maybe<Items_Bool_Exp>;
};

/** ordering options when selecting data from "items" */
export type Items_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  donor_condition?: Maybe<Donor_Conditions_Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  donor_description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer?: Maybe<Offers_Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type?: Maybe<Package_Types_Order_By>;
  package_type_id?: Maybe<Order_By>;
  packages_aggregate?: Maybe<Packages_Aggregate_Order_By>;
  reject_reason?: Maybe<Order_By>;
  rejection_comments?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "items" */
export type Items_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DonorConditionId = 'donor_condition_id',
  /** column name */
  DonorDescription = 'donor_description',
  /** column name */
  Id = 'id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  RejectReason = 'reject_reason',
  /** column name */
  RejectionComments = 'rejection_comments',
  /** column name */
  RejectionReasonId = 'rejection_reason_id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  donor_description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  reject_reason?: Maybe<Scalars['String']>;
  rejection_comments?: Maybe<Scalars['String']>;
  rejection_reason_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Items_Stddev_Fields = {
  __typename?: 'items_stddev_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  rejection_reason_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "items" */
export type Items_Stddev_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Items_Stddev_Pop_Fields = {
  __typename?: 'items_stddev_pop_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  rejection_reason_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "items" */
export type Items_Stddev_Pop_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Items_Stddev_Samp_Fields = {
  __typename?: 'items_stddev_samp_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  rejection_reason_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "items" */
export type Items_Stddev_Samp_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Items_Sum_Fields = {
  __typename?: 'items_sum_fields';
  donor_condition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  rejection_reason_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "items" */
export type Items_Sum_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DonorConditionId = 'donor_condition_id',
  /** column name */
  DonorDescription = 'donor_description',
  /** column name */
  Id = 'id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  RejectReason = 'reject_reason',
  /** column name */
  RejectionComments = 'rejection_comments',
  /** column name */
  RejectionReasonId = 'rejection_reason_id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Items_Var_Pop_Fields = {
  __typename?: 'items_var_pop_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  rejection_reason_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "items" */
export type Items_Var_Pop_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Items_Var_Samp_Fields = {
  __typename?: 'items_var_samp_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  rejection_reason_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "items" */
export type Items_Var_Samp_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Items_Variance_Fields = {
  __typename?: 'items_variance_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  rejection_reason_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "items" */
export type Items_Variance_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  rejection_reason_id?: Maybe<Order_By>;
};

/** columns and relationships of "locations" */
export type Locations = {
  __typename?: 'locations';
  area?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "locations" */
export type Locations_Aggregate = {
  __typename?: 'locations_aggregate';
  aggregate?: Maybe<Locations_Aggregate_Fields>;
  nodes: Array<Locations>;
};

/** aggregate fields of "locations" */
export type Locations_Aggregate_Fields = {
  __typename?: 'locations_aggregate_fields';
  avg?: Maybe<Locations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Locations_Max_Fields>;
  min?: Maybe<Locations_Min_Fields>;
  stddev?: Maybe<Locations_Stddev_Fields>;
  stddev_pop?: Maybe<Locations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Locations_Stddev_Samp_Fields>;
  sum?: Maybe<Locations_Sum_Fields>;
  var_pop?: Maybe<Locations_Var_Pop_Fields>;
  var_samp?: Maybe<Locations_Var_Samp_Fields>;
  variance?: Maybe<Locations_Variance_Fields>;
};


/** aggregate fields of "locations" */
export type Locations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Locations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "locations" */
export type Locations_Aggregate_Order_By = {
  avg?: Maybe<Locations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Locations_Max_Order_By>;
  min?: Maybe<Locations_Min_Order_By>;
  stddev?: Maybe<Locations_Stddev_Order_By>;
  stddev_pop?: Maybe<Locations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Locations_Stddev_Samp_Order_By>;
  sum?: Maybe<Locations_Sum_Order_By>;
  var_pop?: Maybe<Locations_Var_Pop_Order_By>;
  var_samp?: Maybe<Locations_Var_Samp_Order_By>;
  variance?: Maybe<Locations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "locations" */
export type Locations_Arr_Rel_Insert_Input = {
  data: Array<Locations_Insert_Input>;
  on_conflict?: Maybe<Locations_On_Conflict>;
};

/** aggregate avg on columns */
export type Locations_Avg_Fields = {
  __typename?: 'locations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "locations" */
export type Locations_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "locations". All fields are combined with a logical 'AND'. */
export type Locations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Locations_Bool_Exp>>>;
  _not?: Maybe<Locations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Locations_Bool_Exp>>>;
  area?: Maybe<String_Comparison_Exp>;
  building?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "locations" */
export enum Locations_Constraint {
  /** unique or primary key constraint */
  LocationsPkey = 'locations_pkey'
}

/** input type for incrementing integer column in table "locations" */
export type Locations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "locations" */
export type Locations_Insert_Input = {
  area?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Locations_Max_Fields = {
  __typename?: 'locations_max_fields';
  area?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "locations" */
export type Locations_Max_Order_By = {
  area?: Maybe<Order_By>;
  building?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Locations_Min_Fields = {
  __typename?: 'locations_min_fields';
  area?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "locations" */
export type Locations_Min_Order_By = {
  area?: Maybe<Order_By>;
  building?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "locations" */
export type Locations_Mutation_Response = {
  __typename?: 'locations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Locations>;
};

/** input type for inserting object relation for remote table "locations" */
export type Locations_Obj_Rel_Insert_Input = {
  data: Locations_Insert_Input;
  on_conflict?: Maybe<Locations_On_Conflict>;
};

/** on conflict condition type for table "locations" */
export type Locations_On_Conflict = {
  constraint: Locations_Constraint;
  update_columns: Array<Locations_Update_Column>;
  where?: Maybe<Locations_Bool_Exp>;
};

/** ordering options when selecting data from "locations" */
export type Locations_Order_By = {
  area?: Maybe<Order_By>;
  building?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "locations" */
export type Locations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "locations" */
export enum Locations_Select_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Building = 'building',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "locations" */
export type Locations_Set_Input = {
  area?: Maybe<Scalars['String']>;
  building?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Locations_Stddev_Fields = {
  __typename?: 'locations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "locations" */
export type Locations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Locations_Stddev_Pop_Fields = {
  __typename?: 'locations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "locations" */
export type Locations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Locations_Stddev_Samp_Fields = {
  __typename?: 'locations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "locations" */
export type Locations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Locations_Sum_Fields = {
  __typename?: 'locations_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "locations" */
export type Locations_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "locations" */
export enum Locations_Update_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Building = 'building',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Locations_Var_Pop_Fields = {
  __typename?: 'locations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "locations" */
export type Locations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Locations_Var_Samp_Fields = {
  __typename?: 'locations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "locations" */
export type Locations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Locations_Variance_Fields = {
  __typename?: 'locations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "locations" */
export type Locations_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "cancellation_reasons" */
  delete_cancellation_reasons?: Maybe<Cancellation_Reasons_Mutation_Response>;
  /** delete single row from the table: "cancellation_reasons" */
  delete_cancellation_reasons_by_pk?: Maybe<Cancellation_Reasons>;
  /** delete data from the table: "companies" */
  delete_companies?: Maybe<Companies_Mutation_Response>;
  /** delete single row from the table: "companies" */
  delete_companies_by_pk?: Maybe<Companies>;
  /** delete data from the table: "contacts" */
  delete_contacts?: Maybe<Contacts_Mutation_Response>;
  /** delete single row from the table: "contacts" */
  delete_contacts_by_pk?: Maybe<Contacts>;
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>;
  /** delete single row from the table: "countries" */
  delete_countries_by_pk?: Maybe<Countries>;
  /** delete data from the table: "crossroads_transports" */
  delete_crossroads_transports?: Maybe<Crossroads_Transports_Mutation_Response>;
  /** delete single row from the table: "crossroads_transports" */
  delete_crossroads_transports_by_pk?: Maybe<Crossroads_Transports>;
  /** delete data from the table: "deliveries" */
  delete_deliveries?: Maybe<Deliveries_Mutation_Response>;
  /** delete single row from the table: "deliveries" */
  delete_deliveries_by_pk?: Maybe<Deliveries>;
  /** delete data from the table: "districts" */
  delete_districts?: Maybe<Districts_Mutation_Response>;
  /** delete single row from the table: "districts" */
  delete_districts_by_pk?: Maybe<Districts>;
  /** delete data from the table: "donor_conditions" */
  delete_donor_conditions?: Maybe<Donor_Conditions_Mutation_Response>;
  /** delete single row from the table: "donor_conditions" */
  delete_donor_conditions_by_pk?: Maybe<Donor_Conditions>;
  /** delete data from the table: "gogovan_transports" */
  delete_gogovan_transports?: Maybe<Gogovan_Transports_Mutation_Response>;
  /** delete single row from the table: "gogovan_transports" */
  delete_gogovan_transports_by_pk?: Maybe<Gogovan_Transports>;
  /** delete data from the table: "goodcity_settings" */
  delete_goodcity_settings?: Maybe<Goodcity_Settings_Mutation_Response>;
  /** delete single row from the table: "goodcity_settings" */
  delete_goodcity_settings_by_pk?: Maybe<Goodcity_Settings>;
  /** delete data from the table: "holidays" */
  delete_holidays?: Maybe<Holidays_Mutation_Response>;
  /** delete single row from the table: "holidays" */
  delete_holidays_by_pk?: Maybe<Holidays>;
  /** delete data from the table: "images" */
  delete_images?: Maybe<Images_Mutation_Response>;
  /** delete single row from the table: "images" */
  delete_images_by_pk?: Maybe<Images>;
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "locations" */
  delete_locations?: Maybe<Locations_Mutation_Response>;
  /** delete single row from the table: "locations" */
  delete_locations_by_pk?: Maybe<Locations>;
  /** delete data from the table: "offers" */
  delete_offers?: Maybe<Offers_Mutation_Response>;
  /** delete single row from the table: "offers" */
  delete_offers_by_pk?: Maybe<Offers>;
  /** delete data from the table: "offers_packages" */
  delete_offers_packages?: Maybe<Offers_Packages_Mutation_Response>;
  /** delete single row from the table: "offers_packages" */
  delete_offers_packages_by_pk?: Maybe<Offers_Packages>;
  /** delete data from the table: "organisation_types" */
  delete_organisation_types?: Maybe<Organisation_Types_Mutation_Response>;
  /** delete single row from the table: "organisation_types" */
  delete_organisation_types_by_pk?: Maybe<Organisation_Types>;
  /** delete data from the table: "organisations" */
  delete_organisations?: Maybe<Organisations_Mutation_Response>;
  /** delete single row from the table: "organisations" */
  delete_organisations_by_pk?: Maybe<Organisations>;
  /** delete data from the table: "organisations_users" */
  delete_organisations_users?: Maybe<Organisations_Users_Mutation_Response>;
  /** delete single row from the table: "organisations_users" */
  delete_organisations_users_by_pk?: Maybe<Organisations_Users>;
  /** delete data from the table: "package_categories" */
  delete_package_categories?: Maybe<Package_Categories_Mutation_Response>;
  /** delete single row from the table: "package_categories" */
  delete_package_categories_by_pk?: Maybe<Package_Categories>;
  /** delete data from the table: "package_categories_package_types" */
  delete_package_categories_package_types?: Maybe<Package_Categories_Package_Types_Mutation_Response>;
  /** delete single row from the table: "package_categories_package_types" */
  delete_package_categories_package_types_by_pk?: Maybe<Package_Categories_Package_Types>;
  /** delete data from the table: "package_sets" */
  delete_package_sets?: Maybe<Package_Sets_Mutation_Response>;
  /** delete single row from the table: "package_sets" */
  delete_package_sets_by_pk?: Maybe<Package_Sets>;
  /** delete data from the table: "package_types" */
  delete_package_types?: Maybe<Package_Types_Mutation_Response>;
  /** delete single row from the table: "package_types" */
  delete_package_types_by_pk?: Maybe<Package_Types>;
  /** delete data from the table: "packages" */
  delete_packages?: Maybe<Packages_Mutation_Response>;
  /** delete single row from the table: "packages" */
  delete_packages_by_pk?: Maybe<Packages>;
  /** delete data from the table: "permissions" */
  delete_permissions?: Maybe<Permissions_Mutation_Response>;
  /** delete single row from the table: "permissions" */
  delete_permissions_by_pk?: Maybe<Permissions>;
  /** delete data from the table: "printers" */
  delete_printers?: Maybe<Printers_Mutation_Response>;
  /** delete single row from the table: "printers" */
  delete_printers_by_pk?: Maybe<Printers>;
  /** delete data from the table: "printers_users" */
  delete_printers_users?: Maybe<Printers_Users_Mutation_Response>;
  /** delete single row from the table: "printers_users" */
  delete_printers_users_by_pk?: Maybe<Printers_Users>;
  /** delete data from the table: "restrictions" */
  delete_restrictions?: Maybe<Restrictions_Mutation_Response>;
  /** delete single row from the table: "restrictions" */
  delete_restrictions_by_pk?: Maybe<Restrictions>;
  /** delete data from the table: "role_permissions" */
  delete_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** delete single row from the table: "role_permissions" */
  delete_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "schedules" */
  delete_schedules?: Maybe<Schedules_Mutation_Response>;
  /** delete single row from the table: "schedules" */
  delete_schedules_by_pk?: Maybe<Schedules>;
  /** delete data from the table: "storage_types" */
  delete_storage_types?: Maybe<Storage_Types_Mutation_Response>;
  /** delete single row from the table: "storage_types" */
  delete_storage_types_by_pk?: Maybe<Storage_Types>;
  /** delete data from the table: "territories" */
  delete_territories?: Maybe<Territories_Mutation_Response>;
  /** delete single row from the table: "territories" */
  delete_territories_by_pk?: Maybe<Territories>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "valuation_matrices" */
  delete_valuation_matrices?: Maybe<Valuation_Matrices_Mutation_Response>;
  /** delete single row from the table: "valuation_matrices" */
  delete_valuation_matrices_by_pk?: Maybe<Valuation_Matrices>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "cancellation_reasons" */
  insert_cancellation_reasons?: Maybe<Cancellation_Reasons_Mutation_Response>;
  /** insert a single row into the table: "cancellation_reasons" */
  insert_cancellation_reasons_one?: Maybe<Cancellation_Reasons>;
  /** insert data into the table: "companies" */
  insert_companies?: Maybe<Companies_Mutation_Response>;
  /** insert a single row into the table: "companies" */
  insert_companies_one?: Maybe<Companies>;
  /** insert data into the table: "contacts" */
  insert_contacts?: Maybe<Contacts_Mutation_Response>;
  /** insert a single row into the table: "contacts" */
  insert_contacts_one?: Maybe<Contacts>;
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>;
  /** insert a single row into the table: "countries" */
  insert_countries_one?: Maybe<Countries>;
  /** insert data into the table: "crossroads_transports" */
  insert_crossroads_transports?: Maybe<Crossroads_Transports_Mutation_Response>;
  /** insert a single row into the table: "crossroads_transports" */
  insert_crossroads_transports_one?: Maybe<Crossroads_Transports>;
  /** insert data into the table: "deliveries" */
  insert_deliveries?: Maybe<Deliveries_Mutation_Response>;
  /** insert a single row into the table: "deliveries" */
  insert_deliveries_one?: Maybe<Deliveries>;
  /** insert data into the table: "districts" */
  insert_districts?: Maybe<Districts_Mutation_Response>;
  /** insert a single row into the table: "districts" */
  insert_districts_one?: Maybe<Districts>;
  /** insert data into the table: "donor_conditions" */
  insert_donor_conditions?: Maybe<Donor_Conditions_Mutation_Response>;
  /** insert a single row into the table: "donor_conditions" */
  insert_donor_conditions_one?: Maybe<Donor_Conditions>;
  /** insert data into the table: "gogovan_transports" */
  insert_gogovan_transports?: Maybe<Gogovan_Transports_Mutation_Response>;
  /** insert a single row into the table: "gogovan_transports" */
  insert_gogovan_transports_one?: Maybe<Gogovan_Transports>;
  /** insert data into the table: "goodcity_settings" */
  insert_goodcity_settings?: Maybe<Goodcity_Settings_Mutation_Response>;
  /** insert a single row into the table: "goodcity_settings" */
  insert_goodcity_settings_one?: Maybe<Goodcity_Settings>;
  /** insert data into the table: "holidays" */
  insert_holidays?: Maybe<Holidays_Mutation_Response>;
  /** insert a single row into the table: "holidays" */
  insert_holidays_one?: Maybe<Holidays>;
  /** insert data into the table: "images" */
  insert_images?: Maybe<Images_Mutation_Response>;
  /** insert a single row into the table: "images" */
  insert_images_one?: Maybe<Images>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "locations" */
  insert_locations?: Maybe<Locations_Mutation_Response>;
  /** insert a single row into the table: "locations" */
  insert_locations_one?: Maybe<Locations>;
  /** insert data into the table: "offers" */
  insert_offers?: Maybe<Offers_Mutation_Response>;
  /** insert a single row into the table: "offers" */
  insert_offers_one?: Maybe<Offers>;
  /** insert data into the table: "offers_packages" */
  insert_offers_packages?: Maybe<Offers_Packages_Mutation_Response>;
  /** insert a single row into the table: "offers_packages" */
  insert_offers_packages_one?: Maybe<Offers_Packages>;
  /** insert data into the table: "organisation_types" */
  insert_organisation_types?: Maybe<Organisation_Types_Mutation_Response>;
  /** insert a single row into the table: "organisation_types" */
  insert_organisation_types_one?: Maybe<Organisation_Types>;
  /** insert data into the table: "organisations" */
  insert_organisations?: Maybe<Organisations_Mutation_Response>;
  /** insert a single row into the table: "organisations" */
  insert_organisations_one?: Maybe<Organisations>;
  /** insert data into the table: "organisations_users" */
  insert_organisations_users?: Maybe<Organisations_Users_Mutation_Response>;
  /** insert a single row into the table: "organisations_users" */
  insert_organisations_users_one?: Maybe<Organisations_Users>;
  /** insert data into the table: "package_categories" */
  insert_package_categories?: Maybe<Package_Categories_Mutation_Response>;
  /** insert a single row into the table: "package_categories" */
  insert_package_categories_one?: Maybe<Package_Categories>;
  /** insert data into the table: "package_categories_package_types" */
  insert_package_categories_package_types?: Maybe<Package_Categories_Package_Types_Mutation_Response>;
  /** insert a single row into the table: "package_categories_package_types" */
  insert_package_categories_package_types_one?: Maybe<Package_Categories_Package_Types>;
  /** insert data into the table: "package_sets" */
  insert_package_sets?: Maybe<Package_Sets_Mutation_Response>;
  /** insert a single row into the table: "package_sets" */
  insert_package_sets_one?: Maybe<Package_Sets>;
  /** insert data into the table: "package_types" */
  insert_package_types?: Maybe<Package_Types_Mutation_Response>;
  /** insert a single row into the table: "package_types" */
  insert_package_types_one?: Maybe<Package_Types>;
  /** insert data into the table: "packages" */
  insert_packages?: Maybe<Packages_Mutation_Response>;
  /** insert a single row into the table: "packages" */
  insert_packages_one?: Maybe<Packages>;
  /** insert data into the table: "permissions" */
  insert_permissions?: Maybe<Permissions_Mutation_Response>;
  /** insert a single row into the table: "permissions" */
  insert_permissions_one?: Maybe<Permissions>;
  /** insert data into the table: "printers" */
  insert_printers?: Maybe<Printers_Mutation_Response>;
  /** insert a single row into the table: "printers" */
  insert_printers_one?: Maybe<Printers>;
  /** insert data into the table: "printers_users" */
  insert_printers_users?: Maybe<Printers_Users_Mutation_Response>;
  /** insert a single row into the table: "printers_users" */
  insert_printers_users_one?: Maybe<Printers_Users>;
  /** insert data into the table: "restrictions" */
  insert_restrictions?: Maybe<Restrictions_Mutation_Response>;
  /** insert a single row into the table: "restrictions" */
  insert_restrictions_one?: Maybe<Restrictions>;
  /** insert data into the table: "role_permissions" */
  insert_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** insert a single row into the table: "role_permissions" */
  insert_role_permissions_one?: Maybe<Role_Permissions>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "schedules" */
  insert_schedules?: Maybe<Schedules_Mutation_Response>;
  /** insert a single row into the table: "schedules" */
  insert_schedules_one?: Maybe<Schedules>;
  /** insert data into the table: "storage_types" */
  insert_storage_types?: Maybe<Storage_Types_Mutation_Response>;
  /** insert a single row into the table: "storage_types" */
  insert_storage_types_one?: Maybe<Storage_Types>;
  /** insert data into the table: "territories" */
  insert_territories?: Maybe<Territories_Mutation_Response>;
  /** insert a single row into the table: "territories" */
  insert_territories_one?: Maybe<Territories>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "valuation_matrices" */
  insert_valuation_matrices?: Maybe<Valuation_Matrices_Mutation_Response>;
  /** insert a single row into the table: "valuation_matrices" */
  insert_valuation_matrices_one?: Maybe<Valuation_Matrices>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update data of the table: "cancellation_reasons" */
  update_cancellation_reasons?: Maybe<Cancellation_Reasons_Mutation_Response>;
  /** update single row of the table: "cancellation_reasons" */
  update_cancellation_reasons_by_pk?: Maybe<Cancellation_Reasons>;
  /** update data of the table: "companies" */
  update_companies?: Maybe<Companies_Mutation_Response>;
  /** update single row of the table: "companies" */
  update_companies_by_pk?: Maybe<Companies>;
  /** update data of the table: "contacts" */
  update_contacts?: Maybe<Contacts_Mutation_Response>;
  /** update single row of the table: "contacts" */
  update_contacts_by_pk?: Maybe<Contacts>;
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>;
  /** update single row of the table: "countries" */
  update_countries_by_pk?: Maybe<Countries>;
  /** update data of the table: "crossroads_transports" */
  update_crossroads_transports?: Maybe<Crossroads_Transports_Mutation_Response>;
  /** update single row of the table: "crossroads_transports" */
  update_crossroads_transports_by_pk?: Maybe<Crossroads_Transports>;
  /** update data of the table: "deliveries" */
  update_deliveries?: Maybe<Deliveries_Mutation_Response>;
  /** update single row of the table: "deliveries" */
  update_deliveries_by_pk?: Maybe<Deliveries>;
  /** update data of the table: "districts" */
  update_districts?: Maybe<Districts_Mutation_Response>;
  /** update single row of the table: "districts" */
  update_districts_by_pk?: Maybe<Districts>;
  /** update data of the table: "donor_conditions" */
  update_donor_conditions?: Maybe<Donor_Conditions_Mutation_Response>;
  /** update single row of the table: "donor_conditions" */
  update_donor_conditions_by_pk?: Maybe<Donor_Conditions>;
  /** update data of the table: "gogovan_transports" */
  update_gogovan_transports?: Maybe<Gogovan_Transports_Mutation_Response>;
  /** update single row of the table: "gogovan_transports" */
  update_gogovan_transports_by_pk?: Maybe<Gogovan_Transports>;
  /** update data of the table: "goodcity_settings" */
  update_goodcity_settings?: Maybe<Goodcity_Settings_Mutation_Response>;
  /** update single row of the table: "goodcity_settings" */
  update_goodcity_settings_by_pk?: Maybe<Goodcity_Settings>;
  /** update data of the table: "holidays" */
  update_holidays?: Maybe<Holidays_Mutation_Response>;
  /** update single row of the table: "holidays" */
  update_holidays_by_pk?: Maybe<Holidays>;
  /** update data of the table: "images" */
  update_images?: Maybe<Images_Mutation_Response>;
  /** update single row of the table: "images" */
  update_images_by_pk?: Maybe<Images>;
  /** update data of the table: "items" */
  update_items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<Items>;
  /** update data of the table: "locations" */
  update_locations?: Maybe<Locations_Mutation_Response>;
  /** update single row of the table: "locations" */
  update_locations_by_pk?: Maybe<Locations>;
  /** update data of the table: "offers" */
  update_offers?: Maybe<Offers_Mutation_Response>;
  /** update single row of the table: "offers" */
  update_offers_by_pk?: Maybe<Offers>;
  /** update data of the table: "offers_packages" */
  update_offers_packages?: Maybe<Offers_Packages_Mutation_Response>;
  /** update single row of the table: "offers_packages" */
  update_offers_packages_by_pk?: Maybe<Offers_Packages>;
  /** update data of the table: "organisation_types" */
  update_organisation_types?: Maybe<Organisation_Types_Mutation_Response>;
  /** update single row of the table: "organisation_types" */
  update_organisation_types_by_pk?: Maybe<Organisation_Types>;
  /** update data of the table: "organisations" */
  update_organisations?: Maybe<Organisations_Mutation_Response>;
  /** update single row of the table: "organisations" */
  update_organisations_by_pk?: Maybe<Organisations>;
  /** update data of the table: "organisations_users" */
  update_organisations_users?: Maybe<Organisations_Users_Mutation_Response>;
  /** update single row of the table: "organisations_users" */
  update_organisations_users_by_pk?: Maybe<Organisations_Users>;
  /** update data of the table: "package_categories" */
  update_package_categories?: Maybe<Package_Categories_Mutation_Response>;
  /** update single row of the table: "package_categories" */
  update_package_categories_by_pk?: Maybe<Package_Categories>;
  /** update data of the table: "package_categories_package_types" */
  update_package_categories_package_types?: Maybe<Package_Categories_Package_Types_Mutation_Response>;
  /** update single row of the table: "package_categories_package_types" */
  update_package_categories_package_types_by_pk?: Maybe<Package_Categories_Package_Types>;
  /** update data of the table: "package_sets" */
  update_package_sets?: Maybe<Package_Sets_Mutation_Response>;
  /** update single row of the table: "package_sets" */
  update_package_sets_by_pk?: Maybe<Package_Sets>;
  /** update data of the table: "package_types" */
  update_package_types?: Maybe<Package_Types_Mutation_Response>;
  /** update single row of the table: "package_types" */
  update_package_types_by_pk?: Maybe<Package_Types>;
  /** update data of the table: "packages" */
  update_packages?: Maybe<Packages_Mutation_Response>;
  /** update single row of the table: "packages" */
  update_packages_by_pk?: Maybe<Packages>;
  /** update data of the table: "permissions" */
  update_permissions?: Maybe<Permissions_Mutation_Response>;
  /** update single row of the table: "permissions" */
  update_permissions_by_pk?: Maybe<Permissions>;
  /** update data of the table: "printers" */
  update_printers?: Maybe<Printers_Mutation_Response>;
  /** update single row of the table: "printers" */
  update_printers_by_pk?: Maybe<Printers>;
  /** update data of the table: "printers_users" */
  update_printers_users?: Maybe<Printers_Users_Mutation_Response>;
  /** update single row of the table: "printers_users" */
  update_printers_users_by_pk?: Maybe<Printers_Users>;
  /** update data of the table: "restrictions" */
  update_restrictions?: Maybe<Restrictions_Mutation_Response>;
  /** update single row of the table: "restrictions" */
  update_restrictions_by_pk?: Maybe<Restrictions>;
  /** update data of the table: "role_permissions" */
  update_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** update single row of the table: "role_permissions" */
  update_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "schedules" */
  update_schedules?: Maybe<Schedules_Mutation_Response>;
  /** update single row of the table: "schedules" */
  update_schedules_by_pk?: Maybe<Schedules>;
  /** update data of the table: "storage_types" */
  update_storage_types?: Maybe<Storage_Types_Mutation_Response>;
  /** update single row of the table: "storage_types" */
  update_storage_types_by_pk?: Maybe<Storage_Types>;
  /** update data of the table: "territories" */
  update_territories?: Maybe<Territories_Mutation_Response>;
  /** update single row of the table: "territories" */
  update_territories_by_pk?: Maybe<Territories>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "valuation_matrices" */
  update_valuation_matrices?: Maybe<Valuation_Matrices_Mutation_Response>;
  /** update single row of the table: "valuation_matrices" */
  update_valuation_matrices_by_pk?: Maybe<Valuation_Matrices>;
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Cancellation_ReasonsArgs = {
  where: Cancellation_Reasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cancellation_Reasons_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CompaniesArgs = {
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Companies_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ContactsArgs = {
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contacts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Crossroads_TransportsArgs = {
  where: Crossroads_Transports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Crossroads_Transports_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DeliveriesArgs = {
  where: Deliveries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Deliveries_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DistrictsArgs = {
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Districts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Donor_ConditionsArgs = {
  where: Donor_Conditions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Donor_Conditions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Gogovan_TransportsArgs = {
  where: Gogovan_Transports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gogovan_Transports_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Goodcity_SettingsArgs = {
  where: Goodcity_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Goodcity_Settings_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_HolidaysArgs = {
  where: Holidays_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Holidays_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ImagesArgs = {
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Images_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LocationsArgs = {
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Locations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OffersArgs = {
  where: Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Offers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Offers_PackagesArgs = {
  where: Offers_Packages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Offers_Packages_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Organisation_TypesArgs = {
  where: Organisation_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organisation_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrganisationsArgs = {
  where: Organisations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organisations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Organisations_UsersArgs = {
  where: Organisations_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organisations_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Package_CategoriesArgs = {
  where: Package_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Package_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Package_Categories_Package_TypesArgs = {
  where: Package_Categories_Package_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Package_Categories_Package_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Package_SetsArgs = {
  where: Package_Sets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Package_Sets_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Package_TypesArgs = {
  where: Package_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Package_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PackagesArgs = {
  where: Packages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Packages_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PermissionsArgs = {
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PrintersArgs = {
  where: Printers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Printers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Printers_UsersArgs = {
  where: Printers_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Printers_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RestrictionsArgs = {
  where: Restrictions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Restrictions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Role_PermissionsArgs = {
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Permissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SchedulesArgs = {
  where: Schedules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Schedules_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Storage_TypesArgs = {
  where: Storage_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Storage_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TerritoriesArgs = {
  where: Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Territories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Valuation_MatricesArgs = {
  where: Valuation_Matrices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Valuation_Matrices_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cancellation_ReasonsArgs = {
  objects: Array<Cancellation_Reasons_Insert_Input>;
  on_conflict?: Maybe<Cancellation_Reasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cancellation_Reasons_OneArgs = {
  object: Cancellation_Reasons_Insert_Input;
  on_conflict?: Maybe<Cancellation_Reasons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompaniesArgs = {
  objects: Array<Companies_Insert_Input>;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Companies_OneArgs = {
  object: Companies_Insert_Input;
  on_conflict?: Maybe<Companies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactsArgs = {
  objects: Array<Contacts_Insert_Input>;
  on_conflict?: Maybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contacts_OneArgs = {
  object: Contacts_Insert_Input;
  on_conflict?: Maybe<Contacts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Crossroads_TransportsArgs = {
  objects: Array<Crossroads_Transports_Insert_Input>;
  on_conflict?: Maybe<Crossroads_Transports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Crossroads_Transports_OneArgs = {
  object: Crossroads_Transports_Insert_Input;
  on_conflict?: Maybe<Crossroads_Transports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeliveriesArgs = {
  objects: Array<Deliveries_Insert_Input>;
  on_conflict?: Maybe<Deliveries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deliveries_OneArgs = {
  object: Deliveries_Insert_Input;
  on_conflict?: Maybe<Deliveries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DistrictsArgs = {
  objects: Array<Districts_Insert_Input>;
  on_conflict?: Maybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Districts_OneArgs = {
  object: Districts_Insert_Input;
  on_conflict?: Maybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Donor_ConditionsArgs = {
  objects: Array<Donor_Conditions_Insert_Input>;
  on_conflict?: Maybe<Donor_Conditions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Donor_Conditions_OneArgs = {
  object: Donor_Conditions_Insert_Input;
  on_conflict?: Maybe<Donor_Conditions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gogovan_TransportsArgs = {
  objects: Array<Gogovan_Transports_Insert_Input>;
  on_conflict?: Maybe<Gogovan_Transports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gogovan_Transports_OneArgs = {
  object: Gogovan_Transports_Insert_Input;
  on_conflict?: Maybe<Gogovan_Transports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goodcity_SettingsArgs = {
  objects: Array<Goodcity_Settings_Insert_Input>;
  on_conflict?: Maybe<Goodcity_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Goodcity_Settings_OneArgs = {
  object: Goodcity_Settings_Insert_Input;
  on_conflict?: Maybe<Goodcity_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HolidaysArgs = {
  objects: Array<Holidays_Insert_Input>;
  on_conflict?: Maybe<Holidays_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Holidays_OneArgs = {
  object: Holidays_Insert_Input;
  on_conflict?: Maybe<Holidays_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ImagesArgs = {
  objects: Array<Images_Insert_Input>;
  on_conflict?: Maybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Images_OneArgs = {
  object: Images_Insert_Input;
  on_conflict?: Maybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationsArgs = {
  objects: Array<Locations_Insert_Input>;
  on_conflict?: Maybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locations_OneArgs = {
  object: Locations_Insert_Input;
  on_conflict?: Maybe<Locations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OffersArgs = {
  objects: Array<Offers_Insert_Input>;
  on_conflict?: Maybe<Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offers_OneArgs = {
  object: Offers_Insert_Input;
  on_conflict?: Maybe<Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offers_PackagesArgs = {
  objects: Array<Offers_Packages_Insert_Input>;
  on_conflict?: Maybe<Offers_Packages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offers_Packages_OneArgs = {
  object: Offers_Packages_Insert_Input;
  on_conflict?: Maybe<Offers_Packages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisation_TypesArgs = {
  objects: Array<Organisation_Types_Insert_Input>;
  on_conflict?: Maybe<Organisation_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisation_Types_OneArgs = {
  object: Organisation_Types_Insert_Input;
  on_conflict?: Maybe<Organisation_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganisationsArgs = {
  objects: Array<Organisations_Insert_Input>;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisations_OneArgs = {
  object: Organisations_Insert_Input;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisations_UsersArgs = {
  objects: Array<Organisations_Users_Insert_Input>;
  on_conflict?: Maybe<Organisations_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organisations_Users_OneArgs = {
  object: Organisations_Users_Insert_Input;
  on_conflict?: Maybe<Organisations_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_CategoriesArgs = {
  objects: Array<Package_Categories_Insert_Input>;
  on_conflict?: Maybe<Package_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_Categories_OneArgs = {
  object: Package_Categories_Insert_Input;
  on_conflict?: Maybe<Package_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_Categories_Package_TypesArgs = {
  objects: Array<Package_Categories_Package_Types_Insert_Input>;
  on_conflict?: Maybe<Package_Categories_Package_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_Categories_Package_Types_OneArgs = {
  object: Package_Categories_Package_Types_Insert_Input;
  on_conflict?: Maybe<Package_Categories_Package_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_SetsArgs = {
  objects: Array<Package_Sets_Insert_Input>;
  on_conflict?: Maybe<Package_Sets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_Sets_OneArgs = {
  object: Package_Sets_Insert_Input;
  on_conflict?: Maybe<Package_Sets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_TypesArgs = {
  objects: Array<Package_Types_Insert_Input>;
  on_conflict?: Maybe<Package_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Package_Types_OneArgs = {
  object: Package_Types_Insert_Input;
  on_conflict?: Maybe<Package_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PackagesArgs = {
  objects: Array<Packages_Insert_Input>;
  on_conflict?: Maybe<Packages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Packages_OneArgs = {
  object: Packages_Insert_Input;
  on_conflict?: Maybe<Packages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PermissionsArgs = {
  objects: Array<Permissions_Insert_Input>;
  on_conflict?: Maybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permissions_OneArgs = {
  object: Permissions_Insert_Input;
  on_conflict?: Maybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrintersArgs = {
  objects: Array<Printers_Insert_Input>;
  on_conflict?: Maybe<Printers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Printers_OneArgs = {
  object: Printers_Insert_Input;
  on_conflict?: Maybe<Printers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Printers_UsersArgs = {
  objects: Array<Printers_Users_Insert_Input>;
  on_conflict?: Maybe<Printers_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Printers_Users_OneArgs = {
  object: Printers_Users_Insert_Input;
  on_conflict?: Maybe<Printers_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RestrictionsArgs = {
  objects: Array<Restrictions_Insert_Input>;
  on_conflict?: Maybe<Restrictions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Restrictions_OneArgs = {
  object: Restrictions_Insert_Input;
  on_conflict?: Maybe<Restrictions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_PermissionsArgs = {
  objects: Array<Role_Permissions_Insert_Input>;
  on_conflict?: Maybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Permissions_OneArgs = {
  object: Role_Permissions_Insert_Input;
  on_conflict?: Maybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SchedulesArgs = {
  objects: Array<Schedules_Insert_Input>;
  on_conflict?: Maybe<Schedules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Schedules_OneArgs = {
  object: Schedules_Insert_Input;
  on_conflict?: Maybe<Schedules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Storage_TypesArgs = {
  objects: Array<Storage_Types_Insert_Input>;
  on_conflict?: Maybe<Storage_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Storage_Types_OneArgs = {
  object: Storage_Types_Insert_Input;
  on_conflict?: Maybe<Storage_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TerritoriesArgs = {
  objects: Array<Territories_Insert_Input>;
  on_conflict?: Maybe<Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Territories_OneArgs = {
  object: Territories_Insert_Input;
  on_conflict?: Maybe<Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Valuation_MatricesArgs = {
  objects: Array<Valuation_Matrices_Insert_Input>;
  on_conflict?: Maybe<Valuation_Matrices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Valuation_Matrices_OneArgs = {
  object: Valuation_Matrices_Insert_Input;
  on_conflict?: Maybe<Valuation_Matrices_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _inc?: Maybe<Addresses_Inc_Input>;
  _set?: Maybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _inc?: Maybe<Addresses_Inc_Input>;
  _set?: Maybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cancellation_ReasonsArgs = {
  _inc?: Maybe<Cancellation_Reasons_Inc_Input>;
  _set?: Maybe<Cancellation_Reasons_Set_Input>;
  where: Cancellation_Reasons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cancellation_Reasons_By_PkArgs = {
  _inc?: Maybe<Cancellation_Reasons_Inc_Input>;
  _set?: Maybe<Cancellation_Reasons_Set_Input>;
  pk_columns: Cancellation_Reasons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CompaniesArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  where: Companies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Companies_By_PkArgs = {
  _inc?: Maybe<Companies_Inc_Input>;
  _set?: Maybe<Companies_Set_Input>;
  pk_columns: Companies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ContactsArgs = {
  _inc?: Maybe<Contacts_Inc_Input>;
  _set?: Maybe<Contacts_Set_Input>;
  where: Contacts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contacts_By_PkArgs = {
  _inc?: Maybe<Contacts_Inc_Input>;
  _set?: Maybe<Contacts_Set_Input>;
  pk_columns: Contacts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _inc?: Maybe<Countries_Inc_Input>;
  _set?: Maybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _inc?: Maybe<Countries_Inc_Input>;
  _set?: Maybe<Countries_Set_Input>;
  pk_columns: Countries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Crossroads_TransportsArgs = {
  _inc?: Maybe<Crossroads_Transports_Inc_Input>;
  _set?: Maybe<Crossroads_Transports_Set_Input>;
  where: Crossroads_Transports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Crossroads_Transports_By_PkArgs = {
  _inc?: Maybe<Crossroads_Transports_Inc_Input>;
  _set?: Maybe<Crossroads_Transports_Set_Input>;
  pk_columns: Crossroads_Transports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DeliveriesArgs = {
  _inc?: Maybe<Deliveries_Inc_Input>;
  _set?: Maybe<Deliveries_Set_Input>;
  where: Deliveries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Deliveries_By_PkArgs = {
  _inc?: Maybe<Deliveries_Inc_Input>;
  _set?: Maybe<Deliveries_Set_Input>;
  pk_columns: Deliveries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DistrictsArgs = {
  _inc?: Maybe<Districts_Inc_Input>;
  _set?: Maybe<Districts_Set_Input>;
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Districts_By_PkArgs = {
  _inc?: Maybe<Districts_Inc_Input>;
  _set?: Maybe<Districts_Set_Input>;
  pk_columns: Districts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Donor_ConditionsArgs = {
  _inc?: Maybe<Donor_Conditions_Inc_Input>;
  _set?: Maybe<Donor_Conditions_Set_Input>;
  where: Donor_Conditions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Donor_Conditions_By_PkArgs = {
  _inc?: Maybe<Donor_Conditions_Inc_Input>;
  _set?: Maybe<Donor_Conditions_Set_Input>;
  pk_columns: Donor_Conditions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gogovan_TransportsArgs = {
  _inc?: Maybe<Gogovan_Transports_Inc_Input>;
  _set?: Maybe<Gogovan_Transports_Set_Input>;
  where: Gogovan_Transports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gogovan_Transports_By_PkArgs = {
  _inc?: Maybe<Gogovan_Transports_Inc_Input>;
  _set?: Maybe<Gogovan_Transports_Set_Input>;
  pk_columns: Gogovan_Transports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Goodcity_SettingsArgs = {
  _inc?: Maybe<Goodcity_Settings_Inc_Input>;
  _set?: Maybe<Goodcity_Settings_Set_Input>;
  where: Goodcity_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Goodcity_Settings_By_PkArgs = {
  _inc?: Maybe<Goodcity_Settings_Inc_Input>;
  _set?: Maybe<Goodcity_Settings_Set_Input>;
  pk_columns: Goodcity_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HolidaysArgs = {
  _inc?: Maybe<Holidays_Inc_Input>;
  _set?: Maybe<Holidays_Set_Input>;
  where: Holidays_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Holidays_By_PkArgs = {
  _inc?: Maybe<Holidays_Inc_Input>;
  _set?: Maybe<Holidays_Set_Input>;
  pk_columns: Holidays_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ImagesArgs = {
  _inc?: Maybe<Images_Inc_Input>;
  _set?: Maybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Images_By_PkArgs = {
  _inc?: Maybe<Images_Inc_Input>;
  _set?: Maybe<Images_Set_Input>;
  pk_columns: Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _inc?: Maybe<Items_Inc_Input>;
  _set?: Maybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _inc?: Maybe<Items_Inc_Input>;
  _set?: Maybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LocationsArgs = {
  _inc?: Maybe<Locations_Inc_Input>;
  _set?: Maybe<Locations_Set_Input>;
  where: Locations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Locations_By_PkArgs = {
  _inc?: Maybe<Locations_Inc_Input>;
  _set?: Maybe<Locations_Set_Input>;
  pk_columns: Locations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OffersArgs = {
  _inc?: Maybe<Offers_Inc_Input>;
  _set?: Maybe<Offers_Set_Input>;
  where: Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Offers_By_PkArgs = {
  _inc?: Maybe<Offers_Inc_Input>;
  _set?: Maybe<Offers_Set_Input>;
  pk_columns: Offers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Offers_PackagesArgs = {
  _inc?: Maybe<Offers_Packages_Inc_Input>;
  _set?: Maybe<Offers_Packages_Set_Input>;
  where: Offers_Packages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Offers_Packages_By_PkArgs = {
  _inc?: Maybe<Offers_Packages_Inc_Input>;
  _set?: Maybe<Offers_Packages_Set_Input>;
  pk_columns: Offers_Packages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organisation_TypesArgs = {
  _inc?: Maybe<Organisation_Types_Inc_Input>;
  _set?: Maybe<Organisation_Types_Set_Input>;
  where: Organisation_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organisation_Types_By_PkArgs = {
  _inc?: Maybe<Organisation_Types_Inc_Input>;
  _set?: Maybe<Organisation_Types_Set_Input>;
  pk_columns: Organisation_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrganisationsArgs = {
  _inc?: Maybe<Organisations_Inc_Input>;
  _set?: Maybe<Organisations_Set_Input>;
  where: Organisations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organisations_By_PkArgs = {
  _inc?: Maybe<Organisations_Inc_Input>;
  _set?: Maybe<Organisations_Set_Input>;
  pk_columns: Organisations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organisations_UsersArgs = {
  _inc?: Maybe<Organisations_Users_Inc_Input>;
  _set?: Maybe<Organisations_Users_Set_Input>;
  where: Organisations_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organisations_Users_By_PkArgs = {
  _inc?: Maybe<Organisations_Users_Inc_Input>;
  _set?: Maybe<Organisations_Users_Set_Input>;
  pk_columns: Organisations_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Package_CategoriesArgs = {
  _inc?: Maybe<Package_Categories_Inc_Input>;
  _set?: Maybe<Package_Categories_Set_Input>;
  where: Package_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Package_Categories_By_PkArgs = {
  _inc?: Maybe<Package_Categories_Inc_Input>;
  _set?: Maybe<Package_Categories_Set_Input>;
  pk_columns: Package_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Package_Categories_Package_TypesArgs = {
  _inc?: Maybe<Package_Categories_Package_Types_Inc_Input>;
  _set?: Maybe<Package_Categories_Package_Types_Set_Input>;
  where: Package_Categories_Package_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Package_Categories_Package_Types_By_PkArgs = {
  _inc?: Maybe<Package_Categories_Package_Types_Inc_Input>;
  _set?: Maybe<Package_Categories_Package_Types_Set_Input>;
  pk_columns: Package_Categories_Package_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Package_SetsArgs = {
  _inc?: Maybe<Package_Sets_Inc_Input>;
  _set?: Maybe<Package_Sets_Set_Input>;
  where: Package_Sets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Package_Sets_By_PkArgs = {
  _inc?: Maybe<Package_Sets_Inc_Input>;
  _set?: Maybe<Package_Sets_Set_Input>;
  pk_columns: Package_Sets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Package_TypesArgs = {
  _inc?: Maybe<Package_Types_Inc_Input>;
  _set?: Maybe<Package_Types_Set_Input>;
  where: Package_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Package_Types_By_PkArgs = {
  _inc?: Maybe<Package_Types_Inc_Input>;
  _set?: Maybe<Package_Types_Set_Input>;
  pk_columns: Package_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PackagesArgs = {
  _inc?: Maybe<Packages_Inc_Input>;
  _set?: Maybe<Packages_Set_Input>;
  where: Packages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Packages_By_PkArgs = {
  _inc?: Maybe<Packages_Inc_Input>;
  _set?: Maybe<Packages_Set_Input>;
  pk_columns: Packages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PermissionsArgs = {
  _inc?: Maybe<Permissions_Inc_Input>;
  _set?: Maybe<Permissions_Set_Input>;
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permissions_By_PkArgs = {
  _inc?: Maybe<Permissions_Inc_Input>;
  _set?: Maybe<Permissions_Set_Input>;
  pk_columns: Permissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PrintersArgs = {
  _inc?: Maybe<Printers_Inc_Input>;
  _set?: Maybe<Printers_Set_Input>;
  where: Printers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Printers_By_PkArgs = {
  _inc?: Maybe<Printers_Inc_Input>;
  _set?: Maybe<Printers_Set_Input>;
  pk_columns: Printers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Printers_UsersArgs = {
  _inc?: Maybe<Printers_Users_Inc_Input>;
  _set?: Maybe<Printers_Users_Set_Input>;
  where: Printers_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Printers_Users_By_PkArgs = {
  _inc?: Maybe<Printers_Users_Inc_Input>;
  _set?: Maybe<Printers_Users_Set_Input>;
  pk_columns: Printers_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RestrictionsArgs = {
  _inc?: Maybe<Restrictions_Inc_Input>;
  _set?: Maybe<Restrictions_Set_Input>;
  where: Restrictions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Restrictions_By_PkArgs = {
  _inc?: Maybe<Restrictions_Inc_Input>;
  _set?: Maybe<Restrictions_Set_Input>;
  pk_columns: Restrictions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_PermissionsArgs = {
  _inc?: Maybe<Role_Permissions_Inc_Input>;
  _set?: Maybe<Role_Permissions_Set_Input>;
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Permissions_By_PkArgs = {
  _inc?: Maybe<Role_Permissions_Inc_Input>;
  _set?: Maybe<Role_Permissions_Set_Input>;
  pk_columns: Role_Permissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _inc?: Maybe<Roles_Inc_Input>;
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _inc?: Maybe<Roles_Inc_Input>;
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SchedulesArgs = {
  _inc?: Maybe<Schedules_Inc_Input>;
  _set?: Maybe<Schedules_Set_Input>;
  where: Schedules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Schedules_By_PkArgs = {
  _inc?: Maybe<Schedules_Inc_Input>;
  _set?: Maybe<Schedules_Set_Input>;
  pk_columns: Schedules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Storage_TypesArgs = {
  _inc?: Maybe<Storage_Types_Inc_Input>;
  _set?: Maybe<Storage_Types_Set_Input>;
  where: Storage_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Storage_Types_By_PkArgs = {
  _inc?: Maybe<Storage_Types_Inc_Input>;
  _set?: Maybe<Storage_Types_Set_Input>;
  pk_columns: Storage_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TerritoriesArgs = {
  _inc?: Maybe<Territories_Inc_Input>;
  _set?: Maybe<Territories_Set_Input>;
  where: Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Territories_By_PkArgs = {
  _inc?: Maybe<Territories_Inc_Input>;
  _set?: Maybe<Territories_Set_Input>;
  pk_columns: Territories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _inc?: Maybe<User_Roles_Inc_Input>;
  _set?: Maybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _inc?: Maybe<User_Roles_Inc_Input>;
  _set?: Maybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Valuation_MatricesArgs = {
  _inc?: Maybe<Valuation_Matrices_Inc_Input>;
  _set?: Maybe<Valuation_Matrices_Set_Input>;
  where: Valuation_Matrices_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Valuation_Matrices_By_PkArgs = {
  _inc?: Maybe<Valuation_Matrices_Inc_Input>;
  _set?: Maybe<Valuation_Matrices_Set_Input>;
  pk_columns: Valuation_Matrices_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "offers" */
export type Offers = {
  __typename?: 'offers';
  cancel_reason?: Maybe<Scalars['String']>;
  /** An object relationship */
  cancellation_reason?: Maybe<Cancellation_Reasons>;
  cancellation_reason_id?: Maybe<Scalars['Int']>;
  cancelled_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  closed_by?: Maybe<Users>;
  closed_by_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  created_by?: Maybe<Users>;
  created_by_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  crossroads_transport?: Maybe<Crossroads_Transports>;
  crossroads_transport_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivered_by?: Maybe<Scalars['String']>;
  /** An array relationship */
  deliveries: Array<Deliveries>;
  /** An aggregated array relationship */
  deliveries_aggregate: Deliveries_Aggregate;
  estimated_size?: Maybe<Scalars['String']>;
  /** An object relationship */
  gogovan_transport?: Maybe<Gogovan_Transports>;
  gogovan_transport_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** A computed field, executes function "offer_images" */
  images?: Maybe<Array<Images>>;
  inactive_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  items: Array<Items>;
  /** An aggregated array relationship */
  items_aggregate: Items_Aggregate;
  language?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  /** An array relationship */
  offers_packages: Array<Offers_Packages>;
  /** An aggregated array relationship */
  offers_packages_aggregate: Offers_Packages_Aggregate;
  origin?: Maybe<Scalars['String']>;
  parking?: Maybe<Scalars['Boolean']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  received_by?: Maybe<Users>;
  received_by_id?: Maybe<Scalars['Int']>;
  review_completed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  reviewed_by?: Maybe<Users>;
  reviewed_by_id?: Maybe<Scalars['Int']>;
  saleable?: Maybe<Scalars['Boolean']>;
  stairs?: Maybe<Scalars['Boolean']>;
  start_receiving_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "offers" */
export type OffersDeliveriesArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** columns and relationships of "offers" */
export type OffersDeliveries_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** columns and relationships of "offers" */
export type OffersImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


/** columns and relationships of "offers" */
export type OffersItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** columns and relationships of "offers" */
export type OffersItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** columns and relationships of "offers" */
export type OffersOffers_PackagesArgs = {
  distinct_on?: Maybe<Array<Offers_Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Packages_Order_By>>;
  where?: Maybe<Offers_Packages_Bool_Exp>;
};


/** columns and relationships of "offers" */
export type OffersOffers_Packages_AggregateArgs = {
  distinct_on?: Maybe<Array<Offers_Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Packages_Order_By>>;
  where?: Maybe<Offers_Packages_Bool_Exp>;
};

/** aggregated selection of "offers" */
export type Offers_Aggregate = {
  __typename?: 'offers_aggregate';
  aggregate?: Maybe<Offers_Aggregate_Fields>;
  nodes: Array<Offers>;
};

/** aggregate fields of "offers" */
export type Offers_Aggregate_Fields = {
  __typename?: 'offers_aggregate_fields';
  avg?: Maybe<Offers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Offers_Max_Fields>;
  min?: Maybe<Offers_Min_Fields>;
  stddev?: Maybe<Offers_Stddev_Fields>;
  stddev_pop?: Maybe<Offers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Offers_Stddev_Samp_Fields>;
  sum?: Maybe<Offers_Sum_Fields>;
  var_pop?: Maybe<Offers_Var_Pop_Fields>;
  var_samp?: Maybe<Offers_Var_Samp_Fields>;
  variance?: Maybe<Offers_Variance_Fields>;
};


/** aggregate fields of "offers" */
export type Offers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Offers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "offers" */
export type Offers_Aggregate_Order_By = {
  avg?: Maybe<Offers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Offers_Max_Order_By>;
  min?: Maybe<Offers_Min_Order_By>;
  stddev?: Maybe<Offers_Stddev_Order_By>;
  stddev_pop?: Maybe<Offers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Offers_Stddev_Samp_Order_By>;
  sum?: Maybe<Offers_Sum_Order_By>;
  var_pop?: Maybe<Offers_Var_Pop_Order_By>;
  var_samp?: Maybe<Offers_Var_Samp_Order_By>;
  variance?: Maybe<Offers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "offers" */
export type Offers_Arr_Rel_Insert_Input = {
  data: Array<Offers_Insert_Input>;
  on_conflict?: Maybe<Offers_On_Conflict>;
};

/** aggregate avg on columns */
export type Offers_Avg_Fields = {
  __typename?: 'offers_avg_fields';
  cancellation_reason_id?: Maybe<Scalars['Float']>;
  closed_by_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  crossroads_transport_id?: Maybe<Scalars['Float']>;
  gogovan_transport_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  received_by_id?: Maybe<Scalars['Float']>;
  reviewed_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "offers" */
export type Offers_Avg_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "offers". All fields are combined with a logical 'AND'. */
export type Offers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Offers_Bool_Exp>>>;
  _not?: Maybe<Offers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Offers_Bool_Exp>>>;
  cancel_reason?: Maybe<String_Comparison_Exp>;
  cancellation_reason?: Maybe<Cancellation_Reasons_Bool_Exp>;
  cancellation_reason_id?: Maybe<Int_Comparison_Exp>;
  cancelled_at?: Maybe<Timestamptz_Comparison_Exp>;
  closed_by?: Maybe<Users_Bool_Exp>;
  closed_by_id?: Maybe<Int_Comparison_Exp>;
  company_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<Users_Bool_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  crossroads_transport?: Maybe<Crossroads_Transports_Bool_Exp>;
  crossroads_transport_id?: Maybe<Int_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  delivered_by?: Maybe<String_Comparison_Exp>;
  deliveries?: Maybe<Deliveries_Bool_Exp>;
  estimated_size?: Maybe<String_Comparison_Exp>;
  gogovan_transport?: Maybe<Gogovan_Transports_Bool_Exp>;
  gogovan_transport_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inactive_at?: Maybe<Timestamptz_Comparison_Exp>;
  items?: Maybe<Items_Bool_Exp>;
  language?: Maybe<String_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  offers_packages?: Maybe<Offers_Packages_Bool_Exp>;
  origin?: Maybe<String_Comparison_Exp>;
  parking?: Maybe<Boolean_Comparison_Exp>;
  received_at?: Maybe<Timestamptz_Comparison_Exp>;
  received_by?: Maybe<Users_Bool_Exp>;
  received_by_id?: Maybe<Int_Comparison_Exp>;
  review_completed_at?: Maybe<Timestamptz_Comparison_Exp>;
  reviewed_at?: Maybe<Timestamptz_Comparison_Exp>;
  reviewed_by?: Maybe<Users_Bool_Exp>;
  reviewed_by_id?: Maybe<Int_Comparison_Exp>;
  saleable?: Maybe<Boolean_Comparison_Exp>;
  stairs?: Maybe<Boolean_Comparison_Exp>;
  start_receiving_at?: Maybe<Timestamptz_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  submitted_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "offers" */
export enum Offers_Constraint {
  /** unique or primary key constraint */
  OffersPkey = 'offers_pkey'
}

/** input type for incrementing integer column in table "offers" */
export type Offers_Inc_Input = {
  cancellation_reason_id?: Maybe<Scalars['Int']>;
  closed_by_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crossroads_transport_id?: Maybe<Scalars['Int']>;
  gogovan_transport_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  received_by_id?: Maybe<Scalars['Int']>;
  reviewed_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "offers" */
export type Offers_Insert_Input = {
  cancel_reason?: Maybe<Scalars['String']>;
  cancellation_reason?: Maybe<Cancellation_Reasons_Obj_Rel_Insert_Input>;
  cancellation_reason_id?: Maybe<Scalars['Int']>;
  cancelled_at?: Maybe<Scalars['timestamptz']>;
  closed_by?: Maybe<Users_Obj_Rel_Insert_Input>;
  closed_by_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Users_Obj_Rel_Insert_Input>;
  created_by_id?: Maybe<Scalars['Int']>;
  crossroads_transport?: Maybe<Crossroads_Transports_Obj_Rel_Insert_Input>;
  crossroads_transport_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivered_by?: Maybe<Scalars['String']>;
  deliveries?: Maybe<Deliveries_Arr_Rel_Insert_Input>;
  estimated_size?: Maybe<Scalars['String']>;
  gogovan_transport?: Maybe<Gogovan_Transports_Obj_Rel_Insert_Input>;
  gogovan_transport_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inactive_at?: Maybe<Scalars['timestamptz']>;
  items?: Maybe<Items_Arr_Rel_Insert_Input>;
  language?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  offers_packages?: Maybe<Offers_Packages_Arr_Rel_Insert_Input>;
  origin?: Maybe<Scalars['String']>;
  parking?: Maybe<Scalars['Boolean']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_by?: Maybe<Users_Obj_Rel_Insert_Input>;
  received_by_id?: Maybe<Scalars['Int']>;
  review_completed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_by?: Maybe<Users_Obj_Rel_Insert_Input>;
  reviewed_by_id?: Maybe<Scalars['Int']>;
  saleable?: Maybe<Scalars['Boolean']>;
  stairs?: Maybe<Scalars['Boolean']>;
  start_receiving_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Offers_Max_Fields = {
  __typename?: 'offers_max_fields';
  cancel_reason?: Maybe<Scalars['String']>;
  cancellation_reason_id?: Maybe<Scalars['Int']>;
  cancelled_at?: Maybe<Scalars['timestamptz']>;
  closed_by_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crossroads_transport_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivered_by?: Maybe<Scalars['String']>;
  estimated_size?: Maybe<Scalars['String']>;
  gogovan_transport_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inactive_at?: Maybe<Scalars['timestamptz']>;
  language?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_by_id?: Maybe<Scalars['Int']>;
  review_completed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_by_id?: Maybe<Scalars['Int']>;
  start_receiving_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "offers" */
export type Offers_Max_Order_By = {
  cancel_reason?: Maybe<Order_By>;
  cancellation_reason_id?: Maybe<Order_By>;
  cancelled_at?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  delivered_by?: Maybe<Order_By>;
  estimated_size?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inactive_at?: Maybe<Order_By>;
  language?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  origin?: Maybe<Order_By>;
  received_at?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  review_completed_at?: Maybe<Order_By>;
  reviewed_at?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
  start_receiving_at?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Offers_Min_Fields = {
  __typename?: 'offers_min_fields';
  cancel_reason?: Maybe<Scalars['String']>;
  cancellation_reason_id?: Maybe<Scalars['Int']>;
  cancelled_at?: Maybe<Scalars['timestamptz']>;
  closed_by_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crossroads_transport_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivered_by?: Maybe<Scalars['String']>;
  estimated_size?: Maybe<Scalars['String']>;
  gogovan_transport_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inactive_at?: Maybe<Scalars['timestamptz']>;
  language?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_by_id?: Maybe<Scalars['Int']>;
  review_completed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_by_id?: Maybe<Scalars['Int']>;
  start_receiving_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "offers" */
export type Offers_Min_Order_By = {
  cancel_reason?: Maybe<Order_By>;
  cancellation_reason_id?: Maybe<Order_By>;
  cancelled_at?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  delivered_by?: Maybe<Order_By>;
  estimated_size?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inactive_at?: Maybe<Order_By>;
  language?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  origin?: Maybe<Order_By>;
  received_at?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  review_completed_at?: Maybe<Order_By>;
  reviewed_at?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
  start_receiving_at?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "offers" */
export type Offers_Mutation_Response = {
  __typename?: 'offers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Offers>;
};

/** input type for inserting object relation for remote table "offers" */
export type Offers_Obj_Rel_Insert_Input = {
  data: Offers_Insert_Input;
  on_conflict?: Maybe<Offers_On_Conflict>;
};

/** on conflict condition type for table "offers" */
export type Offers_On_Conflict = {
  constraint: Offers_Constraint;
  update_columns: Array<Offers_Update_Column>;
  where?: Maybe<Offers_Bool_Exp>;
};

/** ordering options when selecting data from "offers" */
export type Offers_Order_By = {
  cancel_reason?: Maybe<Order_By>;
  cancellation_reason?: Maybe<Cancellation_Reasons_Order_By>;
  cancellation_reason_id?: Maybe<Order_By>;
  cancelled_at?: Maybe<Order_By>;
  closed_by?: Maybe<Users_Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Users_Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport?: Maybe<Crossroads_Transports_Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  delivered_by?: Maybe<Order_By>;
  deliveries_aggregate?: Maybe<Deliveries_Aggregate_Order_By>;
  estimated_size?: Maybe<Order_By>;
  gogovan_transport?: Maybe<Gogovan_Transports_Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inactive_at?: Maybe<Order_By>;
  items_aggregate?: Maybe<Items_Aggregate_Order_By>;
  language?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  offers_packages_aggregate?: Maybe<Offers_Packages_Aggregate_Order_By>;
  origin?: Maybe<Order_By>;
  parking?: Maybe<Order_By>;
  received_at?: Maybe<Order_By>;
  received_by?: Maybe<Users_Order_By>;
  received_by_id?: Maybe<Order_By>;
  review_completed_at?: Maybe<Order_By>;
  reviewed_at?: Maybe<Order_By>;
  reviewed_by?: Maybe<Users_Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
  saleable?: Maybe<Order_By>;
  stairs?: Maybe<Order_By>;
  start_receiving_at?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  submitted_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "offers_packages" */
export type Offers_Packages = {
  __typename?: 'offers_packages';
  id: Scalars['Int'];
  /** An object relationship */
  offer?: Maybe<Offers>;
  offer_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  package?: Maybe<Packages>;
  package_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "offers_packages" */
export type Offers_Packages_Aggregate = {
  __typename?: 'offers_packages_aggregate';
  aggregate?: Maybe<Offers_Packages_Aggregate_Fields>;
  nodes: Array<Offers_Packages>;
};

/** aggregate fields of "offers_packages" */
export type Offers_Packages_Aggregate_Fields = {
  __typename?: 'offers_packages_aggregate_fields';
  avg?: Maybe<Offers_Packages_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Offers_Packages_Max_Fields>;
  min?: Maybe<Offers_Packages_Min_Fields>;
  stddev?: Maybe<Offers_Packages_Stddev_Fields>;
  stddev_pop?: Maybe<Offers_Packages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Offers_Packages_Stddev_Samp_Fields>;
  sum?: Maybe<Offers_Packages_Sum_Fields>;
  var_pop?: Maybe<Offers_Packages_Var_Pop_Fields>;
  var_samp?: Maybe<Offers_Packages_Var_Samp_Fields>;
  variance?: Maybe<Offers_Packages_Variance_Fields>;
};


/** aggregate fields of "offers_packages" */
export type Offers_Packages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Offers_Packages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "offers_packages" */
export type Offers_Packages_Aggregate_Order_By = {
  avg?: Maybe<Offers_Packages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Offers_Packages_Max_Order_By>;
  min?: Maybe<Offers_Packages_Min_Order_By>;
  stddev?: Maybe<Offers_Packages_Stddev_Order_By>;
  stddev_pop?: Maybe<Offers_Packages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Offers_Packages_Stddev_Samp_Order_By>;
  sum?: Maybe<Offers_Packages_Sum_Order_By>;
  var_pop?: Maybe<Offers_Packages_Var_Pop_Order_By>;
  var_samp?: Maybe<Offers_Packages_Var_Samp_Order_By>;
  variance?: Maybe<Offers_Packages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "offers_packages" */
export type Offers_Packages_Arr_Rel_Insert_Input = {
  data: Array<Offers_Packages_Insert_Input>;
  on_conflict?: Maybe<Offers_Packages_On_Conflict>;
};

/** aggregate avg on columns */
export type Offers_Packages_Avg_Fields = {
  __typename?: 'offers_packages_avg_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "offers_packages" */
export type Offers_Packages_Avg_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "offers_packages". All fields are combined with a logical 'AND'. */
export type Offers_Packages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Offers_Packages_Bool_Exp>>>;
  _not?: Maybe<Offers_Packages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Offers_Packages_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  offer?: Maybe<Offers_Bool_Exp>;
  offer_id?: Maybe<Int_Comparison_Exp>;
  package?: Maybe<Packages_Bool_Exp>;
  package_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "offers_packages" */
export enum Offers_Packages_Constraint {
  /** unique or primary key constraint */
  OffersPackagesPkey = 'offers_packages_pkey'
}

/** input type for incrementing integer column in table "offers_packages" */
export type Offers_Packages_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "offers_packages" */
export type Offers_Packages_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  offer?: Maybe<Offers_Obj_Rel_Insert_Input>;
  offer_id?: Maybe<Scalars['Int']>;
  package?: Maybe<Packages_Obj_Rel_Insert_Input>;
  package_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Offers_Packages_Max_Fields = {
  __typename?: 'offers_packages_max_fields';
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "offers_packages" */
export type Offers_Packages_Max_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Offers_Packages_Min_Fields = {
  __typename?: 'offers_packages_min_fields';
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "offers_packages" */
export type Offers_Packages_Min_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "offers_packages" */
export type Offers_Packages_Mutation_Response = {
  __typename?: 'offers_packages_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Offers_Packages>;
};

/** input type for inserting object relation for remote table "offers_packages" */
export type Offers_Packages_Obj_Rel_Insert_Input = {
  data: Offers_Packages_Insert_Input;
  on_conflict?: Maybe<Offers_Packages_On_Conflict>;
};

/** on conflict condition type for table "offers_packages" */
export type Offers_Packages_On_Conflict = {
  constraint: Offers_Packages_Constraint;
  update_columns: Array<Offers_Packages_Update_Column>;
  where?: Maybe<Offers_Packages_Bool_Exp>;
};

/** ordering options when selecting data from "offers_packages" */
export type Offers_Packages_Order_By = {
  id?: Maybe<Order_By>;
  offer?: Maybe<Offers_Order_By>;
  offer_id?: Maybe<Order_By>;
  package?: Maybe<Packages_Order_By>;
  package_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "offers_packages" */
export type Offers_Packages_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "offers_packages" */
export enum Offers_Packages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  PackageId = 'package_id'
}

/** input type for updating data in table "offers_packages" */
export type Offers_Packages_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Offers_Packages_Stddev_Fields = {
  __typename?: 'offers_packages_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "offers_packages" */
export type Offers_Packages_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Offers_Packages_Stddev_Pop_Fields = {
  __typename?: 'offers_packages_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "offers_packages" */
export type Offers_Packages_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Offers_Packages_Stddev_Samp_Fields = {
  __typename?: 'offers_packages_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "offers_packages" */
export type Offers_Packages_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Offers_Packages_Sum_Fields = {
  __typename?: 'offers_packages_sum_fields';
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  package_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "offers_packages" */
export type Offers_Packages_Sum_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** update columns of table "offers_packages" */
export enum Offers_Packages_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  PackageId = 'package_id'
}

/** aggregate var_pop on columns */
export type Offers_Packages_Var_Pop_Fields = {
  __typename?: 'offers_packages_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "offers_packages" */
export type Offers_Packages_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Offers_Packages_Var_Samp_Fields = {
  __typename?: 'offers_packages_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "offers_packages" */
export type Offers_Packages_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Offers_Packages_Variance_Fields = {
  __typename?: 'offers_packages_variance_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  package_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "offers_packages" */
export type Offers_Packages_Variance_Order_By = {
  id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "offers" */
export type Offers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "offers" */
export enum Offers_Select_Column {
  /** column name */
  CancelReason = 'cancel_reason',
  /** column name */
  CancellationReasonId = 'cancellation_reason_id',
  /** column name */
  CancelledAt = 'cancelled_at',
  /** column name */
  ClosedById = 'closed_by_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  CrossroadsTransportId = 'crossroads_transport_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeliveredBy = 'delivered_by',
  /** column name */
  EstimatedSize = 'estimated_size',
  /** column name */
  GogovanTransportId = 'gogovan_transport_id',
  /** column name */
  Id = 'id',
  /** column name */
  InactiveAt = 'inactive_at',
  /** column name */
  Language = 'language',
  /** column name */
  Notes = 'notes',
  /** column name */
  Origin = 'origin',
  /** column name */
  Parking = 'parking',
  /** column name */
  ReceivedAt = 'received_at',
  /** column name */
  ReceivedById = 'received_by_id',
  /** column name */
  ReviewCompletedAt = 'review_completed_at',
  /** column name */
  ReviewedAt = 'reviewed_at',
  /** column name */
  ReviewedById = 'reviewed_by_id',
  /** column name */
  Saleable = 'saleable',
  /** column name */
  Stairs = 'stairs',
  /** column name */
  StartReceivingAt = 'start_receiving_at',
  /** column name */
  State = 'state',
  /** column name */
  SubmittedAt = 'submitted_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "offers" */
export type Offers_Set_Input = {
  cancel_reason?: Maybe<Scalars['String']>;
  cancellation_reason_id?: Maybe<Scalars['Int']>;
  cancelled_at?: Maybe<Scalars['timestamptz']>;
  closed_by_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crossroads_transport_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  delivered_by?: Maybe<Scalars['String']>;
  estimated_size?: Maybe<Scalars['String']>;
  gogovan_transport_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inactive_at?: Maybe<Scalars['timestamptz']>;
  language?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  parking?: Maybe<Scalars['Boolean']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_by_id?: Maybe<Scalars['Int']>;
  review_completed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_at?: Maybe<Scalars['timestamptz']>;
  reviewed_by_id?: Maybe<Scalars['Int']>;
  saleable?: Maybe<Scalars['Boolean']>;
  stairs?: Maybe<Scalars['Boolean']>;
  start_receiving_at?: Maybe<Scalars['timestamptz']>;
  state?: Maybe<Scalars['String']>;
  submitted_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Offers_Stddev_Fields = {
  __typename?: 'offers_stddev_fields';
  cancellation_reason_id?: Maybe<Scalars['Float']>;
  closed_by_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  crossroads_transport_id?: Maybe<Scalars['Float']>;
  gogovan_transport_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  received_by_id?: Maybe<Scalars['Float']>;
  reviewed_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "offers" */
export type Offers_Stddev_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Offers_Stddev_Pop_Fields = {
  __typename?: 'offers_stddev_pop_fields';
  cancellation_reason_id?: Maybe<Scalars['Float']>;
  closed_by_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  crossroads_transport_id?: Maybe<Scalars['Float']>;
  gogovan_transport_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  received_by_id?: Maybe<Scalars['Float']>;
  reviewed_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "offers" */
export type Offers_Stddev_Pop_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Offers_Stddev_Samp_Fields = {
  __typename?: 'offers_stddev_samp_fields';
  cancellation_reason_id?: Maybe<Scalars['Float']>;
  closed_by_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  crossroads_transport_id?: Maybe<Scalars['Float']>;
  gogovan_transport_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  received_by_id?: Maybe<Scalars['Float']>;
  reviewed_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "offers" */
export type Offers_Stddev_Samp_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Offers_Sum_Fields = {
  __typename?: 'offers_sum_fields';
  cancellation_reason_id?: Maybe<Scalars['Int']>;
  closed_by_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_by_id?: Maybe<Scalars['Int']>;
  crossroads_transport_id?: Maybe<Scalars['Int']>;
  gogovan_transport_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  received_by_id?: Maybe<Scalars['Int']>;
  reviewed_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "offers" */
export type Offers_Sum_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** update columns of table "offers" */
export enum Offers_Update_Column {
  /** column name */
  CancelReason = 'cancel_reason',
  /** column name */
  CancellationReasonId = 'cancellation_reason_id',
  /** column name */
  CancelledAt = 'cancelled_at',
  /** column name */
  ClosedById = 'closed_by_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  CrossroadsTransportId = 'crossroads_transport_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeliveredBy = 'delivered_by',
  /** column name */
  EstimatedSize = 'estimated_size',
  /** column name */
  GogovanTransportId = 'gogovan_transport_id',
  /** column name */
  Id = 'id',
  /** column name */
  InactiveAt = 'inactive_at',
  /** column name */
  Language = 'language',
  /** column name */
  Notes = 'notes',
  /** column name */
  Origin = 'origin',
  /** column name */
  Parking = 'parking',
  /** column name */
  ReceivedAt = 'received_at',
  /** column name */
  ReceivedById = 'received_by_id',
  /** column name */
  ReviewCompletedAt = 'review_completed_at',
  /** column name */
  ReviewedAt = 'reviewed_at',
  /** column name */
  ReviewedById = 'reviewed_by_id',
  /** column name */
  Saleable = 'saleable',
  /** column name */
  Stairs = 'stairs',
  /** column name */
  StartReceivingAt = 'start_receiving_at',
  /** column name */
  State = 'state',
  /** column name */
  SubmittedAt = 'submitted_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Offers_Var_Pop_Fields = {
  __typename?: 'offers_var_pop_fields';
  cancellation_reason_id?: Maybe<Scalars['Float']>;
  closed_by_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  crossroads_transport_id?: Maybe<Scalars['Float']>;
  gogovan_transport_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  received_by_id?: Maybe<Scalars['Float']>;
  reviewed_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "offers" */
export type Offers_Var_Pop_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Offers_Var_Samp_Fields = {
  __typename?: 'offers_var_samp_fields';
  cancellation_reason_id?: Maybe<Scalars['Float']>;
  closed_by_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  crossroads_transport_id?: Maybe<Scalars['Float']>;
  gogovan_transport_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  received_by_id?: Maybe<Scalars['Float']>;
  reviewed_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "offers" */
export type Offers_Var_Samp_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Offers_Variance_Fields = {
  __typename?: 'offers_variance_fields';
  cancellation_reason_id?: Maybe<Scalars['Float']>;
  closed_by_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  crossroads_transport_id?: Maybe<Scalars['Float']>;
  gogovan_transport_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  received_by_id?: Maybe<Scalars['Float']>;
  reviewed_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "offers" */
export type Offers_Variance_Order_By = {
  cancellation_reason_id?: Maybe<Order_By>;
  closed_by_id?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  crossroads_transport_id?: Maybe<Order_By>;
  gogovan_transport_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  received_by_id?: Maybe<Order_By>;
  reviewed_by_id?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organisation_types" */
export type Organisation_Types = {
  __typename?: 'organisation_types';
  category_en?: Maybe<Scalars['String']>;
  category_zh_tw?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "organisation_types" */
export type Organisation_Types_Aggregate = {
  __typename?: 'organisation_types_aggregate';
  aggregate?: Maybe<Organisation_Types_Aggregate_Fields>;
  nodes: Array<Organisation_Types>;
};

/** aggregate fields of "organisation_types" */
export type Organisation_Types_Aggregate_Fields = {
  __typename?: 'organisation_types_aggregate_fields';
  avg?: Maybe<Organisation_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organisation_Types_Max_Fields>;
  min?: Maybe<Organisation_Types_Min_Fields>;
  stddev?: Maybe<Organisation_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Organisation_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organisation_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Organisation_Types_Sum_Fields>;
  var_pop?: Maybe<Organisation_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Organisation_Types_Var_Samp_Fields>;
  variance?: Maybe<Organisation_Types_Variance_Fields>;
};


/** aggregate fields of "organisation_types" */
export type Organisation_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organisation_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organisation_types" */
export type Organisation_Types_Aggregate_Order_By = {
  avg?: Maybe<Organisation_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organisation_Types_Max_Order_By>;
  min?: Maybe<Organisation_Types_Min_Order_By>;
  stddev?: Maybe<Organisation_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Organisation_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organisation_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Organisation_Types_Sum_Order_By>;
  var_pop?: Maybe<Organisation_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Organisation_Types_Var_Samp_Order_By>;
  variance?: Maybe<Organisation_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organisation_types" */
export type Organisation_Types_Arr_Rel_Insert_Input = {
  data: Array<Organisation_Types_Insert_Input>;
  on_conflict?: Maybe<Organisation_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Organisation_Types_Avg_Fields = {
  __typename?: 'organisation_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organisation_types" */
export type Organisation_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organisation_types". All fields are combined with a logical 'AND'. */
export type Organisation_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organisation_Types_Bool_Exp>>>;
  _not?: Maybe<Organisation_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organisation_Types_Bool_Exp>>>;
  category_en?: Maybe<String_Comparison_Exp>;
  category_zh_tw?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organisation_types" */
export enum Organisation_Types_Constraint {
  /** unique or primary key constraint */
  OrganisationTypesPkey = 'organisation_types_pkey'
}

/** input type for incrementing integer column in table "organisation_types" */
export type Organisation_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organisation_types" */
export type Organisation_Types_Insert_Input = {
  category_en?: Maybe<Scalars['String']>;
  category_zh_tw?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Organisation_Types_Max_Fields = {
  __typename?: 'organisation_types_max_fields';
  category_en?: Maybe<Scalars['String']>;
  category_zh_tw?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "organisation_types" */
export type Organisation_Types_Max_Order_By = {
  category_en?: Maybe<Order_By>;
  category_zh_tw?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organisation_Types_Min_Fields = {
  __typename?: 'organisation_types_min_fields';
  category_en?: Maybe<Scalars['String']>;
  category_zh_tw?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "organisation_types" */
export type Organisation_Types_Min_Order_By = {
  category_en?: Maybe<Order_By>;
  category_zh_tw?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "organisation_types" */
export type Organisation_Types_Mutation_Response = {
  __typename?: 'organisation_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organisation_Types>;
};

/** input type for inserting object relation for remote table "organisation_types" */
export type Organisation_Types_Obj_Rel_Insert_Input = {
  data: Organisation_Types_Insert_Input;
  on_conflict?: Maybe<Organisation_Types_On_Conflict>;
};

/** on conflict condition type for table "organisation_types" */
export type Organisation_Types_On_Conflict = {
  constraint: Organisation_Types_Constraint;
  update_columns: Array<Organisation_Types_Update_Column>;
  where?: Maybe<Organisation_Types_Bool_Exp>;
};

/** ordering options when selecting data from "organisation_types" */
export type Organisation_Types_Order_By = {
  category_en?: Maybe<Order_By>;
  category_zh_tw?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "organisation_types" */
export type Organisation_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "organisation_types" */
export enum Organisation_Types_Select_Column {
  /** column name */
  CategoryEn = 'category_en',
  /** column name */
  CategoryZhTw = 'category_zh_tw',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "organisation_types" */
export type Organisation_Types_Set_Input = {
  category_en?: Maybe<Scalars['String']>;
  category_zh_tw?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Organisation_Types_Stddev_Fields = {
  __typename?: 'organisation_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organisation_types" */
export type Organisation_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organisation_Types_Stddev_Pop_Fields = {
  __typename?: 'organisation_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organisation_types" */
export type Organisation_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organisation_Types_Stddev_Samp_Fields = {
  __typename?: 'organisation_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organisation_types" */
export type Organisation_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organisation_Types_Sum_Fields = {
  __typename?: 'organisation_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organisation_types" */
export type Organisation_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "organisation_types" */
export enum Organisation_Types_Update_Column {
  /** column name */
  CategoryEn = 'category_en',
  /** column name */
  CategoryZhTw = 'category_zh_tw',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Organisation_Types_Var_Pop_Fields = {
  __typename?: 'organisation_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organisation_types" */
export type Organisation_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organisation_Types_Var_Samp_Fields = {
  __typename?: 'organisation_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organisation_types" */
export type Organisation_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organisation_Types_Variance_Fields = {
  __typename?: 'organisation_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organisation_types" */
export type Organisation_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "organisations" */
export type Organisations = {
  __typename?: 'organisations';
  /** An object relationship */
  country?: Maybe<Countries>;
  country_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  /** An object relationship */
  district?: Maybe<Districts>;
  district_id?: Maybe<Scalars['Int']>;
  gih3_id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  /** An object relationship */
  organisation_type?: Maybe<Organisation_Types>;
  organisation_type_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  organisations_users: Array<Organisations_Users>;
  /** An aggregated array relationship */
  organisations_users_aggregate: Organisations_Users_Aggregate;
  registration?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  website?: Maybe<Scalars['String']>;
};


/** columns and relationships of "organisations" */
export type OrganisationsOrganisations_UsersArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};


/** columns and relationships of "organisations" */
export type OrganisationsOrganisations_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};

/** aggregated selection of "organisations" */
export type Organisations_Aggregate = {
  __typename?: 'organisations_aggregate';
  aggregate?: Maybe<Organisations_Aggregate_Fields>;
  nodes: Array<Organisations>;
};

/** aggregate fields of "organisations" */
export type Organisations_Aggregate_Fields = {
  __typename?: 'organisations_aggregate_fields';
  avg?: Maybe<Organisations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organisations_Max_Fields>;
  min?: Maybe<Organisations_Min_Fields>;
  stddev?: Maybe<Organisations_Stddev_Fields>;
  stddev_pop?: Maybe<Organisations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organisations_Stddev_Samp_Fields>;
  sum?: Maybe<Organisations_Sum_Fields>;
  var_pop?: Maybe<Organisations_Var_Pop_Fields>;
  var_samp?: Maybe<Organisations_Var_Samp_Fields>;
  variance?: Maybe<Organisations_Variance_Fields>;
};


/** aggregate fields of "organisations" */
export type Organisations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organisations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organisations" */
export type Organisations_Aggregate_Order_By = {
  avg?: Maybe<Organisations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organisations_Max_Order_By>;
  min?: Maybe<Organisations_Min_Order_By>;
  stddev?: Maybe<Organisations_Stddev_Order_By>;
  stddev_pop?: Maybe<Organisations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organisations_Stddev_Samp_Order_By>;
  sum?: Maybe<Organisations_Sum_Order_By>;
  var_pop?: Maybe<Organisations_Var_Pop_Order_By>;
  var_samp?: Maybe<Organisations_Var_Samp_Order_By>;
  variance?: Maybe<Organisations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organisations" */
export type Organisations_Arr_Rel_Insert_Input = {
  data: Array<Organisations_Insert_Input>;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};

/** aggregate avg on columns */
export type Organisations_Avg_Fields = {
  __typename?: 'organisations_avg_fields';
  country_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organisation_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organisations" */
export type Organisations_Avg_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organisations". All fields are combined with a logical 'AND'. */
export type Organisations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organisations_Bool_Exp>>>;
  _not?: Maybe<Organisations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organisations_Bool_Exp>>>;
  country?: Maybe<Countries_Bool_Exp>;
  country_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description_en?: Maybe<String_Comparison_Exp>;
  description_zh_tw?: Maybe<String_Comparison_Exp>;
  district?: Maybe<Districts_Bool_Exp>;
  district_id?: Maybe<Int_Comparison_Exp>;
  gih3_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  organisation_type?: Maybe<Organisation_Types_Bool_Exp>;
  organisation_type_id?: Maybe<Int_Comparison_Exp>;
  organisations_users?: Maybe<Organisations_Users_Bool_Exp>;
  registration?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organisations" */
export enum Organisations_Constraint {
  /** unique or primary key constraint */
  OrganisationsPkey = 'organisations_pkey'
}

/** input type for incrementing integer column in table "organisations" */
export type Organisations_Inc_Input = {
  country_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organisation_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organisations" */
export type Organisations_Insert_Input = {
  country?: Maybe<Countries_Obj_Rel_Insert_Input>;
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  district?: Maybe<Districts_Obj_Rel_Insert_Input>;
  district_id?: Maybe<Scalars['Int']>;
  gih3_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  organisation_type?: Maybe<Organisation_Types_Obj_Rel_Insert_Input>;
  organisation_type_id?: Maybe<Scalars['Int']>;
  organisations_users?: Maybe<Organisations_Users_Arr_Rel_Insert_Input>;
  registration?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Organisations_Max_Fields = {
  __typename?: 'organisations_max_fields';
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['Int']>;
  gih3_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  organisation_type_id?: Maybe<Scalars['Int']>;
  registration?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "organisations" */
export type Organisations_Max_Order_By = {
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description_en?: Maybe<Order_By>;
  description_zh_tw?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  gih3_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organisations_Min_Fields = {
  __typename?: 'organisations_min_fields';
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['Int']>;
  gih3_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  organisation_type_id?: Maybe<Scalars['Int']>;
  registration?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "organisations" */
export type Organisations_Min_Order_By = {
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description_en?: Maybe<Order_By>;
  description_zh_tw?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  gih3_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** response of any mutation on the table "organisations" */
export type Organisations_Mutation_Response = {
  __typename?: 'organisations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organisations>;
};

/** input type for inserting object relation for remote table "organisations" */
export type Organisations_Obj_Rel_Insert_Input = {
  data: Organisations_Insert_Input;
  on_conflict?: Maybe<Organisations_On_Conflict>;
};

/** on conflict condition type for table "organisations" */
export type Organisations_On_Conflict = {
  constraint: Organisations_Constraint;
  update_columns: Array<Organisations_Update_Column>;
  where?: Maybe<Organisations_Bool_Exp>;
};

/** ordering options when selecting data from "organisations" */
export type Organisations_Order_By = {
  country?: Maybe<Countries_Order_By>;
  country_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description_en?: Maybe<Order_By>;
  description_zh_tw?: Maybe<Order_By>;
  district?: Maybe<Districts_Order_By>;
  district_id?: Maybe<Order_By>;
  gih3_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  organisation_type?: Maybe<Organisation_Types_Order_By>;
  organisation_type_id?: Maybe<Order_By>;
  organisations_users_aggregate?: Maybe<Organisations_Users_Aggregate_Order_By>;
  registration?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: "organisations" */
export type Organisations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "organisations" */
export enum Organisations_Select_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionZhTw = 'description_zh_tw',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Gih3Id = 'gih3_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  OrganisationTypeId = 'organisation_type_id',
  /** column name */
  Registration = 'registration',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "organisations" */
export type Organisations_Set_Input = {
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  district_id?: Maybe<Scalars['Int']>;
  gih3_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  organisation_type_id?: Maybe<Scalars['Int']>;
  registration?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Organisations_Stddev_Fields = {
  __typename?: 'organisations_stddev_fields';
  country_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organisation_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organisations" */
export type Organisations_Stddev_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organisations_Stddev_Pop_Fields = {
  __typename?: 'organisations_stddev_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organisation_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organisations" */
export type Organisations_Stddev_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organisations_Stddev_Samp_Fields = {
  __typename?: 'organisations_stddev_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organisation_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organisations" */
export type Organisations_Stddev_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organisations_Sum_Fields = {
  __typename?: 'organisations_sum_fields';
  country_id?: Maybe<Scalars['Int']>;
  district_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organisation_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organisations" */
export type Organisations_Sum_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** update columns of table "organisations" */
export enum Organisations_Update_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionZhTw = 'description_zh_tw',
  /** column name */
  DistrictId = 'district_id',
  /** column name */
  Gih3Id = 'gih3_id',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  OrganisationTypeId = 'organisation_type_id',
  /** column name */
  Registration = 'registration',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** columns and relationships of "organisations_users" */
export type Organisations_Users = {
  __typename?: 'organisations_users';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  organisation?: Maybe<Organisations>;
  organisation_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  preferred_contact_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "organisations_users" */
export type Organisations_Users_Aggregate = {
  __typename?: 'organisations_users_aggregate';
  aggregate?: Maybe<Organisations_Users_Aggregate_Fields>;
  nodes: Array<Organisations_Users>;
};

/** aggregate fields of "organisations_users" */
export type Organisations_Users_Aggregate_Fields = {
  __typename?: 'organisations_users_aggregate_fields';
  avg?: Maybe<Organisations_Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Organisations_Users_Max_Fields>;
  min?: Maybe<Organisations_Users_Min_Fields>;
  stddev?: Maybe<Organisations_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Organisations_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organisations_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Organisations_Users_Sum_Fields>;
  var_pop?: Maybe<Organisations_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Organisations_Users_Var_Samp_Fields>;
  variance?: Maybe<Organisations_Users_Variance_Fields>;
};


/** aggregate fields of "organisations_users" */
export type Organisations_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organisations_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organisations_users" */
export type Organisations_Users_Aggregate_Order_By = {
  avg?: Maybe<Organisations_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organisations_Users_Max_Order_By>;
  min?: Maybe<Organisations_Users_Min_Order_By>;
  stddev?: Maybe<Organisations_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Organisations_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organisations_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Organisations_Users_Sum_Order_By>;
  var_pop?: Maybe<Organisations_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Organisations_Users_Var_Samp_Order_By>;
  variance?: Maybe<Organisations_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organisations_users" */
export type Organisations_Users_Arr_Rel_Insert_Input = {
  data: Array<Organisations_Users_Insert_Input>;
  on_conflict?: Maybe<Organisations_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Organisations_Users_Avg_Fields = {
  __typename?: 'organisations_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
  organisation_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organisations_users" */
export type Organisations_Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organisations_users". All fields are combined with a logical 'AND'. */
export type Organisations_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organisations_Users_Bool_Exp>>>;
  _not?: Maybe<Organisations_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organisations_Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organisation?: Maybe<Organisations_Bool_Exp>;
  organisation_id?: Maybe<Int_Comparison_Exp>;
  position?: Maybe<String_Comparison_Exp>;
  preferred_contact_number?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "organisations_users" */
export enum Organisations_Users_Constraint {
  /** unique or primary key constraint */
  OrganisationsUsersPkey = 'organisations_users_pkey'
}

/** input type for incrementing integer column in table "organisations_users" */
export type Organisations_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  organisation_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organisations_users" */
export type Organisations_Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation?: Maybe<Organisations_Obj_Rel_Insert_Input>;
  organisation_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  preferred_contact_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Organisations_Users_Max_Fields = {
  __typename?: 'organisations_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  preferred_contact_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "organisations_users" */
export type Organisations_Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  preferred_contact_number?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organisations_Users_Min_Fields = {
  __typename?: 'organisations_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  preferred_contact_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "organisations_users" */
export type Organisations_Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  preferred_contact_number?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "organisations_users" */
export type Organisations_Users_Mutation_Response = {
  __typename?: 'organisations_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Organisations_Users>;
};

/** input type for inserting object relation for remote table "organisations_users" */
export type Organisations_Users_Obj_Rel_Insert_Input = {
  data: Organisations_Users_Insert_Input;
  on_conflict?: Maybe<Organisations_Users_On_Conflict>;
};

/** on conflict condition type for table "organisations_users" */
export type Organisations_Users_On_Conflict = {
  constraint: Organisations_Users_Constraint;
  update_columns: Array<Organisations_Users_Update_Column>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};

/** ordering options when selecting data from "organisations_users" */
export type Organisations_Users_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation?: Maybe<Organisations_Order_By>;
  organisation_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  preferred_contact_number?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "organisations_users" */
export type Organisations_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "organisations_users" */
export enum Organisations_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganisationId = 'organisation_id',
  /** column name */
  Position = 'position',
  /** column name */
  PreferredContactNumber = 'preferred_contact_number',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organisations_users" */
export type Organisations_Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  organisation_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  preferred_contact_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Organisations_Users_Stddev_Fields = {
  __typename?: 'organisations_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  organisation_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organisations_users" */
export type Organisations_Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organisations_Users_Stddev_Pop_Fields = {
  __typename?: 'organisations_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organisation_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organisations_users" */
export type Organisations_Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organisations_Users_Stddev_Samp_Fields = {
  __typename?: 'organisations_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organisation_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organisations_users" */
export type Organisations_Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organisations_Users_Sum_Fields = {
  __typename?: 'organisations_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
  organisation_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "organisations_users" */
export type Organisations_Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "organisations_users" */
export enum Organisations_Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganisationId = 'organisation_id',
  /** column name */
  Position = 'position',
  /** column name */
  PreferredContactNumber = 'preferred_contact_number',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Organisations_Users_Var_Pop_Fields = {
  __typename?: 'organisations_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  organisation_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organisations_users" */
export type Organisations_Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organisations_Users_Var_Samp_Fields = {
  __typename?: 'organisations_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  organisation_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organisations_users" */
export type Organisations_Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organisations_Users_Variance_Fields = {
  __typename?: 'organisations_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
  organisation_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organisations_users" */
export type Organisations_Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organisation_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Organisations_Var_Pop_Fields = {
  __typename?: 'organisations_var_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organisation_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organisations" */
export type Organisations_Var_Pop_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organisations_Var_Samp_Fields = {
  __typename?: 'organisations_var_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organisation_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organisations" */
export type Organisations_Var_Samp_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organisations_Variance_Fields = {
  __typename?: 'organisations_variance_fields';
  country_id?: Maybe<Scalars['Float']>;
  district_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organisation_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organisations" */
export type Organisations_Variance_Order_By = {
  country_id?: Maybe<Order_By>;
  district_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organisation_type_id?: Maybe<Order_By>;
};

/** columns and relationships of "package_categories" */
export type Package_Categories = {
  __typename?: 'package_categories';
  /** An array relationship */
  children: Array<Package_Categories>;
  /** An aggregated array relationship */
  children_aggregate: Package_Categories_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  /** An array relationship */
  package_categories_package_types: Array<Package_Categories_Package_Types>;
  /** An aggregated array relationship */
  package_categories_package_types_aggregate: Package_Categories_Package_Types_Aggregate;
  /** An object relationship */
  parent?: Maybe<Package_Categories>;
  parent_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "package_categories" */
export type Package_CategoriesChildrenArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Order_By>>;
  where?: Maybe<Package_Categories_Bool_Exp>;
};


/** columns and relationships of "package_categories" */
export type Package_CategoriesChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Order_By>>;
  where?: Maybe<Package_Categories_Bool_Exp>;
};


/** columns and relationships of "package_categories" */
export type Package_CategoriesPackage_Categories_Package_TypesArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Package_Types_Order_By>>;
  where?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
};


/** columns and relationships of "package_categories" */
export type Package_CategoriesPackage_Categories_Package_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Package_Types_Order_By>>;
  where?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
};

/** aggregated selection of "package_categories" */
export type Package_Categories_Aggregate = {
  __typename?: 'package_categories_aggregate';
  aggregate?: Maybe<Package_Categories_Aggregate_Fields>;
  nodes: Array<Package_Categories>;
};

/** aggregate fields of "package_categories" */
export type Package_Categories_Aggregate_Fields = {
  __typename?: 'package_categories_aggregate_fields';
  avg?: Maybe<Package_Categories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Package_Categories_Max_Fields>;
  min?: Maybe<Package_Categories_Min_Fields>;
  stddev?: Maybe<Package_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Package_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Package_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Package_Categories_Sum_Fields>;
  var_pop?: Maybe<Package_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Package_Categories_Var_Samp_Fields>;
  variance?: Maybe<Package_Categories_Variance_Fields>;
};


/** aggregate fields of "package_categories" */
export type Package_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Package_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "package_categories" */
export type Package_Categories_Aggregate_Order_By = {
  avg?: Maybe<Package_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Package_Categories_Max_Order_By>;
  min?: Maybe<Package_Categories_Min_Order_By>;
  stddev?: Maybe<Package_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Package_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Package_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Package_Categories_Sum_Order_By>;
  var_pop?: Maybe<Package_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Package_Categories_Var_Samp_Order_By>;
  variance?: Maybe<Package_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "package_categories" */
export type Package_Categories_Arr_Rel_Insert_Input = {
  data: Array<Package_Categories_Insert_Input>;
  on_conflict?: Maybe<Package_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Package_Categories_Avg_Fields = {
  __typename?: 'package_categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "package_categories" */
export type Package_Categories_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "package_categories". All fields are combined with a logical 'AND'. */
export type Package_Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Package_Categories_Bool_Exp>>>;
  _not?: Maybe<Package_Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Package_Categories_Bool_Exp>>>;
  children?: Maybe<Package_Categories_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  package_categories_package_types?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
  parent?: Maybe<Package_Categories_Bool_Exp>;
  parent_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "package_categories" */
export enum Package_Categories_Constraint {
  /** unique or primary key constraint */
  PackageCategoriesPkey = 'package_categories_pkey'
}

/** input type for incrementing integer column in table "package_categories" */
export type Package_Categories_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "package_categories" */
export type Package_Categories_Insert_Input = {
  children?: Maybe<Package_Categories_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  package_categories_package_types?: Maybe<Package_Categories_Package_Types_Arr_Rel_Insert_Input>;
  parent?: Maybe<Package_Categories_Obj_Rel_Insert_Input>;
  parent_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Package_Categories_Max_Fields = {
  __typename?: 'package_categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "package_categories" */
export type Package_Categories_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Package_Categories_Min_Fields = {
  __typename?: 'package_categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "package_categories" */
export type Package_Categories_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "package_categories" */
export type Package_Categories_Mutation_Response = {
  __typename?: 'package_categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Package_Categories>;
};

/** input type for inserting object relation for remote table "package_categories" */
export type Package_Categories_Obj_Rel_Insert_Input = {
  data: Package_Categories_Insert_Input;
  on_conflict?: Maybe<Package_Categories_On_Conflict>;
};

/** on conflict condition type for table "package_categories" */
export type Package_Categories_On_Conflict = {
  constraint: Package_Categories_Constraint;
  update_columns: Array<Package_Categories_Update_Column>;
  where?: Maybe<Package_Categories_Bool_Exp>;
};

/** ordering options when selecting data from "package_categories" */
export type Package_Categories_Order_By = {
  children_aggregate?: Maybe<Package_Categories_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  package_categories_package_types_aggregate?: Maybe<Package_Categories_Package_Types_Aggregate_Order_By>;
  parent?: Maybe<Package_Categories_Order_By>;
  parent_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "package_categories_package_types" */
export type Package_Categories_Package_Types = {
  __typename?: 'package_categories_package_types';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  package_category?: Maybe<Package_Categories>;
  package_category_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  package_type?: Maybe<Package_Types>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "package_categories_package_types" */
export type Package_Categories_Package_Types_Aggregate = {
  __typename?: 'package_categories_package_types_aggregate';
  aggregate?: Maybe<Package_Categories_Package_Types_Aggregate_Fields>;
  nodes: Array<Package_Categories_Package_Types>;
};

/** aggregate fields of "package_categories_package_types" */
export type Package_Categories_Package_Types_Aggregate_Fields = {
  __typename?: 'package_categories_package_types_aggregate_fields';
  avg?: Maybe<Package_Categories_Package_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Package_Categories_Package_Types_Max_Fields>;
  min?: Maybe<Package_Categories_Package_Types_Min_Fields>;
  stddev?: Maybe<Package_Categories_Package_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Package_Categories_Package_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Package_Categories_Package_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Package_Categories_Package_Types_Sum_Fields>;
  var_pop?: Maybe<Package_Categories_Package_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Package_Categories_Package_Types_Var_Samp_Fields>;
  variance?: Maybe<Package_Categories_Package_Types_Variance_Fields>;
};


/** aggregate fields of "package_categories_package_types" */
export type Package_Categories_Package_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Package_Categories_Package_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Aggregate_Order_By = {
  avg?: Maybe<Package_Categories_Package_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Package_Categories_Package_Types_Max_Order_By>;
  min?: Maybe<Package_Categories_Package_Types_Min_Order_By>;
  stddev?: Maybe<Package_Categories_Package_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Package_Categories_Package_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Package_Categories_Package_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Package_Categories_Package_Types_Sum_Order_By>;
  var_pop?: Maybe<Package_Categories_Package_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Package_Categories_Package_Types_Var_Samp_Order_By>;
  variance?: Maybe<Package_Categories_Package_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "package_categories_package_types" */
export type Package_Categories_Package_Types_Arr_Rel_Insert_Input = {
  data: Array<Package_Categories_Package_Types_Insert_Input>;
  on_conflict?: Maybe<Package_Categories_Package_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Package_Categories_Package_Types_Avg_Fields = {
  __typename?: 'package_categories_package_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
  package_category_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "package_categories_package_types". All fields are combined with a logical 'AND'. */
export type Package_Categories_Package_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Package_Categories_Package_Types_Bool_Exp>>>;
  _not?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Package_Categories_Package_Types_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  package_category?: Maybe<Package_Categories_Bool_Exp>;
  package_category_id?: Maybe<Int_Comparison_Exp>;
  package_type?: Maybe<Package_Types_Bool_Exp>;
  package_type_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "package_categories_package_types" */
export enum Package_Categories_Package_Types_Constraint {
  /** unique or primary key constraint */
  PackageCategoriesPackageTypesPkey = 'package_categories_package_types_pkey'
}

/** input type for incrementing integer column in table "package_categories_package_types" */
export type Package_Categories_Package_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  package_category_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "package_categories_package_types" */
export type Package_Categories_Package_Types_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  package_category?: Maybe<Package_Categories_Obj_Rel_Insert_Input>;
  package_category_id?: Maybe<Scalars['Int']>;
  package_type?: Maybe<Package_Types_Obj_Rel_Insert_Input>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Package_Categories_Package_Types_Max_Fields = {
  __typename?: 'package_categories_package_types_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  package_category_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Package_Categories_Package_Types_Min_Fields = {
  __typename?: 'package_categories_package_types_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  package_category_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "package_categories_package_types" */
export type Package_Categories_Package_Types_Mutation_Response = {
  __typename?: 'package_categories_package_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Package_Categories_Package_Types>;
};

/** input type for inserting object relation for remote table "package_categories_package_types" */
export type Package_Categories_Package_Types_Obj_Rel_Insert_Input = {
  data: Package_Categories_Package_Types_Insert_Input;
  on_conflict?: Maybe<Package_Categories_Package_Types_On_Conflict>;
};

/** on conflict condition type for table "package_categories_package_types" */
export type Package_Categories_Package_Types_On_Conflict = {
  constraint: Package_Categories_Package_Types_Constraint;
  update_columns: Array<Package_Categories_Package_Types_Update_Column>;
  where?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
};

/** ordering options when selecting data from "package_categories_package_types" */
export type Package_Categories_Package_Types_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_category?: Maybe<Package_Categories_Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type?: Maybe<Package_Types_Order_By>;
  package_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "package_categories_package_types" */
export type Package_Categories_Package_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "package_categories_package_types" */
export enum Package_Categories_Package_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PackageCategoryId = 'package_category_id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "package_categories_package_types" */
export type Package_Categories_Package_Types_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  package_category_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Package_Categories_Package_Types_Stddev_Fields = {
  __typename?: 'package_categories_package_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  package_category_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Package_Categories_Package_Types_Stddev_Pop_Fields = {
  __typename?: 'package_categories_package_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  package_category_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Package_Categories_Package_Types_Stddev_Samp_Fields = {
  __typename?: 'package_categories_package_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  package_category_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Package_Categories_Package_Types_Sum_Fields = {
  __typename?: 'package_categories_package_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
  package_category_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** update columns of table "package_categories_package_types" */
export enum Package_Categories_Package_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PackageCategoryId = 'package_category_id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Package_Categories_Package_Types_Var_Pop_Fields = {
  __typename?: 'package_categories_package_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  package_category_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Package_Categories_Package_Types_Var_Samp_Fields = {
  __typename?: 'package_categories_package_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  package_category_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Package_Categories_Package_Types_Variance_Fields = {
  __typename?: 'package_categories_package_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
  package_category_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "package_categories_package_types" */
export type Package_Categories_Package_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
  package_category_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "package_categories" */
export type Package_Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "package_categories" */
export enum Package_Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "package_categories" */
export type Package_Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Package_Categories_Stddev_Fields = {
  __typename?: 'package_categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "package_categories" */
export type Package_Categories_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Package_Categories_Stddev_Pop_Fields = {
  __typename?: 'package_categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "package_categories" */
export type Package_Categories_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Package_Categories_Stddev_Samp_Fields = {
  __typename?: 'package_categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "package_categories" */
export type Package_Categories_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Package_Categories_Sum_Fields = {
  __typename?: 'package_categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "package_categories" */
export type Package_Categories_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** update columns of table "package_categories" */
export enum Package_Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Package_Categories_Var_Pop_Fields = {
  __typename?: 'package_categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "package_categories" */
export type Package_Categories_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Package_Categories_Var_Samp_Fields = {
  __typename?: 'package_categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "package_categories" */
export type Package_Categories_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Package_Categories_Variance_Fields = {
  __typename?: 'package_categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "package_categories" */
export type Package_Categories_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
};

/** columns and relationships of "package_sets" */
export type Package_Sets = {
  __typename?: 'package_sets';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  package_type?: Maybe<Package_Types>;
  package_type_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  packages: Array<Packages>;
  /** An aggregated array relationship */
  packages_aggregate: Packages_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "package_sets" */
export type Package_SetsPackagesArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};


/** columns and relationships of "package_sets" */
export type Package_SetsPackages_AggregateArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** aggregated selection of "package_sets" */
export type Package_Sets_Aggregate = {
  __typename?: 'package_sets_aggregate';
  aggregate?: Maybe<Package_Sets_Aggregate_Fields>;
  nodes: Array<Package_Sets>;
};

/** aggregate fields of "package_sets" */
export type Package_Sets_Aggregate_Fields = {
  __typename?: 'package_sets_aggregate_fields';
  avg?: Maybe<Package_Sets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Package_Sets_Max_Fields>;
  min?: Maybe<Package_Sets_Min_Fields>;
  stddev?: Maybe<Package_Sets_Stddev_Fields>;
  stddev_pop?: Maybe<Package_Sets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Package_Sets_Stddev_Samp_Fields>;
  sum?: Maybe<Package_Sets_Sum_Fields>;
  var_pop?: Maybe<Package_Sets_Var_Pop_Fields>;
  var_samp?: Maybe<Package_Sets_Var_Samp_Fields>;
  variance?: Maybe<Package_Sets_Variance_Fields>;
};


/** aggregate fields of "package_sets" */
export type Package_Sets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Package_Sets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "package_sets" */
export type Package_Sets_Aggregate_Order_By = {
  avg?: Maybe<Package_Sets_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Package_Sets_Max_Order_By>;
  min?: Maybe<Package_Sets_Min_Order_By>;
  stddev?: Maybe<Package_Sets_Stddev_Order_By>;
  stddev_pop?: Maybe<Package_Sets_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Package_Sets_Stddev_Samp_Order_By>;
  sum?: Maybe<Package_Sets_Sum_Order_By>;
  var_pop?: Maybe<Package_Sets_Var_Pop_Order_By>;
  var_samp?: Maybe<Package_Sets_Var_Samp_Order_By>;
  variance?: Maybe<Package_Sets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "package_sets" */
export type Package_Sets_Arr_Rel_Insert_Input = {
  data: Array<Package_Sets_Insert_Input>;
  on_conflict?: Maybe<Package_Sets_On_Conflict>;
};

/** aggregate avg on columns */
export type Package_Sets_Avg_Fields = {
  __typename?: 'package_sets_avg_fields';
  id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "package_sets" */
export type Package_Sets_Avg_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "package_sets". All fields are combined with a logical 'AND'. */
export type Package_Sets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Package_Sets_Bool_Exp>>>;
  _not?: Maybe<Package_Sets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Package_Sets_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  package_type?: Maybe<Package_Types_Bool_Exp>;
  package_type_id?: Maybe<Int_Comparison_Exp>;
  packages?: Maybe<Packages_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "package_sets" */
export enum Package_Sets_Constraint {
  /** unique or primary key constraint */
  PackageSetsPkey = 'package_sets_pkey'
}

/** input type for incrementing integer column in table "package_sets" */
export type Package_Sets_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "package_sets" */
export type Package_Sets_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  package_type?: Maybe<Package_Types_Obj_Rel_Insert_Input>;
  package_type_id?: Maybe<Scalars['Int']>;
  packages?: Maybe<Packages_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Package_Sets_Max_Fields = {
  __typename?: 'package_sets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "package_sets" */
export type Package_Sets_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Package_Sets_Min_Fields = {
  __typename?: 'package_sets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "package_sets" */
export type Package_Sets_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "package_sets" */
export type Package_Sets_Mutation_Response = {
  __typename?: 'package_sets_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Package_Sets>;
};

/** input type for inserting object relation for remote table "package_sets" */
export type Package_Sets_Obj_Rel_Insert_Input = {
  data: Package_Sets_Insert_Input;
  on_conflict?: Maybe<Package_Sets_On_Conflict>;
};

/** on conflict condition type for table "package_sets" */
export type Package_Sets_On_Conflict = {
  constraint: Package_Sets_Constraint;
  update_columns: Array<Package_Sets_Update_Column>;
  where?: Maybe<Package_Sets_Bool_Exp>;
};

/** ordering options when selecting data from "package_sets" */
export type Package_Sets_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_type?: Maybe<Package_Types_Order_By>;
  package_type_id?: Maybe<Order_By>;
  packages_aggregate?: Maybe<Packages_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "package_sets" */
export type Package_Sets_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "package_sets" */
export enum Package_Sets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "package_sets" */
export type Package_Sets_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Package_Sets_Stddev_Fields = {
  __typename?: 'package_sets_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "package_sets" */
export type Package_Sets_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Package_Sets_Stddev_Pop_Fields = {
  __typename?: 'package_sets_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "package_sets" */
export type Package_Sets_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Package_Sets_Stddev_Samp_Fields = {
  __typename?: 'package_sets_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "package_sets" */
export type Package_Sets_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Package_Sets_Sum_Fields = {
  __typename?: 'package_sets_sum_fields';
  id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "package_sets" */
export type Package_Sets_Sum_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** update columns of table "package_sets" */
export enum Package_Sets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Package_Sets_Var_Pop_Fields = {
  __typename?: 'package_sets_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "package_sets" */
export type Package_Sets_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Package_Sets_Var_Samp_Fields = {
  __typename?: 'package_sets_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "package_sets" */
export type Package_Sets_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Package_Sets_Variance_Fields = {
  __typename?: 'package_sets_variance_fields';
  id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "package_sets" */
export type Package_Sets_Variance_Order_By = {
  id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
};

/** columns and relationships of "package_types" */
export type Package_Types = {
  __typename?: 'package_types';
  allow_box?: Maybe<Scalars['Boolean']>;
  allow_expiry_date?: Maybe<Scalars['Boolean']>;
  allow_pallet?: Maybe<Scalars['Boolean']>;
  allow_pieces?: Maybe<Scalars['Boolean']>;
  allow_requests?: Maybe<Scalars['Boolean']>;
  allow_stock?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  default_value_hk_dollar?: Maybe<Scalars['numeric']>;
  department?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  length?: Maybe<Scalars['Int']>;
  /** An object relationship */
  location?: Maybe<Locations>;
  location_id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  other_terms_en?: Maybe<Scalars['String']>;
  other_terms_zh_tw?: Maybe<Scalars['String']>;
  subform?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  visible_in_selects?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "package_types" */
export type Package_Types_Aggregate = {
  __typename?: 'package_types_aggregate';
  aggregate?: Maybe<Package_Types_Aggregate_Fields>;
  nodes: Array<Package_Types>;
};

/** aggregate fields of "package_types" */
export type Package_Types_Aggregate_Fields = {
  __typename?: 'package_types_aggregate_fields';
  avg?: Maybe<Package_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Package_Types_Max_Fields>;
  min?: Maybe<Package_Types_Min_Fields>;
  stddev?: Maybe<Package_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Package_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Package_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Package_Types_Sum_Fields>;
  var_pop?: Maybe<Package_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Package_Types_Var_Samp_Fields>;
  variance?: Maybe<Package_Types_Variance_Fields>;
};


/** aggregate fields of "package_types" */
export type Package_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Package_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "package_types" */
export type Package_Types_Aggregate_Order_By = {
  avg?: Maybe<Package_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Package_Types_Max_Order_By>;
  min?: Maybe<Package_Types_Min_Order_By>;
  stddev?: Maybe<Package_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Package_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Package_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Package_Types_Sum_Order_By>;
  var_pop?: Maybe<Package_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Package_Types_Var_Samp_Order_By>;
  variance?: Maybe<Package_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "package_types" */
export type Package_Types_Arr_Rel_Insert_Input = {
  data: Array<Package_Types_Insert_Input>;
  on_conflict?: Maybe<Package_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Package_Types_Avg_Fields = {
  __typename?: 'package_types_avg_fields';
  default_value_hk_dollar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "package_types" */
export type Package_Types_Avg_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "package_types". All fields are combined with a logical 'AND'. */
export type Package_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Package_Types_Bool_Exp>>>;
  _not?: Maybe<Package_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Package_Types_Bool_Exp>>>;
  allow_box?: Maybe<Boolean_Comparison_Exp>;
  allow_expiry_date?: Maybe<Boolean_Comparison_Exp>;
  allow_pallet?: Maybe<Boolean_Comparison_Exp>;
  allow_pieces?: Maybe<Boolean_Comparison_Exp>;
  allow_requests?: Maybe<Boolean_Comparison_Exp>;
  allow_stock?: Maybe<Boolean_Comparison_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_value_hk_dollar?: Maybe<Numeric_Comparison_Exp>;
  department?: Maybe<String_Comparison_Exp>;
  description_en?: Maybe<String_Comparison_Exp>;
  description_zh_tw?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  length?: Maybe<Int_Comparison_Exp>;
  location?: Maybe<Locations_Bool_Exp>;
  location_id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  other_terms_en?: Maybe<String_Comparison_Exp>;
  other_terms_zh_tw?: Maybe<String_Comparison_Exp>;
  subform?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  visible_in_selects?: Maybe<Boolean_Comparison_Exp>;
  width?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "package_types" */
export enum Package_Types_Constraint {
  /** unique or primary key constraint */
  PackageTypesPkey = 'package_types_pkey'
}

/** input type for incrementing integer column in table "package_types" */
export type Package_Types_Inc_Input = {
  default_value_hk_dollar?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "package_types" */
export type Package_Types_Insert_Input = {
  allow_box?: Maybe<Scalars['Boolean']>;
  allow_expiry_date?: Maybe<Scalars['Boolean']>;
  allow_pallet?: Maybe<Scalars['Boolean']>;
  allow_pieces?: Maybe<Scalars['Boolean']>;
  allow_requests?: Maybe<Scalars['Boolean']>;
  allow_stock?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_value_hk_dollar?: Maybe<Scalars['numeric']>;
  department?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location?: Maybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  other_terms_en?: Maybe<Scalars['String']>;
  other_terms_zh_tw?: Maybe<Scalars['String']>;
  subform?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  visible_in_selects?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Package_Types_Max_Fields = {
  __typename?: 'package_types_max_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_value_hk_dollar?: Maybe<Scalars['numeric']>;
  department?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  other_terms_en?: Maybe<Scalars['String']>;
  other_terms_zh_tw?: Maybe<Scalars['String']>;
  subform?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "package_types" */
export type Package_Types_Max_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_value_hk_dollar?: Maybe<Order_By>;
  department?: Maybe<Order_By>;
  description_en?: Maybe<Order_By>;
  description_zh_tw?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  other_terms_en?: Maybe<Order_By>;
  other_terms_zh_tw?: Maybe<Order_By>;
  subform?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Package_Types_Min_Fields = {
  __typename?: 'package_types_min_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_value_hk_dollar?: Maybe<Scalars['numeric']>;
  department?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  other_terms_en?: Maybe<Scalars['String']>;
  other_terms_zh_tw?: Maybe<Scalars['String']>;
  subform?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "package_types" */
export type Package_Types_Min_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_value_hk_dollar?: Maybe<Order_By>;
  department?: Maybe<Order_By>;
  description_en?: Maybe<Order_By>;
  description_zh_tw?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  other_terms_en?: Maybe<Order_By>;
  other_terms_zh_tw?: Maybe<Order_By>;
  subform?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** response of any mutation on the table "package_types" */
export type Package_Types_Mutation_Response = {
  __typename?: 'package_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Package_Types>;
};

/** input type for inserting object relation for remote table "package_types" */
export type Package_Types_Obj_Rel_Insert_Input = {
  data: Package_Types_Insert_Input;
  on_conflict?: Maybe<Package_Types_On_Conflict>;
};

/** on conflict condition type for table "package_types" */
export type Package_Types_On_Conflict = {
  constraint: Package_Types_Constraint;
  update_columns: Array<Package_Types_Update_Column>;
  where?: Maybe<Package_Types_Bool_Exp>;
};

/** ordering options when selecting data from "package_types" */
export type Package_Types_Order_By = {
  allow_box?: Maybe<Order_By>;
  allow_expiry_date?: Maybe<Order_By>;
  allow_pallet?: Maybe<Order_By>;
  allow_pieces?: Maybe<Order_By>;
  allow_requests?: Maybe<Order_By>;
  allow_stock?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_value_hk_dollar?: Maybe<Order_By>;
  department?: Maybe<Order_By>;
  description_en?: Maybe<Order_By>;
  description_zh_tw?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location?: Maybe<Locations_Order_By>;
  location_id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  other_terms_en?: Maybe<Order_By>;
  other_terms_zh_tw?: Maybe<Order_By>;
  subform?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  visible_in_selects?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** primary key columns input for table: "package_types" */
export type Package_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "package_types" */
export enum Package_Types_Select_Column {
  /** column name */
  AllowBox = 'allow_box',
  /** column name */
  AllowExpiryDate = 'allow_expiry_date',
  /** column name */
  AllowPallet = 'allow_pallet',
  /** column name */
  AllowPieces = 'allow_pieces',
  /** column name */
  AllowRequests = 'allow_requests',
  /** column name */
  AllowStock = 'allow_stock',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultValueHkDollar = 'default_value_hk_dollar',
  /** column name */
  Department = 'department',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionZhTw = 'description_zh_tw',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  OtherTermsEn = 'other_terms_en',
  /** column name */
  OtherTermsZhTw = 'other_terms_zh_tw',
  /** column name */
  Subform = 'subform',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisibleInSelects = 'visible_in_selects',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "package_types" */
export type Package_Types_Set_Input = {
  allow_box?: Maybe<Scalars['Boolean']>;
  allow_expiry_date?: Maybe<Scalars['Boolean']>;
  allow_pallet?: Maybe<Scalars['Boolean']>;
  allow_pieces?: Maybe<Scalars['Boolean']>;
  allow_requests?: Maybe<Scalars['Boolean']>;
  allow_stock?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_value_hk_dollar?: Maybe<Scalars['numeric']>;
  department?: Maybe<Scalars['String']>;
  description_en?: Maybe<Scalars['String']>;
  description_zh_tw?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  other_terms_en?: Maybe<Scalars['String']>;
  other_terms_zh_tw?: Maybe<Scalars['String']>;
  subform?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  visible_in_selects?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Package_Types_Stddev_Fields = {
  __typename?: 'package_types_stddev_fields';
  default_value_hk_dollar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "package_types" */
export type Package_Types_Stddev_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Package_Types_Stddev_Pop_Fields = {
  __typename?: 'package_types_stddev_pop_fields';
  default_value_hk_dollar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "package_types" */
export type Package_Types_Stddev_Pop_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Package_Types_Stddev_Samp_Fields = {
  __typename?: 'package_types_stddev_samp_fields';
  default_value_hk_dollar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "package_types" */
export type Package_Types_Stddev_Samp_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Package_Types_Sum_Fields = {
  __typename?: 'package_types_sum_fields';
  default_value_hk_dollar?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "package_types" */
export type Package_Types_Sum_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** update columns of table "package_types" */
export enum Package_Types_Update_Column {
  /** column name */
  AllowBox = 'allow_box',
  /** column name */
  AllowExpiryDate = 'allow_expiry_date',
  /** column name */
  AllowPallet = 'allow_pallet',
  /** column name */
  AllowPieces = 'allow_pieces',
  /** column name */
  AllowRequests = 'allow_requests',
  /** column name */
  AllowStock = 'allow_stock',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DefaultValueHkDollar = 'default_value_hk_dollar',
  /** column name */
  Department = 'department',
  /** column name */
  DescriptionEn = 'description_en',
  /** column name */
  DescriptionZhTw = 'description_zh_tw',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  OtherTermsEn = 'other_terms_en',
  /** column name */
  OtherTermsZhTw = 'other_terms_zh_tw',
  /** column name */
  Subform = 'subform',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisibleInSelects = 'visible_in_selects',
  /** column name */
  Width = 'width'
}

/** aggregate var_pop on columns */
export type Package_Types_Var_Pop_Fields = {
  __typename?: 'package_types_var_pop_fields';
  default_value_hk_dollar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "package_types" */
export type Package_Types_Var_Pop_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Package_Types_Var_Samp_Fields = {
  __typename?: 'package_types_var_samp_fields';
  default_value_hk_dollar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "package_types" */
export type Package_Types_Var_Samp_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Package_Types_Variance_Fields = {
  __typename?: 'package_types_variance_fields';
  default_value_hk_dollar?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "package_types" */
export type Package_Types_Variance_Order_By = {
  default_value_hk_dollar?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** columns and relationships of "packages" */
export type Packages = {
  __typename?: 'packages';
  allow_web_publish?: Maybe<Scalars['Boolean']>;
  available_quantity?: Maybe<Scalars['Int']>;
  box_id?: Maybe<Scalars['Int']>;
  case_number?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designated_quantity?: Maybe<Scalars['Int']>;
  designation_name?: Maybe<Scalars['String']>;
  detail_id?: Maybe<Scalars['Int']>;
  detail_type?: Maybe<Scalars['String']>;
  dispatched_quantity?: Maybe<Scalars['Int']>;
  /** An object relationship */
  donor_condition?: Maybe<Donor_Conditions>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['date']>;
  favourite_image_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** A computed field, executes function "package_images" */
  images?: Maybe<Array<Images>>;
  inventory_number?: Maybe<Scalars['String']>;
  /** An object relationship */
  item?: Maybe<Items>;
  item_id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  notes: Scalars['String'];
  notes_zh_tw?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['Int']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Int']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Int']>;
  on_hand_quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  package_set?: Maybe<Package_Sets>;
  package_set_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  package_type?: Maybe<Package_Types>;
  package_type_id?: Maybe<Scalars['Int']>;
  pallet_id?: Maybe<Scalars['Int']>;
  pieces?: Maybe<Scalars['Int']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_quantity?: Maybe<Scalars['Int']>;
  rejected_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  restriction?: Maybe<Restrictions>;
  restriction_id?: Maybe<Scalars['Int']>;
  saleable?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  stockit_designated_by_id?: Maybe<Scalars['Int']>;
  stockit_designated_on?: Maybe<Scalars['date']>;
  stockit_moved_by_id?: Maybe<Scalars['Int']>;
  stockit_moved_on?: Maybe<Scalars['date']>;
  stockit_sent_by_id?: Maybe<Scalars['Int']>;
  stockit_sent_on?: Maybe<Scalars['date']>;
  /** An object relationship */
  storage_type?: Maybe<Storage_Types>;
  storage_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value_hk_dollar: Scalars['numeric'];
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "packages" */
export type PackagesImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};

/** aggregated selection of "packages" */
export type Packages_Aggregate = {
  __typename?: 'packages_aggregate';
  aggregate?: Maybe<Packages_Aggregate_Fields>;
  nodes: Array<Packages>;
};

/** aggregate fields of "packages" */
export type Packages_Aggregate_Fields = {
  __typename?: 'packages_aggregate_fields';
  avg?: Maybe<Packages_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Packages_Max_Fields>;
  min?: Maybe<Packages_Min_Fields>;
  stddev?: Maybe<Packages_Stddev_Fields>;
  stddev_pop?: Maybe<Packages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Packages_Stddev_Samp_Fields>;
  sum?: Maybe<Packages_Sum_Fields>;
  var_pop?: Maybe<Packages_Var_Pop_Fields>;
  var_samp?: Maybe<Packages_Var_Samp_Fields>;
  variance?: Maybe<Packages_Variance_Fields>;
};


/** aggregate fields of "packages" */
export type Packages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Packages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "packages" */
export type Packages_Aggregate_Order_By = {
  avg?: Maybe<Packages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Packages_Max_Order_By>;
  min?: Maybe<Packages_Min_Order_By>;
  stddev?: Maybe<Packages_Stddev_Order_By>;
  stddev_pop?: Maybe<Packages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Packages_Stddev_Samp_Order_By>;
  sum?: Maybe<Packages_Sum_Order_By>;
  var_pop?: Maybe<Packages_Var_Pop_Order_By>;
  var_samp?: Maybe<Packages_Var_Samp_Order_By>;
  variance?: Maybe<Packages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "packages" */
export type Packages_Arr_Rel_Insert_Input = {
  data: Array<Packages_Insert_Input>;
  on_conflict?: Maybe<Packages_On_Conflict>;
};

/** aggregate avg on columns */
export type Packages_Avg_Fields = {
  __typename?: 'packages_avg_fields';
  available_quantity?: Maybe<Scalars['Float']>;
  box_id?: Maybe<Scalars['Float']>;
  designated_quantity?: Maybe<Scalars['Float']>;
  detail_id?: Maybe<Scalars['Float']>;
  dispatched_quantity?: Maybe<Scalars['Float']>;
  donor_condition_id?: Maybe<Scalars['Float']>;
  favourite_image_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Float']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Float']>;
  on_hand_quantity?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  package_set_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  pallet_id?: Maybe<Scalars['Float']>;
  pieces?: Maybe<Scalars['Float']>;
  received_quantity?: Maybe<Scalars['Float']>;
  restriction_id?: Maybe<Scalars['Float']>;
  stockit_designated_by_id?: Maybe<Scalars['Float']>;
  stockit_moved_by_id?: Maybe<Scalars['Float']>;
  stockit_sent_by_id?: Maybe<Scalars['Float']>;
  storage_type_id?: Maybe<Scalars['Float']>;
  value_hk_dollar?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "packages" */
export type Packages_Avg_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "packages". All fields are combined with a logical 'AND'. */
export type Packages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Packages_Bool_Exp>>>;
  _not?: Maybe<Packages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Packages_Bool_Exp>>>;
  allow_web_publish?: Maybe<Boolean_Comparison_Exp>;
  available_quantity?: Maybe<Int_Comparison_Exp>;
  box_id?: Maybe<Int_Comparison_Exp>;
  case_number?: Maybe<String_Comparison_Exp>;
  comment?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  designated_quantity?: Maybe<Int_Comparison_Exp>;
  designation_name?: Maybe<String_Comparison_Exp>;
  detail_id?: Maybe<Int_Comparison_Exp>;
  detail_type?: Maybe<String_Comparison_Exp>;
  dispatched_quantity?: Maybe<Int_Comparison_Exp>;
  donor_condition?: Maybe<Donor_Conditions_Bool_Exp>;
  donor_condition_id?: Maybe<Int_Comparison_Exp>;
  expiry_date?: Maybe<Date_Comparison_Exp>;
  favourite_image_id?: Maybe<Int_Comparison_Exp>;
  grade?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  inventory_number?: Maybe<String_Comparison_Exp>;
  item?: Maybe<Items_Bool_Exp>;
  item_id?: Maybe<Int_Comparison_Exp>;
  length?: Maybe<Int_Comparison_Exp>;
  location_id?: Maybe<Int_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  notes_zh_tw?: Maybe<String_Comparison_Exp>;
  offer_id?: Maybe<Int_Comparison_Exp>;
  on_hand_boxed_quantity?: Maybe<Int_Comparison_Exp>;
  on_hand_palletized_quantity?: Maybe<Int_Comparison_Exp>;
  on_hand_quantity?: Maybe<Int_Comparison_Exp>;
  order_id?: Maybe<Int_Comparison_Exp>;
  package_set?: Maybe<Package_Sets_Bool_Exp>;
  package_set_id?: Maybe<Int_Comparison_Exp>;
  package_type?: Maybe<Package_Types_Bool_Exp>;
  package_type_id?: Maybe<Int_Comparison_Exp>;
  pallet_id?: Maybe<Int_Comparison_Exp>;
  pieces?: Maybe<Int_Comparison_Exp>;
  received_at?: Maybe<Timestamptz_Comparison_Exp>;
  received_quantity?: Maybe<Int_Comparison_Exp>;
  rejected_at?: Maybe<Timestamptz_Comparison_Exp>;
  restriction?: Maybe<Restrictions_Bool_Exp>;
  restriction_id?: Maybe<Int_Comparison_Exp>;
  saleable?: Maybe<Boolean_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  stockit_designated_by_id?: Maybe<Int_Comparison_Exp>;
  stockit_designated_on?: Maybe<Date_Comparison_Exp>;
  stockit_moved_by_id?: Maybe<Int_Comparison_Exp>;
  stockit_moved_on?: Maybe<Date_Comparison_Exp>;
  stockit_sent_by_id?: Maybe<Int_Comparison_Exp>;
  stockit_sent_on?: Maybe<Date_Comparison_Exp>;
  storage_type?: Maybe<Storage_Types_Bool_Exp>;
  storage_type_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value_hk_dollar?: Maybe<Numeric_Comparison_Exp>;
  weight?: Maybe<Int_Comparison_Exp>;
  width?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "packages" */
export enum Packages_Constraint {
  /** unique or primary key constraint */
  PackagesPkey = 'packages_pkey'
}

/** input type for incrementing integer column in table "packages" */
export type Packages_Inc_Input = {
  available_quantity?: Maybe<Scalars['Int']>;
  box_id?: Maybe<Scalars['Int']>;
  designated_quantity?: Maybe<Scalars['Int']>;
  detail_id?: Maybe<Scalars['Int']>;
  dispatched_quantity?: Maybe<Scalars['Int']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  favourite_image_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Int']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Int']>;
  on_hand_quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  package_set_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  pallet_id?: Maybe<Scalars['Int']>;
  pieces?: Maybe<Scalars['Int']>;
  received_quantity?: Maybe<Scalars['Int']>;
  restriction_id?: Maybe<Scalars['Int']>;
  stockit_designated_by_id?: Maybe<Scalars['Int']>;
  stockit_moved_by_id?: Maybe<Scalars['Int']>;
  stockit_sent_by_id?: Maybe<Scalars['Int']>;
  storage_type_id?: Maybe<Scalars['Int']>;
  value_hk_dollar?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "packages" */
export type Packages_Insert_Input = {
  allow_web_publish?: Maybe<Scalars['Boolean']>;
  available_quantity?: Maybe<Scalars['Int']>;
  box_id?: Maybe<Scalars['Int']>;
  case_number?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designated_quantity?: Maybe<Scalars['Int']>;
  designation_name?: Maybe<Scalars['String']>;
  detail_id?: Maybe<Scalars['Int']>;
  detail_type?: Maybe<Scalars['String']>;
  dispatched_quantity?: Maybe<Scalars['Int']>;
  donor_condition?: Maybe<Donor_Conditions_Obj_Rel_Insert_Input>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['date']>;
  favourite_image_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inventory_number?: Maybe<Scalars['String']>;
  item?: Maybe<Items_Obj_Rel_Insert_Input>;
  item_id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  notes_zh_tw?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['Int']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Int']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Int']>;
  on_hand_quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  package_set?: Maybe<Package_Sets_Obj_Rel_Insert_Input>;
  package_set_id?: Maybe<Scalars['Int']>;
  package_type?: Maybe<Package_Types_Obj_Rel_Insert_Input>;
  package_type_id?: Maybe<Scalars['Int']>;
  pallet_id?: Maybe<Scalars['Int']>;
  pieces?: Maybe<Scalars['Int']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_quantity?: Maybe<Scalars['Int']>;
  rejected_at?: Maybe<Scalars['timestamptz']>;
  restriction?: Maybe<Restrictions_Obj_Rel_Insert_Input>;
  restriction_id?: Maybe<Scalars['Int']>;
  saleable?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  stockit_designated_by_id?: Maybe<Scalars['Int']>;
  stockit_designated_on?: Maybe<Scalars['date']>;
  stockit_moved_by_id?: Maybe<Scalars['Int']>;
  stockit_moved_on?: Maybe<Scalars['date']>;
  stockit_sent_by_id?: Maybe<Scalars['Int']>;
  stockit_sent_on?: Maybe<Scalars['date']>;
  storage_type?: Maybe<Storage_Types_Obj_Rel_Insert_Input>;
  storage_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value_hk_dollar?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Packages_Max_Fields = {
  __typename?: 'packages_max_fields';
  available_quantity?: Maybe<Scalars['Int']>;
  box_id?: Maybe<Scalars['Int']>;
  case_number?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designated_quantity?: Maybe<Scalars['Int']>;
  designation_name?: Maybe<Scalars['String']>;
  detail_id?: Maybe<Scalars['Int']>;
  detail_type?: Maybe<Scalars['String']>;
  dispatched_quantity?: Maybe<Scalars['Int']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['date']>;
  favourite_image_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inventory_number?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  notes_zh_tw?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['Int']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Int']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Int']>;
  on_hand_quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  package_set_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  pallet_id?: Maybe<Scalars['Int']>;
  pieces?: Maybe<Scalars['Int']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_quantity?: Maybe<Scalars['Int']>;
  rejected_at?: Maybe<Scalars['timestamptz']>;
  restriction_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  stockit_designated_by_id?: Maybe<Scalars['Int']>;
  stockit_designated_on?: Maybe<Scalars['date']>;
  stockit_moved_by_id?: Maybe<Scalars['Int']>;
  stockit_moved_on?: Maybe<Scalars['date']>;
  stockit_sent_by_id?: Maybe<Scalars['Int']>;
  stockit_sent_on?: Maybe<Scalars['date']>;
  storage_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value_hk_dollar?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "packages" */
export type Packages_Max_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  case_number?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  designation_name?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  detail_type?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  expiry_date?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_number?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  notes_zh_tw?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_at?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  rejected_at?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_designated_on?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_moved_on?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  stockit_sent_on?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Packages_Min_Fields = {
  __typename?: 'packages_min_fields';
  available_quantity?: Maybe<Scalars['Int']>;
  box_id?: Maybe<Scalars['Int']>;
  case_number?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designated_quantity?: Maybe<Scalars['Int']>;
  designation_name?: Maybe<Scalars['String']>;
  detail_id?: Maybe<Scalars['Int']>;
  detail_type?: Maybe<Scalars['String']>;
  dispatched_quantity?: Maybe<Scalars['Int']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['date']>;
  favourite_image_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inventory_number?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  notes_zh_tw?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['Int']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Int']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Int']>;
  on_hand_quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  package_set_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  pallet_id?: Maybe<Scalars['Int']>;
  pieces?: Maybe<Scalars['Int']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_quantity?: Maybe<Scalars['Int']>;
  rejected_at?: Maybe<Scalars['timestamptz']>;
  restriction_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  stockit_designated_by_id?: Maybe<Scalars['Int']>;
  stockit_designated_on?: Maybe<Scalars['date']>;
  stockit_moved_by_id?: Maybe<Scalars['Int']>;
  stockit_moved_on?: Maybe<Scalars['date']>;
  stockit_sent_by_id?: Maybe<Scalars['Int']>;
  stockit_sent_on?: Maybe<Scalars['date']>;
  storage_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value_hk_dollar?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "packages" */
export type Packages_Min_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  case_number?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  designation_name?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  detail_type?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  expiry_date?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_number?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  notes_zh_tw?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_at?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  rejected_at?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_designated_on?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_moved_on?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  stockit_sent_on?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** response of any mutation on the table "packages" */
export type Packages_Mutation_Response = {
  __typename?: 'packages_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Packages>;
};

/** input type for inserting object relation for remote table "packages" */
export type Packages_Obj_Rel_Insert_Input = {
  data: Packages_Insert_Input;
  on_conflict?: Maybe<Packages_On_Conflict>;
};

/** on conflict condition type for table "packages" */
export type Packages_On_Conflict = {
  constraint: Packages_Constraint;
  update_columns: Array<Packages_Update_Column>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** ordering options when selecting data from "packages" */
export type Packages_Order_By = {
  allow_web_publish?: Maybe<Order_By>;
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  case_number?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  designation_name?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  detail_type?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition?: Maybe<Donor_Conditions_Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  expiry_date?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  inventory_number?: Maybe<Order_By>;
  item?: Maybe<Items_Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  notes_zh_tw?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set?: Maybe<Package_Sets_Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type?: Maybe<Package_Types_Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_at?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  rejected_at?: Maybe<Order_By>;
  restriction?: Maybe<Restrictions_Order_By>;
  restriction_id?: Maybe<Order_By>;
  saleable?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_designated_on?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_moved_on?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  stockit_sent_on?: Maybe<Order_By>;
  storage_type?: Maybe<Storage_Types_Order_By>;
  storage_type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** primary key columns input for table: "packages" */
export type Packages_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "packages" */
export enum Packages_Select_Column {
  /** column name */
  AllowWebPublish = 'allow_web_publish',
  /** column name */
  AvailableQuantity = 'available_quantity',
  /** column name */
  BoxId = 'box_id',
  /** column name */
  CaseNumber = 'case_number',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DesignatedQuantity = 'designated_quantity',
  /** column name */
  DesignationName = 'designation_name',
  /** column name */
  DetailId = 'detail_id',
  /** column name */
  DetailType = 'detail_type',
  /** column name */
  DispatchedQuantity = 'dispatched_quantity',
  /** column name */
  DonorConditionId = 'donor_condition_id',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  FavouriteImageId = 'favourite_image_id',
  /** column name */
  Grade = 'grade',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryNumber = 'inventory_number',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Length = 'length',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Notes = 'notes',
  /** column name */
  NotesZhTw = 'notes_zh_tw',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  OnHandBoxedQuantity = 'on_hand_boxed_quantity',
  /** column name */
  OnHandPalletizedQuantity = 'on_hand_palletized_quantity',
  /** column name */
  OnHandQuantity = 'on_hand_quantity',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  PackageSetId = 'package_set_id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  PalletId = 'pallet_id',
  /** column name */
  Pieces = 'pieces',
  /** column name */
  ReceivedAt = 'received_at',
  /** column name */
  ReceivedQuantity = 'received_quantity',
  /** column name */
  RejectedAt = 'rejected_at',
  /** column name */
  RestrictionId = 'restriction_id',
  /** column name */
  Saleable = 'saleable',
  /** column name */
  State = 'state',
  /** column name */
  StockitDesignatedById = 'stockit_designated_by_id',
  /** column name */
  StockitDesignatedOn = 'stockit_designated_on',
  /** column name */
  StockitMovedById = 'stockit_moved_by_id',
  /** column name */
  StockitMovedOn = 'stockit_moved_on',
  /** column name */
  StockitSentById = 'stockit_sent_by_id',
  /** column name */
  StockitSentOn = 'stockit_sent_on',
  /** column name */
  StorageTypeId = 'storage_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValueHkDollar = 'value_hk_dollar',
  /** column name */
  Weight = 'weight',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "packages" */
export type Packages_Set_Input = {
  allow_web_publish?: Maybe<Scalars['Boolean']>;
  available_quantity?: Maybe<Scalars['Int']>;
  box_id?: Maybe<Scalars['Int']>;
  case_number?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designated_quantity?: Maybe<Scalars['Int']>;
  designation_name?: Maybe<Scalars['String']>;
  detail_id?: Maybe<Scalars['Int']>;
  detail_type?: Maybe<Scalars['String']>;
  dispatched_quantity?: Maybe<Scalars['Int']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['date']>;
  favourite_image_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  inventory_number?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  notes_zh_tw?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['Int']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Int']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Int']>;
  on_hand_quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  package_set_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  pallet_id?: Maybe<Scalars['Int']>;
  pieces?: Maybe<Scalars['Int']>;
  received_at?: Maybe<Scalars['timestamptz']>;
  received_quantity?: Maybe<Scalars['Int']>;
  rejected_at?: Maybe<Scalars['timestamptz']>;
  restriction_id?: Maybe<Scalars['Int']>;
  saleable?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  stockit_designated_by_id?: Maybe<Scalars['Int']>;
  stockit_designated_on?: Maybe<Scalars['date']>;
  stockit_moved_by_id?: Maybe<Scalars['Int']>;
  stockit_moved_on?: Maybe<Scalars['date']>;
  stockit_sent_by_id?: Maybe<Scalars['Int']>;
  stockit_sent_on?: Maybe<Scalars['date']>;
  storage_type_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value_hk_dollar?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Packages_Stddev_Fields = {
  __typename?: 'packages_stddev_fields';
  available_quantity?: Maybe<Scalars['Float']>;
  box_id?: Maybe<Scalars['Float']>;
  designated_quantity?: Maybe<Scalars['Float']>;
  detail_id?: Maybe<Scalars['Float']>;
  dispatched_quantity?: Maybe<Scalars['Float']>;
  donor_condition_id?: Maybe<Scalars['Float']>;
  favourite_image_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Float']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Float']>;
  on_hand_quantity?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  package_set_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  pallet_id?: Maybe<Scalars['Float']>;
  pieces?: Maybe<Scalars['Float']>;
  received_quantity?: Maybe<Scalars['Float']>;
  restriction_id?: Maybe<Scalars['Float']>;
  stockit_designated_by_id?: Maybe<Scalars['Float']>;
  stockit_moved_by_id?: Maybe<Scalars['Float']>;
  stockit_sent_by_id?: Maybe<Scalars['Float']>;
  storage_type_id?: Maybe<Scalars['Float']>;
  value_hk_dollar?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "packages" */
export type Packages_Stddev_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Packages_Stddev_Pop_Fields = {
  __typename?: 'packages_stddev_pop_fields';
  available_quantity?: Maybe<Scalars['Float']>;
  box_id?: Maybe<Scalars['Float']>;
  designated_quantity?: Maybe<Scalars['Float']>;
  detail_id?: Maybe<Scalars['Float']>;
  dispatched_quantity?: Maybe<Scalars['Float']>;
  donor_condition_id?: Maybe<Scalars['Float']>;
  favourite_image_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Float']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Float']>;
  on_hand_quantity?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  package_set_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  pallet_id?: Maybe<Scalars['Float']>;
  pieces?: Maybe<Scalars['Float']>;
  received_quantity?: Maybe<Scalars['Float']>;
  restriction_id?: Maybe<Scalars['Float']>;
  stockit_designated_by_id?: Maybe<Scalars['Float']>;
  stockit_moved_by_id?: Maybe<Scalars['Float']>;
  stockit_sent_by_id?: Maybe<Scalars['Float']>;
  storage_type_id?: Maybe<Scalars['Float']>;
  value_hk_dollar?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "packages" */
export type Packages_Stddev_Pop_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Packages_Stddev_Samp_Fields = {
  __typename?: 'packages_stddev_samp_fields';
  available_quantity?: Maybe<Scalars['Float']>;
  box_id?: Maybe<Scalars['Float']>;
  designated_quantity?: Maybe<Scalars['Float']>;
  detail_id?: Maybe<Scalars['Float']>;
  dispatched_quantity?: Maybe<Scalars['Float']>;
  donor_condition_id?: Maybe<Scalars['Float']>;
  favourite_image_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Float']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Float']>;
  on_hand_quantity?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  package_set_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  pallet_id?: Maybe<Scalars['Float']>;
  pieces?: Maybe<Scalars['Float']>;
  received_quantity?: Maybe<Scalars['Float']>;
  restriction_id?: Maybe<Scalars['Float']>;
  stockit_designated_by_id?: Maybe<Scalars['Float']>;
  stockit_moved_by_id?: Maybe<Scalars['Float']>;
  stockit_sent_by_id?: Maybe<Scalars['Float']>;
  storage_type_id?: Maybe<Scalars['Float']>;
  value_hk_dollar?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "packages" */
export type Packages_Stddev_Samp_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Packages_Sum_Fields = {
  __typename?: 'packages_sum_fields';
  available_quantity?: Maybe<Scalars['Int']>;
  box_id?: Maybe<Scalars['Int']>;
  designated_quantity?: Maybe<Scalars['Int']>;
  detail_id?: Maybe<Scalars['Int']>;
  dispatched_quantity?: Maybe<Scalars['Int']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  favourite_image_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  item_id?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Int']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Int']>;
  on_hand_quantity?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
  package_set_id?: Maybe<Scalars['Int']>;
  package_type_id?: Maybe<Scalars['Int']>;
  pallet_id?: Maybe<Scalars['Int']>;
  pieces?: Maybe<Scalars['Int']>;
  received_quantity?: Maybe<Scalars['Int']>;
  restriction_id?: Maybe<Scalars['Int']>;
  stockit_designated_by_id?: Maybe<Scalars['Int']>;
  stockit_moved_by_id?: Maybe<Scalars['Int']>;
  stockit_sent_by_id?: Maybe<Scalars['Int']>;
  storage_type_id?: Maybe<Scalars['Int']>;
  value_hk_dollar?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "packages" */
export type Packages_Sum_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** update columns of table "packages" */
export enum Packages_Update_Column {
  /** column name */
  AllowWebPublish = 'allow_web_publish',
  /** column name */
  AvailableQuantity = 'available_quantity',
  /** column name */
  BoxId = 'box_id',
  /** column name */
  CaseNumber = 'case_number',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DesignatedQuantity = 'designated_quantity',
  /** column name */
  DesignationName = 'designation_name',
  /** column name */
  DetailId = 'detail_id',
  /** column name */
  DetailType = 'detail_type',
  /** column name */
  DispatchedQuantity = 'dispatched_quantity',
  /** column name */
  DonorConditionId = 'donor_condition_id',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  FavouriteImageId = 'favourite_image_id',
  /** column name */
  Grade = 'grade',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  InventoryNumber = 'inventory_number',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Length = 'length',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Notes = 'notes',
  /** column name */
  NotesZhTw = 'notes_zh_tw',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  OnHandBoxedQuantity = 'on_hand_boxed_quantity',
  /** column name */
  OnHandPalletizedQuantity = 'on_hand_palletized_quantity',
  /** column name */
  OnHandQuantity = 'on_hand_quantity',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  PackageSetId = 'package_set_id',
  /** column name */
  PackageTypeId = 'package_type_id',
  /** column name */
  PalletId = 'pallet_id',
  /** column name */
  Pieces = 'pieces',
  /** column name */
  ReceivedAt = 'received_at',
  /** column name */
  ReceivedQuantity = 'received_quantity',
  /** column name */
  RejectedAt = 'rejected_at',
  /** column name */
  RestrictionId = 'restriction_id',
  /** column name */
  Saleable = 'saleable',
  /** column name */
  State = 'state',
  /** column name */
  StockitDesignatedById = 'stockit_designated_by_id',
  /** column name */
  StockitDesignatedOn = 'stockit_designated_on',
  /** column name */
  StockitMovedById = 'stockit_moved_by_id',
  /** column name */
  StockitMovedOn = 'stockit_moved_on',
  /** column name */
  StockitSentById = 'stockit_sent_by_id',
  /** column name */
  StockitSentOn = 'stockit_sent_on',
  /** column name */
  StorageTypeId = 'storage_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValueHkDollar = 'value_hk_dollar',
  /** column name */
  Weight = 'weight',
  /** column name */
  Width = 'width'
}

/** aggregate var_pop on columns */
export type Packages_Var_Pop_Fields = {
  __typename?: 'packages_var_pop_fields';
  available_quantity?: Maybe<Scalars['Float']>;
  box_id?: Maybe<Scalars['Float']>;
  designated_quantity?: Maybe<Scalars['Float']>;
  detail_id?: Maybe<Scalars['Float']>;
  dispatched_quantity?: Maybe<Scalars['Float']>;
  donor_condition_id?: Maybe<Scalars['Float']>;
  favourite_image_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Float']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Float']>;
  on_hand_quantity?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  package_set_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  pallet_id?: Maybe<Scalars['Float']>;
  pieces?: Maybe<Scalars['Float']>;
  received_quantity?: Maybe<Scalars['Float']>;
  restriction_id?: Maybe<Scalars['Float']>;
  stockit_designated_by_id?: Maybe<Scalars['Float']>;
  stockit_moved_by_id?: Maybe<Scalars['Float']>;
  stockit_sent_by_id?: Maybe<Scalars['Float']>;
  storage_type_id?: Maybe<Scalars['Float']>;
  value_hk_dollar?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "packages" */
export type Packages_Var_Pop_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Packages_Var_Samp_Fields = {
  __typename?: 'packages_var_samp_fields';
  available_quantity?: Maybe<Scalars['Float']>;
  box_id?: Maybe<Scalars['Float']>;
  designated_quantity?: Maybe<Scalars['Float']>;
  detail_id?: Maybe<Scalars['Float']>;
  dispatched_quantity?: Maybe<Scalars['Float']>;
  donor_condition_id?: Maybe<Scalars['Float']>;
  favourite_image_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Float']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Float']>;
  on_hand_quantity?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  package_set_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  pallet_id?: Maybe<Scalars['Float']>;
  pieces?: Maybe<Scalars['Float']>;
  received_quantity?: Maybe<Scalars['Float']>;
  restriction_id?: Maybe<Scalars['Float']>;
  stockit_designated_by_id?: Maybe<Scalars['Float']>;
  stockit_moved_by_id?: Maybe<Scalars['Float']>;
  stockit_sent_by_id?: Maybe<Scalars['Float']>;
  storage_type_id?: Maybe<Scalars['Float']>;
  value_hk_dollar?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "packages" */
export type Packages_Var_Samp_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Packages_Variance_Fields = {
  __typename?: 'packages_variance_fields';
  available_quantity?: Maybe<Scalars['Float']>;
  box_id?: Maybe<Scalars['Float']>;
  designated_quantity?: Maybe<Scalars['Float']>;
  detail_id?: Maybe<Scalars['Float']>;
  dispatched_quantity?: Maybe<Scalars['Float']>;
  donor_condition_id?: Maybe<Scalars['Float']>;
  favourite_image_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  on_hand_boxed_quantity?: Maybe<Scalars['Float']>;
  on_hand_palletized_quantity?: Maybe<Scalars['Float']>;
  on_hand_quantity?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
  package_set_id?: Maybe<Scalars['Float']>;
  package_type_id?: Maybe<Scalars['Float']>;
  pallet_id?: Maybe<Scalars['Float']>;
  pieces?: Maybe<Scalars['Float']>;
  received_quantity?: Maybe<Scalars['Float']>;
  restriction_id?: Maybe<Scalars['Float']>;
  stockit_designated_by_id?: Maybe<Scalars['Float']>;
  stockit_moved_by_id?: Maybe<Scalars['Float']>;
  stockit_sent_by_id?: Maybe<Scalars['Float']>;
  storage_type_id?: Maybe<Scalars['Float']>;
  value_hk_dollar?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "packages" */
export type Packages_Variance_Order_By = {
  available_quantity?: Maybe<Order_By>;
  box_id?: Maybe<Order_By>;
  designated_quantity?: Maybe<Order_By>;
  detail_id?: Maybe<Order_By>;
  dispatched_quantity?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  favourite_image_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  offer_id?: Maybe<Order_By>;
  on_hand_boxed_quantity?: Maybe<Order_By>;
  on_hand_palletized_quantity?: Maybe<Order_By>;
  on_hand_quantity?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  package_set_id?: Maybe<Order_By>;
  package_type_id?: Maybe<Order_By>;
  pallet_id?: Maybe<Order_By>;
  pieces?: Maybe<Order_By>;
  received_quantity?: Maybe<Order_By>;
  restriction_id?: Maybe<Order_By>;
  stockit_designated_by_id?: Maybe<Order_By>;
  stockit_moved_by_id?: Maybe<Order_By>;
  stockit_sent_by_id?: Maybe<Order_By>;
  storage_type_id?: Maybe<Order_By>;
  value_hk_dollar?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
  width?: Maybe<Order_By>;
};

/** columns and relationships of "permissions" */
export type Permissions = {
  __typename?: 'permissions';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "permissions" */
export type Permissions_Aggregate = {
  __typename?: 'permissions_aggregate';
  aggregate?: Maybe<Permissions_Aggregate_Fields>;
  nodes: Array<Permissions>;
};

/** aggregate fields of "permissions" */
export type Permissions_Aggregate_Fields = {
  __typename?: 'permissions_aggregate_fields';
  avg?: Maybe<Permissions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Permissions_Max_Fields>;
  min?: Maybe<Permissions_Min_Fields>;
  stddev?: Maybe<Permissions_Stddev_Fields>;
  stddev_pop?: Maybe<Permissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Permissions_Stddev_Samp_Fields>;
  sum?: Maybe<Permissions_Sum_Fields>;
  var_pop?: Maybe<Permissions_Var_Pop_Fields>;
  var_samp?: Maybe<Permissions_Var_Samp_Fields>;
  variance?: Maybe<Permissions_Variance_Fields>;
};


/** aggregate fields of "permissions" */
export type Permissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Permissions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "permissions" */
export type Permissions_Aggregate_Order_By = {
  avg?: Maybe<Permissions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Permissions_Max_Order_By>;
  min?: Maybe<Permissions_Min_Order_By>;
  stddev?: Maybe<Permissions_Stddev_Order_By>;
  stddev_pop?: Maybe<Permissions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Permissions_Stddev_Samp_Order_By>;
  sum?: Maybe<Permissions_Sum_Order_By>;
  var_pop?: Maybe<Permissions_Var_Pop_Order_By>;
  var_samp?: Maybe<Permissions_Var_Samp_Order_By>;
  variance?: Maybe<Permissions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "permissions" */
export type Permissions_Arr_Rel_Insert_Input = {
  data: Array<Permissions_Insert_Input>;
  on_conflict?: Maybe<Permissions_On_Conflict>;
};

/** aggregate avg on columns */
export type Permissions_Avg_Fields = {
  __typename?: 'permissions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "permissions" */
export type Permissions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "permissions". All fields are combined with a logical 'AND'. */
export type Permissions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Permissions_Bool_Exp>>>;
  _not?: Maybe<Permissions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Permissions_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "permissions" */
export enum Permissions_Constraint {
  /** unique or primary key constraint */
  PermissionsPkey = 'permissions_pkey'
}

/** input type for incrementing integer column in table "permissions" */
export type Permissions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "permissions" */
export type Permissions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Permissions_Max_Fields = {
  __typename?: 'permissions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "permissions" */
export type Permissions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Permissions_Min_Fields = {
  __typename?: 'permissions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "permissions" */
export type Permissions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "permissions" */
export type Permissions_Mutation_Response = {
  __typename?: 'permissions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Permissions>;
};

/** input type for inserting object relation for remote table "permissions" */
export type Permissions_Obj_Rel_Insert_Input = {
  data: Permissions_Insert_Input;
  on_conflict?: Maybe<Permissions_On_Conflict>;
};

/** on conflict condition type for table "permissions" */
export type Permissions_On_Conflict = {
  constraint: Permissions_Constraint;
  update_columns: Array<Permissions_Update_Column>;
  where?: Maybe<Permissions_Bool_Exp>;
};

/** ordering options when selecting data from "permissions" */
export type Permissions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "permissions" */
export type Permissions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "permissions" */
export enum Permissions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "permissions" */
export type Permissions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Permissions_Stddev_Fields = {
  __typename?: 'permissions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "permissions" */
export type Permissions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Permissions_Stddev_Pop_Fields = {
  __typename?: 'permissions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "permissions" */
export type Permissions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Permissions_Stddev_Samp_Fields = {
  __typename?: 'permissions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "permissions" */
export type Permissions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Permissions_Sum_Fields = {
  __typename?: 'permissions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "permissions" */
export type Permissions_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "permissions" */
export enum Permissions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Permissions_Var_Pop_Fields = {
  __typename?: 'permissions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "permissions" */
export type Permissions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Permissions_Var_Samp_Fields = {
  __typename?: 'permissions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "permissions" */
export type Permissions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Permissions_Variance_Fields = {
  __typename?: 'permissions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "permissions" */
export type Permissions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "printers" */
export type Printers = {
  __typename?: 'printers';
  active?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  host?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  location?: Maybe<Locations>;
  location_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "printers" */
export type Printers_Aggregate = {
  __typename?: 'printers_aggregate';
  aggregate?: Maybe<Printers_Aggregate_Fields>;
  nodes: Array<Printers>;
};

/** aggregate fields of "printers" */
export type Printers_Aggregate_Fields = {
  __typename?: 'printers_aggregate_fields';
  avg?: Maybe<Printers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Printers_Max_Fields>;
  min?: Maybe<Printers_Min_Fields>;
  stddev?: Maybe<Printers_Stddev_Fields>;
  stddev_pop?: Maybe<Printers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Printers_Stddev_Samp_Fields>;
  sum?: Maybe<Printers_Sum_Fields>;
  var_pop?: Maybe<Printers_Var_Pop_Fields>;
  var_samp?: Maybe<Printers_Var_Samp_Fields>;
  variance?: Maybe<Printers_Variance_Fields>;
};


/** aggregate fields of "printers" */
export type Printers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Printers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "printers" */
export type Printers_Aggregate_Order_By = {
  avg?: Maybe<Printers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Printers_Max_Order_By>;
  min?: Maybe<Printers_Min_Order_By>;
  stddev?: Maybe<Printers_Stddev_Order_By>;
  stddev_pop?: Maybe<Printers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Printers_Stddev_Samp_Order_By>;
  sum?: Maybe<Printers_Sum_Order_By>;
  var_pop?: Maybe<Printers_Var_Pop_Order_By>;
  var_samp?: Maybe<Printers_Var_Samp_Order_By>;
  variance?: Maybe<Printers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "printers" */
export type Printers_Arr_Rel_Insert_Input = {
  data: Array<Printers_Insert_Input>;
  on_conflict?: Maybe<Printers_On_Conflict>;
};

/** aggregate avg on columns */
export type Printers_Avg_Fields = {
  __typename?: 'printers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "printers" */
export type Printers_Avg_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "printers". All fields are combined with a logical 'AND'. */
export type Printers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Printers_Bool_Exp>>>;
  _not?: Maybe<Printers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Printers_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  host?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  location?: Maybe<Locations_Bool_Exp>;
  location_id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  port?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "printers" */
export enum Printers_Constraint {
  /** unique or primary key constraint */
  PrintersPkey = 'printers_pkey'
}

/** input type for incrementing integer column in table "printers" */
export type Printers_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "printers" */
export type Printers_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Locations_Obj_Rel_Insert_Input>;
  location_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Printers_Max_Fields = {
  __typename?: 'printers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "printers" */
export type Printers_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  host?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  port?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Printers_Min_Fields = {
  __typename?: 'printers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "printers" */
export type Printers_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  host?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  port?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "printers" */
export type Printers_Mutation_Response = {
  __typename?: 'printers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Printers>;
};

/** input type for inserting object relation for remote table "printers" */
export type Printers_Obj_Rel_Insert_Input = {
  data: Printers_Insert_Input;
  on_conflict?: Maybe<Printers_On_Conflict>;
};

/** on conflict condition type for table "printers" */
export type Printers_On_Conflict = {
  constraint: Printers_Constraint;
  update_columns: Array<Printers_Update_Column>;
  where?: Maybe<Printers_Bool_Exp>;
};

/** ordering options when selecting data from "printers" */
export type Printers_Order_By = {
  active?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  host?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Locations_Order_By>;
  location_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  port?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "printers" */
export type Printers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "printers" */
export enum Printers_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Host = 'host',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Port = 'port',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "printers" */
export type Printers_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Printers_Stddev_Fields = {
  __typename?: 'printers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "printers" */
export type Printers_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Printers_Stddev_Pop_Fields = {
  __typename?: 'printers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "printers" */
export type Printers_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Printers_Stddev_Samp_Fields = {
  __typename?: 'printers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "printers" */
export type Printers_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Printers_Sum_Fields = {
  __typename?: 'printers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "printers" */
export type Printers_Sum_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** update columns of table "printers" */
export enum Printers_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Host = 'host',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Port = 'port',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "printers_users" */
export type Printers_Users = {
  __typename?: 'printers_users';
  id: Scalars['Int'];
  /** An object relationship */
  printer?: Maybe<Printers>;
  printer_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "printers_users" */
export type Printers_Users_Aggregate = {
  __typename?: 'printers_users_aggregate';
  aggregate?: Maybe<Printers_Users_Aggregate_Fields>;
  nodes: Array<Printers_Users>;
};

/** aggregate fields of "printers_users" */
export type Printers_Users_Aggregate_Fields = {
  __typename?: 'printers_users_aggregate_fields';
  avg?: Maybe<Printers_Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Printers_Users_Max_Fields>;
  min?: Maybe<Printers_Users_Min_Fields>;
  stddev?: Maybe<Printers_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Printers_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Printers_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Printers_Users_Sum_Fields>;
  var_pop?: Maybe<Printers_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Printers_Users_Var_Samp_Fields>;
  variance?: Maybe<Printers_Users_Variance_Fields>;
};


/** aggregate fields of "printers_users" */
export type Printers_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Printers_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "printers_users" */
export type Printers_Users_Aggregate_Order_By = {
  avg?: Maybe<Printers_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Printers_Users_Max_Order_By>;
  min?: Maybe<Printers_Users_Min_Order_By>;
  stddev?: Maybe<Printers_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Printers_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Printers_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Printers_Users_Sum_Order_By>;
  var_pop?: Maybe<Printers_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Printers_Users_Var_Samp_Order_By>;
  variance?: Maybe<Printers_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "printers_users" */
export type Printers_Users_Arr_Rel_Insert_Input = {
  data: Array<Printers_Users_Insert_Input>;
  on_conflict?: Maybe<Printers_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Printers_Users_Avg_Fields = {
  __typename?: 'printers_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
  printer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "printers_users" */
export type Printers_Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "printers_users". All fields are combined with a logical 'AND'. */
export type Printers_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Printers_Users_Bool_Exp>>>;
  _not?: Maybe<Printers_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Printers_Users_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  printer?: Maybe<Printers_Bool_Exp>;
  printer_id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "printers_users" */
export enum Printers_Users_Constraint {
  /** unique or primary key constraint */
  PrintersUsersPkey = 'printers_users_pkey'
}

/** input type for incrementing integer column in table "printers_users" */
export type Printers_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  printer_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "printers_users" */
export type Printers_Users_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  printer?: Maybe<Printers_Obj_Rel_Insert_Input>;
  printer_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Printers_Users_Max_Fields = {
  __typename?: 'printers_users_max_fields';
  id?: Maybe<Scalars['Int']>;
  printer_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "printers_users" */
export type Printers_Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Printers_Users_Min_Fields = {
  __typename?: 'printers_users_min_fields';
  id?: Maybe<Scalars['Int']>;
  printer_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "printers_users" */
export type Printers_Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "printers_users" */
export type Printers_Users_Mutation_Response = {
  __typename?: 'printers_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Printers_Users>;
};

/** input type for inserting object relation for remote table "printers_users" */
export type Printers_Users_Obj_Rel_Insert_Input = {
  data: Printers_Users_Insert_Input;
  on_conflict?: Maybe<Printers_Users_On_Conflict>;
};

/** on conflict condition type for table "printers_users" */
export type Printers_Users_On_Conflict = {
  constraint: Printers_Users_Constraint;
  update_columns: Array<Printers_Users_Update_Column>;
  where?: Maybe<Printers_Users_Bool_Exp>;
};

/** ordering options when selecting data from "printers_users" */
export type Printers_Users_Order_By = {
  id?: Maybe<Order_By>;
  printer?: Maybe<Printers_Order_By>;
  printer_id?: Maybe<Order_By>;
  tag?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "printers_users" */
export type Printers_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "printers_users" */
export enum Printers_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PrinterId = 'printer_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "printers_users" */
export type Printers_Users_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  printer_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Printers_Users_Stddev_Fields = {
  __typename?: 'printers_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  printer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "printers_users" */
export type Printers_Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Printers_Users_Stddev_Pop_Fields = {
  __typename?: 'printers_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  printer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "printers_users" */
export type Printers_Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Printers_Users_Stddev_Samp_Fields = {
  __typename?: 'printers_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  printer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "printers_users" */
export type Printers_Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Printers_Users_Sum_Fields = {
  __typename?: 'printers_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
  printer_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "printers_users" */
export type Printers_Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "printers_users" */
export enum Printers_Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PrinterId = 'printer_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Printers_Users_Var_Pop_Fields = {
  __typename?: 'printers_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  printer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "printers_users" */
export type Printers_Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Printers_Users_Var_Samp_Fields = {
  __typename?: 'printers_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  printer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "printers_users" */
export type Printers_Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Printers_Users_Variance_Fields = {
  __typename?: 'printers_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
  printer_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "printers_users" */
export type Printers_Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
  printer_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Printers_Var_Pop_Fields = {
  __typename?: 'printers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "printers" */
export type Printers_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Printers_Var_Samp_Fields = {
  __typename?: 'printers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "printers" */
export type Printers_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Printers_Variance_Fields = {
  __typename?: 'printers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "printers" */
export type Printers_Variance_Order_By = {
  id?: Maybe<Order_By>;
  location_id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "cancellation_reasons" */
  cancellation_reasons: Array<Cancellation_Reasons>;
  /** fetch aggregated fields from the table: "cancellation_reasons" */
  cancellation_reasons_aggregate: Cancellation_Reasons_Aggregate;
  /** fetch data from the table: "cancellation_reasons" using primary key columns */
  cancellation_reasons_by_pk?: Maybe<Cancellation_Reasons>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "contacts" */
  contacts: Array<Contacts>;
  /** fetch aggregated fields from the table: "contacts" */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "crossroads_transports" */
  crossroads_transports: Array<Crossroads_Transports>;
  /** fetch aggregated fields from the table: "crossroads_transports" */
  crossroads_transports_aggregate: Crossroads_Transports_Aggregate;
  /** fetch data from the table: "crossroads_transports" using primary key columns */
  crossroads_transports_by_pk?: Maybe<Crossroads_Transports>;
  /** fetch data from the table: "deliveries" */
  deliveries: Array<Deliveries>;
  /** fetch aggregated fields from the table: "deliveries" */
  deliveries_aggregate: Deliveries_Aggregate;
  /** fetch data from the table: "deliveries" using primary key columns */
  deliveries_by_pk?: Maybe<Deliveries>;
  /** fetch data from the table: "districts" */
  districts: Array<Districts>;
  /** fetch aggregated fields from the table: "districts" */
  districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "districts" using primary key columns */
  districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table: "donor_conditions" */
  donor_conditions: Array<Donor_Conditions>;
  /** fetch aggregated fields from the table: "donor_conditions" */
  donor_conditions_aggregate: Donor_Conditions_Aggregate;
  /** fetch data from the table: "donor_conditions" using primary key columns */
  donor_conditions_by_pk?: Maybe<Donor_Conditions>;
  /** fetch data from the table: "gogovan_transports" */
  gogovan_transports: Array<Gogovan_Transports>;
  /** fetch aggregated fields from the table: "gogovan_transports" */
  gogovan_transports_aggregate: Gogovan_Transports_Aggregate;
  /** fetch data from the table: "gogovan_transports" using primary key columns */
  gogovan_transports_by_pk?: Maybe<Gogovan_Transports>;
  /** fetch data from the table: "goodcity_settings" */
  goodcity_settings: Array<Goodcity_Settings>;
  /** fetch aggregated fields from the table: "goodcity_settings" */
  goodcity_settings_aggregate: Goodcity_Settings_Aggregate;
  /** fetch data from the table: "goodcity_settings" using primary key columns */
  goodcity_settings_by_pk?: Maybe<Goodcity_Settings>;
  /** fetch data from the table: "holidays" */
  holidays: Array<Holidays>;
  /** fetch aggregated fields from the table: "holidays" */
  holidays_aggregate: Holidays_Aggregate;
  /** fetch data from the table: "holidays" using primary key columns */
  holidays_by_pk?: Maybe<Holidays>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table: "offers" */
  offers: Array<Offers>;
  /** fetch aggregated fields from the table: "offers" */
  offers_aggregate: Offers_Aggregate;
  /** fetch data from the table: "offers" using primary key columns */
  offers_by_pk?: Maybe<Offers>;
  /** fetch data from the table: "offers_packages" */
  offers_packages: Array<Offers_Packages>;
  /** fetch aggregated fields from the table: "offers_packages" */
  offers_packages_aggregate: Offers_Packages_Aggregate;
  /** fetch data from the table: "offers_packages" using primary key columns */
  offers_packages_by_pk?: Maybe<Offers_Packages>;
  /** fetch data from the table: "organisation_types" */
  organisation_types: Array<Organisation_Types>;
  /** fetch aggregated fields from the table: "organisation_types" */
  organisation_types_aggregate: Organisation_Types_Aggregate;
  /** fetch data from the table: "organisation_types" using primary key columns */
  organisation_types_by_pk?: Maybe<Organisation_Types>;
  /** fetch data from the table: "organisations" */
  organisations: Array<Organisations>;
  /** fetch aggregated fields from the table: "organisations" */
  organisations_aggregate: Organisations_Aggregate;
  /** fetch data from the table: "organisations" using primary key columns */
  organisations_by_pk?: Maybe<Organisations>;
  /** fetch data from the table: "organisations_users" */
  organisations_users: Array<Organisations_Users>;
  /** fetch aggregated fields from the table: "organisations_users" */
  organisations_users_aggregate: Organisations_Users_Aggregate;
  /** fetch data from the table: "organisations_users" using primary key columns */
  organisations_users_by_pk?: Maybe<Organisations_Users>;
  /** fetch data from the table: "package_categories" */
  package_categories: Array<Package_Categories>;
  /** fetch aggregated fields from the table: "package_categories" */
  package_categories_aggregate: Package_Categories_Aggregate;
  /** fetch data from the table: "package_categories" using primary key columns */
  package_categories_by_pk?: Maybe<Package_Categories>;
  /** fetch data from the table: "package_categories_package_types" */
  package_categories_package_types: Array<Package_Categories_Package_Types>;
  /** fetch aggregated fields from the table: "package_categories_package_types" */
  package_categories_package_types_aggregate: Package_Categories_Package_Types_Aggregate;
  /** fetch data from the table: "package_categories_package_types" using primary key columns */
  package_categories_package_types_by_pk?: Maybe<Package_Categories_Package_Types>;
  /** fetch data from the table: "package_sets" */
  package_sets: Array<Package_Sets>;
  /** fetch aggregated fields from the table: "package_sets" */
  package_sets_aggregate: Package_Sets_Aggregate;
  /** fetch data from the table: "package_sets" using primary key columns */
  package_sets_by_pk?: Maybe<Package_Sets>;
  /** fetch data from the table: "package_types" */
  package_types: Array<Package_Types>;
  /** fetch aggregated fields from the table: "package_types" */
  package_types_aggregate: Package_Types_Aggregate;
  /** fetch data from the table: "package_types" using primary key columns */
  package_types_by_pk?: Maybe<Package_Types>;
  /** fetch data from the table: "packages" */
  packages: Array<Packages>;
  /** fetch aggregated fields from the table: "packages" */
  packages_aggregate: Packages_Aggregate;
  /** fetch data from the table: "packages" using primary key columns */
  packages_by_pk?: Maybe<Packages>;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** fetch data from the table: "permissions" using primary key columns */
  permissions_by_pk?: Maybe<Permissions>;
  /** fetch data from the table: "printers" */
  printers: Array<Printers>;
  /** fetch aggregated fields from the table: "printers" */
  printers_aggregate: Printers_Aggregate;
  /** fetch data from the table: "printers" using primary key columns */
  printers_by_pk?: Maybe<Printers>;
  /** fetch data from the table: "printers_users" */
  printers_users: Array<Printers_Users>;
  /** fetch aggregated fields from the table: "printers_users" */
  printers_users_aggregate: Printers_Users_Aggregate;
  /** fetch data from the table: "printers_users" using primary key columns */
  printers_users_by_pk?: Maybe<Printers_Users>;
  /** fetch data from the table: "restrictions" */
  restrictions: Array<Restrictions>;
  /** fetch aggregated fields from the table: "restrictions" */
  restrictions_aggregate: Restrictions_Aggregate;
  /** fetch data from the table: "restrictions" using primary key columns */
  restrictions_by_pk?: Maybe<Restrictions>;
  /** fetch data from the table: "role_permissions" */
  role_permissions: Array<Role_Permissions>;
  /** fetch aggregated fields from the table: "role_permissions" */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "schedules" */
  schedules: Array<Schedules>;
  /** fetch aggregated fields from the table: "schedules" */
  schedules_aggregate: Schedules_Aggregate;
  /** fetch data from the table: "schedules" using primary key columns */
  schedules_by_pk?: Maybe<Schedules>;
  /** fetch data from the table: "storage_types" */
  storage_types: Array<Storage_Types>;
  /** fetch aggregated fields from the table: "storage_types" */
  storage_types_aggregate: Storage_Types_Aggregate;
  /** fetch data from the table: "storage_types" using primary key columns */
  storage_types_by_pk?: Maybe<Storage_Types>;
  /** fetch data from the table: "territories" */
  territories: Array<Territories>;
  /** fetch aggregated fields from the table: "territories" */
  territories_aggregate: Territories_Aggregate;
  /** fetch data from the table: "territories" using primary key columns */
  territories_by_pk?: Maybe<Territories>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "valuation_matrices" */
  valuation_matrices: Array<Valuation_Matrices>;
  /** fetch aggregated fields from the table: "valuation_matrices" */
  valuation_matrices_aggregate: Valuation_Matrices_Aggregate;
  /** fetch data from the table: "valuation_matrices" using primary key columns */
  valuation_matrices_by_pk?: Maybe<Valuation_Matrices>;
};


/** query root */
export type Query_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** query root */
export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** query root */
export type Query_RootAddresses_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCancellation_ReasonsArgs = {
  distinct_on?: Maybe<Array<Cancellation_Reasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cancellation_Reasons_Order_By>>;
  where?: Maybe<Cancellation_Reasons_Bool_Exp>;
};


/** query root */
export type Query_RootCancellation_Reasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Cancellation_Reasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cancellation_Reasons_Order_By>>;
  where?: Maybe<Cancellation_Reasons_Bool_Exp>;
};


/** query root */
export type Query_RootCancellation_Reasons_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** query root */
export type Query_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** query root */
export type Query_RootCompanies_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootContactsArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


/** query root */
export type Query_RootContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


/** query root */
export type Query_RootContacts_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** query root */
export type Query_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** query root */
export type Query_RootCountries_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCrossroads_TransportsArgs = {
  distinct_on?: Maybe<Array<Crossroads_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Crossroads_Transports_Order_By>>;
  where?: Maybe<Crossroads_Transports_Bool_Exp>;
};


/** query root */
export type Query_RootCrossroads_Transports_AggregateArgs = {
  distinct_on?: Maybe<Array<Crossroads_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Crossroads_Transports_Order_By>>;
  where?: Maybe<Crossroads_Transports_Bool_Exp>;
};


/** query root */
export type Query_RootCrossroads_Transports_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDeliveriesArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** query root */
export type Query_RootDeliveries_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** query root */
export type Query_RootDeliveries_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDistrictsArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** query root */
export type Query_RootDistricts_AggregateArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** query root */
export type Query_RootDistricts_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDonor_ConditionsArgs = {
  distinct_on?: Maybe<Array<Donor_Conditions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donor_Conditions_Order_By>>;
  where?: Maybe<Donor_Conditions_Bool_Exp>;
};


/** query root */
export type Query_RootDonor_Conditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Donor_Conditions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donor_Conditions_Order_By>>;
  where?: Maybe<Donor_Conditions_Bool_Exp>;
};


/** query root */
export type Query_RootDonor_Conditions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGogovan_TransportsArgs = {
  distinct_on?: Maybe<Array<Gogovan_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gogovan_Transports_Order_By>>;
  where?: Maybe<Gogovan_Transports_Bool_Exp>;
};


/** query root */
export type Query_RootGogovan_Transports_AggregateArgs = {
  distinct_on?: Maybe<Array<Gogovan_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gogovan_Transports_Order_By>>;
  where?: Maybe<Gogovan_Transports_Bool_Exp>;
};


/** query root */
export type Query_RootGogovan_Transports_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootGoodcity_SettingsArgs = {
  distinct_on?: Maybe<Array<Goodcity_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Goodcity_Settings_Order_By>>;
  where?: Maybe<Goodcity_Settings_Bool_Exp>;
};


/** query root */
export type Query_RootGoodcity_Settings_AggregateArgs = {
  distinct_on?: Maybe<Array<Goodcity_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Goodcity_Settings_Order_By>>;
  where?: Maybe<Goodcity_Settings_Bool_Exp>;
};


/** query root */
export type Query_RootGoodcity_Settings_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootHolidaysArgs = {
  distinct_on?: Maybe<Array<Holidays_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Holidays_Order_By>>;
  where?: Maybe<Holidays_Bool_Exp>;
};


/** query root */
export type Query_RootHolidays_AggregateArgs = {
  distinct_on?: Maybe<Array<Holidays_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Holidays_Order_By>>;
  where?: Maybe<Holidays_Bool_Exp>;
};


/** query root */
export type Query_RootHolidays_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


/** query root */
export type Query_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


/** query root */
export type Query_RootImages_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLocationsArgs = {
  distinct_on?: Maybe<Array<Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locations_Order_By>>;
  where?: Maybe<Locations_Bool_Exp>;
};


/** query root */
export type Query_RootLocations_AggregateArgs = {
  distinct_on?: Maybe<Array<Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locations_Order_By>>;
  where?: Maybe<Locations_Bool_Exp>;
};


/** query root */
export type Query_RootLocations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOffersArgs = {
  distinct_on?: Maybe<Array<Offers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Order_By>>;
  where?: Maybe<Offers_Bool_Exp>;
};


/** query root */
export type Query_RootOffers_AggregateArgs = {
  distinct_on?: Maybe<Array<Offers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Order_By>>;
  where?: Maybe<Offers_Bool_Exp>;
};


/** query root */
export type Query_RootOffers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOffers_PackagesArgs = {
  distinct_on?: Maybe<Array<Offers_Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Packages_Order_By>>;
  where?: Maybe<Offers_Packages_Bool_Exp>;
};


/** query root */
export type Query_RootOffers_Packages_AggregateArgs = {
  distinct_on?: Maybe<Array<Offers_Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Packages_Order_By>>;
  where?: Maybe<Offers_Packages_Bool_Exp>;
};


/** query root */
export type Query_RootOffers_Packages_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrganisation_TypesArgs = {
  distinct_on?: Maybe<Array<Organisation_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Types_Order_By>>;
  where?: Maybe<Organisation_Types_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisation_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Types_Order_By>>;
  where?: Maybe<Organisation_Types_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisation_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrganisationsArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOrganisations_UsersArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisations_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};


/** query root */
export type Query_RootOrganisations_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPackage_CategoriesArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Order_By>>;
  where?: Maybe<Package_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Order_By>>;
  where?: Maybe<Package_Categories_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPackage_Categories_Package_TypesArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Package_Types_Order_By>>;
  where?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Categories_Package_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Package_Types_Order_By>>;
  where?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Categories_Package_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPackage_SetsArgs = {
  distinct_on?: Maybe<Array<Package_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Sets_Order_By>>;
  where?: Maybe<Package_Sets_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Sets_Order_By>>;
  where?: Maybe<Package_Sets_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Sets_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPackage_TypesArgs = {
  distinct_on?: Maybe<Array<Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Types_Order_By>>;
  where?: Maybe<Package_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Types_Order_By>>;
  where?: Maybe<Package_Types_Bool_Exp>;
};


/** query root */
export type Query_RootPackage_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPackagesArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};


/** query root */
export type Query_RootPackages_AggregateArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};


/** query root */
export type Query_RootPackages_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPermissionsArgs = {
  distinct_on?: Maybe<Array<Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permissions_Order_By>>;
  where?: Maybe<Permissions_Bool_Exp>;
};


/** query root */
export type Query_RootPermissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permissions_Order_By>>;
  where?: Maybe<Permissions_Bool_Exp>;
};


/** query root */
export type Query_RootPermissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPrintersArgs = {
  distinct_on?: Maybe<Array<Printers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Order_By>>;
  where?: Maybe<Printers_Bool_Exp>;
};


/** query root */
export type Query_RootPrinters_AggregateArgs = {
  distinct_on?: Maybe<Array<Printers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Order_By>>;
  where?: Maybe<Printers_Bool_Exp>;
};


/** query root */
export type Query_RootPrinters_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPrinters_UsersArgs = {
  distinct_on?: Maybe<Array<Printers_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Users_Order_By>>;
  where?: Maybe<Printers_Users_Bool_Exp>;
};


/** query root */
export type Query_RootPrinters_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Printers_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Users_Order_By>>;
  where?: Maybe<Printers_Users_Bool_Exp>;
};


/** query root */
export type Query_RootPrinters_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRestrictionsArgs = {
  distinct_on?: Maybe<Array<Restrictions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restrictions_Order_By>>;
  where?: Maybe<Restrictions_Bool_Exp>;
};


/** query root */
export type Query_RootRestrictions_AggregateArgs = {
  distinct_on?: Maybe<Array<Restrictions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restrictions_Order_By>>;
  where?: Maybe<Restrictions_Bool_Exp>;
};


/** query root */
export type Query_RootRestrictions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRole_PermissionsArgs = {
  distinct_on?: Maybe<Array<Role_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Permissions_Order_By>>;
  where?: Maybe<Role_Permissions_Bool_Exp>;
};


/** query root */
export type Query_RootRole_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Permissions_Order_By>>;
  where?: Maybe<Role_Permissions_Bool_Exp>;
};


/** query root */
export type Query_RootRole_Permissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** query root */
export type Query_RootRoles_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSchedulesArgs = {
  distinct_on?: Maybe<Array<Schedules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schedules_Order_By>>;
  where?: Maybe<Schedules_Bool_Exp>;
};


/** query root */
export type Query_RootSchedules_AggregateArgs = {
  distinct_on?: Maybe<Array<Schedules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schedules_Order_By>>;
  where?: Maybe<Schedules_Bool_Exp>;
};


/** query root */
export type Query_RootSchedules_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootStorage_TypesArgs = {
  distinct_on?: Maybe<Array<Storage_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Storage_Types_Order_By>>;
  where?: Maybe<Storage_Types_Bool_Exp>;
};


/** query root */
export type Query_RootStorage_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Storage_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Storage_Types_Order_By>>;
  where?: Maybe<Storage_Types_Bool_Exp>;
};


/** query root */
export type Query_RootStorage_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTerritoriesArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


/** query root */
export type Query_RootTerritories_AggregateArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


/** query root */
export type Query_RootTerritories_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootValuation_MatricesArgs = {
  distinct_on?: Maybe<Array<Valuation_Matrices_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Valuation_Matrices_Order_By>>;
  where?: Maybe<Valuation_Matrices_Bool_Exp>;
};


/** query root */
export type Query_RootValuation_Matrices_AggregateArgs = {
  distinct_on?: Maybe<Array<Valuation_Matrices_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Valuation_Matrices_Order_By>>;
  where?: Maybe<Valuation_Matrices_Bool_Exp>;
};


/** query root */
export type Query_RootValuation_Matrices_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "restrictions" */
export type Restrictions = {
  __typename?: 'restrictions';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "restrictions" */
export type Restrictions_Aggregate = {
  __typename?: 'restrictions_aggregate';
  aggregate?: Maybe<Restrictions_Aggregate_Fields>;
  nodes: Array<Restrictions>;
};

/** aggregate fields of "restrictions" */
export type Restrictions_Aggregate_Fields = {
  __typename?: 'restrictions_aggregate_fields';
  avg?: Maybe<Restrictions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Restrictions_Max_Fields>;
  min?: Maybe<Restrictions_Min_Fields>;
  stddev?: Maybe<Restrictions_Stddev_Fields>;
  stddev_pop?: Maybe<Restrictions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Restrictions_Stddev_Samp_Fields>;
  sum?: Maybe<Restrictions_Sum_Fields>;
  var_pop?: Maybe<Restrictions_Var_Pop_Fields>;
  var_samp?: Maybe<Restrictions_Var_Samp_Fields>;
  variance?: Maybe<Restrictions_Variance_Fields>;
};


/** aggregate fields of "restrictions" */
export type Restrictions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restrictions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "restrictions" */
export type Restrictions_Aggregate_Order_By = {
  avg?: Maybe<Restrictions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Restrictions_Max_Order_By>;
  min?: Maybe<Restrictions_Min_Order_By>;
  stddev?: Maybe<Restrictions_Stddev_Order_By>;
  stddev_pop?: Maybe<Restrictions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Restrictions_Stddev_Samp_Order_By>;
  sum?: Maybe<Restrictions_Sum_Order_By>;
  var_pop?: Maybe<Restrictions_Var_Pop_Order_By>;
  var_samp?: Maybe<Restrictions_Var_Samp_Order_By>;
  variance?: Maybe<Restrictions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "restrictions" */
export type Restrictions_Arr_Rel_Insert_Input = {
  data: Array<Restrictions_Insert_Input>;
  on_conflict?: Maybe<Restrictions_On_Conflict>;
};

/** aggregate avg on columns */
export type Restrictions_Avg_Fields = {
  __typename?: 'restrictions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "restrictions" */
export type Restrictions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "restrictions". All fields are combined with a logical 'AND'. */
export type Restrictions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restrictions_Bool_Exp>>>;
  _not?: Maybe<Restrictions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Restrictions_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "restrictions" */
export enum Restrictions_Constraint {
  /** unique or primary key constraint */
  RestrictionsPkey = 'restrictions_pkey'
}

/** input type for incrementing integer column in table "restrictions" */
export type Restrictions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "restrictions" */
export type Restrictions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Restrictions_Max_Fields = {
  __typename?: 'restrictions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "restrictions" */
export type Restrictions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Restrictions_Min_Fields = {
  __typename?: 'restrictions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "restrictions" */
export type Restrictions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "restrictions" */
export type Restrictions_Mutation_Response = {
  __typename?: 'restrictions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Restrictions>;
};

/** input type for inserting object relation for remote table "restrictions" */
export type Restrictions_Obj_Rel_Insert_Input = {
  data: Restrictions_Insert_Input;
  on_conflict?: Maybe<Restrictions_On_Conflict>;
};

/** on conflict condition type for table "restrictions" */
export type Restrictions_On_Conflict = {
  constraint: Restrictions_Constraint;
  update_columns: Array<Restrictions_Update_Column>;
  where?: Maybe<Restrictions_Bool_Exp>;
};

/** ordering options when selecting data from "restrictions" */
export type Restrictions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "restrictions" */
export type Restrictions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "restrictions" */
export enum Restrictions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "restrictions" */
export type Restrictions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Restrictions_Stddev_Fields = {
  __typename?: 'restrictions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "restrictions" */
export type Restrictions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Restrictions_Stddev_Pop_Fields = {
  __typename?: 'restrictions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "restrictions" */
export type Restrictions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Restrictions_Stddev_Samp_Fields = {
  __typename?: 'restrictions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "restrictions" */
export type Restrictions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Restrictions_Sum_Fields = {
  __typename?: 'restrictions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "restrictions" */
export type Restrictions_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "restrictions" */
export enum Restrictions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Restrictions_Var_Pop_Fields = {
  __typename?: 'restrictions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "restrictions" */
export type Restrictions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Restrictions_Var_Samp_Fields = {
  __typename?: 'restrictions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "restrictions" */
export type Restrictions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Restrictions_Variance_Fields = {
  __typename?: 'restrictions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "restrictions" */
export type Restrictions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "role_permissions" */
export type Role_Permissions = {
  __typename?: 'role_permissions';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  permission?: Maybe<Permissions>;
  permission_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  role?: Maybe<Roles>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "role_permissions" */
export type Role_Permissions_Aggregate = {
  __typename?: 'role_permissions_aggregate';
  aggregate?: Maybe<Role_Permissions_Aggregate_Fields>;
  nodes: Array<Role_Permissions>;
};

/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_Fields = {
  __typename?: 'role_permissions_aggregate_fields';
  avg?: Maybe<Role_Permissions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Role_Permissions_Max_Fields>;
  min?: Maybe<Role_Permissions_Min_Fields>;
  stddev?: Maybe<Role_Permissions_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Permissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Permissions_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Permissions_Sum_Fields>;
  var_pop?: Maybe<Role_Permissions_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Permissions_Var_Samp_Fields>;
  variance?: Maybe<Role_Permissions_Variance_Fields>;
};


/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Role_Permissions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "role_permissions" */
export type Role_Permissions_Aggregate_Order_By = {
  avg?: Maybe<Role_Permissions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Role_Permissions_Max_Order_By>;
  min?: Maybe<Role_Permissions_Min_Order_By>;
  stddev?: Maybe<Role_Permissions_Stddev_Order_By>;
  stddev_pop?: Maybe<Role_Permissions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Role_Permissions_Stddev_Samp_Order_By>;
  sum?: Maybe<Role_Permissions_Sum_Order_By>;
  var_pop?: Maybe<Role_Permissions_Var_Pop_Order_By>;
  var_samp?: Maybe<Role_Permissions_Var_Samp_Order_By>;
  variance?: Maybe<Role_Permissions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "role_permissions" */
export type Role_Permissions_Arr_Rel_Insert_Input = {
  data: Array<Role_Permissions_Insert_Input>;
  on_conflict?: Maybe<Role_Permissions_On_Conflict>;
};

/** aggregate avg on columns */
export type Role_Permissions_Avg_Fields = {
  __typename?: 'role_permissions_avg_fields';
  id?: Maybe<Scalars['Float']>;
  permission_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "role_permissions" */
export type Role_Permissions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "role_permissions". All fields are combined with a logical 'AND'. */
export type Role_Permissions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Role_Permissions_Bool_Exp>>>;
  _not?: Maybe<Role_Permissions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Role_Permissions_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  permission?: Maybe<Permissions_Bool_Exp>;
  permission_id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_permissions" */
export enum Role_Permissions_Constraint {
  /** unique or primary key constraint */
  RolePermissionsPkey = 'role_permissions_pkey'
}

/** input type for incrementing integer column in table "role_permissions" */
export type Role_Permissions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  permission_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "role_permissions" */
export type Role_Permissions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  permission?: Maybe<Permissions_Obj_Rel_Insert_Input>;
  permission_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Role_Permissions_Max_Fields = {
  __typename?: 'role_permissions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  permission_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "role_permissions" */
export type Role_Permissions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Permissions_Min_Fields = {
  __typename?: 'role_permissions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  permission_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "role_permissions" */
export type Role_Permissions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "role_permissions" */
export type Role_Permissions_Mutation_Response = {
  __typename?: 'role_permissions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Role_Permissions>;
};

/** input type for inserting object relation for remote table "role_permissions" */
export type Role_Permissions_Obj_Rel_Insert_Input = {
  data: Role_Permissions_Insert_Input;
  on_conflict?: Maybe<Role_Permissions_On_Conflict>;
};

/** on conflict condition type for table "role_permissions" */
export type Role_Permissions_On_Conflict = {
  constraint: Role_Permissions_Constraint;
  update_columns: Array<Role_Permissions_Update_Column>;
  where?: Maybe<Role_Permissions_Bool_Exp>;
};

/** ordering options when selecting data from "role_permissions" */
export type Role_Permissions_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  permission?: Maybe<Permissions_Order_By>;
  permission_id?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "role_permissions" */
export type Role_Permissions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "role_permissions" */
export enum Role_Permissions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "role_permissions" */
export type Role_Permissions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  permission_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Role_Permissions_Stddev_Fields = {
  __typename?: 'role_permissions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  permission_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "role_permissions" */
export type Role_Permissions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Role_Permissions_Stddev_Pop_Fields = {
  __typename?: 'role_permissions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  permission_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "role_permissions" */
export type Role_Permissions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Role_Permissions_Stddev_Samp_Fields = {
  __typename?: 'role_permissions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  permission_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "role_permissions" */
export type Role_Permissions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Role_Permissions_Sum_Fields = {
  __typename?: 'role_permissions_sum_fields';
  id?: Maybe<Scalars['Int']>;
  permission_id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "role_permissions" */
export type Role_Permissions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** update columns of table "role_permissions" */
export enum Role_Permissions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Role_Permissions_Var_Pop_Fields = {
  __typename?: 'role_permissions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  permission_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "role_permissions" */
export type Role_Permissions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Role_Permissions_Var_Samp_Fields = {
  __typename?: 'role_permissions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  permission_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "role_permissions" */
export type Role_Permissions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Role_Permissions_Variance_Fields = {
  __typename?: 'role_permissions_variance_fields';
  id?: Maybe<Scalars['Float']>;
  permission_id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "role_permissions" */
export type Role_Permissions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  permission_id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  avg?: Maybe<Roles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
  stddev?: Maybe<Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Roles_Sum_Fields>;
  var_pop?: Maybe<Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Roles_Var_Samp_Fields>;
  variance?: Maybe<Roles_Variance_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  avg?: Maybe<Roles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
  stddev?: Maybe<Roles_Stddev_Order_By>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Order_By>;
  sum?: Maybe<Roles_Sum_Order_By>;
  var_pop?: Maybe<Roles_Var_Pop_Order_By>;
  var_samp?: Maybe<Roles_Var_Samp_Order_By>;
  variance?: Maybe<Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Roles_Avg_Fields = {
  __typename?: 'roles_avg_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "roles" */
export type Roles_Avg_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for incrementing integer column in table "roles" */
export type Roles_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "roles" */
export type Roles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Roles_Stddev_Fields = {
  __typename?: 'roles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "roles" */
export type Roles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Roles_Stddev_Pop_Fields = {
  __typename?: 'roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "roles" */
export type Roles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Roles_Stddev_Samp_Fields = {
  __typename?: 'roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "roles" */
export type Roles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Roles_Sum_Fields = {
  __typename?: 'roles_sum_fields';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "roles" */
export type Roles_Sum_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Roles_Var_Pop_Fields = {
  __typename?: 'roles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "roles" */
export type Roles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Roles_Var_Samp_Fields = {
  __typename?: 'roles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "roles" */
export type Roles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Roles_Variance_Fields = {
  __typename?: 'roles_variance_fields';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "roles" */
export type Roles_Variance_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
};

/** columns and relationships of "schedules" */
export type Schedules = {
  __typename?: 'schedules';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  deliveries: Array<Deliveries>;
  /** An aggregated array relationship */
  deliveries_aggregate: Deliveries_Aggregate;
  id: Scalars['Int'];
  resource?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  slot?: Maybe<Scalars['Int']>;
  slot_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zone?: Maybe<Scalars['String']>;
};


/** columns and relationships of "schedules" */
export type SchedulesDeliveriesArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** columns and relationships of "schedules" */
export type SchedulesDeliveries_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};

/** aggregated selection of "schedules" */
export type Schedules_Aggregate = {
  __typename?: 'schedules_aggregate';
  aggregate?: Maybe<Schedules_Aggregate_Fields>;
  nodes: Array<Schedules>;
};

/** aggregate fields of "schedules" */
export type Schedules_Aggregate_Fields = {
  __typename?: 'schedules_aggregate_fields';
  avg?: Maybe<Schedules_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Schedules_Max_Fields>;
  min?: Maybe<Schedules_Min_Fields>;
  stddev?: Maybe<Schedules_Stddev_Fields>;
  stddev_pop?: Maybe<Schedules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Schedules_Stddev_Samp_Fields>;
  sum?: Maybe<Schedules_Sum_Fields>;
  var_pop?: Maybe<Schedules_Var_Pop_Fields>;
  var_samp?: Maybe<Schedules_Var_Samp_Fields>;
  variance?: Maybe<Schedules_Variance_Fields>;
};


/** aggregate fields of "schedules" */
export type Schedules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Schedules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "schedules" */
export type Schedules_Aggregate_Order_By = {
  avg?: Maybe<Schedules_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Schedules_Max_Order_By>;
  min?: Maybe<Schedules_Min_Order_By>;
  stddev?: Maybe<Schedules_Stddev_Order_By>;
  stddev_pop?: Maybe<Schedules_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Schedules_Stddev_Samp_Order_By>;
  sum?: Maybe<Schedules_Sum_Order_By>;
  var_pop?: Maybe<Schedules_Var_Pop_Order_By>;
  var_samp?: Maybe<Schedules_Var_Samp_Order_By>;
  variance?: Maybe<Schedules_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "schedules" */
export type Schedules_Arr_Rel_Insert_Input = {
  data: Array<Schedules_Insert_Input>;
  on_conflict?: Maybe<Schedules_On_Conflict>;
};

/** aggregate avg on columns */
export type Schedules_Avg_Fields = {
  __typename?: 'schedules_avg_fields';
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "schedules" */
export type Schedules_Avg_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "schedules". All fields are combined with a logical 'AND'. */
export type Schedules_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Schedules_Bool_Exp>>>;
  _not?: Maybe<Schedules_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Schedules_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deliveries?: Maybe<Deliveries_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  resource?: Maybe<String_Comparison_Exp>;
  scheduled_at?: Maybe<Timestamptz_Comparison_Exp>;
  slot?: Maybe<Int_Comparison_Exp>;
  slot_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  zone?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "schedules" */
export enum Schedules_Constraint {
  /** unique or primary key constraint */
  SchedulesPkey = 'schedules_pkey'
}

/** input type for incrementing integer column in table "schedules" */
export type Schedules_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "schedules" */
export type Schedules_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deliveries?: Maybe<Deliveries_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  resource?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  slot?: Maybe<Scalars['Int']>;
  slot_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zone?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Schedules_Max_Fields = {
  __typename?: 'schedules_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  resource?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  slot?: Maybe<Scalars['Int']>;
  slot_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "schedules" */
export type Schedules_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  resource?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  slot_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  zone?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Schedules_Min_Fields = {
  __typename?: 'schedules_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  resource?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  slot?: Maybe<Scalars['Int']>;
  slot_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "schedules" */
export type Schedules_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  resource?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  slot_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  zone?: Maybe<Order_By>;
};

/** response of any mutation on the table "schedules" */
export type Schedules_Mutation_Response = {
  __typename?: 'schedules_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Schedules>;
};

/** input type for inserting object relation for remote table "schedules" */
export type Schedules_Obj_Rel_Insert_Input = {
  data: Schedules_Insert_Input;
  on_conflict?: Maybe<Schedules_On_Conflict>;
};

/** on conflict condition type for table "schedules" */
export type Schedules_On_Conflict = {
  constraint: Schedules_Constraint;
  update_columns: Array<Schedules_Update_Column>;
  where?: Maybe<Schedules_Bool_Exp>;
};

/** ordering options when selecting data from "schedules" */
export type Schedules_Order_By = {
  created_at?: Maybe<Order_By>;
  deliveries_aggregate?: Maybe<Deliveries_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  resource?: Maybe<Order_By>;
  scheduled_at?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  slot_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  zone?: Maybe<Order_By>;
};

/** primary key columns input for table: "schedules" */
export type Schedules_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "schedules" */
export enum Schedules_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Resource = 'resource',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  Slot = 'slot',
  /** column name */
  SlotName = 'slot_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Zone = 'zone'
}

/** input type for updating data in table "schedules" */
export type Schedules_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  resource?: Maybe<Scalars['String']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  slot?: Maybe<Scalars['Int']>;
  slot_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zone?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Schedules_Stddev_Fields = {
  __typename?: 'schedules_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "schedules" */
export type Schedules_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Schedules_Stddev_Pop_Fields = {
  __typename?: 'schedules_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "schedules" */
export type Schedules_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Schedules_Stddev_Samp_Fields = {
  __typename?: 'schedules_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "schedules" */
export type Schedules_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Schedules_Sum_Fields = {
  __typename?: 'schedules_sum_fields';
  id?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "schedules" */
export type Schedules_Sum_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** update columns of table "schedules" */
export enum Schedules_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Resource = 'resource',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  Slot = 'slot',
  /** column name */
  SlotName = 'slot_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Zone = 'zone'
}

/** aggregate var_pop on columns */
export type Schedules_Var_Pop_Fields = {
  __typename?: 'schedules_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "schedules" */
export type Schedules_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Schedules_Var_Samp_Fields = {
  __typename?: 'schedules_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "schedules" */
export type Schedules_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Schedules_Variance_Fields = {
  __typename?: 'schedules_variance_fields';
  id?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "schedules" */
export type Schedules_Variance_Order_By = {
  id?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** columns and relationships of "storage_types" */
export type Storage_Types = {
  __typename?: 'storage_types';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  max_unit_quantity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "storage_types" */
export type Storage_Types_Aggregate = {
  __typename?: 'storage_types_aggregate';
  aggregate?: Maybe<Storage_Types_Aggregate_Fields>;
  nodes: Array<Storage_Types>;
};

/** aggregate fields of "storage_types" */
export type Storage_Types_Aggregate_Fields = {
  __typename?: 'storage_types_aggregate_fields';
  avg?: Maybe<Storage_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Storage_Types_Max_Fields>;
  min?: Maybe<Storage_Types_Min_Fields>;
  stddev?: Maybe<Storage_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Storage_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Storage_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Storage_Types_Sum_Fields>;
  var_pop?: Maybe<Storage_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Storage_Types_Var_Samp_Fields>;
  variance?: Maybe<Storage_Types_Variance_Fields>;
};


/** aggregate fields of "storage_types" */
export type Storage_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Storage_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage_types" */
export type Storage_Types_Aggregate_Order_By = {
  avg?: Maybe<Storage_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Storage_Types_Max_Order_By>;
  min?: Maybe<Storage_Types_Min_Order_By>;
  stddev?: Maybe<Storage_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Storage_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Storage_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Storage_Types_Sum_Order_By>;
  var_pop?: Maybe<Storage_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Storage_Types_Var_Samp_Order_By>;
  variance?: Maybe<Storage_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage_types" */
export type Storage_Types_Arr_Rel_Insert_Input = {
  data: Array<Storage_Types_Insert_Input>;
  on_conflict?: Maybe<Storage_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Storage_Types_Avg_Fields = {
  __typename?: 'storage_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
  max_unit_quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage_types" */
export type Storage_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage_types". All fields are combined with a logical 'AND'. */
export type Storage_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Storage_Types_Bool_Exp>>>;
  _not?: Maybe<Storage_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Storage_Types_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  max_unit_quantity?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage_types" */
export enum Storage_Types_Constraint {
  /** unique or primary key constraint */
  StorageTypesPkey = 'storage_types_pkey'
}

/** input type for incrementing integer column in table "storage_types" */
export type Storage_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  max_unit_quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage_types" */
export type Storage_Types_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max_unit_quantity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Storage_Types_Max_Fields = {
  __typename?: 'storage_types_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max_unit_quantity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "storage_types" */
export type Storage_Types_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Storage_Types_Min_Fields = {
  __typename?: 'storage_types_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max_unit_quantity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "storage_types" */
export type Storage_Types_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "storage_types" */
export type Storage_Types_Mutation_Response = {
  __typename?: 'storage_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Storage_Types>;
};

/** input type for inserting object relation for remote table "storage_types" */
export type Storage_Types_Obj_Rel_Insert_Input = {
  data: Storage_Types_Insert_Input;
  on_conflict?: Maybe<Storage_Types_On_Conflict>;
};

/** on conflict condition type for table "storage_types" */
export type Storage_Types_On_Conflict = {
  constraint: Storage_Types_Constraint;
  update_columns: Array<Storage_Types_Update_Column>;
  where?: Maybe<Storage_Types_Bool_Exp>;
};

/** ordering options when selecting data from "storage_types" */
export type Storage_Types_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "storage_types" */
export type Storage_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "storage_types" */
export enum Storage_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUnitQuantity = 'max_unit_quantity',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "storage_types" */
export type Storage_Types_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max_unit_quantity?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Storage_Types_Stddev_Fields = {
  __typename?: 'storage_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  max_unit_quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage_types" */
export type Storage_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Storage_Types_Stddev_Pop_Fields = {
  __typename?: 'storage_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  max_unit_quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage_types" */
export type Storage_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Storage_Types_Stddev_Samp_Fields = {
  __typename?: 'storage_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  max_unit_quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage_types" */
export type Storage_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Storage_Types_Sum_Fields = {
  __typename?: 'storage_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
  max_unit_quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage_types" */
export type Storage_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** update columns of table "storage_types" */
export enum Storage_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUnitQuantity = 'max_unit_quantity',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Storage_Types_Var_Pop_Fields = {
  __typename?: 'storage_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  max_unit_quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage_types" */
export type Storage_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Storage_Types_Var_Samp_Fields = {
  __typename?: 'storage_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  max_unit_quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage_types" */
export type Storage_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Storage_Types_Variance_Fields = {
  __typename?: 'storage_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
  max_unit_quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage_types" */
export type Storage_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
  max_unit_quantity?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "addresses" */
  addresses: Array<Addresses>;
  /** fetch aggregated fields from the table: "addresses" */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "cancellation_reasons" */
  cancellation_reasons: Array<Cancellation_Reasons>;
  /** fetch aggregated fields from the table: "cancellation_reasons" */
  cancellation_reasons_aggregate: Cancellation_Reasons_Aggregate;
  /** fetch data from the table: "cancellation_reasons" using primary key columns */
  cancellation_reasons_by_pk?: Maybe<Cancellation_Reasons>;
  /** fetch data from the table: "companies" */
  companies: Array<Companies>;
  /** fetch aggregated fields from the table: "companies" */
  companies_aggregate: Companies_Aggregate;
  /** fetch data from the table: "companies" using primary key columns */
  companies_by_pk?: Maybe<Companies>;
  /** fetch data from the table: "contacts" */
  contacts: Array<Contacts>;
  /** fetch aggregated fields from the table: "contacts" */
  contacts_aggregate: Contacts_Aggregate;
  /** fetch data from the table: "contacts" using primary key columns */
  contacts_by_pk?: Maybe<Contacts>;
  /** fetch data from the table: "countries" */
  countries: Array<Countries>;
  /** fetch aggregated fields from the table: "countries" */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "crossroads_transports" */
  crossroads_transports: Array<Crossroads_Transports>;
  /** fetch aggregated fields from the table: "crossroads_transports" */
  crossroads_transports_aggregate: Crossroads_Transports_Aggregate;
  /** fetch data from the table: "crossroads_transports" using primary key columns */
  crossroads_transports_by_pk?: Maybe<Crossroads_Transports>;
  /** fetch data from the table: "deliveries" */
  deliveries: Array<Deliveries>;
  /** fetch aggregated fields from the table: "deliveries" */
  deliveries_aggregate: Deliveries_Aggregate;
  /** fetch data from the table: "deliveries" using primary key columns */
  deliveries_by_pk?: Maybe<Deliveries>;
  /** fetch data from the table: "districts" */
  districts: Array<Districts>;
  /** fetch aggregated fields from the table: "districts" */
  districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "districts" using primary key columns */
  districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table: "donor_conditions" */
  donor_conditions: Array<Donor_Conditions>;
  /** fetch aggregated fields from the table: "donor_conditions" */
  donor_conditions_aggregate: Donor_Conditions_Aggregate;
  /** fetch data from the table: "donor_conditions" using primary key columns */
  donor_conditions_by_pk?: Maybe<Donor_Conditions>;
  /** fetch data from the table: "gogovan_transports" */
  gogovan_transports: Array<Gogovan_Transports>;
  /** fetch aggregated fields from the table: "gogovan_transports" */
  gogovan_transports_aggregate: Gogovan_Transports_Aggregate;
  /** fetch data from the table: "gogovan_transports" using primary key columns */
  gogovan_transports_by_pk?: Maybe<Gogovan_Transports>;
  /** fetch data from the table: "goodcity_settings" */
  goodcity_settings: Array<Goodcity_Settings>;
  /** fetch aggregated fields from the table: "goodcity_settings" */
  goodcity_settings_aggregate: Goodcity_Settings_Aggregate;
  /** fetch data from the table: "goodcity_settings" using primary key columns */
  goodcity_settings_by_pk?: Maybe<Goodcity_Settings>;
  /** fetch data from the table: "holidays" */
  holidays: Array<Holidays>;
  /** fetch aggregated fields from the table: "holidays" */
  holidays_aggregate: Holidays_Aggregate;
  /** fetch data from the table: "holidays" using primary key columns */
  holidays_by_pk?: Maybe<Holidays>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "locations" */
  locations: Array<Locations>;
  /** fetch aggregated fields from the table: "locations" */
  locations_aggregate: Locations_Aggregate;
  /** fetch data from the table: "locations" using primary key columns */
  locations_by_pk?: Maybe<Locations>;
  /** fetch data from the table: "offers" */
  offers: Array<Offers>;
  /** fetch aggregated fields from the table: "offers" */
  offers_aggregate: Offers_Aggregate;
  /** fetch data from the table: "offers" using primary key columns */
  offers_by_pk?: Maybe<Offers>;
  /** fetch data from the table: "offers_packages" */
  offers_packages: Array<Offers_Packages>;
  /** fetch aggregated fields from the table: "offers_packages" */
  offers_packages_aggregate: Offers_Packages_Aggregate;
  /** fetch data from the table: "offers_packages" using primary key columns */
  offers_packages_by_pk?: Maybe<Offers_Packages>;
  /** fetch data from the table: "organisation_types" */
  organisation_types: Array<Organisation_Types>;
  /** fetch aggregated fields from the table: "organisation_types" */
  organisation_types_aggregate: Organisation_Types_Aggregate;
  /** fetch data from the table: "organisation_types" using primary key columns */
  organisation_types_by_pk?: Maybe<Organisation_Types>;
  /** fetch data from the table: "organisations" */
  organisations: Array<Organisations>;
  /** fetch aggregated fields from the table: "organisations" */
  organisations_aggregate: Organisations_Aggregate;
  /** fetch data from the table: "organisations" using primary key columns */
  organisations_by_pk?: Maybe<Organisations>;
  /** fetch data from the table: "organisations_users" */
  organisations_users: Array<Organisations_Users>;
  /** fetch aggregated fields from the table: "organisations_users" */
  organisations_users_aggregate: Organisations_Users_Aggregate;
  /** fetch data from the table: "organisations_users" using primary key columns */
  organisations_users_by_pk?: Maybe<Organisations_Users>;
  /** fetch data from the table: "package_categories" */
  package_categories: Array<Package_Categories>;
  /** fetch aggregated fields from the table: "package_categories" */
  package_categories_aggregate: Package_Categories_Aggregate;
  /** fetch data from the table: "package_categories" using primary key columns */
  package_categories_by_pk?: Maybe<Package_Categories>;
  /** fetch data from the table: "package_categories_package_types" */
  package_categories_package_types: Array<Package_Categories_Package_Types>;
  /** fetch aggregated fields from the table: "package_categories_package_types" */
  package_categories_package_types_aggregate: Package_Categories_Package_Types_Aggregate;
  /** fetch data from the table: "package_categories_package_types" using primary key columns */
  package_categories_package_types_by_pk?: Maybe<Package_Categories_Package_Types>;
  /** fetch data from the table: "package_sets" */
  package_sets: Array<Package_Sets>;
  /** fetch aggregated fields from the table: "package_sets" */
  package_sets_aggregate: Package_Sets_Aggregate;
  /** fetch data from the table: "package_sets" using primary key columns */
  package_sets_by_pk?: Maybe<Package_Sets>;
  /** fetch data from the table: "package_types" */
  package_types: Array<Package_Types>;
  /** fetch aggregated fields from the table: "package_types" */
  package_types_aggregate: Package_Types_Aggregate;
  /** fetch data from the table: "package_types" using primary key columns */
  package_types_by_pk?: Maybe<Package_Types>;
  /** fetch data from the table: "packages" */
  packages: Array<Packages>;
  /** fetch aggregated fields from the table: "packages" */
  packages_aggregate: Packages_Aggregate;
  /** fetch data from the table: "packages" using primary key columns */
  packages_by_pk?: Maybe<Packages>;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** fetch data from the table: "permissions" using primary key columns */
  permissions_by_pk?: Maybe<Permissions>;
  /** fetch data from the table: "printers" */
  printers: Array<Printers>;
  /** fetch aggregated fields from the table: "printers" */
  printers_aggregate: Printers_Aggregate;
  /** fetch data from the table: "printers" using primary key columns */
  printers_by_pk?: Maybe<Printers>;
  /** fetch data from the table: "printers_users" */
  printers_users: Array<Printers_Users>;
  /** fetch aggregated fields from the table: "printers_users" */
  printers_users_aggregate: Printers_Users_Aggregate;
  /** fetch data from the table: "printers_users" using primary key columns */
  printers_users_by_pk?: Maybe<Printers_Users>;
  /** fetch data from the table: "restrictions" */
  restrictions: Array<Restrictions>;
  /** fetch aggregated fields from the table: "restrictions" */
  restrictions_aggregate: Restrictions_Aggregate;
  /** fetch data from the table: "restrictions" using primary key columns */
  restrictions_by_pk?: Maybe<Restrictions>;
  /** fetch data from the table: "role_permissions" */
  role_permissions: Array<Role_Permissions>;
  /** fetch aggregated fields from the table: "role_permissions" */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "schedules" */
  schedules: Array<Schedules>;
  /** fetch aggregated fields from the table: "schedules" */
  schedules_aggregate: Schedules_Aggregate;
  /** fetch data from the table: "schedules" using primary key columns */
  schedules_by_pk?: Maybe<Schedules>;
  /** fetch data from the table: "storage_types" */
  storage_types: Array<Storage_Types>;
  /** fetch aggregated fields from the table: "storage_types" */
  storage_types_aggregate: Storage_Types_Aggregate;
  /** fetch data from the table: "storage_types" using primary key columns */
  storage_types_by_pk?: Maybe<Storage_Types>;
  /** fetch data from the table: "territories" */
  territories: Array<Territories>;
  /** fetch aggregated fields from the table: "territories" */
  territories_aggregate: Territories_Aggregate;
  /** fetch data from the table: "territories" using primary key columns */
  territories_by_pk?: Maybe<Territories>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "valuation_matrices" */
  valuation_matrices: Array<Valuation_Matrices>;
  /** fetch aggregated fields from the table: "valuation_matrices" */
  valuation_matrices_aggregate: Valuation_Matrices_Aggregate;
  /** fetch data from the table: "valuation_matrices" using primary key columns */
  valuation_matrices_by_pk?: Maybe<Valuation_Matrices>;
};


/** subscription root */
export type Subscription_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCancellation_ReasonsArgs = {
  distinct_on?: Maybe<Array<Cancellation_Reasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cancellation_Reasons_Order_By>>;
  where?: Maybe<Cancellation_Reasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCancellation_Reasons_AggregateArgs = {
  distinct_on?: Maybe<Array<Cancellation_Reasons_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cancellation_Reasons_Order_By>>;
  where?: Maybe<Cancellation_Reasons_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCancellation_Reasons_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCompaniesArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompanies_AggregateArgs = {
  distinct_on?: Maybe<Array<Companies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Companies_Order_By>>;
  where?: Maybe<Companies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCompanies_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootContactsArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContacts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contacts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contacts_Order_By>>;
  where?: Maybe<Contacts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContacts_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCountries_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCrossroads_TransportsArgs = {
  distinct_on?: Maybe<Array<Crossroads_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Crossroads_Transports_Order_By>>;
  where?: Maybe<Crossroads_Transports_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCrossroads_Transports_AggregateArgs = {
  distinct_on?: Maybe<Array<Crossroads_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Crossroads_Transports_Order_By>>;
  where?: Maybe<Crossroads_Transports_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCrossroads_Transports_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDeliveriesArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeliveries_AggregateArgs = {
  distinct_on?: Maybe<Array<Deliveries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Deliveries_Order_By>>;
  where?: Maybe<Deliveries_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeliveries_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDistrictsArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDistricts_AggregateArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDistricts_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDonor_ConditionsArgs = {
  distinct_on?: Maybe<Array<Donor_Conditions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donor_Conditions_Order_By>>;
  where?: Maybe<Donor_Conditions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDonor_Conditions_AggregateArgs = {
  distinct_on?: Maybe<Array<Donor_Conditions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Donor_Conditions_Order_By>>;
  where?: Maybe<Donor_Conditions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDonor_Conditions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGogovan_TransportsArgs = {
  distinct_on?: Maybe<Array<Gogovan_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gogovan_Transports_Order_By>>;
  where?: Maybe<Gogovan_Transports_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGogovan_Transports_AggregateArgs = {
  distinct_on?: Maybe<Array<Gogovan_Transports_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gogovan_Transports_Order_By>>;
  where?: Maybe<Gogovan_Transports_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGogovan_Transports_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootGoodcity_SettingsArgs = {
  distinct_on?: Maybe<Array<Goodcity_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Goodcity_Settings_Order_By>>;
  where?: Maybe<Goodcity_Settings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGoodcity_Settings_AggregateArgs = {
  distinct_on?: Maybe<Array<Goodcity_Settings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Goodcity_Settings_Order_By>>;
  where?: Maybe<Goodcity_Settings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGoodcity_Settings_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootHolidaysArgs = {
  distinct_on?: Maybe<Array<Holidays_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Holidays_Order_By>>;
  where?: Maybe<Holidays_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHolidays_AggregateArgs = {
  distinct_on?: Maybe<Array<Holidays_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Holidays_Order_By>>;
  where?: Maybe<Holidays_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHolidays_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootImagesArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Images_Order_By>>;
  where?: Maybe<Images_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootImages_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLocationsArgs = {
  distinct_on?: Maybe<Array<Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locations_Order_By>>;
  where?: Maybe<Locations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLocations_AggregateArgs = {
  distinct_on?: Maybe<Array<Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locations_Order_By>>;
  where?: Maybe<Locations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLocations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOffersArgs = {
  distinct_on?: Maybe<Array<Offers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Order_By>>;
  where?: Maybe<Offers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffers_AggregateArgs = {
  distinct_on?: Maybe<Array<Offers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Order_By>>;
  where?: Maybe<Offers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOffers_PackagesArgs = {
  distinct_on?: Maybe<Array<Offers_Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Packages_Order_By>>;
  where?: Maybe<Offers_Packages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffers_Packages_AggregateArgs = {
  distinct_on?: Maybe<Array<Offers_Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Offers_Packages_Order_By>>;
  where?: Maybe<Offers_Packages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOffers_Packages_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrganisation_TypesArgs = {
  distinct_on?: Maybe<Array<Organisation_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Types_Order_By>>;
  where?: Maybe<Organisation_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisation_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisation_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisation_Types_Order_By>>;
  where?: Maybe<Organisation_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisation_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrganisationsArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Order_By>>;
  where?: Maybe<Organisations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOrganisations_UsersArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisations_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrganisations_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPackage_CategoriesArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Order_By>>;
  where?: Maybe<Package_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Order_By>>;
  where?: Maybe<Package_Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPackage_Categories_Package_TypesArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Package_Types_Order_By>>;
  where?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Categories_Package_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Categories_Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Categories_Package_Types_Order_By>>;
  where?: Maybe<Package_Categories_Package_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Categories_Package_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPackage_SetsArgs = {
  distinct_on?: Maybe<Array<Package_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Sets_Order_By>>;
  where?: Maybe<Package_Sets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Sets_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Sets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Sets_Order_By>>;
  where?: Maybe<Package_Sets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Sets_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPackage_TypesArgs = {
  distinct_on?: Maybe<Array<Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Types_Order_By>>;
  where?: Maybe<Package_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Package_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Package_Types_Order_By>>;
  where?: Maybe<Package_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackage_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPackagesArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackages_AggregateArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPackages_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPermissionsArgs = {
  distinct_on?: Maybe<Array<Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permissions_Order_By>>;
  where?: Maybe<Permissions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPermissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Permissions_Order_By>>;
  where?: Maybe<Permissions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPermissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPrintersArgs = {
  distinct_on?: Maybe<Array<Printers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Order_By>>;
  where?: Maybe<Printers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrinters_AggregateArgs = {
  distinct_on?: Maybe<Array<Printers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Order_By>>;
  where?: Maybe<Printers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrinters_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPrinters_UsersArgs = {
  distinct_on?: Maybe<Array<Printers_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Users_Order_By>>;
  where?: Maybe<Printers_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrinters_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Printers_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Printers_Users_Order_By>>;
  where?: Maybe<Printers_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrinters_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRestrictionsArgs = {
  distinct_on?: Maybe<Array<Restrictions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restrictions_Order_By>>;
  where?: Maybe<Restrictions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestrictions_AggregateArgs = {
  distinct_on?: Maybe<Array<Restrictions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Restrictions_Order_By>>;
  where?: Maybe<Restrictions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRestrictions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRole_PermissionsArgs = {
  distinct_on?: Maybe<Array<Role_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Permissions_Order_By>>;
  where?: Maybe<Role_Permissions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_Permissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Role_Permissions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Role_Permissions_Order_By>>;
  where?: Maybe<Role_Permissions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRole_Permissions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSchedulesArgs = {
  distinct_on?: Maybe<Array<Schedules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schedules_Order_By>>;
  where?: Maybe<Schedules_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSchedules_AggregateArgs = {
  distinct_on?: Maybe<Array<Schedules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Schedules_Order_By>>;
  where?: Maybe<Schedules_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSchedules_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootStorage_TypesArgs = {
  distinct_on?: Maybe<Array<Storage_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Storage_Types_Order_By>>;
  where?: Maybe<Storage_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStorage_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Storage_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Storage_Types_Order_By>>;
  where?: Maybe<Storage_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStorage_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTerritoriesArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTerritories_AggregateArgs = {
  distinct_on?: Maybe<Array<Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Territories_Order_By>>;
  where?: Maybe<Territories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTerritories_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootValuation_MatricesArgs = {
  distinct_on?: Maybe<Array<Valuation_Matrices_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Valuation_Matrices_Order_By>>;
  where?: Maybe<Valuation_Matrices_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootValuation_Matrices_AggregateArgs = {
  distinct_on?: Maybe<Array<Valuation_Matrices_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Valuation_Matrices_Order_By>>;
  where?: Maybe<Valuation_Matrices_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootValuation_Matrices_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "territories" */
export type Territories = {
  __typename?: 'territories';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "territories" */
export type Territories_Aggregate = {
  __typename?: 'territories_aggregate';
  aggregate?: Maybe<Territories_Aggregate_Fields>;
  nodes: Array<Territories>;
};

/** aggregate fields of "territories" */
export type Territories_Aggregate_Fields = {
  __typename?: 'territories_aggregate_fields';
  avg?: Maybe<Territories_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Territories_Max_Fields>;
  min?: Maybe<Territories_Min_Fields>;
  stddev?: Maybe<Territories_Stddev_Fields>;
  stddev_pop?: Maybe<Territories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Territories_Stddev_Samp_Fields>;
  sum?: Maybe<Territories_Sum_Fields>;
  var_pop?: Maybe<Territories_Var_Pop_Fields>;
  var_samp?: Maybe<Territories_Var_Samp_Fields>;
  variance?: Maybe<Territories_Variance_Fields>;
};


/** aggregate fields of "territories" */
export type Territories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Territories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "territories" */
export type Territories_Aggregate_Order_By = {
  avg?: Maybe<Territories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Territories_Max_Order_By>;
  min?: Maybe<Territories_Min_Order_By>;
  stddev?: Maybe<Territories_Stddev_Order_By>;
  stddev_pop?: Maybe<Territories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Territories_Stddev_Samp_Order_By>;
  sum?: Maybe<Territories_Sum_Order_By>;
  var_pop?: Maybe<Territories_Var_Pop_Order_By>;
  var_samp?: Maybe<Territories_Var_Samp_Order_By>;
  variance?: Maybe<Territories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "territories" */
export type Territories_Arr_Rel_Insert_Input = {
  data: Array<Territories_Insert_Input>;
  on_conflict?: Maybe<Territories_On_Conflict>;
};

/** aggregate avg on columns */
export type Territories_Avg_Fields = {
  __typename?: 'territories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "territories" */
export type Territories_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "territories". All fields are combined with a logical 'AND'. */
export type Territories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Territories_Bool_Exp>>>;
  _not?: Maybe<Territories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Territories_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name_en?: Maybe<String_Comparison_Exp>;
  name_zh_tw?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "territories" */
export enum Territories_Constraint {
  /** unique or primary key constraint */
  TerritoriesPkey = 'territories_pkey'
}

/** input type for incrementing integer column in table "territories" */
export type Territories_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "territories" */
export type Territories_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Territories_Max_Fields = {
  __typename?: 'territories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "territories" */
export type Territories_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Territories_Min_Fields = {
  __typename?: 'territories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "territories" */
export type Territories_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "territories" */
export type Territories_Mutation_Response = {
  __typename?: 'territories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Territories>;
};

/** input type for inserting object relation for remote table "territories" */
export type Territories_Obj_Rel_Insert_Input = {
  data: Territories_Insert_Input;
  on_conflict?: Maybe<Territories_On_Conflict>;
};

/** on conflict condition type for table "territories" */
export type Territories_On_Conflict = {
  constraint: Territories_Constraint;
  update_columns: Array<Territories_Update_Column>;
  where?: Maybe<Territories_Bool_Exp>;
};

/** ordering options when selecting data from "territories" */
export type Territories_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name_en?: Maybe<Order_By>;
  name_zh_tw?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "territories" */
export type Territories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "territories" */
export enum Territories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "territories" */
export type Territories_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name_en?: Maybe<Scalars['String']>;
  name_zh_tw?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Territories_Stddev_Fields = {
  __typename?: 'territories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "territories" */
export type Territories_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Territories_Stddev_Pop_Fields = {
  __typename?: 'territories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "territories" */
export type Territories_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Territories_Stddev_Samp_Fields = {
  __typename?: 'territories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "territories" */
export type Territories_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Territories_Sum_Fields = {
  __typename?: 'territories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "territories" */
export type Territories_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "territories" */
export enum Territories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  NameEn = 'name_en',
  /** column name */
  NameZhTw = 'name_zh_tw',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Territories_Var_Pop_Fields = {
  __typename?: 'territories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "territories" */
export type Territories_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Territories_Var_Samp_Fields = {
  __typename?: 'territories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "territories" */
export type Territories_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Territories_Variance_Fields = {
  __typename?: 'territories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "territories" */
export type Territories_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  created_at: Scalars['timestamptz'];
  expires_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  role?: Maybe<Roles>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  avg?: Maybe<User_Roles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
  stddev?: Maybe<User_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Roles_Sum_Fields>;
  var_pop?: Maybe<User_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Roles_Var_Samp_Fields>;
  variance?: Maybe<User_Roles_Variance_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_roles" */
export type User_Roles_Aggregate_Order_By = {
  avg?: Maybe<User_Roles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Roles_Max_Order_By>;
  min?: Maybe<User_Roles_Min_Order_By>;
  stddev?: Maybe<User_Roles_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Roles_Sum_Order_By>;
  var_pop?: Maybe<User_Roles_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Roles_Var_Samp_Order_By>;
  variance?: Maybe<User_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_roles" */
export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Roles_Avg_Fields = {
  __typename?: 'user_roles_avg_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_roles" */
export type User_Roles_Avg_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Roles_Bool_Exp>>>;
  _not?: Maybe<User_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Roles_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  role_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint */
  UserRolesPkey = 'user_roles_pkey'
}

/** input type for incrementing integer column in table "user_roles" */
export type User_Roles_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_roles" */
export type User_Roles_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_roles" */
export type User_Roles_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Roles>;
};

/** input type for inserting object relation for remote table "user_roles" */
export type User_Roles_Obj_Rel_Insert_Input = {
  data: User_Roles_Insert_Input;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};

/** on conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns: Array<User_Roles_Update_Column>;
  where?: Maybe<User_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "user_roles" */
export type User_Roles_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_roles" */
export type User_Roles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Roles_Stddev_Fields = {
  __typename?: 'user_roles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_roles" */
export type User_Roles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_roles" */
export type User_Roles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_roles" */
export type User_Roles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Roles_Sum_Fields = {
  __typename?: 'user_roles_sum_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_roles" */
export type User_Roles_Sum_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Roles_Var_Pop_Fields = {
  __typename?: 'user_roles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_roles" */
export type User_Roles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Roles_Var_Samp_Fields = {
  __typename?: 'user_roles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_roles" */
export type User_Roles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Roles_Variance_Fields = {
  __typename?: 'user_roles_variance_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_roles" */
export type User_Roles_Variance_Order_By = {
  id?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['Int']>;
  is_email_verified?: Maybe<Scalars['Boolean']>;
  is_mobile_verified?: Maybe<Scalars['Boolean']>;
  last_connected?: Maybe<Scalars['timestamptz']>;
  last_disconnected?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  /** An array relationship */
  organisations_users: Array<Organisations_Users>;
  /** An aggregated array relationship */
  organisations_users_aggregate: Organisations_Users_Aggregate;
  other_phone?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  receive_email?: Maybe<Scalars['Boolean']>;
  sms_reminder_sent_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregated array relationship */
  user_roles_aggregate: User_Roles_Aggregate;
};


/** columns and relationships of "users" */
export type UsersOrganisations_UsersArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrganisations_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Organisations_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organisations_Users_Order_By>>;
  where?: Maybe<Organisations_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
  image_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  disabled?: Maybe<Boolean_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image?: Maybe<Images_Bool_Exp>;
  image_id?: Maybe<Int_Comparison_Exp>;
  is_email_verified?: Maybe<Boolean_Comparison_Exp>;
  is_mobile_verified?: Maybe<Boolean_Comparison_Exp>;
  last_connected?: Maybe<Timestamptz_Comparison_Exp>;
  last_disconnected?: Maybe<Timestamptz_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  mobile?: Maybe<String_Comparison_Exp>;
  organisations_users?: Maybe<Organisations_Users_Bool_Exp>;
  other_phone?: Maybe<String_Comparison_Exp>;
  preferred_language?: Maybe<String_Comparison_Exp>;
  receive_email?: Maybe<Boolean_Comparison_Exp>;
  sms_reminder_sent_at?: Maybe<Timestamptz_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_roles?: Maybe<User_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Images_Obj_Rel_Insert_Input>;
  image_id?: Maybe<Scalars['Int']>;
  is_email_verified?: Maybe<Scalars['Boolean']>;
  is_mobile_verified?: Maybe<Scalars['Boolean']>;
  last_connected?: Maybe<Scalars['timestamptz']>;
  last_disconnected?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  organisations_users?: Maybe<Organisations_Users_Arr_Rel_Insert_Input>;
  other_phone?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  receive_email?: Maybe<Scalars['Boolean']>;
  sms_reminder_sent_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_roles?: Maybe<User_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['Int']>;
  last_connected?: Maybe<Scalars['timestamptz']>;
  last_disconnected?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  other_phone?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  sms_reminder_sent_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  last_connected?: Maybe<Order_By>;
  last_disconnected?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  other_phone?: Maybe<Order_By>;
  preferred_language?: Maybe<Order_By>;
  sms_reminder_sent_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['Int']>;
  last_connected?: Maybe<Scalars['timestamptz']>;
  last_disconnected?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  other_phone?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  sms_reminder_sent_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
  last_connected?: Maybe<Order_By>;
  last_disconnected?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  other_phone?: Maybe<Order_By>;
  preferred_language?: Maybe<Order_By>;
  sms_reminder_sent_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  disabled?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Images_Order_By>;
  image_id?: Maybe<Order_By>;
  is_email_verified?: Maybe<Order_By>;
  is_mobile_verified?: Maybe<Order_By>;
  last_connected?: Maybe<Order_By>;
  last_disconnected?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  mobile?: Maybe<Order_By>;
  organisations_users_aggregate?: Maybe<Organisations_Users_Aggregate_Order_By>;
  other_phone?: Maybe<Order_By>;
  preferred_language?: Maybe<Order_By>;
  receive_email?: Maybe<Order_By>;
  sms_reminder_sent_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_roles_aggregate?: Maybe<User_Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  IsMobileVerified = 'is_mobile_verified',
  /** column name */
  LastConnected = 'last_connected',
  /** column name */
  LastDisconnected = 'last_disconnected',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  OtherPhone = 'other_phone',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  ReceiveEmail = 'receive_email',
  /** column name */
  SmsReminderSentAt = 'sms_reminder_sent_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  disabled?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['Int']>;
  is_email_verified?: Maybe<Scalars['Boolean']>;
  is_mobile_verified?: Maybe<Scalars['Boolean']>;
  last_connected?: Maybe<Scalars['timestamptz']>;
  last_disconnected?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  other_phone?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  receive_email?: Maybe<Scalars['Boolean']>;
  sms_reminder_sent_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  image_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  image_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  image_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
  image_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  IsMobileVerified = 'is_mobile_verified',
  /** column name */
  LastConnected = 'last_connected',
  /** column name */
  LastDisconnected = 'last_disconnected',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  OtherPhone = 'other_phone',
  /** column name */
  PreferredLanguage = 'preferred_language',
  /** column name */
  ReceiveEmail = 'receive_email',
  /** column name */
  SmsReminderSentAt = 'sms_reminder_sent_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  image_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  image_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
  image_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
  image_id?: Maybe<Order_By>;
};

/** columns and relationships of "valuation_matrices" */
export type Valuation_Matrices = {
  __typename?: 'valuation_matrices';
  created_at: Scalars['timestamptz'];
  donor_condition_id: Scalars['Int'];
  grade: Scalars['String'];
  id: Scalars['Int'];
  multiplier: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "valuation_matrices" */
export type Valuation_Matrices_Aggregate = {
  __typename?: 'valuation_matrices_aggregate';
  aggregate?: Maybe<Valuation_Matrices_Aggregate_Fields>;
  nodes: Array<Valuation_Matrices>;
};

/** aggregate fields of "valuation_matrices" */
export type Valuation_Matrices_Aggregate_Fields = {
  __typename?: 'valuation_matrices_aggregate_fields';
  avg?: Maybe<Valuation_Matrices_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Valuation_Matrices_Max_Fields>;
  min?: Maybe<Valuation_Matrices_Min_Fields>;
  stddev?: Maybe<Valuation_Matrices_Stddev_Fields>;
  stddev_pop?: Maybe<Valuation_Matrices_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Valuation_Matrices_Stddev_Samp_Fields>;
  sum?: Maybe<Valuation_Matrices_Sum_Fields>;
  var_pop?: Maybe<Valuation_Matrices_Var_Pop_Fields>;
  var_samp?: Maybe<Valuation_Matrices_Var_Samp_Fields>;
  variance?: Maybe<Valuation_Matrices_Variance_Fields>;
};


/** aggregate fields of "valuation_matrices" */
export type Valuation_Matrices_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Valuation_Matrices_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "valuation_matrices" */
export type Valuation_Matrices_Aggregate_Order_By = {
  avg?: Maybe<Valuation_Matrices_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Valuation_Matrices_Max_Order_By>;
  min?: Maybe<Valuation_Matrices_Min_Order_By>;
  stddev?: Maybe<Valuation_Matrices_Stddev_Order_By>;
  stddev_pop?: Maybe<Valuation_Matrices_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Valuation_Matrices_Stddev_Samp_Order_By>;
  sum?: Maybe<Valuation_Matrices_Sum_Order_By>;
  var_pop?: Maybe<Valuation_Matrices_Var_Pop_Order_By>;
  var_samp?: Maybe<Valuation_Matrices_Var_Samp_Order_By>;
  variance?: Maybe<Valuation_Matrices_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "valuation_matrices" */
export type Valuation_Matrices_Arr_Rel_Insert_Input = {
  data: Array<Valuation_Matrices_Insert_Input>;
  on_conflict?: Maybe<Valuation_Matrices_On_Conflict>;
};

/** aggregate avg on columns */
export type Valuation_Matrices_Avg_Fields = {
  __typename?: 'valuation_matrices_avg_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Avg_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "valuation_matrices". All fields are combined with a logical 'AND'. */
export type Valuation_Matrices_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Valuation_Matrices_Bool_Exp>>>;
  _not?: Maybe<Valuation_Matrices_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Valuation_Matrices_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  donor_condition_id?: Maybe<Int_Comparison_Exp>;
  grade?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  multiplier?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "valuation_matrices" */
export enum Valuation_Matrices_Constraint {
  /** unique or primary key constraint */
  ValuationMatricesPkey = 'valuation_matrices_pkey'
}

/** input type for incrementing integer column in table "valuation_matrices" */
export type Valuation_Matrices_Inc_Input = {
  donor_condition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "valuation_matrices" */
export type Valuation_Matrices_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Valuation_Matrices_Max_Fields = {
  __typename?: 'valuation_matrices_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Valuation_Matrices_Min_Fields = {
  __typename?: 'valuation_matrices_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "valuation_matrices" */
export type Valuation_Matrices_Mutation_Response = {
  __typename?: 'valuation_matrices_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Valuation_Matrices>;
};

/** input type for inserting object relation for remote table "valuation_matrices" */
export type Valuation_Matrices_Obj_Rel_Insert_Input = {
  data: Valuation_Matrices_Insert_Input;
  on_conflict?: Maybe<Valuation_Matrices_On_Conflict>;
};

/** on conflict condition type for table "valuation_matrices" */
export type Valuation_Matrices_On_Conflict = {
  constraint: Valuation_Matrices_Constraint;
  update_columns: Array<Valuation_Matrices_Update_Column>;
  where?: Maybe<Valuation_Matrices_Bool_Exp>;
};

/** ordering options when selecting data from "valuation_matrices" */
export type Valuation_Matrices_Order_By = {
  created_at?: Maybe<Order_By>;
  donor_condition_id?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "valuation_matrices" */
export type Valuation_Matrices_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "valuation_matrices" */
export enum Valuation_Matrices_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DonorConditionId = 'donor_condition_id',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "valuation_matrices" */
export type Valuation_Matrices_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  donor_condition_id?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Valuation_Matrices_Stddev_Fields = {
  __typename?: 'valuation_matrices_stddev_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Stddev_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Valuation_Matrices_Stddev_Pop_Fields = {
  __typename?: 'valuation_matrices_stddev_pop_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Stddev_Pop_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Valuation_Matrices_Stddev_Samp_Fields = {
  __typename?: 'valuation_matrices_stddev_samp_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Stddev_Samp_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Valuation_Matrices_Sum_Fields = {
  __typename?: 'valuation_matrices_sum_fields';
  donor_condition_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  multiplier?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Sum_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

/** update columns of table "valuation_matrices" */
export enum Valuation_Matrices_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DonorConditionId = 'donor_condition_id',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  Multiplier = 'multiplier',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Valuation_Matrices_Var_Pop_Fields = {
  __typename?: 'valuation_matrices_var_pop_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Var_Pop_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Valuation_Matrices_Var_Samp_Fields = {
  __typename?: 'valuation_matrices_var_samp_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Var_Samp_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Valuation_Matrices_Variance_Fields = {
  __typename?: 'valuation_matrices_variance_fields';
  donor_condition_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  multiplier?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "valuation_matrices" */
export type Valuation_Matrices_Variance_Order_By = {
  donor_condition_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  multiplier?: Maybe<Order_By>;
};

export type OffersPageOffersQueryVariables = Exact<{ [key: string]: never; }>;


export type OffersPageOffersQuery = (
  { __typename?: 'query_root' }
  & { offers: Array<(
    { __typename?: 'offers' }
    & Pick<Offers, 'id'>
  )> }
);


export const OffersPageOffersDocument = gql`
    query OffersPageOffers {
  offers {
    id
  }
}
    `;

/**
 * __useOffersPageOffersQuery__
 *
 * To run a query within a React component, call `useOffersPageOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOffersPageOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOffersPageOffersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOffersPageOffersQuery(baseOptions?: Apollo.QueryHookOptions<OffersPageOffersQuery, OffersPageOffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OffersPageOffersQuery, OffersPageOffersQueryVariables>(OffersPageOffersDocument, options);
      }
export function useOffersPageOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OffersPageOffersQuery, OffersPageOffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OffersPageOffersQuery, OffersPageOffersQueryVariables>(OffersPageOffersDocument, options);
        }
export type OffersPageOffersQueryHookResult = ReturnType<typeof useOffersPageOffersQuery>;
export type OffersPageOffersLazyQueryHookResult = ReturnType<typeof useOffersPageOffersLazyQuery>;
export type OffersPageOffersQueryResult = Apollo.QueryResult<OffersPageOffersQuery, OffersPageOffersQueryVariables>;