export interface TTSAnnouncerCardConfig {
  type: string;
  title?: string;
  tts_entity?: string;
  include_players?: string[];
  exclude_players?: string[];
  default_volume?: number;
}