export type Json =
  string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      domain_events: {
        Row: {
          actor_user_id: string | null;
          aggregate_id: string;
          aggregate_type: string;
          dedupe_key: string;
          event_name: string;
          id: string;
          occurred_at: string;
          payload: Json;
        };
        Insert: {
          actor_user_id?: string | null;
          aggregate_id: string;
          aggregate_type: string;
          dedupe_key: string;
          event_name: string;
          id?: string;
          occurred_at?: string;
          payload?: Json;
        };
        Update: never;
        Relationships: [];
      };
      profiles: {
        Row: {
          adult_acknowledged_at: string | null;
          avatar_path: string | null;
          created_at: string;
          deleted_at: string | null;
          display_name: string;
          locale: string;
          timezone: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          adult_acknowledged_at?: string | null;
          avatar_path?: string | null;
          created_at?: string;
          deleted_at?: string | null;
          display_name?: string;
          locale?: string;
          timezone?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          adult_acknowledged_at?: string | null;
          avatar_path?: string | null;
          deleted_at?: string | null;
          display_name?: string;
          locale?: string;
          timezone?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      space_memberships: {
        Row: {
          id: string;
          joined_at: string | null;
          left_at: string | null;
          role: string;
          space_id: string;
          status: string;
          user_id: string | null;
        };
        Insert: {
          id?: string;
          joined_at?: string | null;
          left_at?: string | null;
          role?: string;
          space_id: string;
          status?: string;
          user_id?: string | null;
        };
        Update: {
          joined_at?: string | null;
          left_at?: string | null;
          role?: string;
          status?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      spaces: {
        Row: {
          active_exchange_id: string | null;
          activated_at: string | null;
          cadence_days: number;
          cadence_mode: string;
          closed_at: string | null;
          created_at: string;
          created_by_user_id: string;
          guide_membership_id: string | null;
          id: string;
          next_exchange_at: string | null;
          paused_at: string | null;
          status: string;
        };
        Insert: {
          active_exchange_id?: string | null;
          activated_at?: string | null;
          cadence_days?: number;
          cadence_mode?: string;
          closed_at?: string | null;
          created_at?: string;
          created_by_user_id: string;
          guide_membership_id?: string | null;
          id?: string;
          next_exchange_at?: string | null;
          paused_at?: string | null;
          status?: string;
        };
        Update: {
          active_exchange_id?: string | null;
          activated_at?: string | null;
          cadence_days?: number;
          cadence_mode?: string;
          closed_at?: string | null;
          guide_membership_id?: string | null;
          next_exchange_at?: string | null;
          paused_at?: string | null;
          status?: string;
        };
        Relationships: [];
      };
      user_preferences: {
        Row: {
          email_reminders_enabled: boolean;
          invite_permissions: string;
          partner_locked_email_enabled: boolean;
          quiet_hours_end: string | null;
          quiet_hours_start: string | null;
          reduced_motion_override: boolean | null;
          reveal_email_enabled: boolean;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          email_reminders_enabled?: boolean;
          invite_permissions?: string;
          partner_locked_email_enabled?: boolean;
          quiet_hours_end?: string | null;
          quiet_hours_start?: string | null;
          reduced_motion_override?: boolean | null;
          reveal_email_enabled?: boolean;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          email_reminders_enabled?: boolean;
          invite_permissions?: string;
          partner_locked_email_enabled?: boolean;
          quiet_hours_end?: string | null;
          quiet_hours_start?: string | null;
          reduced_motion_override?: boolean | null;
          reveal_email_enabled?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
