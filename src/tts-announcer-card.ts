import {
          entity_id: this.config.tts_entity,
          media_player_entity_id: player,
          message: this.message,
          cache: false
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

  private clearMessage() {
    this.message = '';
  }

  protected render(): TemplateResult {
    const players = this.getMediaPlayers();

    return html`
      <ha-card .header=${this.config.title}>
        <div class="container">

          <div class="speaker-list">
            ${players.map(
              (player: any) => html`
                <div class="speaker-item">
                  <ha-checkbox
                    .checked=${this.selectedPlayers.includes(player.entity_id)}
                    @change=${() =>
                      this.togglePlayer(player.entity_id)}
                  ></ha-checkbox>

                  <span>
                    ${player.attributes.friendly_name || player.entity_id}
                  </span>
                </div>
              `
            )}
          </div>

          <ha-textfield
            class="message-box"
            label="Announcement"
            .value=${this.message}
            @input=${(e: any) => {
              this.message = e.target.value;
            }}
          ></ha-textfield>

          <div class="volume">
            <span>Volume</span>

            <ha-slider
              min="0"
              max="1"
              step="0.01"
              .value=${String(this.volume)}
              @change=${(e: any) => {
                this.volume = Number(e.target.value);
              }}
            ></ha-slider>
          </div>

          <div class="controls">
            <button @click=${this.speak}>
              Speak
            </button>

            <button
              class="secondary"
              @click=${this.clearMessage}
            >
              Clear
            </button>
          </div>

        </div>
      </ha-card>
    `;
  }

  getCardSize() {
    return 4;
  }
}