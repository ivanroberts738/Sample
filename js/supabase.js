// ========================================
// SUPABASE CONFIGURATION
// Student Marks Manager
// ========================================

const SUPABASE_URL = "https://ovaoxrhutktunwvivbhw.supabase.co";

const SUPABASE_KEY = "sb_publishable_6GX2UP8_hF4Q44rW3iQXVQ_ckoVNkuB";


// ========================================
// CREATE SUPABASE CLIENT
// ========================================

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ========================================
// CONNECTION TEST
// ========================================

console.log("Supabase client initialized successfully.");
