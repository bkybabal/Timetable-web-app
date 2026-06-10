
// ─── API ──────────────────────────────────────────────────────────────────

interface Session {
  uuid:      string;
  username:  string;
  join_ts:   number;
  leave_ts:  number | null;
}

export interface ApiResponse {
  sessions: Session[];
}
