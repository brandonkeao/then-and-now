export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
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
        Update: {
          actor_user_id?: string | null;
          aggregate_id?: string;
          aggregate_type?: string;
          dedupe_key?: string;
          event_name?: string;
          id?: string;
          occurred_at?: string;
          payload?: Json;
        };
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
          created_at?: string;
          deleted_at?: string | null;
          display_name?: string;
          locale?: string;
          timezone?: string;
          updated_at?: string;
          user_id?: string;
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
          id?: string;
          joined_at?: string | null;
          left_at?: string | null;
          role?: string;
          space_id?: string;
          status?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "space_memberships_space_id_fkey";
            columns: ["space_id"];
            isOneToOne: false;
            referencedRelation: "spaces";
            referencedColumns: ["id"];
          },
        ];
      };
      spaces: {
        Row: {
          activated_at: string | null;
          active_exchange_id: string | null;
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
          activated_at?: string | null;
          active_exchange_id?: string | null;
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
          activated_at?: string | null;
          active_exchange_id?: string | null;
          cadence_days?: number;
          cadence_mode?: string;
          closed_at?: string | null;
          created_at?: string;
          created_by_user_id?: string;
          guide_membership_id?: string | null;
          id?: string;
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
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
