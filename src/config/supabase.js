import { createClient } from '@supabase/supabase-js';

// Set to 'dev' for development, 'prod' for production
const ENV = 'dev';

const config = {
  dev: {
    url: 'https://txlvpukpjxojqqsjyeqi.supabase.co',
    anonKey: 'sb_publishable_8v7bWY-RbViMaJALxCUv4g_onjQZ_aj',
  },
  prod: {
    url: 'https://ggaxpfoyhcoqxpiyhbfd.supabase.co',
    anonKey: 'sb_publishable_pbv8nAsh8GJyi61Bss4__A_dfhtH23K',
  },
};

const { url, anonKey } = config[ENV];

export const supabase = createClient(url, anonKey);
export const currentEnv = ENV;
