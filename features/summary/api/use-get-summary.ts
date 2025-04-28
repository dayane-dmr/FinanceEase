import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/hono';
import { convertAmountFromMilliunits } from '@/lib/utils';

interface SummaryParams {
    from: string;
    to: string;
    accountId: string;
}

export const useGetSummary = ({ from, to, accountId }: SummaryParams) => {
    const query = useQuery({
        queryKey: ['summary', { from, to, accountId }],
        queryFn: async () => {
            const response = await client.api.summary.$get({
                query: {
                    from,
                    to,
                    accountId,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch summary');
            }

            const { data } = await response.json();

            return {
                ...data,
                incomeAmount: convertAmountFromMilliunits(data.incomeAmount),
                expensesAmount: convertAmountFromMilliunits(data.expensesAmount),
                remainingAmount: convertAmountFromMilliunits(data.remainingAmount),
                categorie: data.categories.map((category) => ({
                    ...category,
                    value: convertAmountFromMilliunits(category.value),
                })),
                days: data.days.map((day) => ({
                    ...day,
                    income: convertAmountFromMilliunits(day.income),
                    expenses: convertAmountFromMilliunits(day.expenses),
                })),
            };
        },
    });

    return query;
};
