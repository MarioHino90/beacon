import { Intent } from "../BannerAlert";

export interface BannerAlertCloseProps {
  /**
   * visual banner intents */
  intent: Intent;
  /**
   * on close callack */
  onClose: () => void;
}

export interface StyledProps {
  /**
   * visual banner intents */
  intent: Intent;
}
