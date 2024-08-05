export interface IFMSCA {
  created_dt: string; // ISO date string
  data_source_modified_dt: string; // ISO date string
  entity_type: string;
  operating_status: string | null;
  legal_name: string;
  dba_name: string;
  physical_address: string;
  p_street: string;
  p_city: string;
  p_state: string;
  p_zip_code: number;
  phone: string;
  mailing_address: string;
  m_street: string;
  m_city: string;
  m_state: string;
  m_zip_code: number;
  usdot_number: number;
  mc_mx_ff_number: string | null;
  power_units: number;
  mcs_150_form_date: string;
  state_carrier_id_number: string | null;
  duns_number: string | null;
  drivers: number;
  mcs_150_mileage_year: string;
  id: number;
  credit_score: string;
  record_status: string;
}

type IHeaderKeys = keyof IFMSCA;

export type ITableHeader = {
  label: IHeaderKeys;
};
