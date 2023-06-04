export type BasketSummary_T = ({ subtotal, total, delivery }: {
    subtotal: number | undefined,
    total: number | undefined,
    delivery: number | undefined
}) => JSX.Element