export interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
}
export interface UserObject {
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
  location?: any;
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
  second_lastname?: any;
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
  session: Session;
  dropdown_option?: any;
  loyalty_level?: any;
}
