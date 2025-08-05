declare namespace JSX {
    type Element = HTMLElement | Text
    interface IntrinsicElements {
        [key: string]: any
    }
    interface ElementChildrenAttribute {
        children: {}
    }
    interface IntrinsicAttribute {
        key?: string
    }
}
