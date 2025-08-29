export interface VNode {
    type: string | Function;
    props: {
        [key: string]: any;
        children?: Array<VNode | string>;
    };
    key?: string | number;
    dom?: HTMLElement | Text;
}