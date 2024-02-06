/**
 * hook to handle active tab state
 *
 * @param defaultTab - the id of the "first" tab that is active
 * @param onChange [optional] - callback on active tab change
 */
export declare const useActiveTab: (defaultTab?: string | number, onChange?: ((tabId: string | number) => void) | undefined) => {
    activeTab: number | string;
    onTabChange: (tabId: number | string) => void;
};
