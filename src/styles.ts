import { css } from 'lit';

export const styles = css`
  ha-card {
    padding: 16px;
    border-radius: 24px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .speaker-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 220px;
    overflow-y: auto;
  }

  .speaker-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 12px;
    background: var(--secondary-background-color);
  }

  .message-box {
    width: 100%;
  }

  .controls {
    display: flex;
    gap: 10px;
  }

  button {
    flex: 1;
    border: none;
    border-radius: 14px;
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: var(--primary-color);
    color: white;
  }

  button.secondary {
    background: var(--secondary-text-color);
  }

  .volume {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;