
export interface Open {
  hour: number;
  minute: number;
}

export interface Close {
  hour: number;
  minute: number;
}

export interface Laps {
  open: Open;
  close: Close;
}

export interface Schedule {
  enabled: boolean;
  lapses: Laps[];
}

export interface Location {
  lat: number;
  lng: number;
  zipcode: number;
  zoom: number;
}

export interface Open2 {
  hour: number;
  minute: number;
}

export interface Close2 {
  hour: number;
  minute: number;
}

export interface Laps2 {
  open: Open2;
  close: Close2;
}

export interface Today {
  enabled: boolean;
  lapses: Laps2[];
}

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

export interface Review {
  id: number;
  order_id: number;
  quality: number;
  delivery: number;
  service: number;
  package: number;
  user_id: number;
  comment: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
  laravel_through_key: number;
  total: number;
  user: User;
}

export interface Reviews {
  reviews: Review[];
  quality: number;
  delivery: number;
  service: number;
  package: number;
  total: number;
}

export interface Type {
  id: number;
  name: string;
  image: string;
  description: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface Center {
  lat: number;
  lng: number;
}

export interface Data {
  center: Center;
  radio: number;
}

export interface Open3 {
  hour: number;
  minute: number;
}

export interface Close3 {
  hour: number;
  minute: number;
}

export interface Laps3 {
  open: Open3;
  close: Close3;
}

export interface Schedule2 {
  enabled: boolean;
  lapses: Laps3[];
}

export interface Pivot {
  business_id: number;
  delivery_zone_id: number;
}

export interface Zone {
  id: number;
  business_id: number;
  name: string;
  type: number;
  address?: any;
  data: Data;
  dropdown_option_id?: any;
  price: number;
  minimum: number;
  schedule: Schedule2[];
  enabled: boolean;
  schedule_ranges: string;
  data_geography: string;
  hourly_delivery_times?: any;
  owner_type: string;
  pivot: Pivot;
}

export interface Location2 {}

export interface Pivot2 {
  business_id: number;
  owner_id: number;
}

export interface Owner {
  id: number;
  name: string;
  lastname: string;
  email: string;
  login_type: number;
  social_id?: any;
  photo?: any;
  birthdate?: any;
  phone?: any;
  cellphone: string;
  city_id?: any;
  dropdown_option_id?: any;
  address?: any;
  address_notes?: any;
  zipcode?: any;
  location: Location2;
  level: number;
  language_id: number;
  push_notifications: boolean;
  busy: boolean;
  available: boolean;
  enabled: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  internal_number?: any;
  map_data?: any;
  middle_name?: any;
  second_lastname: string;
  country_phone_code: string;
  priority: number;
  last_order_assigned_at?: any;
  last_location_at?: any;
  phone_verified: boolean;
  email_verified: boolean;
  driver_zone_restriction: boolean;
  pin?: any;
  business_id?: any;
  franchise_id?: any;
  register_site_id?: any;
  ideal_orders?: any;
  external_id?: any;
  settings?: any;
  loyalty_level_id?: any;
  loyalty_level_points: number;
  country_code?: any;
  session_strategy: string;
  schedule?: any;
  schedule_ranges?: any;
  max_days_in_future?: any;
  occupation_id?: any;
  bio?: any;
  last_service_assigned_at?: any;
  timezone?: any;
  user_system_id?: any;
  platform: string;
  loyalty_id?: any;
  pivot: Pivot2;
}

export interface Country {
  id: number;
  name: string;
  enabled: boolean;
  code?: any;
}

export interface City {
  id: number;
  name: string;
  country_id: number;
  administrator_id: number;
  enabled: boolean;
  country: Country;
}

export interface Ribbon {
  id: number;
  object_id: number;
  model: string;
  color: string;
  shape: string;
  text: string;
  created_at: string;
  updated_at: string;
  enabled: boolean;
}

export interface Suboption {
  id: number;
  extra_option_id: number;
  name: string;
  price: number;
  image?: any;
  sku?: any;
  rank: number;
  description?: any;
  max: number;
  half_price?: any;
  enabled: boolean;
  external_id?: any;
  preselected: boolean;
}

export interface Option {
  id: number;
  extra_id: number;
  name: string;
  image?: any;
  conditioned: boolean;
  respect_to?: any;
  min: number;
  max: number;
  rank: number;
  with_half_option: boolean;
  allow_suboption_quantity: boolean;
  limit_suboptions_by_max: boolean;
  enabled: boolean;
  external_id?: any;
  suboptions: Suboption[];
}

export interface Extra {
  id: number;
  business_id: number;
  name: string;
  description?: any;
  enabled: boolean;
  external_id?: any;
  rank: number;
  options: Option[];
}

export interface Pivot3 {
  product_id: number;
  extra_id: number;
}

export interface Suboption2 {
  id: number;
  extra_option_id: number;
  name: string;
  price: number;
  image?: any;
  sku?: any;
  rank: number;
  description?: any;
  max: number;
  half_price?: any;
  enabled: boolean;
  external_id?: any;
  preselected: boolean;
}

export interface Option2 {
  id: number;
  extra_id: number;
  name: string;
  image?: any;
  conditioned: boolean;
  respect_to?: any;
  min: number;
  max: number;
  rank: number;
  with_half_option: boolean;
  allow_suboption_quantity: boolean;
  limit_suboptions_by_max: boolean;
  enabled: boolean;
  external_id?: any;
  suboptions: Suboption2[];
}

export interface Extra2 {
  id: number;
  business_id: number;
  name: string;
  description?: any;
  enabled: boolean;
  external_id?: any;
  rank: number;
  pivot: Pivot3;
  options: Option2[];
}

export interface Category2 {
  id: number;
  business_id: number;
  name: string;
  image?: any;
  rank: number;
  enabled: boolean;
  external_id?: any;
  parent_category_id?: any;
  slug?: any;
  seo_image?: any;
  seo_title?: any;
  seo_description?: any;
  header?: any;
  description?: any;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  sku: string;
  category_id: number;
  inventoried: boolean;
  quantity: number;
  featured: boolean;
  enabled: boolean;
  upselling: boolean;
  in_offer: boolean;
  offer_price?: any;
  rank: number;
  offer_rate: number;
  offer_rate_type: number;
  offer_include_options: boolean;
  external_id?: any;
  barcode?: any;
  barcode_alternative?: any;
  estimated_person?: any;
  tax_id?: any;
  fee_id?: any;
  slug?: any;
  seo_image?: any;
  seo_title?: any;
  seo_description?: any;
  seo_keywords?: any;
  cost_price?: any;
  cost_offer_price?: any;
  weight?: any;
  calories?: any;
  weight_unit?: any;
  hide_special_instructions: boolean;
  maximum_per_order?: any;
  minimum_per_order: number;
  duration?: any;
  type: string;
  laravel_through_key: number;
  extras: Extra2[];
  category: Category2;
  gallery: any[];
  ingredients: any[];
  ribbon?: any;
}

export interface Category {
  id: number;
  business_id: number;
  name: string;
  image?: any;
  rank: number;
  enabled: boolean;
  external_id?: any;
  parent_category_id?: any;
  slug?: any;
  seo_image?: any;
  seo_title?: any;
  seo_description?: any;
  header?: any;
  description?: any;
  products: Product[];
  ribbon?: any;
}

export interface Open4 {
  hour: number;
  minute: number;
}

export interface Close4 {
  hour: number;
  minute: number;
}

export interface Laps4 {
  open: Open4;
  close: Close4;
}

export interface Schedule3 {
  enabled: boolean;
  lapses: Laps4[];
}

export interface Pivot4 {
  menu_id: number;
  product_id: number;
}

export interface Category3 {
  id: number;
  business_id: number;
  name: string;
  image?: any;
  rank: number;
  enabled: boolean;
  external_id?: any;
  parent_category_id?: any;
  slug?: any;
  seo_image?: any;
  seo_title?: any;
  seo_description?: any;
  header?: any;
  description?: any;
}

export interface Pivot5 {
  product_id: number;
  extra_id: number;
}

export interface Suboption3 {
  id: number;
  extra_option_id: number;
  name: string;
  price: number;
  image?: any;
  sku?: any;
  rank: number;
  description?: any;
  max: number;
  half_price?: any;
  enabled: boolean;
  external_id?: any;
  preselected: boolean;
}

export interface Option3 {
  id: number;
  extra_id: number;
  name: string;
  image?: any;
  conditioned: boolean;
  respect_to?: any;
  min: number;
  max: number;
  rank: number;
  with_half_option: boolean;
  allow_suboption_quantity: boolean;
  limit_suboptions_by_max: boolean;
  enabled: boolean;
  external_id?: any;
  suboptions: Suboption3[];
}

export interface Extra3 {
  id: number;
  business_id: number;
  name: string;
  description?: any;
  enabled: boolean;
  external_id?: any;
  rank: number;
  pivot: Pivot5;
  options: Option3[];
}

export interface Product2 {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  sku: string;
  category_id: number;
  inventoried: boolean;
  quantity: number;
  featured: boolean;
  enabled: boolean;
  upselling: boolean;
  in_offer: boolean;
  offer_price?: any;
  rank: number;
  offer_rate: number;
  offer_rate_type: number;
  offer_include_options: boolean;
  external_id?: any;
  barcode?: any;
  barcode_alternative?: any;
  estimated_person?: any;
  tax_id?: any;
  fee_id?: any;
  slug?: any;
  seo_image?: any;
  seo_title?: any;
  seo_description?: any;
  seo_keywords?: any;
  cost_price?: any;
  cost_offer_price?: any;
  weight?: any;
  calories?: any;
  weight_unit?: any;
  hide_special_instructions: boolean;
  maximum_per_order?: any;
  minimum_per_order: number;
  duration?: any;
  type: string;
  pivot: Pivot4;
  category: Category3;
  extras: Extra3[];
  gallery: any[];
  ingredients: any[];
  ribbon?: any;
}

export interface Menu {
  id: number;
  business_id: number;
  name: string;
  comment?: any;
  schedule: Schedule3[];
  pickup: boolean;
  delivery: boolean;
  enabled: boolean;
  eatin: boolean;
  curbside: boolean;
  driver_thru: boolean;
  schedule_ranges: string;
  all_products: boolean;
  use_business_schedule: boolean;
  external_id?: any;
  seat_delivery: boolean;
  products: Product2[];
}

export interface Open5 {
  hour: number;
  minute: number;
}

export interface Close5 {
  hour: number;
  minute: number;
}

export interface Laps5 {
  open: Open5;
  close: Close5;
}

export interface Schedule4 {
  enabled: boolean;
  lapses: Laps5[];
}

export interface Pivot6 {
  business_id: number;
  menu_id: number;
}

export interface Pivot7 {
  menu_id: number;
  product_id: number;
}

export interface Category4 {
  id: number;
  business_id: number;
  name: string;
  image?: any;
  rank: number;
  enabled: boolean;
  external_id?: any;
  parent_category_id?: any;
  slug?: any;
  seo_image?: any;
  seo_title?: any;
  seo_description?: any;
  header?: any;
  description?: any;
}

export interface Pivot8 {
  product_id: number;
  extra_id: number;
}

export interface Suboption4 {
  id: number;
  extra_option_id: number;
  name: string;
  price: number;
  image?: any;
  sku?: any;
  rank: number;
  description?: any;
  max: number;
  half_price?: any;
  enabled: boolean;
  external_id?: any;
  preselected: boolean;
}

export interface Option4 {
  id: number;
  extra_id: number;
  name: string;
  image?: any;
  conditioned: boolean;
  respect_to?: any;
  min: number;
  max: number;
  rank: number;
  with_half_option: boolean;
  allow_suboption_quantity: boolean;
  limit_suboptions_by_max: boolean;
  enabled: boolean;
  external_id?: any;
  suboptions: Suboption4[];
}

export interface Extra4 {
  id: number;
  business_id: number;
  name: string;
  description?: any;
  enabled: boolean;
  external_id?: any;
  rank: number;
  pivot: Pivot8;
  options: Option4[];
}

export interface Product3 {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  sku: string;
  category_id: number;
  inventoried: boolean;
  quantity: number;
  featured: boolean;
  enabled: boolean;
  upselling: boolean;
  in_offer: boolean;
  offer_price?: any;
  rank: number;
  offer_rate: number;
  offer_rate_type: number;
  offer_include_options: boolean;
  external_id?: any;
  barcode?: any;
  barcode_alternative?: any;
  estimated_person?: any;
  tax_id?: any;
  fee_id?: any;
  slug?: any;
  seo_image?: any;
  seo_title?: any;
  seo_description?: any;
  seo_keywords?: any;
  cost_price?: any;
  cost_offer_price?: any;
  weight?: any;
  calories?: any;
  weight_unit?: any;
  hide_special_instructions: boolean;
  maximum_per_order?: any;
  minimum_per_order: number;
  duration?: any;
  type: string;
  pivot: Pivot7;
  category: Category4;
  extras: Extra4[];
  gallery: any[];
  ingredients: any[];
  ribbon?: any;
}

export interface MenusShared {
  id: number;
  business_id: number;
  name: string;
  comment?: any;
  schedule: Schedule4[];
  pickup: boolean;
  delivery: boolean;
  enabled: boolean;
  eatin: boolean;
  curbside: boolean;
  driver_thru: boolean;
  schedule_ranges: string;
  all_products: boolean;
  use_business_schedule: boolean;
  external_id?: any;
  seat_delivery: boolean;
  pivot: Pivot6;
  products: Product3[];
}

export interface Result {
  id: number;
  name: string;
  email: string;
  slug: string;
  schedule: Schedule[];
  description: string;
  about: string;
  logo: string;
  header: string;
  phone: string;
  cellphone?: any;
  owner_id: number;
  city_id: number;
  address: string;
  address_notes?: any;
  zipcode?: any;
  location: Location;
  featured: boolean;
  timezone: string;
  currency?: any;
  food: boolean;
  alcohol: boolean;
  groceries: boolean;
  laundry: boolean;
  use_printer: boolean;
  printer_id?: any;
  minimum: number;
  delivery_price: number;
  always_deliver: boolean;
  tax_type: number;
  tax: number;
  delivery_time: string;
  pickup_time: string;
  service_fee: number;
  fixed_usage_fee: number;
  percentage_usage_fee: number;
  order_default_priority: number;
  cancel_order_after_minutes: number;
  enabled: boolean;
  preorder_time: number;
  maximum?: any;
  schedule_ranges: string;
  franchise_id?: any;
  external_id?: any;
  front_layout?: any;
  seo_image: string;
  seo_title: string;
  seo_description: string;
  eta_status_times?: any;
  eta_variation_time?: any;
  price_level: string;
  facebook_profile?: any;
  instagram_profile: string;
  tiktok_profile: string;
  snapchat_profile?: any;
  pinterest_profile?: any;
  whatsapp_number?: any;
  menus_count: number;
  available_menus_count: number;
  menus_shared_count: number;
  available_menus_shared_count: number;
  offers: any[];
  open: boolean;
  today: Today;
  reviews: Reviews;
  types: Type[];
  zones: Zone[];
  metafields: any[];
  owners: Owner[];
  gallery: any[];
  city: City;
  ribbon: Ribbon;
  extras: Extra[];
  categories: Category[];
  categories_shared: any[];
  menus: Menu[];
  menus_shared: MenusShared[];
}

export interface Pagination {
  total: number;
  from: number;
  to: number;
  current_page: number;
  page_size: number;
  total_pages: number;
  fisrt_page?: any;
  first_page?: any;
  back_page?: any;
  next_page?: any;
  last_page?: any;
}

export interface RootObject {
  error: boolean;
  result: Result[];
  pagination: Pagination;
}
