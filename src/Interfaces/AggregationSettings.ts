/**
 * Contains the base settings for all aggregations
 */
export interface AggregationSettings {
    title?: string;
    template?: string;
    attribute?: string;
    collapsible?: boolean;
    default_collapsed?: boolean;
}

/**
 * Contains the specific settings for the checkbox aggregation
 */
export interface CheckboxSettings extends AggregationSettings {
    hide_on_empty?: boolean;
}

/**
 * Contains the specific settings for the radio aggregation
 */
export interface RadioSettings extends AggregationSettings {
    hide_on_empty?: boolean;
}

/**
 * Contains the specific settings for the slider aggregation
 */
export interface SliderSettings extends AggregationSettings {
    min?: number;
    max?: number;
    default_value?: number;
}

/**
 * Contains the specific settings for the switch aggregation
 */
export interface SwitchSettings extends AggregationSettings {
    on_value?: string;
    off_value?: string;
    attribute_value?: string;
}