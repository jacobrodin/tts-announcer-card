import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('tts-announcer-card')
export class TTSAnnouncerCard extends LitElement {
  @property({ attribute: false }) hass!: any;

  @state() message = '';
  @state() selectedSpeaker = 'media_player.bedroom_speaker';

  static styles = css`
    ha-card {
      padding: 16px;
      border-radius: 20px;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    select, input {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
    }

    button {
      padding: 12px;
      border-radius: 12px;
      border: none;
      background: var(--primary-color);
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.9;
    }
  `;

  private async speak() {
    if (!this.message.trim()) return;

    await this.hass.callService('tts', 'speak', {
      entity_id: 'tts.home_assistant_cloud',
      media_player_entity_id: this.selectedSpeaker,
      message: this.message,
      cache: false
    });

    this.message = '';
  }

  render() {
    return html`
      <ha-card header="TTS Announcer">
        <div class="container">

          <select
            .value=${this.selectedSpeaker}
            @change=${(e: any) =>
              (this.selectedSpeaker = e.target.value)}
          >
            <option value="media_player.bedroom_speaker">
              Bedroom Speaker
            </option>
            <option value="media_player.living_room_speaker">
              Living Room Speaker
            </option>
          </select>

          <input
            type="text"
            placeholder="Message..."
            .value=${this.message}
            @input=${(e: any) =>
              (this.message = e.target.value)}
          />

          <button @click=${this.speak}>
            Speak
          </button>

        </div>
      </ha-card>
    `;
  }

  getCardSize() {
    return 3;
  }
}